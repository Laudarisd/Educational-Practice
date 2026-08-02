import React, { useState, useEffect } from 'react';
import { DownloadService, VideoInfo, DownloadRequest } from '../services/downloadService';

interface DownloadOptions {
  format: 'video' | 'audio';
  quality: string;
}

const DownloaderForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const [options, setOptions] = useState<DownloadOptions>({
    format: 'video',
    quality: '1080p'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'info' | 'warning' | null;
    message: string;
  }>({ type: null, message: '' });

  const videoQualities = ['2160p (4K)', '1440p', '1080p', '720p', '480p', '360p', '240p'];
  const audioQualities = ['320kbps', '256kbps', '192kbps', '128kbps', '96kbps', '64kbps'];

  const [supportedPlatforms] = useState([
    { name: 'YouTube Videos', pattern: /youtube\.com\/watch/, icon: '🎥' },
    { name: 'YouTube Shorts', pattern: /youtube\.com\/shorts/, icon: '📱' },
    { name: 'YouTube (Short URLs)', pattern: /youtu\.be/, icon: '�' },
    { name: 'Instagram Posts', pattern: /instagram\.com\/p\//, icon: '📸' },
    { name: 'Instagram Reels', pattern: /instagram\.com\/reel\//, icon: '🎞️' },
    { name: 'Instagram Stories', pattern: /instagram\.com\/stories\//, icon: '📱' }
  ]);

  // Auto-detect platform when URL changes
  useEffect(() => {
    const detectPlatform = (url: string) => {
      return supportedPlatforms.find(platform => platform.pattern.test(url));
    };

    if (url.trim()) {
      const platform = detectPlatform(url);
      if (platform) {
        setStatus({ 
          type: 'info', 
          message: `${platform.icon} ${platform.name} URL detected` 
        });
      }
    } else {
      setVideoInfo(null);
      setStatus({ type: null, message: '' });
    }
  }, [url, supportedPlatforms]);

  const validateUrl = (url: string): boolean => {
    return DownloadService.isValidUrl(url);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    
    // Clear previous video info when URL changes
    if (newUrl !== url) {
      setVideoInfo(null);
    }
  };

  const fetchVideoInfo = async () => {
    if (!url.trim()) {
      setStatus({ type: 'error', message: 'Please enter a video URL' });
      return;
    }

    if (!validateUrl(url)) {
      setStatus({ type: 'error', message: 'Please enter a valid YouTube or Instagram URL' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: 'info', message: 'Fetching video information...' });

    try {
      const info = await DownloadService.getVideoInfo(url);
      setVideoInfo(info);
      setStatus({ type: 'success', message: 'Video information loaded successfully!' });
    } catch (error: any) {
      console.error('Error fetching video info:', error);
      setStatus({ 
        type: 'warning', 
        message: 'Could not fetch video info from server. You can still attempt to download.' 
      });
      
      // Set mock video info for client-side handling
      setVideoInfo({
        id: 'unknown',
        title: 'Video Title (Info unavailable)',
        thumbnail: '/logo512.svg',
        duration: 'Unknown',
        uploader: 'Unknown',
        platform: DownloadService.getPlatform(url) || 'youtube',
        formats: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setStatus({ type: 'error', message: 'Please enter a video URL' });
      return;
    }

    if (!validateUrl(url)) {
      setStatus({ type: 'error', message: 'Please enter a valid YouTube or Instagram URL' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: 'info', message: 'Preparing download...' });

    try {
      const downloadRequest: DownloadRequest = {
        url,
        format: options.format,
        quality: options.quality
      };

      // Set initial downloading status
      setDownloadProgress(10);
      setStatus({ type: 'info', message: 'Contacting download servers...' });
      const response = await DownloadService.downloadVideo(downloadRequest, (progress) => {
        setDownloadProgress(progress);
      });

      if (response.success) {
        setDownloadProgress(100);
        setStatus({ type: 'success', message: response.message });
        
        // Reset progress after a delay
        setTimeout(() => setDownloadProgress(0), 3000);
        
        // The download should already be triggered by the service
        if (response.downloadUrl) {
          console.log('Download initiated:', response.downloadUrl);
        }
      } else {
        setDownloadProgress(0);
        setStatus({ type: 'error', message: response.message });
      }
      
    } catch (error: any) {
      console.error('Download error:', error);
      setDownloadProgress(0);
      setStatus({ 
        type: 'error', 
        message: error.message || 'Download failed. Please try again or use the desktop version.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormatChange = (format: 'video' | 'audio') => {
    setOptions(prev => ({
      ...prev,
      format,
      quality: format === 'video' ? '1080p' : '192kbps'
    }));
  };

  const clearForm = () => {
    setUrl('');
    setVideoInfo(null);
    setStatus({ type: null, message: '' });
    setOptions({ format: 'video', quality: '1080p' });
  };

  return (
    <div className="downloader-container">
      {/* URL Input Section */}
      <div className="input-section">
        <label className="input-label">
          Video URL
          <span className="platform-support">
            {supportedPlatforms.map(platform => (
              <span key={platform.name} className="platform-badge">
                {platform.icon} {platform.name}
              </span>
            ))}
          </span>
        </label>
        <div className="url-input-group">
          <input
            type="text"
            className="url-input"
            placeholder="Paste YouTube or Instagram URL here..."
            value={url}
            onChange={handleUrlChange}
            disabled={isLoading}
          />
          <button 
            className="info-button"
            onClick={fetchVideoInfo}
            disabled={isLoading || !url.trim()}
            title="Get video information"
          >
            {isLoading ? '⏳' : '📋'}
          </button>
          <button 
            className="clear-button"
            onClick={clearForm}
            disabled={isLoading}
            title="Clear form"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Video Info Preview */}
      {videoInfo && (
        <div className="video-preview">
          <div className="video-thumbnail">
            <img 
              src={videoInfo.thumbnail} 
              alt={videoInfo.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo512.svg';
              }}
            />
            <div className="platform-badge-overlay">
              {videoInfo.platform === 'youtube' ? '🎥' : '📸'} 
              {videoInfo.platform.toUpperCase()}
            </div>
          </div>
          <div className="video-details">
            <h3 className="video-title">{videoInfo.title}</h3>
            <div className="video-meta">
              <span>👤 {videoInfo.uploader}</span>
              <span>⏱️ {videoInfo.duration}</span>
            </div>
          </div>
        </div>
      )}

      {/* Download Options */}
      <div className="options-section">
        <div className="option-group">
          <div className="option-title">📥 Download Format</div>
          <div className="format-buttons">
            <button
              className={`format-btn ${options.format === 'video' ? 'active' : ''}`}
              onClick={() => handleFormatChange('video')}
              disabled={isLoading}
            >
              🎬 Video (MP4)
            </button>
            <button
              className={`format-btn ${options.format === 'audio' ? 'active' : ''}`}
              onClick={() => handleFormatChange('audio')}
              disabled={isLoading}
            >
              🎵 Audio (MP3)
            </button>
          </div>
        </div>

        <div className="option-group">
          <div className="option-title">⚙️ Quality</div>
          <select
            className="quality-selector"
            value={options.quality}
            onChange={(e) => setOptions(prev => ({ ...prev, quality: e.target.value }))}
            disabled={isLoading}
          >
            {(options.format === 'video' ? videoQualities : audioQualities).map(quality => (
              <option key={quality} value={quality}>
                {quality}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Download Button */}
      <button
        className={`download-button ${isLoading ? 'loading' : ''}`}
        onClick={handleDownload}
        disabled={isLoading || !url.trim()}
      >
        {isLoading && <div className="loading-spinner"></div>}
        {isLoading ? 'Processing...' : `📥 Download ${options.format === 'video' ? 'Video' : 'Audio'}`}
      </button>

      {/* Download Progress Bar */}
      {downloadProgress > 0 && (
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${downloadProgress}%` }}
            ></div>
          </div>
          <div className="progress-text">{downloadProgress}%</div>
        </div>
      )}

      {/* Status Message */}
      {status.type && (
        <div className={`status-message status-${status.type}`}>
          <div className="status-icon">
            {status.type === 'success' && '✅'}
            {status.type === 'error' && '❌'}
            {status.type === 'warning' && '⚠️'}
            {status.type === 'info' && 'ℹ️'}
          </div>
          <div className="status-text">{status.message}</div>
        </div>
      )}

      {/* App Info */}
      <div className="app-info">
        <div className="info-section">
          <h4>🚀 Features</h4>
          <ul>
            <li>✅ YouTube video & audio downloads</li>
            <li>✅ Instagram content support</li>
            <li>✅ Multiple quality options</li>
            <li>✅ Mobile-friendly design</li>
            <li>✅ No registration required</li>
          </ul>
        </div>
        
        <div className="info-section">
          <h4>⚠️ Important Notes</h4>
          <ul>
            <li>🌐 Browser version has security limitations</li>
            <li>🖥️ Desktop app provides full functionality</li>
            <li>📱 Works on both PC and Android</li>
            <li>⚖️ Respect copyright and platform terms</li>
            <li>🔒 Your privacy is protected</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DownloaderForm;

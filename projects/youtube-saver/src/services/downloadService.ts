export interface VideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  uploader: string;
  platform: 'youtube' | 'instagram';
  formats: VideoFormat[];
}

export interface VideoFormat {
  format_id: string;
  ext: string;
  quality: string;
  filesize?: number;
  url: string;
  format_note?: string;
}

export interface DownloadRequest {
  url: string;
  format: 'video' | 'audio';
  quality: string;
}

export interface DownloadResponse {
  success: boolean;
  message: string;
  downloadUrl?: string;
  videoInfo?: VideoInfo;
}

export class DownloadService {
  private static readonly BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001/api';
  
  /**
   * Get video information from URL
   */
  static async getVideoInfo(url: string): Promise<VideoInfo> {
    try {
      console.log('🔍 Getting video info from backend:', url);
      
      const response = await fetch(`${this.BACKEND_URL}/video-info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`Backend API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to get video info');
      }

      return data.data;
    } catch (error) {
      console.error('❌ Error getting video info:', error);
      throw error;
    }
  }

  /**
   * Download video using backend API
   */
  static async downloadVideo(request: DownloadRequest, onProgress?: (progress: number) => void): Promise<DownloadResponse> {
    try {
      console.log('⬇️ Starting download via backend:', request);
      
      // Simulate progress
      let progress = 0;
      const progressInterval = setInterval(() => {
        if (progress < 90 && onProgress) {
          progress += Math.random() * 15;
          onProgress(Math.min(progress, 90));
        }
      }, 1000);
      
      const response = await fetch(`${this.BACKEND_URL}/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      clearInterval(progressInterval);

      if (!response.ok) {
        throw new Error(`Backend API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Download failed');
      }

      onProgress?.(100);

      // For backend downloads, we get a file path that we can download
      if (data.filePath) {
        const filename = data.filename || `download.${request.format === 'audio' ? 'mp3' : 'mp4'}`;
        await this.downloadFromBackend(data.filePath, filename);
      }

      return {
        success: true,
        message: 'Download completed successfully',
        downloadUrl: data.filePath,
        videoInfo: data.videoInfo
      };
      
    } catch (error) {
      console.error('❌ Download error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Download failed'
      };
    }
  }

  /**
   * Download file from backend
   */
  static async downloadFromBackend(filePath: string, filename: string): Promise<void> {
    try {
      const downloadUrl = `${this.BACKEND_URL.replace('/api', '')}/downloads/${filePath}`;
      
      // Try using File System Access API if available (modern browsers)
      if ('showSaveFilePicker' in window) {
        try {
          const fileHandle = await (window as any).showSaveFilePicker({
            suggestedName: filename,
            types: [{
              description: 'Media files',
              accept: {
                'video/*': ['.mp4', '.webm', '.mkv'],
                'audio/*': ['.mp3', '.m4a', '.webm']
              }
            }]
          });

          const response = await fetch(downloadUrl);
          if (!response.ok) throw new Error('Download failed');
          
          const writableStream = await fileHandle.createWritable();
          await response.body?.pipeTo(writableStream);
          
          console.log('✅ File saved successfully using File System Access API');
          return;
        } catch (fsError) {
          console.log('File System Access API not available or cancelled, falling back to regular download');
        }
      }

      // Fallback to regular download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('✅ Download initiated using regular method');
      
    } catch (error) {
      console.error('❌ Error downloading file:', error);
      throw error;
    }
  }

  /**
   * Validate if URL is supported
   */
  static isValidUrl(url: string): boolean {
    const patterns = [
      // YouTube patterns
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
      /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /(?:https?:\/\/)?(?:m\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
      
      // Instagram patterns
      /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/,
    ];
    
    return patterns.some(pattern => pattern.test(url));
  }

  /**
   * Extract video ID from URL
   */
  static extractVideoId(url: string): string | null {
    // YouTube ID extraction
    const ytPatterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
      /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
      /(?:https?:\/\/)?(?:m\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    ];
    
    for (const pattern of ytPatterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    
    // Instagram ID extraction
    const igMatch = url.match(/(?:https?:\/\/)?(?:www\.)?instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/);
    if (igMatch) return igMatch[2];
    
    return null;
  }

  /**
   * Get platform from URL
   */
  static getPlatform(url: string): 'youtube' | 'instagram' | null {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    }
    if (url.includes('instagram.com')) {
      return 'instagram';
    }
    return null;
  }

  /**
   * Format file size for display
   */
  static formatFileSize(bytes?: number): string {
    if (!bytes) return 'Unknown size';
    
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;
    
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }

  /**
   * Format duration for display
   */
  static formatDuration(seconds: number | string): string {
    const totalSeconds = typeof seconds === 'string' ? parseInt(seconds) : seconds;
    if (!totalSeconds || isNaN(totalSeconds)) return 'Unknown';
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  }
}

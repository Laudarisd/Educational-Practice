const express = require('express');
const cors = require('cors');
const { exec, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://laudarisd.github.io'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from downloads directory
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

// Ensure downloads directory exists
const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// Utility functions
const isValidUrl = (url) => {
  const patterns = [
    // YouTube patterns
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
    // Instagram patterns
    /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/,
  ];
  return patterns.some(pattern => pattern.test(url));
};

const extractVideoId = (url) => {
  // YouTube ID extraction
  const ytPatterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
    /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
  ];
  
  for (const pattern of ytPatterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  // Instagram ID extraction
  const igPattern = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/;
  const igMatch = url.match(igPattern);
  if (igMatch) return igMatch[2];
  
  return null;
};

const checkYtDlp = () => {
  return new Promise((resolve) => {
    exec('C:/Users/sudip/AppData/Local/Microsoft/WindowsApps/python3.12.exe -m yt_dlp --version', (error, stdout, stderr) => {
      if (error) {
        console.log('yt-dlp not found. Please install it:');
        console.log('1. Download from: https://github.com/yt-dlp/yt-dlp/releases');
        console.log('2. Or install via pip: pip install yt-dlp');
        console.log('3. Or install via conda: conda install -c conda-forge yt-dlp');
        resolve(false);
      } else {
        console.log(`✅ yt-dlp version: ${stdout.trim()}`);
        resolve(true);
      }
    });
  });
};

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'YTubeSaver Backend is running',
    timestamp: new Date().toISOString()
  });
});

// Get video information
app.post('/api/video-info', async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url || !isValidUrl(url)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing URL'
      });
    }

    console.log(`Getting info for: ${url}`);

    // Use yt-dlp to get video information
    const cmd = `C:/Users/sudip/AppData/Local/Microsoft/WindowsApps/python3.12.exe -m yt_dlp -j --no-download "${url}"`;
    
    exec(cmd, { timeout: 30000 }, (error, stdout, stderr) => {
      if (error) {
        console.error('yt-dlp error:', stderr);
        return res.status(500).json({
          success: false,
          message: 'Failed to fetch video information',
          error: stderr
        });
      }

      try {
        const videoData = JSON.parse(stdout);
        const videoInfo = {
          id: videoData.id || extractVideoId(url),
          title: videoData.title || 'Unknown Title',
          thumbnail: videoData.thumbnail || '',
          duration: videoData.duration_string || '00:00',
          uploader: videoData.uploader || videoData.channel || 'Unknown',
          platform: url.includes('youtube') ? 'youtube' : 'instagram',
          formats: videoData.formats ? videoData.formats.map(f => ({
            format_id: f.format_id,
            ext: f.ext,
            quality: f.height ? `${f.height}p` : f.format_note || 'unknown',
            filesize: f.filesize,
            url: f.url,
            format_note: f.format_note
          })) : []
        };

        res.json({
          success: true,
          videoInfo
        });
      } catch (parseError) {
        console.error('Parse error:', parseError);
        res.status(500).json({
          success: false,
          message: 'Failed to parse video information'
        });
      }
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Download video
app.post('/api/download', async (req, res) => {
  try {
    const { url, format, quality } = req.body;
    
    if (!url || !isValidUrl(url)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing URL'
      });
    }

    const videoId = extractVideoId(url);
    if (!videoId) {
      return res.status(400).json({
        success: false,
        message: 'Could not extract video ID from URL'
      });
    }

    console.log(`Downloading: ${url} (${format}, ${quality})`);

    // Determine format selector for yt-dlp
    let formatSelector;
    if (format === 'audio') {
      formatSelector = 'bestaudio[ext=m4a]/bestaudio/best';
    } else {
      // Video format
      if (quality === '2160p (4K)') formatSelector = 'best[height<=2160]';
      else if (quality === '1440p') formatSelector = 'best[height<=1440]';
      else if (quality === '1080p') formatSelector = 'best[height<=1080]';
      else if (quality === '720p') formatSelector = 'best[height<=720]';
      else if (quality === '480p') formatSelector = 'best[height<=480]';
      else if (quality === '360p') formatSelector = 'best[height<=360]';
      else formatSelector = 'best';
    }

    // Generate filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const extension = format === 'audio' ? 'mp3' : 'mp4';
    const filename = `${videoId}_${timestamp}.${extension}`;
    const filepath = path.join(downloadsDir, filename);

    // Construct yt-dlp command
    let cmd;
    if (format === 'audio') {
      cmd = `C:/Users/sudip/AppData/Local/Microsoft/WindowsApps/python3.12.exe -m yt_dlp -f "${formatSelector}" --extract-audio --audio-format mp3 --audio-quality 0 -o "${filepath.replace('.mp3', '.%(ext)s')}" "${url}"`;
    } else {
      cmd = `C:/Users/sudip/AppData/Local/Microsoft/WindowsApps/python3.12.exe -m yt_dlp -f "${formatSelector}" -o "${filepath.replace('.mp4', '.%(ext)s')}" "${url}"`;
    }

    console.log(`Executing: ${cmd}`);

    // Execute download
    const child = exec(cmd, { timeout: 300000 }, (error, stdout, stderr) => {
      if (error) {
        console.error('Download error:', stderr);
        return res.status(500).json({
          success: false,
          message: 'Download failed',
          error: stderr
        });
      }

      // Find the actual downloaded file
      const files = fs.readdirSync(downloadsDir);
      const downloadedFile = files.find(file => file.startsWith(videoId));

      if (!downloadedFile) {
        return res.status(500).json({
          success: false,
          message: 'Downloaded file not found'
        });
      }

      const downloadUrl = `${req.protocol}://${req.get('host')}/downloads/${downloadedFile}`;

      res.json({
        success: true,
        message: 'Download completed successfully',
        downloadUrl,
        filename: downloadedFile
      });
    });

    // Handle timeout
    child.on('close', (code) => {
      if (code !== 0 && !res.headersSent) {
        res.status(500).json({
          success: false,
          message: `Download process exited with code ${code}`
        });
      }
    });

  } catch (error) {
    console.error('Server error:', error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }
});

// Clean up old files (optional)
app.post('/api/cleanup', (req, res) => {
  try {
    const files = fs.readdirSync(downloadsDir);
    const now = Date.now();
    let deleted = 0;

    files.forEach(file => {
      const filePath = path.join(downloadsDir, file);
      const stats = fs.statSync(filePath);
      const fileAge = now - stats.mtime.getTime();
      
      // Delete files older than 1 hour
      if (fileAge > 3600000) {
        fs.unlinkSync(filePath);
        deleted++;
      }
    });

    res.json({
      success: true,
      message: `Cleaned up ${deleted} old files`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Cleanup failed'
    });
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 YTubeSaver Backend running on port ${PORT}`);
  console.log(`📁 Downloads directory: ${downloadsDir}`);
  
  // Check if yt-dlp is installed
  const ytDlpAvailable = await checkYtDlp();
  if (!ytDlpAvailable) {
    console.log('⚠️  WARNING: yt-dlp is not installed. Please install it for the backend to work properly.');
  } else {
    console.log('✅ yt-dlp is available and ready');
  }
  
  console.log('🌐 CORS enabled for:', ['http://localhost:3000', 'https://laudarisd.github.io']);
});

module.exports = app;

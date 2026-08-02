# YTubeSaver Backend API Specification

## Overview
The YTubeSaver backend API handles video downloading from YouTube and Instagram while respecting platform restrictions and handling cookies/authentication.

## Base URL
- Development: `http://localhost:3001/api`
- Production: `https://your-backend-domain.com/api`

## Endpoints

### 1. Get Video Information
**GET/POST** `/video-info`

Retrieves metadata about a video without downloading it.

**Request Body:**
```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID"
}
```

**Response:**
```json
{
  "success": true,
  "videoInfo": {
    "id": "VIDEO_ID",
    "title": "Video Title",
    "thumbnail": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
    "duration": "00:03:45",
    "uploader": "Channel Name",
    "platform": "youtube",
    "formats": [
      {
        "format_id": "22",
        "ext": "mp4",
        "quality": "720p",
        "filesize": 52428800,
        "url": "direct_download_url",
        "format_note": "mp4 720p"
      }
    ]
  }
}
```

### 2. Download Video
**POST** `/download`

Initiates a video download process.

**Request Body:**
```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "format": "video",
  "quality": "1080p"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Download prepared successfully",
  "downloadUrl": "https://your-backend.com/download/temp_file_id",
  "expiresAt": "2025-09-10T15:30:00Z"
}
```

### 3. Health Check
**GET** `/health`

Checks if the API is running and healthy.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-09-10T14:30:00Z",
  "services": {
    "youtube": "operational",
    "instagram": "operational",
    "storage": "operational"
  }
}
```

### 4. Supported Platforms
**GET** `/platforms`

Returns list of supported platforms and their capabilities.

**Response:**
```json
{
  "platforms": [
    {
      "name": "youtube",
      "displayName": "YouTube",
      "icon": "🎥",
      "supportedFormats": ["video", "audio"],
      "maxQuality": "4K",
      "features": ["playlists", "live", "shorts"]
    },
    {
      "name": "instagram",
      "displayName": "Instagram",
      "icon": "📸",
      "supportedFormats": ["video"],
      "maxQuality": "1080p",
      "features": ["posts", "reels", "stories"]
    }
  ]
}
```

## Backend Implementation Guide

### Technology Stack
- **Framework**: Node.js with Express.js or Python with FastAPI
- **Video Processing**: yt-dlp (recommended) or youtube-dl
- **Storage**: Temporary file storage with automatic cleanup
- **Queue**: Redis/Bull for handling download queues
- **Rate Limiting**: To prevent abuse

### Key Features to Implement

#### 1. Cookie Handling
```javascript
// Example cookie handling for restricted content
const cookieJar = new CookieJar();
const ytdlpOptions = {
  cookiefile: path.join(__dirname, 'cookies.txt'),
  // Add other options for bypassing restrictions
};
```

#### 2. Proxy Support
```javascript
// Rotating proxies to handle IP restrictions
const proxyList = [
  'http://proxy1:port',
  'http://proxy2:port'
];
```

#### 3. Rate Limiting
```javascript
// Implement rate limiting per IP
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
```

#### 4. Queue System
```javascript
// Use Bull for background processing
const Queue = require('bull');
const downloadQueue = new Queue('download processing');

downloadQueue.process('download', async (job) => {
  const { url, format, quality } = job.data;
  // Process download in background
});
```

### Environment Variables
```env
PORT=3001
NODE_ENV=production
REDIS_URL=redis://localhost:6379
STORAGE_PATH=/tmp/downloads
MAX_FILE_SIZE=500MB
CLEANUP_INTERVAL=1h
YOUTUBE_COOKIES_PATH=/path/to/youtube_cookies.txt
INSTAGRAM_COOKIES_PATH=/path/to/instagram_cookies.txt
```

### Docker Configuration
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
RUN apk add --no-cache ffmpeg python3 py3-pip
RUN pip3 install yt-dlp
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

## Security Considerations

1. **Input Validation**: Always validate URLs and parameters
2. **Rate Limiting**: Implement strict rate limits
3. **File Cleanup**: Automatically delete temporary files
4. **CORS Configuration**: Properly configure CORS headers
5. **Error Handling**: Don't expose sensitive information in errors
6. **Authentication**: Consider implementing API keys for production

## Deployment Options

### 1. GitHub Pages + Netlify Functions
For the frontend on GitHub Pages with serverless functions.

### 2. Heroku
Simple deployment with automatic scaling.

### 3. Docker + VPS
Full control with Docker containerization.

### 4. Vercel/Netlify
Serverless deployment with edge functions.

## Testing the API

Use the provided test files to ensure the API works correctly:

```bash
# Test video info endpoint
curl -X POST http://localhost:3001/api/video-info \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}'

# Test download endpoint
curl -X POST http://localhost:3001/api/download \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "format": "video", "quality": "720p"}'
```

## Legal Compliance

⚠️ **Important**: Ensure your implementation complies with:
- YouTube Terms of Service
- Instagram Terms of Service  
- DMCA and copyright laws
- Local data protection regulations
- Platform-specific robots.txt files

Always respect content creators' rights and platform policies.

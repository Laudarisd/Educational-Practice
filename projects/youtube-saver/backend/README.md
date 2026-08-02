# YTubeSaver Backend

A professional Node.js backend for video downloading using yt-dlp.

## Features

- ✅ **Real video downloads** from YouTube, Instagram, TikTok, and 1000+ sites
- ✅ **Multiple quality options** (4K, 1080p, 720p, 480p, 360p, 240p)
- ✅ **Audio extraction** to MP3 format
- ✅ **CORS enabled** for frontend integration
- ✅ **File cleanup** system to manage storage
- ✅ **Error handling** and logging

## Prerequisites

### 1. Install Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/)

### 2. Install yt-dlp

**Windows:**
```bash
# Using pip (recommended)
pip install yt-dlp

# Or download binary from GitHub
# https://github.com/yt-dlp/yt-dlp/releases
```

**macOS:**
```bash
# Using Homebrew
brew install yt-dlp

# Or using pip
pip install yt-dlp
```

**Linux:**
```bash
# Using pip
pip install yt-dlp

# Ubuntu/Debian
sudo apt install yt-dlp

# Or download binary
wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp
chmod +x yt-dlp
sudo mv yt-dlp /usr/local/bin/
```

## Installation

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Verify yt-dlp installation:**
```bash
yt-dlp --version
```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### 1. Health Check
```http
GET /api/health
```

### 2. Get Video Information
```http
POST /api/video-info
Content-Type: application/json

{
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

### 3. Download Video
```http
POST /api/download
Content-Type: application/json

{
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "format": "video",
  "quality": "1080p"
}
```

### 4. Cleanup Old Files
```http
POST /api/cleanup
```

## Configuration

### Environment Variables
Create a `.env` file:

```env
PORT=3001
NODE_ENV=production
MAX_FILE_AGE=3600000
```

### CORS Origins
Update `server.js` to add your domain:

```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com'],
  credentials: true
}));
```

## Supported Platforms

- YouTube (videos, shorts, playlists)
- Instagram (posts, reels, IGTV)
- TikTok
- Twitter/X
- Facebook
- Vimeo
- And 1000+ more sites supported by yt-dlp

## File Management

- Downloads are stored in `./downloads/` directory
- Files are automatically cleaned up after 1 hour
- Manual cleanup available via `/api/cleanup` endpoint

## Production Deployment

### Using PM2
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start server.js --name ytube-saver-backend

# Save PM2 configuration
pm2 save

# Setup startup script
pm2 startup
```

### Using Docker
```dockerfile
FROM node:18-alpine

# Install yt-dlp
RUN apk add --no-cache python3 py3-pip
RUN pip install yt-dlp

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3001
CMD ["npm", "start"]
```

## Security Considerations

1. **Rate Limiting**: Implement rate limiting for production
2. **File Size Limits**: Set maximum download size limits
3. **URL Validation**: Validate and sanitize input URLs
4. **Authentication**: Add API key authentication if needed
5. **HTTPS**: Use HTTPS in production

## Troubleshooting

### Common Issues

**yt-dlp not found:**
```bash
# Check if yt-dlp is in PATH
which yt-dlp

# Update yt-dlp
pip install --upgrade yt-dlp
```

**Permission errors:**
```bash
# Make sure downloads directory is writable
chmod 755 downloads/
```

**CORS errors:**
- Check if your frontend domain is in the CORS origins list
- Ensure the frontend is making requests to the correct backend URL

## License

MIT License - see LICENSE file for details

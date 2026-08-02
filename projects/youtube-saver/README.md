# 🚀 YTubeSaver - Universal Video Downloader

A modern, responsive web application for downloading videos and audio from YouTube and Instagram. Built with React and designed to work seamlessly on both PC and Android devices.

[![Deploy to GitHub Pages](https://github.com/yourusername/YTubeSaver/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourusername/YTubeSaver/actions/workflows/deploy.yml)

## ✨ Features

### 🎯 Core Features

- **📥 Multi-Platform Support**: Download from YouTube and Instagram
- **🎵 Format Options**: Video (MP4) and Audio (MP3) downloads
- **⚙️ Quality Selection**: Choose from multiple quality options (4K to 240p)
- **📱 Mobile-Friendly**: Optimized for both PC and Android devices
- **🚀 Progressive Web App**: Install and use offline
- **🎨 Modern UI**: Dark theme with glassmorphism design

### 🛡️ Privacy & Security

- **🔒 No Data Collection**: Your privacy is protected
- **🌐 Client-Side Processing**: Runs entirely in your browser
- **🔐 Secure**: No personal information required
- **📝 Respectful**: Encourages legal and ethical use

### 📱 Platform Support

- **🎥 YouTube**: Videos, Shorts, and Audio extraction
- **📸 Instagram**: Posts, Reels, and Stories
- **🖥️ Desktop**: Windows, macOS, Linux browsers
- **📱 Mobile**: Android Chrome, iOS Safari

## 🚀 Live Demo

Visit the live application: **[https://laudarisd.github.io/YTubeSaver/](https://laudarisd.github.io/YTubeSaver/)**

> 🎉 **Try it now!** Paste any YouTube or Instagram URL and see the magic happen!

## 📸 Screenshots

### Desktop View

![Desktop Screenshot](./screenshots/desktop.png)

### Mobile View

![Mobile Screenshot](./screenshots/mobile.png)

## 🛠️ Technology Stack

### Frontend

- **⚛️ React 18** - Modern React with hooks
- **🎨 TypeScript** - Type-safe development
- **💅 CSS3** - Custom styling with animations
- **📦 React Scripts** - Build and development tools
- **🔄 Service Worker** - Offline functionality

### Backend (Optional)

- **🟢 Node.js** or **🐍 Python** - Server runtime
- **📦 yt-dlp** - Video downloading engine
- **🗄️ Redis** - Queue management
- **🐳 Docker** - Containerization

## 🏗️ Project Structure

```
YTubeSaver/
├── ytube-saver-app/          # React frontend application
│   ├── public/               # Static files
│   │   ├── index.html       # Main HTML template
│   │   ├── manifest.json    # PWA manifest
│   │   └── sw.js           # Service worker
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   │   └── DownloaderForm.tsx
│   │   ├── services/        # API and utility services
│   │   │   └── downloadService.ts
│   │   ├── utils/           # Helper functions
│   │   ├── App.tsx          # Main app component
│   │   ├── App.css          # Styling
│   │   └── index.tsx        # Entry point
│   ├── .github/workflows/   # GitHub Actions
│   │   └── deploy.yml       # Deployment workflow
│   └── package.json         # Dependencies
├── downloader/              # Python backend (optional)
│   └── ytube_to_video.py   # Video processing script
├── BACKEND_API.md           # Backend API documentation
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/YTubeSaver.git
cd YTubeSaver
```

### 2. Install Dependencies

```bash
cd ytube-saver-app
npm install
```

### 3. Start Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

## 📱 Mobile Installation

### Android (Chrome)

1. Visit the web app in Chrome
2. Tap the menu button (⋮)
3. Select "Add to Home screen"
4. Confirm installation

### iOS (Safari)

1. Visit the web app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Confirm installation

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `ytube-saver-app` directory:

```env
REACT_APP_BACKEND_URL=http://localhost:3001/api
REACT_APP_APP_VERSION=1.0.0
REACT_APP_ENABLE_PWA=true
```

### GitHub Pages Deployment

1. ✅ **Already configured!** The homepage is set to: `https://laudarisd.github.io/YTubeSaver`
2. ✅ **GitHub Actions workflow** is ready for automatic deployment
3. **To deploy:**
   ```bash
   git add .
   git commit -m "Deploy YTubeSaver app"
   git push origin master
   ```
4. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"
   - Your app will be live at: **https://laudarisd.github.io/YTubeSaver/**

## 🔧 Backend Setup (Optional)

For full functionality, you can set up a backend server:

### Node.js Backend

```bash
# Install yt-dlp
pip install yt-dlp

# Create backend directory
mkdir backend && cd backend
npm init -y
npm install express cors helmet morgan yt-dlp-wrap

# See BACKEND_API.md for complete implementation
```

### Python Backend

```bash
# Install dependencies
pip install fastapi uvicorn yt-dlp python-multipart

# See BACKEND_API.md for complete implementation
```

## 🛡️ Browser Security Limitations

Due to browser security (CORS) restrictions, the web version has limitations:

### Client-Side Limitations

- ❌ Direct video downloading (blocked by CORS)
- ❌ Cookie handling for restricted content
- ❌ Bypassing rate limiting

### Recommended Solutions

1. **🖥️ Desktop App**: Use local installation with full features
2. **🔧 Backend API**: Deploy your own backend server
3. **🔗 Safe Redirects**: Redirect to legitimate download services
4. **📱 Browser Extensions**: Use trusted browser extensions

## 📋 Usage Guide

### 1. Enter Video URL

- Paste YouTube or Instagram URL
- Support for various URL formats
- Auto-detection of platform

### 2. Select Options

- Choose Video (MP4) or Audio (MP3)
- Select quality from available options
- Preview video information

### 3. Download

- Click download button
- Follow platform-specific instructions
- Respect copyright and terms of service

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md).

### Development Setup

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/YTubeSaver.git

# Create a feature branch
git checkout -b feature/amazing-feature

# Make your changes and commit
git commit -m 'Add amazing feature'

# Push to your branch
git push origin feature/amazing-feature

# Create a Pull Request
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚖️ Legal & Ethical Use

### Important Guidelines

- ✅ **Respect Copyright**: Only download content you have rights to
- ✅ **Follow Terms**: Respect YouTube and Instagram Terms of Service
- ✅ **Personal Use**: Use for personal, non-commercial purposes
- ✅ **Content Creator Rights**: Support creators through official channels

### Disclaimer

This tool is provided for educational and personal use only. Users are responsible for complying with applicable laws and platform terms of service.

## 🐛 Troubleshooting

### Common Issues

#### "Network Error" or "CORS Error"

- **Cause**: Browser security restrictions
- **Solution**: Use the desktop version or deploy backend API

#### "Video Unavailable"

- **Cause**: Geographic restrictions or private content
- **Solution**: Ensure content is publicly accessible

#### "Quality Not Available"

- **Cause**: Selected quality doesn't exist for this video
- **Solution**: Choose a different quality option

#### Mobile Installation Issues

- **Cause**: PWA not properly configured
- **Solution**: Use HTTPS and valid manifest.json

### Getting Help

1. Check the [Issues](https://github.com/yourusername/YTubeSaver/issues) page
2. Create a new issue with detailed description
3. Include browser version and error messages

## 🙏 Acknowledgments

- **yt-dlp**: Core downloading functionality
- **React Team**: Amazing frontend framework
- **Contributors**: All who helped improve this project
- **Community**: Users who provided feedback and suggestions

## 📈 Roadmap

### Version 1.1.0

- [ ] Batch download support
- [ ] Download history
- [ ] Custom download locations
- [ ] More platform support (TikTok, Twitter)

### Version 1.2.0

- [ ] User accounts and sync
- [ ] Advanced filtering options
- [ ] Download scheduling
- [ ] API rate limiting dashboard

### Version 2.0.0

- [ ] Electron desktop app
- [ ] Browser extension
- [ ] Premium features
- [ ] Enterprise deployment

## 💖 Support the Project

If you find this project helpful:

- ⭐ Star the repository
- 🍴 Fork and contribute
- 🐛 Report bugs and suggest features
- 📢 Share with friends and colleagues
- ☕ [Buy me a coffee](https://www.buymeacoffee.com/yourusername)

---

<div align="center">
  <strong>Made with ❤️ for the community</strong><br>
  <sub>© 2025 YTubeSaver. All rights reserved.</sub>
</div>

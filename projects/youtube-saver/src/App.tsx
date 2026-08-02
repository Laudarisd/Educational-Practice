import React from 'react';
import './App.css';
import DownloaderForm from './components/DownloaderForm';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">📥</div>
          <span>YTubeSaver</span>
        </div>
        <div className="header-badges">
          <span className="platform-badge">🎥 YouTube Videos</span>
          <span className="platform-badge">� YouTube Shorts</span>
          <span className="platform-badge">�📸 Instagram Posts</span>
          <span className="platform-badge">🎞️ Instagram Reels</span>
        </div>
      </header>

      <main className="container">
        <div className="hero-section">
          <h1 className="hero-title">
            🚀 Universal Video Downloader
          </h1>
          <p className="hero-subtitle">
            Download videos and audio from YouTube and Instagram
            <br />
            <span style={{ color: '#4ecdc4', fontWeight: 'bold' }}>
              ✅ YouTube Videos • ✅ YouTube Shorts • ✅ Instagram Posts • ✅ Instagram Reels
            </span>
            <br />
            {/* Works on PC and Android • Fast • Secure • Free */}
          </p>
        </div>

        <div className="main-card">
          <DownloaderForm />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>🔒 Privacy & Security</h4>
            <ul>
              <li>No personal data collected</li>
              <li>All processing happens locally</li>
              <li>No video content stored on servers</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>⚖️ Legal Notice</h4>
            <ul>
              <li>Respect copyright laws</li>
              <li>Follow platform terms of service</li>
              <li>Use for personal content only</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>💡 Tips</h4>
            <ul>
              <li>Use desktop app for full features</li>
              <li>Check video quality before download</li>
              <li>Ensure stable internet connection</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 YTubeSaver. Made with ❤️ for content creators and consumers.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

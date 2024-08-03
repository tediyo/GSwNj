import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './globals.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TopBar />
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <main style={{ flex: 1, padding: '24px' }}>
            <MainContent />
            {children} {/* Render child pages here */}
          </main>
        </div>
      </body>
    </html>
  );
}

/**
 * Enhanced main application component with comprehensive routing
 * Supports all new features including solutions, collaborative learning, and mobile app
 */
import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import Dashboard from './components/Dashboard'
import MockTest from './components/MockTest'
import Analytics from './components/Analytics'
import Solutions from './components/Solutions'
import Collaborative from './components/Collaborative'
import MobileApp from './components/MobileApp'

export default function App() {
  // Detect mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

  // If mobile, show mobile-optimized app
  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/collaborative" element={<Collaborative />} />
        <Route path="/mobile" element={<MobileApp />} />
      </Routes>
    </HashRouter>
  )
}

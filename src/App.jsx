import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import BusinessCase from './pages/BusinessCase';
import RemoteIsolation from './pages/RemoteIsolation';
import VirtualWatercooler from './pages/VirtualWatercooler';

// AnalyticsWrapper ensures GTM/Posthog fires on every route change in our SPA
function AnalyticsWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Window scroll to top on route change
    window.scrollTo(0, 0);

    // If using a manual GTM dataLayer push:
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: location.pathname + location.search
      });
    }
  }, [location]);

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AnalyticsWrapper>
        <div className="app">
          <Header />
          <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/business-case" element={<BusinessCase />} />
              <Route path="/remote-isolation" element={<RemoteIsolation />} />
              <Route path="/virtual-watercooler" element={<VirtualWatercooler />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AnalyticsWrapper>
    </BrowserRouter>
  );
}

export default App;

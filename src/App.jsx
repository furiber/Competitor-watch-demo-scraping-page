import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import posthog from 'posthog-js';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import BusinessCase from './pages/BusinessCase';
import RemoteIsolation from './pages/RemoteIsolation';
import VirtualWatercooler from './pages/VirtualWatercooler';
import About from './pages/About';

// AnalyticsWrapper ensures GTM/Posthog fires on every route change in our SPA
function AnalyticsWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: location.pathname + location.search
      });
    }

    posthog.capture('$pageview', {
      $current_url: window.location.href,
    });
  }, [location]);

  return children;
}

function App() {
  return (
    <HelmetProvider>
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
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AnalyticsWrapper>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

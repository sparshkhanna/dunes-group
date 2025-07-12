import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import { disableDevTools } from './utils/securityUtils';

function App() {
  useEffect(() => {
    // Apply security measures in production
    disableDevTools();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;

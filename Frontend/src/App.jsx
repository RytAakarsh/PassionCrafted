import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import AboutUs from './components/AboutUs';
import FooterParallax from './components/FooterParallax';
import PaintingInformation from './components/PaintingInfo'; // Changed from PaintingDetail
import Collections from './components/Collections';
import Paintings from './components/Paintings';
import PaintingDetail from './components/PaintingDetail';


function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNavbar = () => {
    return !location.pathname.startsWith('/painting/') && 
           !location.pathname.startsWith('/main-painting/');
  };

  return (
    <>
    <ScrollToTop />
      {showNavbar() && <Navbar />}
      <div style={{ marginBottom: isDesktop ? '460px' : '0' }}>
        <Routes>
          <Route path="/" element={<><MainSection /><AboutUs /></>} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/painting/:id" element={<PaintingInformation />} /> 
          <Route path="/main-painting/:id" element={<PaintingDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
      </div>
      <FooterParallax />
    </>
  );
}

export default App;
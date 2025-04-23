import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import AboutUs from './components/AboutUs';
import FooterParallax from './components/FooterParallax';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ marginBottom: isDesktop ? '460px' : '0' }}>
        <MainSection />
        <AboutUs />
      </div>
      <FooterParallax />
    </>
  );
}

export default App;

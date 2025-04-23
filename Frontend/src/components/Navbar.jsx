import { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../assets/logos/MainLogo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </div>
      
      {/* Hamburger Icon - Visible only on mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      
      {/* Navigation Links - Hidden on mobile when menu is closed */}
      <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
        <a href="/">Home</a>
        <a href="/paintings">Paintings</a>
        <a href="/collections">Collections</a>
        <a href="/about">About</a>
        <a href="/contact" style={{color: '#9C1D32'}}>Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
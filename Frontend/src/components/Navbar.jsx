import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../assets/logos/MainLogo.png';
import ContactForm from './ContactForm'; // Import ContactForm

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false); // State for ContactForm

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    const openContactForm = () => {
        setShowContactForm(true);
    };

    const closeContactForm = () => {
        setShowContactForm(false);
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
        <button onClick={openContactForm} style={{ color: '#9C1D32', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}> {/* Changed to button */}
          Contact
        </button>
      </div>
        {showContactForm && <ContactForm onClose={closeContactForm} />}  {/* Conditionally render ContactForm */}
    </div>
  )
}

export default Navbar;

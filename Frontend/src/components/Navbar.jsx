import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../assets/logos/MainLogo.png';
import ContactForm from './ContactForm';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openContactForm = () => {
    setShowContactForm(true);
    closeMenu();
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to="/" onClick={closeMenu}>
            <img src={Logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/paintings" onClick={closeMenu}>Paintings</Link>
          <Link to="/collections" onClick={closeMenu}>Collections</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <button
            onClick={openContactForm}
            className={`${styles.contactButton} ${isMenuOpen ? styles.active : ''}`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* ✅ Click-outside overlay */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
        ></div>
      )}

      {showContactForm && <ContactForm onClose={closeContactForm} />}
    </>
  );
}

export default Navbar;

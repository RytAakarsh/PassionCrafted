import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Add this line
import styles from './Navbar.module.css';
import Logo from '../assets/logos/MainLogo.png';
import ContactForm from './ContactForm';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

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
        <Link to="/">
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <div className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/paintings">Paintings</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/about">About</Link>
       <button
  onClick={openContactForm}
  className={`${styles.contactButton} ${isMenuOpen ? styles.active : ''}`}
>
  Contact
</button>

      </div>

      {showContactForm && <ContactForm onClose={closeContactForm} />}
    </div>
  );
}

export default Navbar;

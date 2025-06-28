import React, { useState } from "react";
import { Link } from 'react-router-dom'; // ✅ Import Link from react-router
import styles from './FooterParallax.module.css';
import logo from '../assets/logos/footerLogobg.png';
import ContactForm from './ContactForm';

const FooterParallax = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const openContactForm = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <span
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back To Top
          </span>
        </div>
        <div className={styles.contentBox}>
          <nav className={styles.footerNav}>
            <Link to="/" className={styles.footerLink}>HOME</Link>
            <Link to="/paintings" className={styles.footerLink}>PAINTINGS</Link>
            <Link to="/collections" className={styles.footerLink}>COLLECTIONS</Link>
            <Link to="/about" className={styles.footerLink}>ABOUT</Link>
          </nav>
          <div className={styles.footerLogo}>
            <img
              src={logo}
              alt="Passion Crafted Logo"
              className={styles.logoImg}
            />
          </div>
        </div>
      </div>
      
      <div className={styles.footerName}>
        <p className={styles.footerText}>
          © 2025 Passion Crafted. All rights reserved | Developed by Aakarsh Mishra
        </p>
      </div>

      {showContactForm && <ContactForm onClose={closeContactForm} />}
    </div>
  );
};

export default FooterParallax;

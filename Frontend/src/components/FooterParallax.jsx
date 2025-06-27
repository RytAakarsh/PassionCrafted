import React, { useState } from "react";
import styles from './FooterParallax.module.css';
import logo from '../assets/logos/footerLogobg.png';
import ContactForm from './ContactForm'; // Import ContactForm

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
            <a href="/" className={styles.footerLink}>HOME</a>
            <a href="/paintings" className={styles.footerLink}>PAINTINGS</a>
            <a href="/collections" className={styles.footerLink}>COLLECTIONS</a>
            <a href="/about" className={styles.footerLink}>ABOUT</a>
            
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
         <p className={styles.footerText}>© 2025 Passion Crafted. All rights reserved | Developed by Aakarsh Mishra</p>
      </div>


      {showContactForm && <ContactForm onClose={closeContactForm} />}
    </div>
  );
};

export default FooterParallax;

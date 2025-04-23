// import React from "react";
// import styles from './FooterParallax.module.css';
// import logo from '../assets/logos/footerLogobg.png'; 

// const FooterParallax = () => {
//   return (
//     <div className={styles.footerWrapper}>
//       <div className={styles.footerContent}>
//         <div className={styles.footerTop}>
//           <span
//             className={styles.backToTop}
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           >
//             Back To Top
//           </span>
//         </div>
//         <div className={styles.contentBox}>
//           <nav className={styles.footerNav}>
//             <a href="/" className={styles.footerLink}>HOME</a>
//             <a href="/paintings" className={styles.footerLink}>PAINTINGS</a>
//             <a href="/collections" className={styles.footerLink}>COLLECTIONS</a>
//             <a href="/about" className={styles.footerLink}>ABOUT</a>
//             <a href="/contact" className={`${styles.footerLink} ${styles.active}`}>CONTACT</a>
//           </nav>
//           <div className={styles.footerLogo}>
//             <img
//               src={logo}
//               alt="Passion Crafted Logo"
//               className={styles.logoImg}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FooterParallax;



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
            <button
              onClick={openContactForm}
              className={`${styles.footerLink} ${styles.active}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0, color: '#9C1D32', fontSize: '16px'  }} 
            >
              CONTACT
            </button>
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
      {showContactForm && <ContactForm onClose={closeContactForm} />}
    </div>
  );
};

export default FooterParallax;

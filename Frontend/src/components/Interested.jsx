import React from "react";
import styles from "./interested.module.css";

const Interested = ({ onClose }) => {
  const handleOverlayClick = () => {
    onClose(); // Close when clicking outside
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); // Prevent closing on form click
  };

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
      <div className={styles.popupForm} onClick={stopPropagation}>
        <h2 className={styles.formTitle}>Fill Details</h2>
        <form>
          <input className={styles.inputField} type="text" placeholder="Name" required />
          <input className={styles.inputField} type="email" placeholder="E-mail" required />
          <div className={styles.formRow}>
            <input className={styles.inputField} type="text" placeholder="Country" required />
            <input className={styles.inputField} type="text" placeholder="Zipcode" required />
          </div>
          <input className={styles.inputField} type="tel" placeholder="Phone No." required />
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Interested;

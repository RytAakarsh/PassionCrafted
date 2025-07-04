import React, { useState } from "react";
import styles from "./interested.module.css";
import axios from "axios";

const ContactUs = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    zipcode: "",
    phone: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://passioncrafted.onrender.com/send-contact-email", formData);
      alert("Contact form submitted successfully!");
      onClose();
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  const handleOverlayClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.popupOverlay} onClick={handleOverlayClick}>
      <div className={styles.popupForm} onClick={stopPropagation}>
        <div className={styles.closeIcon} onClick={onClose}>
          &times;
        </div>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            type="email"
            placeholder="E-mail"
            required
          />
          <div className={styles.formRow}>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={styles.inputField}
              type="text"
              placeholder="Country"
              required
            />
            <input
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className={styles.inputField}
              type="text"
              placeholder="Zipcode"
              required
            />
          </div>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.inputField}
            type="tel"
            placeholder="Phone No."
            required
          />
          <input
            name="query"
            value={formData.query}
            onChange={handleChange}
            className={styles.inputField}
            type="text"
            placeholder="Your Query"
            required
          />
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

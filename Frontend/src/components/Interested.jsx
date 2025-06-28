import React, { useState } from "react";
import styles from "./interested.module.css";
import axios from "axios";

const Interested = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    zipcode: "",
    phone: "",
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
      await axios.post("https://passioncrafted.onrender.com/send-interested-email", formData);
      alert("Form submitted successfully!");
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
        <h2 className={styles.formTitle}>Fill Details</h2>
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
              type="number"
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

export default Interested;

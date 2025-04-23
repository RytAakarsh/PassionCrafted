import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <main className={styles.container}>
      <section>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.description}>
          At Passion Crafted, we are redefining the art collecting experience by seamlessly blending creativity, connection, and cutting-edge technology. Our mission is to create a platform where collectors, artists, and our dedicated team come together to celebrate the beauty of art and craftsmanship.
        </p>
      </section>
      <section className={styles.grid}>
        {/* For Collectors */}
        <div className={styles.gridItem}>
          <img
            alt="Wall with multiple framed paintings arranged in a gallery setting"
            className={styles.image}
            src="https://storage.googleapis.com/a1aa/image/5882f328-1ed6-446d-bf3b-8f0abed248cd.jpg"
          />
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>For Collectors</h3>
            <p>
              We curate high-quality paintings that resonate with your unique taste and vision. Our journey begins online, offering a thoughtfully designed platform to explore exceptional artworks. From the initial discovery to personalized interactions, we ensure every step of your experience is tailored to your needs. With meticulous care before, during, and after your purchase, we aim to make collecting art a joyful and memorable journey.
            </p>
          </div>
        </div>
        {/* For Artists */}
        <div className={styles.gridItemCenter}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>For Artists</h3>
            <p>
              We work closely with painters to empower them with the best opportunities for growth and recognition. By connecting them with a wider audience, we help them showcase their talent and build sustainable careers. From fair compensation to professional development support, we are committed to fostering a thriving artistic community where creativity flourishes.
            </p>
          </div>
        </div>
        {/* The Passion Crafted Team */}
        <div className={styles.gridItem}>
          <img
            alt="Group of four people working together around a laptop"
            className={styles.image}
            src="https://storage.googleapis.com/a1aa/image/beefd642-6d87-4e42-0cbf-0f8b17807063.jpg"
          />
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>The Passion Crafted Team</h3>
            <p>
              Behind every interaction is our passionate team, tirelessly working to ensure excellence at every level. We believe in building lasting relationships with collectors and artists alike, offering personalized service and unwavering support to make every experience extraordinary.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

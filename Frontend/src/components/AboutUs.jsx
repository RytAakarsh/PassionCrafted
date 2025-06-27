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
            src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>For Collectors</h3>
            <p>
              We curate high-quality paintings that resonate with your unique taste and vision. Our journey begins online, offering a thoughtfully designed platform to explore exceptional artworks. From the initial discovery to personalized interactions, we ensure every step of your experience is tailored to your needs.
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
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

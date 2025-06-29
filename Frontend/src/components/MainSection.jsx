import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainSection.module.css";
import img1 from "../assets/Picture/1.png";
import img2 from "../assets/Picture/2.png";
import img3 from "../assets/Picture/3.png";
import Interested from "./Interested.jsx";

const paintings = [
  {
    id: 1,
    src: img1,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    title: "Whispers of the Withered Plains",
    artist: "By Reshmi",
  },
  {
    id: 2,
    src: img2,
    alt: "Ornate framed painting showing abstract colorful art with vibrant colors",
    title: "Song of the Morning Skies",
    artist: "By Reshmi",
  },
  {
    id: 3,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Echoes of the Enchanted Forest",
    artist: "By Reshmi",
  },
  {
    id: 4,
    src: "https://placehold.co/600x450?text=Painting+4+Seascape+with+sunset",
    alt: "Ornate framed painting showing a seascape with sunset and waves",
    title: "Seascape Sunset",
    artist: "By Artist Four",
  },
];

function MainSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % paintings.length);

  return (
    <div className={styles.mainSection}>
      {/* Left Section */}
      <div className={`${styles.mainLeft} ${currentIndex === 3 ? styles.centerContent : ""}`}>
        <div className={styles.sliderContainer}>
          {currentIndex !== 3 && (
            <>
              <img
                src={paintings[currentIndex].src}
                alt={paintings[currentIndex].alt}
                className={styles.paintingImage}
              />
              <div className={styles.sliderDots}>
                {paintings.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Slide ${idx + 1}`}
                    className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                    onClick={() => goToSlide(idx)}
                  />
                ))}
                <button
                  className={styles.nextButton}
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.mainRight}>
        {currentIndex === 3 ? (
          <div className={`${styles.viewAllSection} ${styles.centered}`}>
            <h1 className={styles.viewAllHeading}>View All Paintings</h1>
            <button
              className={styles.viewAllButton}
              onClick={() => navigate("/paintings")}
            >
              View All
            </button>
            <div className={styles.sliderDots}>
              {paintings.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Slide ${idx + 1}`}
                  className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                  onClick={() => goToSlide(idx)}
                />
              ))}
              <button
                className={styles.nextButton}
                onClick={nextSlide}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className={styles.paintingName}>{paintings[currentIndex].title}</h1>
            <p className={styles.artistName}>{paintings[currentIndex].artist}</p>
            <div className={styles.buttonGroup}>
              <button
                className={styles.interestedButton}
                onClick={() => setShowPopup(true)}
              >
                Interested
              </button>
              <button
                className={styles.knowMoreButton}
                onClick={() => navigate(`/main-painting/${paintings[currentIndex].id}`)}
              >
                Know More
              </button>
            </div>
          </>
        )}
      </div>

      {/* Popup */}
      {showPopup && <Interested onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default MainSection;

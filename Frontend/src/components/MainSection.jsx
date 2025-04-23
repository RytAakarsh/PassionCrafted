import { useState } from "react";
import styles from "./MainSection.module.css";

import img1 from '../assets/Picture/1.png';
import img2 from '../assets/Picture/2.png';
import img3 from '../assets/Picture/3.png';

const paintings = [
  {
    src: img1,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    title: "Painting Name",
    artist: "By Artist name",
  },
  {
    src: img2,
    alt: "Ornate framed painting showing abstract colorful art with vibrant colors",
    title: "Abstract Colors",
    artist: "By Artist Two",
  },
  {
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "By Artist Three",
  },
  {
    src: "https://placehold.co/600x450?text=Painting+4+Seascape+with+sunset",
    alt: "Ornate framed painting showing a seascape with sunset and waves",
    title: "Seascape Sunset",
    artist: "By Artist Four",
  },
];



function MainSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % paintings.length);
  };

  return (
    <div className={styles.mainSection}>
      <div className={styles.mainLeft}>
        <div className={styles.sliderContainer}>
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
        </div>
      </div>
      <div className={styles.mainRight}>
        <h1 className={styles.paintingName}>{paintings[currentIndex].title}</h1>
        <p className={styles.artistName}>{paintings[currentIndex].artist}</p>
        <div className={styles.buttonGroup}>
          <button className={styles.interestedButton}>Interested</button>
          <button className={styles.knowMoreButton}>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;

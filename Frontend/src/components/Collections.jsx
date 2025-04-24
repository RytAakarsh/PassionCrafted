import React, { useState } from "react";
import styles from "./Collections.module.css";
import Interested from "./interested"; // Make sure path is correct
import img1 from "../assets/Picture/1.png";
import img2 from "../assets/Picture/2.png";
import img3 from "../assets/Picture/3.png";

const paintingCollections = [
  {
    title: "Aa Collection",
    paintings: [
      { src: img1, title: "Painting Name", artist: "By Artist name" },
      { src: img2, title: "Painting Name", artist: "By Artist name" },
      { src: img3, title: "Painting Name", artist: "By Artist name" },
      { src: img1, title: "Painting Name", artist: "By Artist name" },
      { src: img2, title: "Painting Name", artist: "By Artist name" },
      { src: img3, title: "Painting Name", artist: "By Artist name" },
    ],
  },
  {
    title: "Bb Collection",
    paintings: [
      { src: img1, title: "Painting Name", artist: "By Artist name" },
      { src: img2, title: "Painting Name", artist: "By Artist name" },
      { src: img3, title: "Painting Name", artist: "By Artist name" },
      { src: img1, title: "Painting Name", artist: "By Artist name" },
      { src: img2, title: "Painting Name", artist: "By Artist name" },
      { src: img3, title: "Painting Name", artist: "By Artist name" },
    ],
  },
  {
    title: "Cc Collection",
    paintings: [
      { src: img1, title: "Painting Name", artist: "By Artist name" },
      { src: img2, title: "Painting Name", artist: "By Artist name" },
      { src: img3, title: "Painting Name", artist: "By Artist name" },
      { src: img1, title: "Painting Name", artist: "By Artist name" },
      { src: img2, title: "Painting Name", artist: "By Artist name" },
      { src: img3, title: "Painting Name", artist: "By Artist name" },
    ],
  },
];

const Collections = () => {
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const filteredCollections = paintingCollections.filter((collection) =>
    collection.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="🔍 Search Collection"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCollections.map((collection, index) => (
        <div key={index} className={styles.collectionSection}>
          <h2 className={styles.collectionTitle}>{collection.title}</h2>
          <div className={styles.paintingsGrid}>
            {collection.paintings.map((painting, idx) => (
              <div
                key={idx}
                className={styles.paintingCard}
                onClick={openPopup}
              >
                <img
                  src={painting.src}
                  alt={painting.title}
                  className={styles.paintingImage}
                />
                <p className={styles.paintingName}>{painting.title}</p>
                <p className={styles.artistName}>{painting.artist}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {showPopup && <Interested onClose={closePopup} />}
    </div>
  );
};

export default Collections;

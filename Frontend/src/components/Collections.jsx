import React, { useState } from "react";
import styles from "./Collections.module.css";
import Interested from "./Interested.jsx";

// ✅ Import Images
import imgR1 from "../assets/Picture/Reshmi RO (1).jpeg";
import imgR2 from "../assets/Picture/Reshmi RO (2).jpeg";
import imgR3 from "../assets/Picture/Reshmi RO (3).jpeg";
import imgR4 from "../assets/Picture/Reshmi RO (4).jpeg";
import imgR5 from "../assets/Picture/Reshmi RO (5).jpeg";
import imgR6 from "../assets/Picture/Reshmi RO (6).jpeg";
import imgR7 from "../assets/Picture/Reshmi RO (7).jpeg";
import imgR8 from "../assets/Picture/Reshmi RO (8).jpeg";
import imgR9 from "../assets/Picture/Reshmi RO (9).jpeg";
import imgR10 from "../assets/Picture/Reshmi RO (10).jpeg";
import imgR11 from "../assets/Picture/Reshmi RO (11).jpeg";
import imgR12 from "../assets/Picture/Reshmi RO (12).jpeg";
import imgR13 from "../assets/Picture/Reshmi RO (13).jpeg";
import imgR14 from "../assets/Picture/Reshmi RO (14).jpeg";
import imgR15 from "../assets/Picture/Reshmi RO (15).jpeg";
import imgR16 from "../assets/Picture/Reshmi RO (16).jpeg";
import imgR17 from "../assets/Picture/Reshmi RO (17).jpeg";
import imgR18 from "../assets/Picture/Reshmi RO (18).jpeg";
import imgR19 from "../assets/Picture/Reshmi RO (19).jpeg";
import imgR20 from "../assets/Picture/Reshmi RO (20).jpeg";
import imgR21 from "../assets/Picture/Reshmi RO (21).jpeg";
import imgR22 from "../assets/Picture/Reshmi RO (22).jpeg";
import imgR23 from "../assets/Picture/Reshmi RO (23).jpeg";
import imgR24 from "../assets/Picture/Reshmi RO (24).jpeg";
import imgR25 from "../assets/Picture/Reshmi RO (25).jpeg";
import imgR26 from "../assets/Picture/Reshmi RO (26).jpeg";
import imgR27 from "../assets/Picture/Reshmi RO (27).jpeg";
import imgR28 from "../assets/Picture/Reshmi RO (28).jpeg";
import imgR29 from "../assets/Picture/Reshmi RO (29).jpeg";
import imgR30 from "../assets/Picture/Reshmi RO (30).jpeg";
import imgR31 from "../assets/Picture/Reshmi RO (31).jpeg";
import imgR32 from "../assets/Picture/Reshmi RO (32).jpeg";
import imgR33 from "../assets/Picture/Reshmi RO (33).jpeg";
import imgR34 from "../assets/Picture/Reshmi RO (34).jpeg";
import imgR35 from "../assets/Picture/Reshmi RO (35).jpeg";
import imgR36 from "../assets/Picture/Reshmi RO (36).jpeg";
import imgR37 from "../assets/Picture/Reshmi RO (37).jpeg";
import imgR38 from "../assets/Picture/Reshmi RO (38).jpeg";
import imgR39 from "../assets/Picture/Reshmi RO (39).jpeg";
import imgR40 from "../assets/Picture/Reshmi RO (40).jpeg";
import imgR41 from "../assets/Picture/Reshmi RO (41).jpeg";
import imgR42 from "../assets/Picture/Reshmi RO (42).jpeg";
import imgR43 from "../assets/Picture/Reshmi RO (43).jpeg";
import imgR44 from "../assets/Picture/Reshmi RO (44).jpeg";
import imgR45 from "../assets/Picture/Reshmi RO (45).jpeg";
import imgR46 from "../assets/Picture/Reshmi RO (46).jpeg";
import imgR47 from "../assets/Picture/Reshmi RO (47).jpeg";

// ✅ Painting Collection Data
const paintingCollections = [
  {
    title: "Reshmi's Collection",
    paintings: [
      { src: imgR1, title: "", artist: "By Reshmi" },
      { src: imgR2, title: "", artist: "By Reshmi" },
      { src: imgR3, title: "", artist: "By Reshmi" },
      { src: imgR4, title: "", artist: "By Reshmi" },
      { src: imgR5, title: "", artist: "By Reshmi" },
      { src: imgR6, title: "", artist: "By Reshmi" },
      { src: imgR7, title: "", artist: "By Reshmi" },
      { src: imgR8, title: "", artist: "By Reshmi" },
      { src: imgR9, title: "", artist: "By Reshmi" },
      { src: imgR10, title: "", artist: "By Reshmi" },
      { src: imgR11, title: "", artist: "By Reshmi" },
      { src: imgR12, title: "", artist: "By Reshmi" },
      { src: imgR13, title: "", artist: "By Reshmi" },
      { src: imgR14, title: "", artist: "By Reshmi" },
      { src: imgR15, title: "", artist: "By Reshmi" },
      { src: imgR16, title: "", artist: "By Reshmi" },
      { src: imgR17, title: "", artist: "By Reshmi" },
      { src: imgR18, title: "", artist: "By Reshmi" },
      { src: imgR19, title: "", artist: "By Reshmi" },
      { src: imgR20, title: "", artist: "By Reshmi" },
      { src: imgR21, title: "", artist: "By Reshmi" },
      { src: imgR22, title: "", artist: "By Reshmi" },
      { src: imgR23, title: "", artist: "By Reshmi" },
      { src: imgR24, title: "", artist: "By Reshmi" },
      { src: imgR25, title: "", artist: "By Reshmi" },
      { src: imgR26, title: "", artist: "By Reshmi" },
      { src: imgR27, title: "", artist: "By Reshmi" },
      { src: imgR28, title: "", artist: "By Reshmi" },
      { src: imgR29, title: "", artist: "By Reshmi" },
      { src: imgR30, title: "", artist: "By Reshmi" },
      { src: imgR31, title: "", artist: "By Reshmi" },
      { src: imgR32, title: "", artist: "By Reshmi" },
      { src: imgR33, title: "", artist: "By Reshmi" },
      { src: imgR34, title: "", artist: "By Reshmi" },
      { src: imgR35, title: "", artist: "By Reshmi" },
      { src: imgR36, title: "", artist: "By Reshmi" },
      { src: imgR37, title: "", artist: "By Reshmi" },
      { src: imgR38, title: "", artist: "By Reshmi" },
      { src: imgR39, title: "", artist: "By Reshmi" },
      { src: imgR40, title: "", artist: "By Reshmi" },
      { src: imgR41, title: "", artist: "By Reshmi" },
      { src: imgR42, title: "", artist: "By Reshmi" },
      { src: imgR43, title: "", artist: "By Reshmi" },
      { src: imgR44, title: "", artist: "By Reshmi" },
      { src: imgR45, title: "", artist: "By Reshmi" },
      { src: imgR46, title: "", artist: "By Reshmi" },
      { src: imgR47, title: "", artist: "By Reshmi" },
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
                <div className={styles.imageWrapper}>
                  <img
                    src={painting.src}
                    alt={painting.title}
                    className={styles.paintingImage}
                  />
                </div>
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

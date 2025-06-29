import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Paintings.module.css';
import Interested from './Interested.jsx';


import imgR1 from "../assets/Picture/Reshmi-RO-1.jpeg";
import imgR2 from "../assets/Picture/Reshmi-RO-2.jpeg";
import imgR3 from "../assets/Picture/Reshmi-RO-3.jpeg";
import imgR4 from "../assets/Picture/Reshmi-RO-4.jpeg";
import imgR5 from "../assets/Picture/Reshmi-RO-5.jpeg";
import imgR6 from "../assets/Picture/Reshmi-RO-6.jpeg";
import imgR7 from "../assets/Picture/Reshmi-RO-7.jpeg";
import imgR8 from "../assets/Picture/Reshmi-RO-8.jpeg";
import imgR9 from "../assets/Picture/Reshmi-RO-9.jpeg";
import imgR10 from "../assets/Picture/Reshmi-RO-10.jpeg";
import imgR11 from "../assets/Picture/Reshmi-RO-11.jpeg";
import imgR12 from "../assets/Picture/Reshmi-RO-12.jpeg";
import imgR13 from "../assets/Picture/Reshmi-RO-13.jpeg";
import imgR14 from "../assets/Picture/Reshmi-RO-14.jpeg";
import imgR15 from "../assets/Picture/Reshmi-RO-15.jpeg";
import imgR16 from "../assets/Picture/Reshmi-RO-16.jpeg";
import imgR17 from "../assets/Picture/Reshmi-RO-17.jpeg";
import imgR18 from "../assets/Picture/Reshmi-RO-18.jpeg";
import imgR19 from "../assets/Picture/Reshmi-RO-19.jpeg";
import imgR20 from "../assets/Picture/Reshmi-RO-20.jpeg";
import imgR21 from "../assets/Picture/Reshmi-RO-21.jpeg";
import imgR22 from "../assets/Picture/Reshmi-RO-22.jpeg";
import imgR23 from "../assets/Picture/Reshmi-RO-23.jpeg";
import imgR24 from "../assets/Picture/Reshmi-RO-24.jpeg";
import imgR25 from "../assets/Picture/Reshmi-RO-25.jpeg";
import imgR26 from "../assets/Picture/Reshmi-RO-26.jpeg";
import imgR27 from "../assets/Picture/Reshmi-RO-27.jpeg";
import imgR28 from "../assets/Picture/Reshmi-RO-28.jpeg";
import imgR29 from "../assets/Picture/Reshmi-RO-29.jpeg";
import imgR30 from "../assets/Picture/Reshmi-RO-30.jpeg";
import imgR31 from "../assets/Picture/Reshmi-RO-31.jpeg";
import imgR32 from "../assets/Picture/Reshmi-RO-32.jpeg";
import imgR33 from "../assets/Picture/Reshmi-RO-33.jpeg";
import imgR34 from "../assets/Picture/Reshmi-RO-34.jpeg";
import imgR35 from "../assets/Picture/Reshmi-RO-35.jpeg";
import imgR36 from "../assets/Picture/Reshmi-RO-36.jpeg";
import imgR37 from "../assets/Picture/Reshmi-RO-37.jpeg";
import imgR38 from "../assets/Picture/Reshmi-RO-38.jpeg";
import imgR39 from "../assets/Picture/Reshmi-RO-39.jpeg";
import imgR40 from "../assets/Picture/Reshmi-RO-40.jpeg";
import imgR41 from "../assets/Picture/Reshmi-RO-41.jpeg";
import imgR42 from "../assets/Picture/Reshmi-RO-42.jpeg";
import imgR43 from "../assets/Picture/Reshmi-RO-43.jpeg";
import imgR44 from "../assets/Picture/Reshmi-RO-44.jpeg";
import imgR45 from "../assets/Picture/Reshmi-RO-45.jpeg";
import imgR46 from "../assets/Picture/Reshmi-RO-46.jpeg";
import imgR47 from "../assets/Picture/Reshmi-RO-47.jpeg";


// Sample paintings data
const allPaintings = [
  {
    id: 1,
    src: imgR1,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 2,
    src: imgR2,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 3,
    src: imgR3,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 4,
    src: imgR4,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 5,
    src: imgR5,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 6,
    src: imgR6,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 7,
    src: imgR7,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 8,
    src: imgR8,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 9,
    src: imgR9,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 10,
    src: imgR10,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 11,
    src: imgR11,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 12,
    src: imgR12,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 13,
    src: imgR13,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 14,
    src: imgR14,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 15,
    src: imgR15,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 16,
    src: imgR16,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 17,
    src: imgR17,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 18,
    src: imgR18,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 19,
    src: imgR19,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 20,
    src: imgR20,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 21,
    src: imgR21,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 22,
    src: imgR22,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 23,
    src: imgR23,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 24,
    src: imgR24,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 25,
    src: imgR25,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 26,
    src: imgR26,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 27,
    src: imgR27,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 28,
    src: imgR28,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 29,
    src: imgR29,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 30,
    src: imgR30,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 31,
    src: imgR31,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 32,
    src: imgR32,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 33,
    src: imgR33,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 34,
    src: imgR34,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 35,
    src: imgR35,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 36,
    src: imgR36,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 37,
    src: imgR37,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 38,
    src: imgR38,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 39,
    src: imgR39,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 40,
    src: imgR40,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 41,
    src: imgR41,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 42,
    src: imgR42,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 43,
    src: imgR43,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 44,
    src: imgR44,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 45,
    src: imgR45,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 46,
    src: imgR46,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  },
  {
    id: 47,
    src: imgR47,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    // title: "Painting Name",
    artist: "Reshmi",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2025-06-27"
  }
  


  
];

function Paintings() {
  const [paintings, setPaintings] = useState(allPaintings);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    artist: '',
    type: '',
    dimension: ''
  });
  const [hoveredPainting, setHoveredPainting] = useState(null);
  const [clickedPainting, setClickedPainting] = useState(null);
  const navigate = useNavigate();

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (category, value) => {
    setFilters({
      ...filters,
      [category]: value
    });
  };

  useEffect(() => {
    let filteredPaintings = [...allPaintings];

    if (filters.artist) {
      filteredPaintings = filteredPaintings.filter(
        painting => painting.artist.toLowerCase().includes(filters.artist.toLowerCase())
      );
    }

    if (filters.type) {
      filteredPaintings = filteredPaintings.filter(
        painting => painting.type.toLowerCase() === filters.type.toLowerCase()
      );
    }

    if (filters.dimension) {
      filteredPaintings = filteredPaintings.filter(
        painting => painting.dimension === filters.dimension
      );
    }

    setPaintings(filteredPaintings);
  }, [filters]);

  const openInterestPopup = (painting) => {
    setSelectedPainting(painting);
    setShowPopup(true);
  };

  const handleKnowMore = (e, id) => {
    e.stopPropagation();
    navigate(`/painting/${id}`); // Changed to point to PaintingInformation route
  };

  const handlePaintingClick = (painting, e) => {
    // For mobile view
    if (window.innerWidth <= 768) {
      if (clickedPainting === painting.id) {
        setClickedPainting(null);
      } else {
        setClickedPainting(painting.id);
      }
    } else {
      // For desktop view, open interest form
      openInterestPopup(painting);
    }
  };

  const handlePaintingHover = (paintingId, isHovering) => {
    if (window.innerWidth > 768) { // Only for desktop
      setHoveredPainting(isHovering ? paintingId : null);
    }
  };

  // Get unique values for filters
  const uniqueArtists = [...new Set(allPaintings.map(p => p.artist))];
  const uniqueTypes = [...new Set(allPaintings.map(p => p.type))];
  const uniqueDimensions = [...new Set(allPaintings.map(p => p.dimension))];

  return (
    <div className={styles.paintingsPage}>
      <div className={styles.filterSection}>
        <button 
          className={`${styles.filterButton} ${isFilterOpen ? styles.active : ''}`}
          onClick={toggleFilter}
        >
          <div className={styles.filterIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          FILTERS
        </button>
        
        {isFilterOpen && (
          <div className={styles.filterOptions}>
            <div className={styles.filterGroup}>
              <h3>Artist</h3>
              <select 
                value={filters.artist}
                onChange={(e) => handleFilterChange('artist', e.target.value)}
                className={styles.selectFilter}
              >
                <option value="">All Artists</option>
                {uniqueArtists.map((artist, index) => (
                  <option key={index} value={artist}>{artist}</option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <h3>Painting Type</h3>
              <select 
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className={styles.selectFilter}
              >
                <option value="">All Types</option>
                {uniqueTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <h3>Dimension</h3>
              <select 
                value={filters.dimension}
                onChange={(e) => handleFilterChange('dimension', e.target.value)}
                className={styles.selectFilter}
              >
                <option value="">All Dimensions</option>
                {uniqueDimensions.map((dimension, index) => (
                  <option key={index} value={dimension}>{dimension}</option>
                ))}
              </select>
            </div>

            <button 
              className={styles.resetButton}
              onClick={() => setFilters({
                artist: '',
                type: '',
                dimension: ''
              })}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <div className={styles.paintingsGrid}>
        {paintings.length > 0 ? (
          paintings.map((painting) => (
            <div 
              key={painting.id} 
              className={styles.paintingItem}
              onMouseEnter={() => handlePaintingHover(painting.id, true)}
              onMouseLeave={() => handlePaintingHover(painting.id, false)}
              onClick={(e) => handlePaintingClick(painting, e)}
            >
              <div className={styles.paintingFrame}>
                <img 
                  src={painting.src} 
                  alt={painting.alt} 
                  className={styles.paintingImage}
                />
                
                {(hoveredPainting === painting.id || clickedPainting === painting.id) && (
                  <div className={styles.paintingButtons}>
                    <button 
                      className={styles.knowMoreBtn}
                      onClick={(e) => handleKnowMore(e, painting.id)}
                    >
                      Know More
                    </button>
                    <button 
                      className={styles.interestedBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        openInterestPopup(painting);
                      }}
                    >
                      Interested
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.paintingInfo}>
                <h3 className={styles.paintingTitle}>{painting.title}</h3>
                <p className={styles.paintingArtist}>By {painting.artist}</p>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            <p>No paintings match your filter criteria.</p>
          </div>
        )}
      </div>

      {showPopup && <Interested onClose={() => setShowPopup(false)} />}
    </div>


     
  );
}

export default Paintings;

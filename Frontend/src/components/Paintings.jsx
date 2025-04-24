import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Paintings.module.css';
import Interested from './interested';
import img1 from "../assets/Picture/1.png";
import img2 from "../assets/Picture/2.png";
import img3 from "../assets/Picture/3.png";

// Sample paintings data
const allPaintings = [
  {
    id: 1,
    src: img1,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    title: "Painting Name",
    artist: "Artist name",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2024-01-15"
  },
  {
    id: 2,
    src: img2,
    alt: "Ornate framed painting showing abstract colorful art with vibrant colors",
    title: "Abstract Colors",
    artist: "Artist Two",
    type: "Abstract",
    dimension: "30x40",
    uploadDate: "2024-02-10"
  },
  {
    id: 3,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-05"
  },
  // Duplicate paintings for demonstration (replace with actual paintings)
  {
    id: 4,
    src: img1,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    title: "Painting Name",
    artist: "Artist name",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2024-01-20"
  },
  {
    id: 5,
    src: img2,
    alt: "Ornate framed painting showing abstract colorful art with vibrant colors",
    title: "Abstract Colors",
    artist: "Artist Two",
    type: "Abstract",
    dimension: "30x40",
    uploadDate: "2024-02-15"
  },
  {
    id: 6,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-10"
  },
  {
    id: 7,
    src: img1,
    alt: "Ornate framed painting showing a landscape with trees and a path in warm yellow and brown tones",
    title: "Painting Name",
    artist: "Artist name",
    type: "Landscape",
    dimension: "24x36",
    uploadDate: "2024-01-25"
  },
  {
    id: 8,
    src: img2,
    alt: "Ornate framed painting showing abstract colorful art with vibrant colors",
    title: "Abstract Colors",
    artist: "Artist Two",
    type: "Abstract",
    dimension: "30x40",
    uploadDate: "2024-02-20"
  },
  {
    id: 9,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
  {
    id: 10,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
  {
    id: 11,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
  {
    id: 12,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
  {
    id: 13,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
  {
    id: 14,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
  {
    id: 15,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
  {
    id: 16,
    src: img3,
    alt: "Ornate framed painting showing a portrait of a woman with soft brush strokes",
    title: "Woman's Portrait",
    artist: "Artist Three",
    type: "Portrait",
    dimension: "18x24",
    uploadDate: "2024-03-15"
  },
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

  // Apply filters
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
    navigate(`/painting/${id}`);
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
              onClick={() => openInterestPopup(painting)}
            >
              <div className={styles.paintingFrame}>
                <img 
                  src={painting.src} 
                  alt={painting.alt} 
                  className={styles.paintingImage}
                />
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

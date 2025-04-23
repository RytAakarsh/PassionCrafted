import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import styles from './PaintingDetail.module.css';
import img1 from "../assets/Picture/1.png";
import img2 from "../assets/Picture/2.png";
import img3 from "../assets/Picture/3.png";

const paintingDetails = [
  {
    id: 1,
    src: img1,
    title: "Painting Name",
    artist: "Artist Name",
    description: "Detailed description about this painting, its history, style, and background.",
    artistBio: "Short bio about Artist Name.",
    moreImages: [img2, img3], // Add more images if needed
  },
  {
    id: 2,
    src: img2,
    title: "Abstract Colors",
    artist: "Artist Two",
    description: "Description about Abstract Colors painting.",
    artistBio: "Short bio about Artist Two.",
    moreImages: [img1, img3],
  },
  {
    id: 3,
    src: img3,
    title: "Woman's Portrait",
    artist: "Artist Three",
    description: "Description about Woman's Portrait.",
    artistBio: "Short bio about Artist Three.",
    moreImages: [img1, img2],
  },
  {
    id: 4,
    src: "https://placehold.co/600x450?text=Painting+4+Seascape+with+sunset",
    title: "Seascape Sunset",
    artist: "Artist Four",
    description: "Description about Seascape Sunset.",
    artistBio: "Short bio about Artist Four.",
    moreImages: [img1, img2, img3],
  },
];

function PaintingDetail() {
  const { id } = useParams();
  const painting = paintingDetails.find(p => p.id === Number(id));

  if (!painting) return <div>Painting not found.</div>;

  return (
    <>
      <Navbar />
      <div className={styles.detailContainer}>
        <div className={styles.mainImageSection}>
          <img src={painting.src} alt={painting.title} className={styles.mainImage} />
        </div>
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{painting.title}</h1>
          <h2 className={styles.artist}>By {painting.artist}</h2>
          <p className={styles.description}>{painting.description}</p>
          <div className={styles.artistBio}>
            <h3>About the Artist</h3>
            <p>{painting.artistBio}</p>
          </div>
        </div>
      </div>
      <div className={styles.moreFromArtist}>
        <h2>More From The Artist</h2>
        <div className={styles.moreImagesGrid}>
          {painting.moreImages.map((img, idx) => (
            <img key={idx} src={img} alt={`More from ${painting.artist}`} className={styles.moreImage} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PaintingDetail;

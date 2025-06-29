import { useParams ,  useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import styles from './PaintingDetail.module.css';


import img1 from "../assets/Picture/1.png";
import img2 from "../assets/Picture/2.png";
import img3 from "../assets/Picture/3.png";


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



const paintingDetails = [
  {
    id: 1,
    src: img1,
    title: "Whispers of the Withered Plains",
    artist: "Reshmi",
    description: "A haunting yet serene depiction of a rural landscape at dusk, where the barren, crooked trees loom over a quiet, desolate house. The golden-brown hues evoke a sense of time passing and forgotten memories. The road leading away suggests journeys yet to be taken or stories long past, blending melancholy with mystery.",
    artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. With a unique ability to blend earthy tones and subtle textures, her art evokes deep reflection and storytelling. Inspired by the interplay between nature and human emotions, Reshmi’s paintings often depict serene forests, rustic homes, and fleeting moments in time. Her signature style combines traditional techniques with expressive brushwork, creating compositions that feel both timeless and deeply personal. Reshmi continues to explore new mediums and themes, striving to connect viewers with the quiet, often overlooked beauty of the world around them.",
    moreImages: [imgR1, imgR2, imgR3 , imgR4 , imgR5 , imgR6], // Add more images if needed
  },
  {
    id: 2,
    src: img2,
    title: "Song of the Morning Skies",
    artist: "Reshmi",
    description: "This artwork captures the beauty of a calm morning as birds take flight across the layered, textured skies. Tall palm trees sway gently beside dense foliage, symbolizing the harmony between life and nature. The light contrast between the earthy tones and the white birds adds a sense of movement and freedom to the scene.",
    artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. With a unique ability to blend earthy tones and subtle textures, her art evokes deep reflection and storytelling. Inspired by the interplay between nature and human emotions, Reshmi’s paintings often depict serene forests, rustic homes, and fleeting moments in time. Her signature style combines traditional techniques with expressive brushwork, creating compositions that feel both timeless and deeply personal. Reshmi continues to explore new mediums and themes, striving to connect viewers with the quiet, often overlooked beauty of the world around them.",
    moreImages: [imgR7, imgR8, imgR9, imgR10 , imgR11, imgR12], // Add more images if needed
  },
  {
    id: 3,
    src: img3,
    title: "Echoes of the Enchanted Forest",
    artist: "Reshmi",
    description: "An immersive exploration into a mysterious forest, dominated by leaning, shadowy trees. Shades of green and muted grays paint a tranquil yet slightly eerie atmosphere, while small purple flowers scatter the forest floor, hinting at life persisting amid the wildness. This piece evokes curiosity and invites viewers to wander deeper into its hidden paths.",
    artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. With a unique ability to blend earthy tones and subtle textures, her art evokes deep reflection and storytelling. Inspired by the interplay between nature and human emotions, Reshmi’s paintings often depict serene forests, rustic homes, and fleeting moments in time. Her signature style combines traditional techniques with expressive brushwork, creating compositions that feel both timeless and deeply personal. Reshmi continues to explore new mediums and themes, striving to connect viewers with the quiet, often overlooked beauty of the world around them.",
    moreImages: [imgR13, imgR14, imgR15, imgR16, imgR17, imgR18],
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
  const navigate = useNavigate();
  const painting = paintingDetails.find(p => p.id === Number(id));

  const handleViewAll = () => {
    navigate('/collections'); // Adjust this route if your collections page has a different path
  };

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
        <button 
          className={styles.viewAllButton}
          onClick={handleViewAll}
        >
          View All
        </button>
      </div>
    </>
  );
}

export default PaintingDetail;

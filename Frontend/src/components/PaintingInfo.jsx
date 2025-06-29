import { useState, useEffect } from 'react'; // Add this import
import { useParams, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import styles from './paintinginfo.module.css';
import Interested from './Interested';


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



const paintingInfo = [
  {
    id: 1,
    src: imgR1,
    title: "Whispers of the Withered Plains",
    artist: "Reshmi",
    description: "A haunting yet serene depiction of a rural landscape at dusk, where the barren, crooked trees loom over a quiet, desolate house. The golden-brown hues evoke a sense of time passing and forgotten memories. The road leading away suggests journeys yet to be taken or stories long past, blending melancholy with mystery.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR1, imgR2, imgR3, imgR4, imgR5, imgR6],
  },
  {
    id: 2,
    src: imgR2,
    title: "Song of the Morning Skies",
    artist: "Reshmi",
    description: "This artwork captures the beauty of a calm morning as birds take flight across the layered, textured skies. Tall palm trees sway gently beside dense foliage, symbolizing the harmony between life and nature. The contrast between the earthy tones and the white birds adds a sense of movement and freedom to the scene.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR7, imgR8, imgR9, imgR10, imgR11, imgR12],
  },
  {
    id: 3,
    src: imgR3,
    title: "Echoes of the Enchanted Forest",
    artist: "Reshmi",
    description: "An immersive exploration into a mysterious forest, dominated by leaning, shadowy trees. Shades of green and muted grays paint a tranquil yet slightly eerie atmosphere, while small purple flowers scatter the forest floor, hinting at life persisting amid the wildness.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR13, imgR14, imgR15, imgR16, imgR17, imgR18],
  },
  {
    id: 4,
    src: imgR4,
    title: "Misty Reflections",
    artist: "Reshmi",
    description: "A poetic landscape where water mirrors the sky, blending earthy textures with pale blues and grays. The soft layering of brushstrokes evokes a sense of peaceful solitude and timeless beauty.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR19, imgR20, imgR21, imgR22, imgR23, imgR24],
  },
  {
    id: 5,
    src: imgR5,
    title: "Roots of Memory",
    artist: "Reshmi",
    description: "An abstract portrayal of tangled roots spreading like veins beneath the earth. This piece symbolizes the hidden stories, connections, and resilience rooted deep within nature’s foundation.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR25, imgR26, imgR27, imgR28, imgR29, imgR30],
  },
  {
    id: 6,
    src: imgR6,
    title: "Ethereal Glow",
    artist: "Reshmi",
    description: "Centered around a glowing lily pad beneath a luminous sky, this painting merges the boundary between the real and the surreal. The delicate greens and soft textures create a dreamlike atmosphere.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR31, imgR32, imgR33, imgR34, imgR35, imgR36],
  },
  {
    id: 7,
    src: imgR7,
    title: "Palm Symphony",
    artist: "Reshmi",
    description: "A rhythmic portrayal of palm trees under a twilight sky. Their slender forms sway as though engaged in a silent song with the evening breeze, bringing harmony to the wild landscape.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR37, imgR38, imgR39, imgR40, imgR41, imgR42],
  },
  {
    id: 8,
    src: imgR8,
    title: "Labyrinth of Nature",
    artist: "Reshmi",
    description: "A chaotic yet fascinating web of roots and branches sprawls across the canvas, reflecting the complexity, strength, and interconnectedness of the natural world.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR43, imgR44, imgR45, imgR46, imgR47, imgR1],
  },
  {
    id: 9,
    src: imgR9,
    title: "The Crimson Summit",
    artist: "Reshmi",
    description: "A majestic mountain painted in bold crimson and amber hues rises from a textured landscape. This striking portrayal evokes feelings of nostalgia, warmth, and awe of nature’s grandeur.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR2, imgR3, imgR4, imgR5, imgR6, imgR7],
  },
  {
    id: 10,
    src: imgR10,
    title: "Silent Moonrise",
    artist: "Reshmi",
    description: "Soft, ethereal tones depict a landscape basking under the rise of a silver moon. Misty clouds and faint hills fade into the distance, creating a dreamscape filled with stillness and serenity.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR8, imgR9, imgR10, imgR11, imgR12, imgR13],
  },
  {
    id: 11,
    src: imgR11,
    title: "Dusk of the Sacred Trees",
    artist: "Reshmi",
    description: "A dense canopy of trees stands shrouded in twilight. Muted purples and blues blend with the shadowed forest, giving the scene a mystical, almost sacred presence.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR14, imgR15, imgR16, imgR17, imgR18, imgR19],
  },
  {
    id: 12,
    src: imgR12,
    title: "Fields of Serenity",
    artist: "Reshmi",
    description: "A peaceful landscape where vast fields meet the horizon. The gentle textures and subdued palette evoke a sense of stillness, peace, and connection to the earth.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR20, imgR21, imgR22, imgR23, imgR24, imgR25],
  },
  {
    id: 13,
    src: imgR13,
    title: "Twilight Refuge",
    artist: "Reshmi",
    description: "A forest bathed in golden twilight where tall trunks stretch toward the sky. The soft interplay of shadows and light offers refuge and comfort to the wandering soul.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR26, imgR27, imgR28, imgR29, imgR30, imgR31],
  },
  {
    id: 14,
    src: imgR14,
    title: "Echoes in the Grove",
    artist: "Reshmi",
    description: "Dark silhouettes of clustered trees create a rhythmic pattern, echoing stories of ancient lands. The deep blues and teals imbue the grove with a sense of mystery and reverence.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR32, imgR33, imgR34, imgR35, imgR36, imgR37],
  },
  {
    id: 15,
    src: imgR15,
    title: "Golden Horizon",
    artist: "Reshmi",
    description: "A minimalist yet powerful landscape where the vast expanse of golden earth meets a gentle, faded sky. This piece evokes both solitude and endless possibility.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR38, imgR39, imgR40, imgR41, imgR42, imgR43],
  },
  {
    id: 16,
    src: imgR16,
    title: "Memory of the Watchtower",
    artist: "Reshmi",
    description: "A timeless rural scene with an old water tower and dense trees surrounding it. The muted palette and textured brushwork evoke memories of quiet villages and forgotten places.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR44, imgR45, imgR46, imgR47, imgR1, imgR2],
  },
  {
    id: 17,
    src: imgR17,
    title: "The Last Light",
    artist: "Reshmi",
    description: "An evocative sunset over a dense forest. Warm orange hues blend into the shadowy treetops as the day’s final light fades, leaving behind a gentle hush of the approaching night.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR3, imgR4, imgR5, imgR6, imgR7, imgR8],
  },
  {
    id: 18,
    src: imgR18,
    title: "Windswept Memories",
    artist: "Reshmi",
    description: "A beautiful depiction of a countryside just after the rain. The wind blows through the wet foliage and fields, capturing both motion and stillness in the aftermath of a storm.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR9, imgR10, imgR11, imgR12, imgR13, imgR14],
  },
  {
    id: 19,
    src: imgR19,
    title: "Rustle of the Evening",
    artist: "Reshmi",
    description: "Tall trees sway gently as twilight approaches. The interplay of dark shadows and patches of evening light evokes a sense of nature winding down, embracing the calm of nightfall.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR15, imgR16, imgR17, imgR18, imgR19, imgR20],
  },
  {
    id: 20,
    src: imgR20,
    title: "Bloom of Solitude",
    artist: "Reshmi",
    description: "A lone tree stands amidst an open field, adorned with delicate lavender blossoms. The sparse background emphasizes the resilience and beauty of solitude in nature.",
    artistBio: "Reshmi is a visual artist whose works capture the quiet beauty of nature and rustic landscapes. Her art evokes deep emotions through earthy tones, textures, and serene compositions.",
    moreImages: [imgR21, imgR22, imgR23, imgR24, imgR25, imgR26],
  },
  {
  id: 21,
  src: imgR21,
  title: "Beneath the Banyan Veil",
  artist: "Reshmi",
  description: "A majestic banyan tree spreads its ancient roots, offering shelter and wisdom. The dense canopy creates a sanctuary of dappled light, invoking feelings of peace, reflection, and timeless endurance.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR22, imgR23, imgR24, imgR25, imgR26, imgR27],
},
{
  id: 22,
  src: imgR22,
  title: "Symphony of Solitude",
  artist: "Reshmi",
  description: "A lone hut stands amidst endless fields under a sky that seems to sing with silence. This painting whispers of solitude, simplicity, and the quiet strength found in isolation.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR23, imgR24, imgR25, imgR26, imgR27, imgR28],
},
{
  id: 23,
  src: imgR23,
  title: "Forest of Forgotten Echoes",
  artist: "Reshmi",
  description: "Towering trees stand like sentinels in a misty woodland, where shadows and light play across the floor. A haunting calm fills this space where memories linger.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR24, imgR25, imgR26, imgR27, imgR28, imgR29],
},
{
  id: 24,
  src: imgR24,
  title: "Harvest Dreams",
  artist: "Reshmi",
  description: "Golden fields sway under the touch of a soft breeze, echoing the rhythm of rural life. A depiction of abundance, patience, and harmony with nature's cycles.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR25, imgR26, imgR27, imgR28, imgR29, imgR30],
},
{
  id: 25,
  src: imgR25,
  title: "Shadows of Serenity",
  artist: "Reshmi",
  description: "A dense interplay of light and shadow dances through a thick forest. The foliage feels alive, whispering ancient stories to those who dare to pause and listen.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR26, imgR27, imgR28, imgR29, imgR30, imgR31],
},
{
  id: 26,
  src: imgR26,
  title: "Whispers Beyond the Horizon",
  artist: "Reshmi",
  description: "A vast open landscape stretches infinitely, where the land meets the sky. The soft haze in the distance evokes a sense of mystery, longing, and freedom.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR27, imgR28, imgR29, imgR30, imgR31, imgR32],
},
{
  id: 27,
  src: imgR27,
  title: "The Path Less Wandered",
  artist: "Reshmi",
  description: "A narrow dirt path winds through dense woods, inviting viewers to wander where few have tread. It symbolizes exploration, choices, and unseen destinations.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR28, imgR29, imgR30, imgR31, imgR32, imgR33],
},
{
  id: 28,
  src: imgR28,
  title: "Embrace of Autumn",
  artist: "Reshmi",
  description: "Amber leaves fall gently from ancient trees, signaling the passage of time. This piece captures the warmth, nostalgia, and fleeting beauty of autumn.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR29, imgR30, imgR31, imgR32, imgR33, imgR34],
},
{
  id: 29,
  src: imgR29,
  title: "The Watchful Silence",
  artist: "Reshmi",
  description: "A lone tree stands atop a hill, gazing quietly over the plains below. Its weathered branches hold stories of resilience, solitude, and timeless endurance.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR30, imgR31, imgR32, imgR33, imgR34, imgR35],
},
{
  id: 30,
  src: imgR30,
  title: "Beyond the Silent River",
  artist: "Reshmi",
  description: "A tranquil river flows gently under soft skies. The scene reflects calmness, inner peace, and the quiet journeys that shape our souls.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR31, imgR32, imgR33, imgR34, imgR35, imgR36],
},
{
  id: 31,
  src: imgR31,
  title: "Rays of Reminiscence",
  artist: "Reshmi",
  description: "Golden sunlight pierces through dense woods, casting luminous beams onto the forest floor. A metaphor for hope, clarity, and the moments that illuminate life.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR32, imgR33, imgR34, imgR35, imgR36, imgR37],
},
{
  id: 32,
  src: imgR32,
  title: "The Last Glow",
  artist: "Reshmi",
  description: "The final light of sunset drenches the sky in crimson and gold. It symbolizes closure, gratitude, and the beauty that exists in every ending.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR33, imgR34, imgR35, imgR36, imgR37, imgR38],
},
{
  id: 33,
  src: imgR33,
  title: "Stillness Speaks",
  artist: "Reshmi",
  description: "An undisturbed pond reflects the surrounding trees like a perfect mirror. This work evokes silence, contemplation, and the clarity found in moments of pause.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR34, imgR35, imgR36, imgR37, imgR38, imgR39],
},
{
  id: 34,
  src: imgR34,
  title: "Fragments of the Forgotten",
  artist: "Reshmi",
  description: "A dilapidated home stands surrounded by wild grass and crumbling fences. The painting speaks of memory, time’s passage, and the silent dignity of abandonment.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR35, imgR36, imgR37, imgR38, imgR39, imgR40],
},
{
  id: 35,
  src: imgR35,
  title: "Meadow of Whispers",
  artist: "Reshmi",
  description: "A vast meadow stretches into the horizon, its tall grasses swaying like whispered secrets. A soft breeze carries the song of freedom and the pulse of nature.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR36, imgR37, imgR38, imgR39, imgR40, imgR41],
},
{
  id: 36,
  src: imgR36,
  title: "Golden Veins of the Earth",
  artist: "Reshmi",
  description: "Cracks in dry soil form intricate patterns like veins. This earthy texture reflects resilience, the scars of time, and the persistent beauty found in harshness.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR37, imgR38, imgR39, imgR40, imgR41, imgR42],
},
{
  id: 37,
  src: imgR37,
  title: "Horizon of Dreams",
  artist: "Reshmi",
  description: "Soft hills melt into the sky as clouds drift lazily above. The subtle gradients of color suggest a place where dreams merge with reality.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR38, imgR39, imgR40, imgR41, imgR42, imgR43],
},
{
  id: 38,
  src: imgR38,
  title: "Echoes Beneath the Waves",
  artist: "Reshmi",
  description: "Gentle waves roll onto a quiet shore. The subtle textures of sand and water whisper stories of journeys, tides, and the endless rhythm of nature.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR39, imgR40, imgR41, imgR42, imgR43, imgR44],
},
{
  id: 39,
  src: imgR39,
  title: "Twilight Reverie",
  artist: "Reshmi",
  description: "Dusk descends upon a tranquil village, painting the sky in violet and indigo. A gentle hush falls over the world as day surrenders to night.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR40, imgR41, imgR42, imgR43, imgR44, imgR45],
},
{
  id: 40,
  src: imgR40,
  title: "A Silent Farewell",
  artist: "Reshmi",
  description: "A weathered boat rests quietly by the riverbank, no longer bound to journeys. This piece reflects endings, rest, and the dignity of letting go.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR41, imgR42, imgR43, imgR44, imgR45, imgR46],
},


{
  id: 41,
  src: imgR41,
  title: "Seascape Symphony",
  artist: "Reshmi",
  description: "A radiant sunset spills molten gold across gentle ocean waves. The tranquil sea mirrors the fiery sky, evoking both calm and wonder—a timeless harmony between water and light.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR42, imgR43, imgR44, imgR45, imgR46, imgR47],
},
{
  id: 42,
  src: imgR42,
  title: "Crimson Shoreline",
  artist: "Reshmi",
  description: "Crimson hues wash over the sky as the sun dips below the horizon. Gentle tides kiss the shore, leaving behind fleeting patterns—a poetic reminder of nature’s impermanence.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR43, imgR44, imgR45, imgR46, imgR47, imgR1],
},
{
  id: 43,
  src: imgR43,
  title: "Breeze Over Still Waters",
  artist: "Reshmi",
  description: "A gentle breeze ripples across a mirror-like sea beneath an amber sky. The horizon melts softly into the water, inviting viewers into a world of tranquility and endless reflection.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR44, imgR45, imgR46, imgR47, imgR1, imgR2],
},
{
  id: 44,
  src: imgR44,
  title: "Golden Tides",
  artist: "Reshmi",
  description: "Rolling waves shimmer under a cascade of golden light, where the sky and sea blend seamlessly. This scene celebrates the rhythmic dance of nature's timeless embrace.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR45, imgR46, imgR47, imgR1, imgR2, imgR3],
},
{
  id: 45,
  src: imgR45,
  title: "Twilight's Embrace",
  artist: "Reshmi",
  description: "As twilight descends, the ocean absorbs the colors of dusk—deep blues, purples, and hints of fading gold. A quiet farewell to the sun, wrapped in serenity.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR46, imgR47, imgR1, imgR2, imgR3, imgR4],
},
{
  id: 46,
  src: imgR46,
  title: "Waves of Solitude",
  artist: "Reshmi",
  description: "Gentle waves ripple toward the shore beneath a soft, overcast sky. The muted colors and open horizon evoke solitude, reflection, and the quiet power of the sea.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR47, imgR1, imgR2, imgR3, imgR4, imgR5],
},
{
  id: 47,
  src: imgR47,
  title: "Eternal Horizon",
  artist: "Reshmi",
  description: "An endless stretch of sea meets the boundless sky, where clouds drift lazily and sunlight fades gently. A reminder of infinite possibilities, journeys, and the beauty of the unknown.",
  artistBio: "Reshmi is a passionate visual artist whose works capture the raw beauty of nature, emotions, and forgotten landscapes. Her art evokes deep reflection and storytelling through earthy tones and subtle textures.",
  moreImages: [imgR1, imgR2, imgR3, imgR4, imgR5, imgR6],
},


];


function PaintingInformation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [hoveredPainting, setHoveredPainting] = useState(null);
  const [clickedPainting, setClickedPainting] = useState(null);

  const painting = paintingInfo.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleKnowMore = (e, paintingId) => {
    e.stopPropagation();
    navigate(`/painting/${paintingId}`);
  };

  const openInterestPopup = (painting) => {
    setSelectedPainting(painting);
    setShowPopup(true);
  };

  const handlePaintingInteraction = (paintingId, isActive) => {
    if (window.innerWidth > 768) {
      setHoveredPainting(isActive ? paintingId : null);
    } else {
      if (clickedPainting === paintingId && isActive) {
        setClickedPainting(null);
      } else {
        setClickedPainting(isActive ? paintingId : null);
      }
    }
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
        <div className={styles.moreImagesGrid}>
          {painting.moreImages.map((img, idx) => {
            const morePainting = paintingInfo.find(p => p.src === img);
            if (!morePainting) return null;
            
            return (
              <div 
                key={idx}
                className={styles.paintingWrapper}
                onMouseEnter={() => handlePaintingInteraction(morePainting.id, true)}
                onMouseLeave={() => handlePaintingInteraction(morePainting.id, false)}
                onClick={() => handlePaintingInteraction(morePainting.id, true)}
              >
                <img 
                  src={img} 
                  alt={`More from ${painting.artist}`} 
                  className={styles.moreImage} 
                />
                {(hoveredPainting === morePainting.id || clickedPainting === morePainting.id) && (
                  <div className={styles.paintingButtons}>
                    <button 
                      className={styles.knowMoreBtn}
                      onClick={(e) => handleKnowMore(e, morePainting.id)}
                    >
                      Know More
                    </button>
                    <button 
                      className={styles.interestedBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        openInterestPopup(morePainting);
                      }}
                    >
                      Interested
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {showPopup && <Interested onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default PaintingInformation;

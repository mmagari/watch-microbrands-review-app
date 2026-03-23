import type { Brand } from "../types/brand";

// images
import balticImage from "../assets/brands/BalticMain.png";
import lorierImage from "../assets/brands/LorierMain.webp";
import traskaImage from "../assets/brands/TraskaMain.webp";
import farerImage from "../assets/brands/FarerMain.webp";
import zelosImage from "../assets/brands/ZelosMain.jpg";
import brewImage from "../assets/brands/BrewMain.jpg";
import nodusImage from "../assets/brands/NodusMain.webp";
import christopherWardImage from "../assets/brands/CHWMain.jpg";
import studioUnderd0gImage from "../assets/brands/STUMain.webp";
import henryArcherImage from "../assets/brands/HAMain.jpg";
import wolbrookImage from "../assets/brands/WolbrookMain.webp";
import vaerImage from "../assets/brands/VaerMain.webp";

export const brands: Brand[] = [
  {
    id: "baltic",
    name: "Baltic",
    country: "France",
    styles: ["diver", "dress", "gmt"],
    startingPriceUsd: 690,
    featuredModel: "Aquascaphe",
    description:
      "French microbrand known for vintage-inspired mechanical watches with clean proportions and strong enthusiast appeal.",
    image: balticImage,
  },
  {
    id: "lorier",
    name: "Lorier",
    country: "USA",
    styles: ["diver", "field", "dress", "gmt"],
    startingPriceUsd: 550,
    featuredModel: "Neptune",
    description:
      "New York-based brand focused on classic mid-century styling, compact cases and versatile everyday watches.",
    image: lorierImage,
  },
  {
    id: "traska",
    name: "Traska",
    country: "USA",
    styles: ["diver", "field", "gmt", "casual"],
    startingPriceUsd: 630,
    featuredModel: "Commuter",
    description:
      "American microbrand known for practical daily-wear watches and hardened steel cases built for real use.",
    image: traskaImage,
  },
  {
    id: "farer",
    name: "Farer",
    country: "United Kingdom",
    styles: ["gmt", "diver", "dress", "chronograph"],
    startingPriceUsd: 1200,
    featuredModel: "Lander",
    description:
      "British-designed, Swiss-made independent brand known for bold colours, adventurous design and broad category coverage.",
    image: farerImage,
  },
  {
    id: "zelos",
    name: "Zelos",
    country: "Singapore",
    styles: ["diver", "sport", "gmt"],
    startingPriceUsd: 399,
    featuredModel: "Swordfish",
    description:
      "Singapore-based enthusiast favourite known for daring materials, limited runs and great value sport watches.",
    image: zelosImage,
  },
  {
    id: "brew",
    name: "Brew",
    country: "USA",
    styles: ["chronograph", "casual", "dress"],
    startingPriceUsd: 425,
    featuredModel: "Metric",
    description:
      "Design-led New York microbrand with compact retro aesthetics inspired by espresso machines and café culture.",
    image: brewImage,
  },
  {
    id: "vaer",
    name: "Vaer",
    country: "USA",
    styles: ["field", "diver", "gmt", "chronograph", "casual"],
    startingPriceUsd: 179,
    featuredModel: "Meridian",
    description:
      "Accessible American brand with a wide range of quartz, solar and automatic field, diver and GMT watches.",
    image: vaerImage,
  },
  {
    id: "henry-archer",
    name: "Henry Archer",
    country: "Denmark",
    styles: ["diver", "sport", "gmt", "casual", "chronograph"],
    startingPriceUsd: 660,
    featuredModel: "Vesterhav",
    description:
      "Danish brand blending colourful dials, Bauhaus-inspired design cues and strong specs at approachable prices.",
    image: henryArcherImage,
  },
  {
    id: "wolbrook",
    name: "Wolbrook",
    country: "France",
    styles: ["diver", "chronograph", "casual"],
    startingPriceUsd: 250,
    featuredModel: "Skindiver",
    description:
      "Heritage-inspired French brand offering accessible skindivers and vintage-flavoured chronographs.",
    image: wolbrookImage,
  },
  {
    id: "christopher-ward",
    name: "Christopher Ward",
    country: "United Kingdom",
    styles: ["diver", "dress", "pilot", "sport", "gmt"],
    startingPriceUsd: 600,
    featuredModel: "The Twelve",
    description:
      "Independent British-designed, Swiss-made brand with a broad catalogue and many strong-value models under $2000.",
    image: christopherWardImage,
  },
  {
    id: "nodus",
    name: "Nodus",
    country: "USA",
    styles: ["field", "pilot", "sport", "gmt", "diver"],
    startingPriceUsd: 500,
    featuredModel: "Sector II",
    description:
      "Los Angeles microbrand focused on robust tool and sport watches with a practical, enthusiast-first design approach.",
    image: nodusImage,
  },
  {
    id: "studio-underd0g",
    name: "Studio Underd0g",
    country: "United Kingdom",
    styles: ["chronograph", "field", "casual"],
    startingPriceUsd: 650,
    featuredModel: "01Series",
    description:
      "Playful British independent brand known for colourful dials, compact chronographs and a very distinctive identity.",
    image: studioUnderd0gImage,
  },
];
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
      "Traska is a Florida-based independent microbrand founded in 2018, specializing in durable, vintage-inspired 'Go Anywhere, Do Anything' (GADA) sports watches, typically priced under $1,000. Known for using hardened steel (1200 HV) and reliable Miyota movements, the brand emphasizes quality, functional design, and understated style over luxury branding",
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
      "Founded in 2015, Farer is a British watch brand known for its bold, color-forward designs, high-quality Swiss mechanical movements, and vintage-inspired,, yet contemporary aesthetics. Based in London and, assembling in Switzerland, the independent brand focuses on GMTs, chronographs, and field watches, balancing adventurous design with durable, Swiss Made craftsmanship",
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
      "Zelos Watches is a highly regarded Singapore-based microbrand founded in 2014 by Elshan Tang, known for creating distinctive, high-value tool watches using unique materials like meteorite, bronze, and Damascus steel. Famous for original designs, robust specs, and excellent lume, Zelos frequently uses Kickstarter to launch, producing limited, enthusiast-focused models.",
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
      "Brew primarily refers to three distinct entities: Brew Watch Co., a New York-based microbrand crafting coffee-inspired timepieces; Brewbrand.ai, an AI tool specifically designed to generate LinkedIn content for professionals; and The Brew Company, a responsible artisan coffee roaster.",
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
      "Vaer is a California-based microbrand that bridges the gap between fast-fashion and unattainable luxury by offering rugged, American-assembled tool watches. Founded in 2016 in Venice Beach, the brand focuses on timeless aesthetics, extreme durability (100M+ water resistance), and accessible direct-to-consumer pricing.",
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
      "Founded in London in 2004, Christopher Ward is an Anglo-Swiss watchmaker famous for its accessible luxury model. By operating exclusively online, they bypass traditional retail markups to offer premium, high-spec timepieces at highly competitive prices.",
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
      "Founded in Los Angeles in 2017 by Wesley Kwok and Cullen Chen, Nodus is a highly respected independent watchmaker. The name derives from the Latin word for node. They are known for building robust, purpose-built tool watches, offering exceptional technical precision, and assembling and regulating all their watches in-house.",
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
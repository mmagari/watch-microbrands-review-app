import type { Brand } from "../types/brand";

export const brands: Brand[] = [
  {
    id: "baltic",
    name: "Baltic",
    country: "France",
    styles: ["diver", "dress"],
    priceRange: "$500-$1000",
    description: "Baltic is a French microbrand known for vintage inspired watches.",
    image: "https://placehold.co/300x200"
  },
  {
    id: "lorier",
    name: "Lorier",
    country: "USA",
    styles: ["field", "diver"],
    priceRange: "$400-$900",
    description: "Lorier creates vintage-inspired tool watches.",
    image: "https://placehold.co/300x200"
  }
];
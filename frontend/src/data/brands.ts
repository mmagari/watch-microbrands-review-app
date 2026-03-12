export type BrandStyle =
  | "diver"
  | "dress"
  | "field"
  | "casual"
  | "pilot"
  | "gmt"
  | "sport"
  | "chronograph";

export type PriceBucket =
  | "Under $500"
  | "$500-$1000"
  | "$1000-$1500"
  | "$1500-$2000";

export type Brand = {
  id: string;
  name: string;
  country: string;
  styles: BrandStyle[];
  startingPriceUsd: number;
  featuredModel: string;
  description: string;
  image: string;
};
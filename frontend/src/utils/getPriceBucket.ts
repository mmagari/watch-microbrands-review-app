import type { PriceBucket } from "../types/brand";

export const getPriceBucket = (startingPriceUsd: number): PriceBucket => {
  if (startingPriceUsd < 500) {
    return "Under $500";
  }

  if (startingPriceUsd < 1000) {
    return "$500-$1000";
  }

  if (startingPriceUsd < 1500) {
    return "$1000-$1500";
  }

  return "$1500-$2000";
};
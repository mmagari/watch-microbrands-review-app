import type { Brand } from "../types/brand";

type Props = {
  brand: Brand;
};

export const BrandCard = ({ brand }: Props) => {
  return (
    <div>
      <h3>{brand.name}</h3>
      <p>{brand.country}</p>
      <p>{brand.priceRange}</p>
    </div>
  );
};
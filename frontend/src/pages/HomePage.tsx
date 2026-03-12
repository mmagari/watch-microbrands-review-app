import { brands } from "../data/brands";

export const HomePage = () => {
  return (
    <div>
      <h1>Microbrand Watch Directory</h1>

      {brands.map((brand) => (
        <div key={brand.id}>
          <h2>{brand.name}</h2>
          <p>{brand.country}</p>
          <p>{brand.priceRange}</p>
        </div>
      ))}
    </div>
  );
};
/* eslint-disable react/prop-types */
const IMAGES = {
  "Double Cantal": "images/DoubleCantal.svg",
  "Super Crémeux": "images/SuperCremeux.svg",
  "Poulet Croquant": "images/PouletCroquant.svg",
};

export const ProductCard = ({ product, unavailable }) => (
  <div className="ProductCard">
    <img src={IMAGES[product.title]} alt={product.title} />
    {product.title}
    {unavailable && <span className="ProductUnavailable">Indisponible</span>}
  </div>
);

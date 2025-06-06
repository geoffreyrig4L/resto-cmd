/* eslint-disable react/prop-types */
const IMAGES = {
  "Double Cantal": "images/DoubleCantal.svg",
  "Super Crémeux": "images/SuperCremeux.svg",
  "Poulet Croquant": "images/PouletCroquant.svg",
};

export const ProductCard = ({ product }) => (
  <div className="ProductCard">
    <img
      width={100}
      height={100}
      src={IMAGES[product.title]}
      alt={product.title}
    />
    {product.title}
  </div>
);

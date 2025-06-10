import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../common/components/ProductCard";
import * as ProductList from "../../common/models";
import { addProductThunk } from "../cart/cartSlice";
import { getUnavailableProducts } from "../../app/selectors";
import { useEffect } from "react";
import { getUnavailableThunk } from "./menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const unavailableProducts = useSelector(getUnavailableProducts);

  useEffect(() => {
    dispatch(getUnavailableThunk());
  }, []);

  return (
    <div className="MenuContainer">
      <h1>Faites votre choix</h1>
      <div className="Menu">
        {Object.values(ProductList).map((product, index) => {
          const unavailable = unavailableProducts.includes(product.title);
          return (
            <button
              key={index}
              onClick={
                !unavailable
                  ? () => dispatch(addProductThunk({ product }))
                  : () => {}
              }
            >
              <ProductCard unavailable={unavailable} product={product} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

import { useDispatch } from "react-redux";
import { ProductCard } from "../../common/components/ProductCard";
import * as ProductList from "../../common/models";
import { addProduct } from "../cart/cartSlice";

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <div className="MenuContainer">
      <h1>Faites votre choix</h1>
      <div className="Menu">
        {Object.values(ProductList).map((product, index) => (
          <button key={index} onClick={() => dispatch(addProduct({ product }))}>
            <ProductCard key={product.name} product={product} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;

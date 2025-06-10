import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListWithQuantityProductPerName } from "../../app/selectors";
import { removeProduct, resetOrderThunk } from "./cartSlice";

const Cart = () => {
  const list = useSelector(getListWithQuantityProductPerName);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(resetOrderThunk());
  }, []);

  const filteredList = list.filter((product) => product.quantity !== 0);
  return (
    <div>
      {filteredList.length === 0 ? (
        <i>Sélectionner un produit</i>
      ) : (
        <div id="myCart">
          {filteredList.map((product, index) => (
            <div key={index} className="SelectedProduct">
              <div style={{ width: "400px" }}>
                <span className="titleProduct">{product.title}</span>
                <span style={{ opacity: 0.5 }}>
                  {" "}
                  - {(product.quantity * product.price).toFixed(2)}€
                </span>
              </div>
              <input
                type="number"
                style={{ width: "50px" }}
                max={product.quantity}
                value={product.quantity}
                onChange={(event) => {
                  event.preventDefault();

                  dispacth(
                    removeProduct({
                      product: {
                        ...product,
                        quantity: parseInt(event.currentTarget.value),
                      },
                    })
                  );
                }}
              ></input>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

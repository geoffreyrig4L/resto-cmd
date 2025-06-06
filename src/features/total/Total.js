import { useSelector } from "react-redux";
import { getProductList, getTotalOrder } from "../../app/selectors";

const Total = () => {
  const list = useSelector(getProductList);
  const totalOrderPrice = useSelector(getTotalOrder);

  return list.length !== 0 && <h2>Total : {totalOrderPrice} €</h2>;
};

export default Total;

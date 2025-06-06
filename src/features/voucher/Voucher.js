import { useDispatch, useSelector } from "react-redux";
import { isVoucherAvailable } from "../../app/selectors";
import { applyVoucher } from "../cart/cartSlice";

const Voucher = () => {
  const available = useSelector(isVoucherAvailable);
  const dispatch = useDispatch();
  return (
    available && (
      <button
        style={{
          margin: "20px 0px",
          width: "22%",
          right: "5%",
          top: "20px",
          position: "absolute",
        }}
        onClick={() => dispatch(applyVoucher({ price: 8.99 }))}
      >
        Appliquer une réduction
      </button>
    )
  );
};

export default Voucher;

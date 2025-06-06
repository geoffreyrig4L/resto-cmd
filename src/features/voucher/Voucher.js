import { useDispatch, useSelector } from "react-redux";
import { isVoucherAvailable } from "../../app/selectors";
import { applyVoucher } from "../../app/actions";

const Voucher = () => {
  const available = useSelector(isVoucherAvailable);
  const dispatch = useDispatch();
  return (
    available && (
      <button
        style={{ margin: "20px 0px" }}
        onClick={() => dispatch(applyVoucher({ price: 8.99 }))}
      >
        Appliquer une réduction
      </button>
    )
  );
};

export default Voucher;

import { useDispatch, useSelector } from "react-redux";
import { getOwner } from "../../app/selectors";
import { updateFirstName } from "../../app/actions";

const Owner = () => {
  const owner = useSelector(getOwner);
  const dispatch = useDispatch();

  return (
    <form id="form-owner">
      <label>Nom du propriétaire</label>
      <input style={{ width: "100%" }} type="text" name="firstName" />
      <button
        type="submit"
        style={{ width: "100%" }}
        onClick={(event) => {
          event.preventDefault();

          dispatch(
            updateFirstName({
              firstName: document.querySelector(
                "#form-owner input[name='firstName']"
              ).value,
            })
          );
        }}
      >
        Valider le propriétaire
      </button>
      {owner?.firstName ? (
        <i className="owner">
          Le propriétaire du restaurant est{" "}
          <span style={{ fontStyle: "normal", fontWeight: "bold" }}>
            {" "}
            {owner.firstName}
          </span>
        </i>
      ) : (
        <i className="owner">Veuillez renseigner le nom du propriétaire</i>
      )}
    </form>
  );
};

export default Owner;

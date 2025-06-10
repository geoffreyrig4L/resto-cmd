import { useGetFidelityQuery } from "../../services/api.service";

const Fidelity = () => {
  const { data: fidelity, isLoading } = useGetFidelityQuery();

  return (
    !isLoading && (
      <div className="FidelityPoints">
        {fidelity?.amount} points disponible{" "}
      </div>
    )
  );
};
export default Fidelity;

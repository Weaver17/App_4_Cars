import "./ModelsPage.css";
import useVehicleContext from "../../hooks/useVehicleContext";
import { makes } from "../../utils/constants";
import SearchCard from "../SearchCard/SearchCard";

function ModelsPage() {
  const { onMakeChange, handleModelOfMakeSubmit } = useVehicleContext();

  return (
    <section className="models">
      <SearchCard
        title="Browse Models By Make"
        list={makes}
        onChange={onMakeChange}
        handleSubmit={handleModelOfMakeSubmit}
      />
    </section>
  );
}

export default ModelsPage;

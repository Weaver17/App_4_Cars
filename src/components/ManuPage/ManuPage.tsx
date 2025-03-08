import { manufacturers } from "../../utils/constants";
import useVehicleContext from "../../hooks/useVehicleContext";
import SearchCard from "../SearchCard/SearchCard";
import "./ManuPage.css";

function ManuPage() {
  const { onManufacturerChange, handleManufacturerSubmit } =
    useVehicleContext();

  return (
    <div className="manufacturers">
      <SearchCard
        title="Browse Manufacturers"
        list={manufacturers}
        onChange={onManufacturerChange}
        handleSubmit={handleManufacturerSubmit}
      />
    </div>
  );
}

export default ManuPage;

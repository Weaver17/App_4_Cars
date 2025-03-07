import { useContext } from "react";
import { VehicleContext } from "../contexts/VehicleContext";

function useVehicleContext() {
  const context = useContext(VehicleContext);

  if (!context) {
    throw new Error("Provider not found");
  }

  return context;
}

export default useVehicleContext;

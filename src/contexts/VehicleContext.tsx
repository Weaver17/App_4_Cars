import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import React, { SetStateAction, createContext, useState } from "react";
import * as gameApi from "../utils/api";

type VehicleContextProviderProps = {
  children: React.ReactNode;
};

type TVehiclesContext = {
  onMakeChange: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  handleModelOfMakeSubmit: (e: { preventDefault: () => void }) => void;
  onManufacturerChange: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  handleManufacturerSubmit: (e: { preventDefault: () => void }) => void;
  onVariableValueChange: (e: {
    target: {
      value: SetStateAction<string>;
    };
  }) => void;
  handleOtherSearchSubmit: (e: { preventDefault: () => void }) => void;
  variableValueArray: [];
  setVariableValueArray: React.Dispatch<React.SetStateAction<[]>>;
};

export const VehicleContext = createContext<TVehiclesContext | null>(null);

function VehicleContextProvider({ children }: VehicleContextProviderProps) {
  const { values, setValues } = useForm({
    make: "Select Make",
    manufacturer: "Select Manufacturer",
    variableValue: "",
  });

  const navigate = useNavigate();

  // MODELS PAGE
  const onMakeChange = (e: { target: { value: SetStateAction<string> } }) => {
    console.log(e.target.value);
    setValues({ make: e.target.value as string });
  };

  const handleModelOfMakeSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (values.make) {
      gameApi
        .getModelsOfMake(values.make.toLowerCase())
        .then((data) => {
          localStorage.setItem("make", data.SearchCriteria);
          localStorage.setItem("models", JSON.stringify(data.Results));
        })
        .catch(console.error)
        .finally(() => {
          navigate(`/results/make/${values.make?.toLowerCase()}`);
        });
    } else {
      console.error("Unknown Make");
    }
  };

  // MANU PAGE
  const onManufacturerChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValues({ manufacturer: e.target.value as string });
  };

  const handleManufacturerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (values.manufacturer) {
      gameApi
        .getMakesForManufacturer(values.manufacturer.toLowerCase())
        .then((data) => {
          localStorage.setItem("make names", JSON.stringify(data.Results));
        })
        .catch(console.error)
        .finally(() => {
          navigate(
            `/results/maufacturer/${values.manufacturer?.toLowerCase()}`
          );
        });
    } else {
      console.error("Unknown Manufacturer");
    }
  };

  // PART DETAILS PAGE
  const [variableValueArray, setVariableValueArray] = useState<[]>([]);

  const onVariableValueChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValues({ variableValue: e.target.value as string });
  };

  const handleOtherSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (values.variableValue) {
      gameApi
        .getOtherSearch(values.variableValue.toLowerCase())
        .then((data) => {
          localStorage.setItem("variable value", JSON.stringify(data.Results));
        })
        .catch(console.error)
        .finally(() => {
          navigate(`/results/other/${values.variableValue?.toLowerCase()}`);
        });
    } else {
      console.error("Unknown search value");
    }
  };

  return (
    <VehicleContext.Provider
      value={{
        onMakeChange,
        handleModelOfMakeSubmit,
        onManufacturerChange,
        handleManufacturerSubmit,
        onVariableValueChange,
        handleOtherSearchSubmit,
        variableValueArray,
        setVariableValueArray,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}

export default VehicleContextProvider;

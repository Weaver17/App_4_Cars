import { useEffect } from "react";
import useVehicleContext from "../../hooks/useVehicleContext";
import SearchCard from "../SearchCard/SearchCard";
import { getSearchVariables } from "../../utils/api";

import "./PartsPage.css";

type searchVariableType = {
  DataType: string;
  Description: string;
  GroupName: string;
  ID: number;
  Name: string;
};

function PartsPage() {
  const {
    onVariableValueChange,
    handleOtherSearchSubmit,
    variableValueArray,
    setVariableValueArray,
  } = useVehicleContext();

  useEffect(() => {
    getSearchVariables()
      .then((data) => {
        setVariableValueArray(
          data.Results.map((result: searchVariableType) => {
            return result.Name;
          })
        );
      })
      .catch(console.error);
  }, []);

  return (
    <section className="parts">
      <SearchCard
        title="Search for Part Details"
        list={variableValueArray}
        onChange={onVariableValueChange}
        handleSubmit={handleOtherSearchSubmit}
      />
    </section>
  );
}

export default PartsPage;

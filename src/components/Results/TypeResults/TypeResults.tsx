import { useEffect, useState } from "react";
import TypeCard from "../Cards/TypeCard/TypeCard";

import "./TypeResults.css";

type TypeResultsProps = {
  MakeName: string;
  VehicleTypeName: string;
};

function TypeResults() {
  const [results, setResults] = useState<TypeResultsProps[]>([]);

  const typeName = localStorage.getItem("vehicleType");

  useEffect(() => {
    const makes = localStorage.getItem("makes for type");
    setResults(makes ? JSON.parse(makes) : []);
  }, []);

  return (
    <section className="type-results">
      <h2 className="type-results__type">{typeName?.slice(1, -1)}</h2>
      <ul className="type-results__list">
        {results.map((type, i) => (
          <TypeCard type={type.VehicleTypeName} make={type.MakeName} key={i} />
        ))}
      </ul>
    </section>
  );
}

export default TypeResults;

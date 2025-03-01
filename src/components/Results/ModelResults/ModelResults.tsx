import { useEffect, useState } from "react";
import ModelCard from "../ModelCard/ModelCard";

import "./ModelResults.css";

type ModelResultsProps = {
  Make_Name: string;
  Model_Name: string;
};

function ModelResults() {
  const [results, setResults] = useState<ModelResultsProps[]>([]);

  useEffect(() => {
    const models = localStorage.getItem("models");
    setResults(models ? JSON.parse(models) : []);
  }, []);

  return (
    <section className="model-results">
      <ul className="model-results__list">
        {results.map((model, i) => (
          <ModelCard key={i} make={model.Make_Name} model={model.Model_Name} />
        ))}
      </ul>
    </section>
  );
}

export default ModelResults;

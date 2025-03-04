import { useEffect, useState } from "react";

import "./VariablesResults.css";
import VariableCard from "../Cards/VariableCard/VariableCard";

type VariablesResultsProps = {
  ElementName: string;
  Name: string;
};

function VariablesResults() {
  const [results, setResults] = useState<VariablesResultsProps[]>([]);

  useEffect(() => {
    const variables = localStorage.getItem("variable value");
    setResults(variables ? JSON.parse(variables) : []);
  }, []);

  return (
    <section className="variables-results">
      <ul className="variables-results__list">
        {results.map((variable, i) => (
          <VariableCard
            key={i}
            element={variable.ElementName}
            name={variable.Name}
          />
        ))}
      </ul>
    </section>
  );
}

export default VariablesResults;

import { useEffect, useState } from "react";

import "./VariablesResults.css";
import VariableCard from "../Cards/VariableCard/VariableCard";

type VariablesResultsProps = {
  Description: string;
  GroupName: string;
  Name: string;
};

function VariablesResults() {
  const [results, setResults] = useState<VariablesResultsProps[]>([]);

  useEffect(() => {
    const variables = localStorage.getItem("Variables");
    setResults(variables ? JSON.parse(variables) : []);
  }, []);

  return (
    <section className="variables-results">
      <ul className="variables-results__list">
        {results.map((variable, i) => (
          <VariableCard
            key={i}
            description={variable.Description}
            group={variable.GroupName}
            name={variable.Name}
          />
        ))}
      </ul>
    </section>
  );
}

export default VariablesResults;

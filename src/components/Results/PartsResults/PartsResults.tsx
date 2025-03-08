import { useEffect, useState } from "react";
import { getSearchVariables } from "../../../utils/api";
import VariableCard from "../Cards/VariableCard/VariableCard";

import "./PartsResults.css";

type VariableValueProps = {
  DataType: string;
  Description: string;
  GroupName: string;
  ID: number;
  Name: string;
};

type VariablesResultsProps = {
  ElementName: string;
  Name: string;
};

function PartsResults() {
  const [results, setResults] = useState<VariablesResultsProps[]>([]);
  const [description, setDescription] = useState("");

  const filteredDescription = description.replace(/<\/?(p|ul|li)>/g, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the search variables
        const res = await getSearchVariables();

        // Retrieve and parse the stored data from localStorage
        const variables = localStorage.getItem("variable value");
        const parsedData = variables ? JSON.parse(variables) : [];
        setResults(parsedData);

        if (!Array.isArray(parsedData)) {
          console.error("Invalid data in localStorage");
          return;
        }

        // Find the matching result
        const matchedResult = res.Results.find((result: VariableValueProps) =>
          parsedData.some(
            (item: { ElementName: string }) => item.ElementName === result.Name
          )
        );

        // If a match is found, update the state with the Description
        if (matchedResult) {
          setDescription(matchedResult.Description);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="parts-results">
      <h2 className="parts-results__title">Part Details</h2>
      <p className="parts-results__desc">
        {filteredDescription ? `${filteredDescription}` : "No Part Found"}
      </p>
      <ul className="parts-results__list">
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

export default PartsResults;

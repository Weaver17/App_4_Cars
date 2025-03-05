import { useEffect, useState } from "react";
import "./ManuResults.css";
import ManuCard from "../Cards/ManuCard/ManuCard";

type ManuResultsProps = {
  Make_Name: string;
  Mfr_Name: string;
};

function ManuResults() {
  const [results, setResults] = useState<ManuResultsProps[]>([]);

  useEffect(() => {
    const makesforManus = localStorage.getItem("make names");
    setResults(makesforManus ? JSON.parse(makesforManus) : []);
  }, []);

  return (
    <section className="manu-results">
      <ul className="manu-results__list">
        {results.map((manu, i) => (
          <ManuCard key={i} name={manu.Make_Name} mfr={manu.Mfr_Name} />
        ))}
      </ul>
    </section>
  );
}

export default ManuResults;

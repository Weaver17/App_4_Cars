import { useEffect, useState } from "react";
import "./MakesDetails.css";

function MakesDetails() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const mDNames = localStorage.getItem("makes-details names");

    setNames(mDNames ? JSON.parse(mDNames) : []);
  }, []);

  return (
    <div>
      <h2>Makes Details</h2>
      <ul>
        {names.map((n, i) => (
          <li key={i}> {n}</li>
        ))}
      </ul>
    </div>
  );
}

export default MakesDetails;

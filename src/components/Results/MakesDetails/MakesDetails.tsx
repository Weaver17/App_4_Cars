import { useEffect, useState } from "react";
import "./MakesDetails.css";

function MakesDetails() {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mDNames = localStorage.getItem("makes-details names");

    if (mDNames) {
      setNames(JSON.parse(mDNames));
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <h2>Makes Details</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {names.map((n, i) => (
            <li key={i}> {n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MakesDetails;

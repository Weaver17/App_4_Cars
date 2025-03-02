import { Link } from "react-router-dom";
import "./TypeCard.css";

type TypeCardProps = {
  make: string;
  type: string;
};

function TypeCard({ make, type }: TypeCardProps) {
  return (
    <li className="type-card">
      <Link
        className="type-card__link"
        target="_blank"
        to={`https://www.google.com/search?q=${make}`}
      >
        <h3 className="type-card__make">{make}</h3>
      </Link>{" "}
      <span className="type-card__type">{type}</span>
    </li>
  );
}

export default TypeCard;

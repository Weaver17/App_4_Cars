import { Link } from "react-router-dom";
import "./ManuCard.css";

type ManuCardProps = {
  name: string;
  mfr: string;
};

function ManuCard({ name, mfr }: ManuCardProps) {
  return (
    <li className="manu-card">
      <Link
        className="manu-card__link"
        target="_blank"
        to={`https://www.google.com/search?q=${mfr}`}
      >
        <h3 className="manu-card__mfr">{mfr}</h3>
      </Link>{" "}
      <span className="manu-card__name">{name}</span>
    </li>
  );
}

export default ManuCard;

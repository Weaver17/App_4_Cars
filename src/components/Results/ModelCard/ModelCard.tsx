import { Link } from "react-router-dom";

import "./ModelCard.css";

type ModelCardProps = {
  make: string;
  model: string;
};

function ModelCard({ make, model }: ModelCardProps) {
  return (
    <li className="model-card">
      <h3 className="model-card__make">{make}</h3>
      <Link
        className="model-card__link"
        target="_blank"
        to={`https://www.google.com/search?q=${make}+${model}`}
      >
        <p className="model-card__model">{model}</p>
      </Link>
    </li>
  );
}

export default ModelCard;

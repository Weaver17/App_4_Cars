import "./MakesCard.css";

type MakesCardProps = {
  make: string;
  id: number;
};

function MakesCard({ make, id }: MakesCardProps) {
  return (
    <li className="makes-card">
      <h3 className="makes-card__make">{make}</h3>
      <span className="makes-card__id">{id}</span>
    </li>
  );
}

export default MakesCard;

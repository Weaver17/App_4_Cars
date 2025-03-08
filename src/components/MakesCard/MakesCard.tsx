import "./MakesCard.css";
import useVehicleContext from "../../hooks/useVehicleContext";

type MakesCardProps = {
  make: string;
  id: number;
};

function MakesCard({ make, id }: MakesCardProps) {
  const { handleTitleClick } = useVehicleContext();

  return (
    <li className="makes-card">
      <h3 className="makes-card__make" onClick={handleTitleClick}>
        {make}
      </h3>
      <span className="makes-card__id">{id}</span>
    </li>
  );
}

export default MakesCard;

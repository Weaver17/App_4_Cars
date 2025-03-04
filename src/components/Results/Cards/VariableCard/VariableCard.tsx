import "./VariableCard.css";

type VariableCardProps = {
  element: string;
  name: string;
};

function VariableCard({ element, name }: VariableCardProps) {
  //   const newDesc = description.replace(/<\/?(p|ul|li)>/g, "");

  return (
    <li className="variable-card">
      <h3 className="variable-card__name">{name}</h3>
      <p className="variable-card__element">{element}</p>
    </li>
  );
}

export default VariableCard;

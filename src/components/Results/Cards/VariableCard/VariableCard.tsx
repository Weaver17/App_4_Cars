import "./VariableCard.css";

type VariableCardProps = {
  description: string;
  group: string;
  name: string;
};

function VariableCard({ description, group, name }: VariableCardProps) {
  const newDesc = description.replace(/<\/?(p|ul|li)>/g, "");

  return (
    <li className="variable-card">
      <div className="variable-card__name-group">
        <h3 className="variable-card__name">
          What you can search: &nbsp;&nbsp;&nbsp;<b>{name}</b>
        </h3>
        <span className="variable-card__group">{group}</span>
      </div>
      <p className="variable-card__desc">Description- {newDesc}</p>
    </li>
  );
}

export default VariableCard;

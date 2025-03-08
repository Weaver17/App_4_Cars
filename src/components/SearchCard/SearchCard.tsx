import FormComponent from "../FormComponent/FormComponent";

import "./SearchCard.css";

type SearchCardProps = {
  title: string;
  list: string[];
  onChange: (e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  handleSubmit: (e: { preventDefault: () => void }) => void;
};

function SearchCard({ title, list, onChange, handleSubmit }: SearchCardProps) {
  return (
    <div className="search-card__box">
      <h2 className="search-card__title">{title}</h2>
      <div className="search-card__form">
        <FormComponent onSubmit={handleSubmit}>
          <label className="search-card__label">
            <select
              className="search-card__select"
              onChange={onChange}
              name="select"
              id="select"
            >
              {list.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default SearchCard;

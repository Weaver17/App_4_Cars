import FormComponent from "../FormComponent/FormComponent";

import "./SearchComponent.css";

function SearchComponent() {
  return (
    <div className="search-box">
      <h2 className="search-box__title">Search Make and Model</h2>
      <div className="search-box__form">
        <FormComponent name="make-model">
          <label className="search-box__label">
            Make
            <input className="search-box__input" type="text" />
          </label>
          <label className="search-box__label">
            Model
            <input className="search-box__input" type="text" />
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default SearchComponent;

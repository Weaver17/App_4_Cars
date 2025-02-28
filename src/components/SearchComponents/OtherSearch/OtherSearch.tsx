import FormComponent from "../../FormComponent/FormComponent";

import "./OtherSearch.css";

function OtherSearch() {
  return (
    <div className="other__search-box">
      <h2 className="other__search-box-title">Search Other Vehicle Details</h2>
      <div className="other__search-box-form">
        <FormComponent name="make-model">
          <label className="other__search-box-label">
            <input className="other__search-box-input" type="text" />
            <span className="other__search-box-link-text">
              What can I search?
            </span>
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default OtherSearch;

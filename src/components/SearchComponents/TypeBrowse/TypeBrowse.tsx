import FormComponent from "../../FormComponent/FormComponent";
import { vehicleType } from "../../../utils/constants";

import "./TypeBrowse.css";

function TypeBrowse() {
  return (
    <div className="type__search-box">
      <h2 className="type__search-box-title">Browse Makes by Vehicle Type</h2>
      <div className="type__search-box-form">
        <FormComponent name="type">
          <label className="type__search-box-label">
            <select className="type__search-box-select" name="type" id="type">
              {vehicleType.map((type, i) => (
                <option className="type__search-box-option" key={i} value="">
                  {type}
                </option>
              ))}
            </select>
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default TypeBrowse;

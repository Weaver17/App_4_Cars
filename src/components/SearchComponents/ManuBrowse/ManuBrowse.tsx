import { manufacturers } from "../../../utils/constants";
import FormComponent from "../../FormComponent/FormComponent";
import "./ManuBrowse.css";

function ManuBrowse() {
  return (
    <div className="manufacturer__search-box">
      <h2 className="manufacturer__search-box-title">Browse Manufacturers</h2>
      <div className="manufacturer__search-box-form">
        <FormComponent name="make-model">
          <label className="manufacturer__search-box-label">
            <select
              className="manufacturer__search-box-select"
              name="type"
              id="type"
            >
              {manufacturers.map((m, i) => (
                <option
                  className="manufacturer__search-box-option"
                  key={i}
                  value=""
                >
                  {m}
                </option>
              ))}
            </select>
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default ManuBrowse;

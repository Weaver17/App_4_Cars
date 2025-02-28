import { useForm } from "../../../hooks/useForm";
import { makes } from "../../../utils/constants";
import FormComponent from "../../FormComponent/FormComponent";

import "./MnMSearch.css";

function MnMSearch() {
  const { values, setValues, handleChange } = useForm({
    make: "",
    model: "",
  });

  const handleMakeModelSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(values);
    setValues({ make: "", model: "" });
  };

  return (
    <div className="mnm__search-box">
      <h2 className="mnm__search-box-title">Browse Models by Make</h2>
      <div className="mnm__search-box-form">
        <FormComponent onSubmit={handleMakeModelSubmit} name="make-model">
          <label className="mnm__search-box-label">
            <select
              className="mnm__search-box-select"
              name="make-model"
              id="make-model"
            >
              {makes.map((make, i) => (
                <option className="mnm__search-box-option" key={i} value="">
                  {make}
                </option>
              ))}
            </select>
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default MnMSearch;

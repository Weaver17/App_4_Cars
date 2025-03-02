import { SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { getModelsOfMake } from "../../../utils/api";
import { useForm } from "../../../hooks/useForm";
import { makes } from "../../../utils/constants";
import FormComponent from "../../FormComponent/FormComponent";

import "./MnMSearch.css";

function MnMSearch() {
  const { values, setValues } = useForm({
    make: "Select Make",
  });

  const navigate = useNavigate();

  const onMakeChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValues({ make: e.target.value as string });
  };

  const handleModelOfMakeSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (values.make) {
      getModelsOfMake(values.make.toLowerCase())
        .then((data) => {
          localStorage.setItem("make", data.SearchCriteria);
          localStorage.setItem("models", JSON.stringify(data.Results));
        })
        .catch(console.error)
        .finally(() => {
          navigate(`/results/make/${values.make?.toLowerCase()}`);
        });
    } else {
      console.error("Unknown Make");
    }
  };

  return (
    <div className="mnm__search-box">
      <h2 className="mnm__search-box-title">Browse Models by Make</h2>
      <div className="mnm__search-box-form">
        <FormComponent onSubmit={handleModelOfMakeSubmit} name="make-model">
          <label className="mnm__search-box-label">
            <select
              onChange={onMakeChange}
              className="mnm__search-box-select"
              name="make-model"
              id="make-model"
            >
              {makes.map((make, i) => (
                <option className="mnm__search-box-option" key={i} value={make}>
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

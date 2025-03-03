import { data, useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import FormComponent from "../../FormComponent/FormComponent";

import "./OtherSearch.css";
import { getSearchVariables } from "../../../utils/api";

function OtherSearch() {
  // const { values, setValues, handleChange } = useForm({
  //   make: "Select Make",
  // });

  const navigate = useNavigate();

  // const handleOtherSearchSubmit = (e: { preventDefault: () => void }) => {
  //   // e.preventDefault();
  //   // if (values.make) {
  //   //   getModelsOfMake(values.make.toLowerCase())
  //   //     .then((data) => {
  //   //       localStorage.setItem("make", data.SearchCriteria);
  //   //       localStorage.setItem("models", JSON.stringify(data.Results));
  //   //     })
  //   //     .catch(console.error)
  //   //     .finally(() => {
  //   //       navigate(`/results/make/${values.make?.toLowerCase()}`);
  //   //     });
  //   // } else {
  //   //   console.error("Unknown Make");
  //   // }
  // };

  const handleVariablesSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    getSearchVariables()
      .then((data) => {
        console.log(data);
        localStorage.setItem("Variables", JSON.stringify(data.Results));
      })
      .catch(console.error)
      .finally(() => {
        navigate("/results/variables");
      });
  };

  return (
    <div className="other__search-box">
      <h2 className="other__search-box-title">Search Other Vehicle Details</h2>
      <div className="other__search-box-form">
        <FormComponent name="other">
          <label className="other__search-box-label">
            <input className="other__search-box-input" type="text" />
            <span
              onClick={handleVariablesSearch}
              className="other__search-box-link-text"
            >
              What can I search?
            </span>
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default OtherSearch;

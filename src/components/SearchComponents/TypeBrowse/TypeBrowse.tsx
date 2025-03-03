import FormComponent from "../../FormComponent/FormComponent";
import { vehicleType } from "../../../utils/constants";

import "./TypeBrowse.css";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { SetStateAction } from "react";
import { getMakesForType } from "../../../utils/api";

function TypeBrowse() {
  const { values, setValues } = useForm({
    vehicleType: "Select Vehicle Type",
  });

  const navigate = useNavigate();

  const onVehicleTypeChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValues({ vehicleType: e.target.value as string });
  };

  const handleMakesForTypeSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (values.vehicleType) {
      getMakesForType(values.vehicleType.toLowerCase())
        .then((data) => {
          localStorage.setItem(
            "vehicleType",
            JSON.stringify(data.SearchCriteria)
          );
          localStorage.setItem("makes for type", JSON.stringify(data.Results));
        })
        .catch(console.error)
        .finally(() => {
          navigate(`/results/type/${values.vehicleType?.toLowerCase()}`);
        });
    } else {
      console.error("Type not found");
    }
  };

  return (
    <div className="type__search-box">
      <h2 className="type__search-box-title">Browse Makes by Vehicle Type</h2>
      <div className="type__search-box-form">
        <FormComponent onSubmit={handleMakesForTypeSubmit} name="type">
          <label className="type__search-box-label">
            <select
              onChange={onVehicleTypeChange}
              className="type__search-box-select"
              name="type"
              id="type"
            >
              {vehicleType.map((type, i) => (
                <option
                  className="type__search-box-option"
                  key={i}
                  value={type}
                >
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

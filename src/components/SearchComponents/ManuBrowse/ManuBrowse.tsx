import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { manufacturers } from "../../../utils/constants";
import FormComponent from "../../FormComponent/FormComponent";
import "./ManuBrowse.css";
import { SetStateAction } from "react";
import { getMakesForManufacturer } from "../../../utils/api";

function ManuBrowse() {
  const { values, setValues } = useForm({
    manufacturer: "Select Manufacturer",
  });

  const navigate = useNavigate();

  const onManufacturerChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValues({ manufacturer: e.target.value as string });
  };

  const handleManufacturerSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (values.manufacturer) {
      getMakesForManufacturer(values.manufacturer.toLowerCase())
        .then((data) => {
          localStorage.setItem("make names", JSON.stringify(data.Results));
        })
        .catch(console.error)
        .finally(() => {
          navigate(
            `/results/maufacturer/${values.manufacturer?.toLowerCase()}`
          );
        });
    } else {
      console.error("Unknown Manufacturer");
    }
  };

  return (
    <div className="manufacturer__search-box">
      <h2 className="manufacturer__search-box-title">Browse Manufacturers</h2>
      <div className="manufacturer__search-box-form">
        <FormComponent onSubmit={handleManufacturerSubmit} name="manufacturer">
          <label className="manufacturer__search-box-label">
            <select
              onChange={onManufacturerChange}
              className="manufacturer__search-box-select"
              name="type"
              id="type"
            >
              {manufacturers.map((manufacturer, i) => (
                <option
                  className="manufacturer__search-box-option"
                  key={i}
                  value={manufacturer}
                >
                  {manufacturer}
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

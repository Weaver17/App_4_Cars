import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import FormComponent from "../../FormComponent/FormComponent";

import "./OtherSearch.css";
import { getOtherSearch, getSearchVariables } from "../../../utils/api";
import { SetStateAction, useEffect, useState } from "react";

type searchVariableType = {
  DataType: string;
  Description: string;
  GroupName: string;
  ID: number;
  Name: string;
};

function OtherSearch() {
  const { values, setValues } = useForm({
    variableValue: "",
  });

  const [variableValueArray, setVariableValueArray] = useState<[]>([]);

  const navigate = useNavigate();

  const onVariableValueChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setValues({ variableValue: e.target.value as string });
  };

  const handleOtherSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (values.variableValue) {
      getOtherSearch(values.variableValue.toLowerCase())
        .then((data) => {
          localStorage.setItem("variable value", JSON.stringify(data.Results));
        })
        .catch(console.error)
        .finally(() => {
          navigate(`/results/other/${values.variableValue?.toLowerCase()}`);
        });
    } else {
      console.error("Unknown search value");
    }
  };

  useEffect(() => {
    getSearchVariables()
      .then((data) => {
        setVariableValueArray(
          data.Results.map((result: searchVariableType) => {
            return result.Name;
          })
        );
      })
      .catch(console.error);
  }, []);

  return (
    <div className="other__search-box">
      <h2 className="other__search-box-title">Search Other Vehicle Details</h2>
      <div className="other__search-box-form">
        <FormComponent onSubmit={handleOtherSearchSubmit} name="other">
          <label className="other__search-box-label">
            <select
              onChange={onVariableValueChange}
              className="other__search-box-select"
              name="type"
              id="type"
            >
              {variableValueArray.map((value, i) => (
                <option
                  className="manufacturer__search-box-option"
                  key={i}
                  value={value}
                >
                  {value}
                </option>
              ))}
            </select>
          </label>
        </FormComponent>
      </div>
    </div>
  );
}

export default OtherSearch;

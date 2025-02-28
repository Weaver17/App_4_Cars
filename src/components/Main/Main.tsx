import FormComponent from "../FormComponent/FormComponent";

import { manufacturers, vehicleType } from "../../utils/constants";

import "./Main.css";

function Main() {
  return (
    <section className="main">
      <div className="main__search-box">
        <div className="main__search-box-wrapper">
          <h2 className="main__search-box-title">Search Make and Model</h2>
          <div className="main__search-box-form">
            <FormComponent name="make-model">
              <label className="main__search-box-label">
                Make
                <input className="main__search-box-input" type="text" />
              </label>
              <label className="main__search-box-label">
                Model
                <input className="main__search-box-input" type="text" />
              </label>
            </FormComponent>
          </div>
        </div>
      </div>
      <div className="main__search-box">
        <div className="main__search-box-wrapper">
          <h2 className="main__search-box-title">Browse by Vehicle Type</h2>
          <div className="main__search-box-form">
            <FormComponent name="make-model">
              <label className="main__search-box-label">
                <select
                  className="main__search-box-select"
                  name="type"
                  id="type"
                >
                  {vehicleType.map((type, i) => (
                    <option
                      className="main__search-box-option"
                      key={i}
                      value=""
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </FormComponent>
          </div>
        </div>
      </div>
      <div className="main__search-box">
        <div className="main__search-box-wrapper">
          <h2 className="main__search-box-title">Browse Manufacturers</h2>
          <div className="main__search-box-form">
            <FormComponent name="make-model">
              <label className="main__search-box-label">
                <select
                  className="main__search-box-select"
                  name="type"
                  id="type"
                >
                  {manufacturers.map((m, i) => (
                    <option
                      className="main__search-box-option"
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
      </div>
      <div className="main__search-box">
        <div className="main__search-box-wrapper">
          <h2 className="main__search-box-title">
            Search Other Vehicle Details
          </h2>
          <div className="main__search-box-form">
            <FormComponent name="make-model">
              <label className="main__search-box-label main__search-box-label_other">
                <input
                  className="main__search-box-input main__search-box-input_other"
                  type="text"
                />
                <span className="main__search-box-link-text">
                  What can I search?
                </span>
              </label>
            </FormComponent>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;

import "./ModelsPage.css";
import MnMSearch from "../SearchComponents/MnMSearch/MnMSearch";
import FormComponent from "../FormComponent/FormComponent";
import useVehicleContext from "../../hooks/useVehicleContext";
import { makes } from "../../utils/constants";

function ModelsPage() {
  const { onMakeChange, handleModelOfMakeSubmit } = useVehicleContext();

  return (
    <section className="models">
      {/* <MnMSearch /> */}
      <div className="box">
        <h2 className="title">title</h2>
        <div className="form">
          <FormComponent onSubmit={handleModelOfMakeSubmit} name="models">
            <label className="label">
              <select className="select" onChange={onMakeChange} name="" id="">
                {makes.map((make, i) => (
                  <option key={i} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </label>
          </FormComponent>
        </div>
      </div>
    </section>
  );
}

export default ModelsPage;

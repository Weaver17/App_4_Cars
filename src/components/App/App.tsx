import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../HeaderComponents/Header/Header";
import "./App.css";
import Makes from "../MakesPage/MakesPage";
import Parts from "../Parts/Parts";
import ModelResults from "../Results/ModelResults/ModelResults";
import TypeResults from "../Results/TypeResults/TypeResults";
import VariablesResults from "../Results/VariablesResults/VariablesResults";
import ManuResults from "../Results/ManuResults/ManuResults";
import ModelsPage from "../ModelsPage/ModelsPage";
import VehicleContextProvider from "../../contexts/VehicleContext";

function App() {
  return (
    <div className="page">
      <Header />
      <VehicleContextProvider>
        <main className="page__content">
          <Routes>
            <Route path="/" element={<ModelsPage />} />
            <Route path="/makes" element={<Makes />} />
            <Route path="/manufacturers" element={<Parts />} />
            <Route path="/part-details" element={<Parts />} />
            <Route path="/results/make/:make" element={<ModelResults />} />
            <Route
              path="/results/type/:vehicletype"
              element={<TypeResults />}
            />
            <Route
              path="/results/other/:variable"
              element={<VariablesResults />}
            />
            <Route
              path="/results/maufacturer/:manufacturer"
              element={<ManuResults />}
            />
          </Routes>
        </main>
      </VehicleContextProvider>
      <Footer />
    </div>
  );
}

export default App;

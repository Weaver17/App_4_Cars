import { Routes, Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../HeaderComponents/Header/Header";
import Main from "../Main/Main";
import "./App.css";
import Makes from "../Makes/Makes";
import Parts from "../Parts/Parts";
import ModelResults from "../Results/ModelResults/ModelResults";
import TypeResults from "../Results/TypeResults/TypeResults";
import VariablesResults from "../Results/VariablesResults/VariablesResults";
import ManuResults from "../Results/ManuResults/ManuResults";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="page__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/makes" element={<Makes />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/results/make/:make" element={<ModelResults />} />
          <Route path="/results/type/:vehicletype" element={<TypeResults />} />
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
      <Footer />
    </div>
  );
}

export default App;

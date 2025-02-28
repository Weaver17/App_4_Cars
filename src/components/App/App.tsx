import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="page__content">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

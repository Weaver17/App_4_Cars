import "./Main.css";
import MnMSearch from "../SearchComponents/MnMSearch/MnMSearch";
import TypeBrowse from "../SearchComponents/TypeBrowse/TypeBrowse";
import ManuBrowse from "../SearchComponents/ManuBrowse/ManuBrowse";
import OtherSearch from "../SearchComponents/OtherSearch/OtherSearch";

function Main() {
  return (
    <section className="main">
      <div className="main__search-box">
        <MnMSearch />
      </div>
      <div className="main__search-box">
        <TypeBrowse />
      </div>
      <div className="main__search-box">
        <ManuBrowse />
      </div>
      <div className="main__search-box">
        <OtherSearch />
      </div>
    </section>
  );
}

export default Main;

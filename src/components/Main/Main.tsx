import SearchComponent from "../SearchComponent/SearchComponent";

import "./Main.css";

function Main() {
  return (
    <section className="main">
      <div className="main__search-box">
        <SearchComponent />
      </div>
      <div className="main__search-box">
        <SearchComponent />
      </div>
      <div className="main__search-box">
        <SearchComponent />
      </div>
      <div className="main__search-box">
        <SearchComponent />
      </div>
    </section>
  );
}

export default Main;

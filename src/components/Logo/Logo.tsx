import logo from "../../assets/logo.svg";

import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="Logo" />
      <h1 className="logo__title">App 4 Cars</h1>
    </div>
  );
}

export default Logo;

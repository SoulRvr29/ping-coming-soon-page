import logo from "./images/logo.svg";
const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <h1>
        We are launching <span className="soon">soon!</span>
      </h1>
      <p>Subscribe and get notified</p>
    </header>
  );
};

export default Header;

import facebook from "./assets/facebook-f.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="social">
          <a href="#">
            <div className="icon">
              <img src={facebook} alt="facebook" />
            </div>
          </a>
          <a href="#">
            <div className="icon">
              <img src={twitter} alt="twitter" />
            </div>
          </a>
          <a href="#">
            <div className="icon">
              <img src={instagram} alt="instagram" />
            </div>
          </a>
        </div>
        <p className="copyright">
          {" "}
          &copy; Copyright Ping. All rights reserved.
        </p>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/SoulRvr29">
            Paweł Chudecki
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Footer;

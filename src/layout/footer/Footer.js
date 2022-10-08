import visa from "../../assets/footerLogos/visalogo.png";
import master from "../../assets/footerLogos/mastercard.png";
import { Link } from "react-router-dom";
import FbICon from "../../assets/footerLogos/FbIcon";
import TwitterIcon from "../../assets/footerLogos/TwitterIcon";
import InstaIcon from "../../assets/footerLogos/InstaIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__logo">Istore</div>
        <p className="footer__info-text">
          This is my e-commerce project that I have worked very hard on and I
          hope it has impressed you at least a little.
        </p>
        <p>&copy; Copyright By Davit Malutashvili</p>
        <div className="footer__payment">
          <img src={visa} alt="visa" />
          <img src={master} alt="master" />
        </div>
      </div>

      <div className="footer__quick">
        <p className="footer__heading">Quick Links</p>
        <ul className="footer__linkList">
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              Home
            </Link>
          </li>
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              Shop
            </Link>
          </li>
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              Contact
            </Link>
          </li>
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              About us
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__account">
        <p className="footer__heading">Account</p>
        <ul className="footer__linkList">
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              My Account
            </Link>
          </li>
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              Order Tracking
            </Link>
          </li>
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              Checkout
            </Link>
          </li>
          <li className="footer__linkItem">
            <Link className="footer__link" to="/">
              WishList
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__newsletter">
        <p className="footer__heading">Newsletter</p>
        <div className="footer__input-box">
          <input className="footer__input" placeholder="Email" />
          <button className="footer__subscribe">Subscribe</button>
        </div>
        <div className="footer__social">
          <Link to="/">
            <FbICon />
          </Link>
          <Link to="/">
            <TwitterIcon />
          </Link>
          <Link to="/">
            <InstaIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

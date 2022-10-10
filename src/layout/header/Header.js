import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/headerIcons/SearchIcon";
import CartIcon from "../../assets/headerIcons/CartIcon";
import { useSelector } from "react-redux";
import { useState } from "react";
import Popup from "../../UI/popup/Popup";

const Header = () => {
  const productsCount = useSelector((state) => state.cart.totalQuantity);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const modalCloseHandler = () => {
    setPopupVisible(false);
  };

  const navigateToCartHadler = () => {
    if (productsCount > 0) {
      navigate("/cart");
    } else {
      setPopupVisible(true);
    }
  };

  return (
    <header className="header">
      {popupVisible && <Popup onClose={modalCloseHandler} />}
      <div className="header__logo">Istore</div>

      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active__link navigation__link" : "navigation__link"
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active__link navigation__link" : "navigation__link"
              }
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active__link navigation__link" : "navigation__link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active__link navigation__link" : "navigation__link"
              }
              to="/about"
            >
              About us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header__actions">
        <div className="header__actions--input-box">
          <input
            className="header__actions--input"
            type="text"
            placeholder="Search Products..."
          />
          <SearchIcon />
        </div>

        <button
          onClick={navigateToCartHadler}
          className="header__actions--cart"
        >
          <CartIcon />
          <span className="header__actions--cart-badge">{productsCount}</span>
        </button>

        <button className="header__actions--login">Sign In</button>
      </div>
    </header>
  );
};

export default Header;

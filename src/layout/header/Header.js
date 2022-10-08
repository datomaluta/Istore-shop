import "./Header.scss";
import { NavLink } from "react-router-dom";
import SearchIcon from "../../assets/headerIcons/SearchIcon";
import CartIcon from "../../assets/headerIcons/CartIcon";

const Header = () => {
  return (
    <header className="header">
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

        <button className="header__actions--cart">
          <CartIcon />
          <span className="header__actions--cart-badge">0</span>
        </button>

        <button className="header__actions--login">Sign In</button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header({ name, login }) {
  return (
    <div className="header">
      <div className="header-wrapper">
        <p className="header-title">فروشگاه</p>
        <ul className="header-menu">
          <li className="header-menu__item">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              صفحه اول
            </Link>
          </li>
          <li className="header-menu__item">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/contact-us"
            >
              تماس با ما
            </Link>
          </li>
          <li className="header-menu__item">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/support"
            >
              \شتیبانی
            </Link>
          </li>
          <li className="header-menu__item">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/product"
            >
              محصولات
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-wrapper">
        <div className="header-dropdown">
          {!login ? (
            <p className="header-dropdown__text">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/login"
              >
                ورود / ثبت نام
              </Link>
            </p>
          ) : (
            <>
              <p className="header-dropdown__text">{name}</p>
              <div class="header-dropdown-content">
                <a></a>
                <a></a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

Header.defaultProps = {
  name: "هادی",
};

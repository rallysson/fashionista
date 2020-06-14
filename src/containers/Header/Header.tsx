import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/icons/shopping-cart-icon.svg";
import searchIcon from "../../assets/icons/search-icon.svg";

import "./header.scss";

interface Props {}

function Header(): ReactElement {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <h1 className="header__title">Fashionista</h1>
        </Link>
        <div className="header__icons">
          <button>
            <img src={cartIcon} alt="cart icon" />
          </button>
          <button>
            <img src={searchIcon} alt="search icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export { Header };

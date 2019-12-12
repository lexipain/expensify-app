import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify!</h1>
    <NavLink exact={true} to="/" activeClassName="active-link">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="active-link">
      Add
    </NavLink>
    <NavLink to="/help" activeClassName="active-link">
      Help
    </NavLink>
  </header>
);

export default Header;

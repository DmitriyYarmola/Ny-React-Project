import React from "react";
import './navigator.sass'
import { NavLink } from "react-router-dom";
import {
  Search,
  MailOutline,
  PersonOutline
} from "@material-ui/icons";
import WithIcon from './../../../hoc/WithIcons.js'

const Navigator = (props) => {
  return (
    <div className="humburger">
      <div className="humburger-menu">
        <div className="hamburger-line"></div>
      </div>
      <nav className="nav">
        <NavLink to="/dialogs" className="nav-item" activeClassName="active">
        {WithIcon(MailOutline)}
        </NavLink>
        <NavLink to="/foundusers" className="nav-item" activeClassName="active">
        {WithIcon(Search)}
        </NavLink>
        <NavLink to="/profile" className="nav-item" activeClassName="active">
        {WithIcon(PersonOutline)}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigator

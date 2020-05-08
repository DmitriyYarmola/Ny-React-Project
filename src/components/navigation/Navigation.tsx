import React from "react";
import style from "./navigation.module.css";
import { NavLink } from "react-router-dom";
import {
  Settings,
  Search,
  MusicNote,
  FiberNew,
  MailOutline,
  PersonOutline,
} from "@material-ui/icons";

const Nav = () => {
  return (
    <div className={style.nav}>
      <NavLink
        className={style.link}
        to="/profile"
        activeClassName={style.active}
      >
        {" "}
        <PersonOutline /> Profile
      </NavLink>
      <NavLink
        className={style.link}
        to="/dialogs"
        activeClassName={style.active}
      >
        {" "}
        <MailOutline />
        Messages
      </NavLink>
      <NavLink className={style.link} to="/news" activeClassName={style.active}>
        {" "}
        <FiberNew /> News
      </NavLink>
      <NavLink
        className={style.link}
        to="/music"
        activeClassName={style.active}
      >
        {" "}
        <MusicNote /> Music
      </NavLink>
      <NavLink
        className={style.link}
        to="/foundusers"
        activeClassName={style.active}
      >
        {" "}
        <Search />
        Found users
      </NavLink>
      <NavLink
        className={style.link}
        to="/settings"
        activeClassName={style.active}
      >
        {" "}
        <Settings />
        Settings
      </NavLink>
    </div>
  );
};

export default Nav;

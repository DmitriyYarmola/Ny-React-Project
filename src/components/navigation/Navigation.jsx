import React from 'react';
import nav from './../../css/navigation/navigation.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={nav.nav}>
            <NavLink className={nav.link} to="/profile" activeClassName={nav.active}>Profile</NavLink>
            <NavLink className={nav.link} to="/dialogs" activeClassName={nav.active}>Messages</NavLink>
            <NavLink className={nav.link} to="/news" activeClassName={nav.active}>News</NavLink>
            <NavLink className={nav.link} to="/music" activeClassName={nav.active}>Music</NavLink>
            <NavLink className={nav.link} to="/settings" activeClassName={nav.active}>Settings</NavLink>
            
        </nav>
    )
}

export default Nav;


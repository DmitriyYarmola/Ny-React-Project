import React from 'react';
import './../css/navigation.css'

const Nav = () => {
    return (
        <nav className="nav">
            <a className="nav-link">Profile</a>
            <a className="nav-link">Messages</a>
            <a className="nav-link">News</a>
            <a className="nav-link">Music</a>
            <a className="nav-link">Settings</a>
        </nav>
    )
}

export default Nav;


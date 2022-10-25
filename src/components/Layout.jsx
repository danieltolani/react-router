import React from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <nav>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/Schools'>Schools</NavLink>
            <NavLink to='/About'>About</NavLink>
        </nav>
    )
}


export default Layout;
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Schools = () => {
    return (
        <div>
            <h1>List of Available Schools will come in here</h1>
            <NavLink to='Engineering'>School of Engineering</NavLink>
            <Outlet/>
        </div>
    )
}

export default Schools;
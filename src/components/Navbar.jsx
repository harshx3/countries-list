import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IoMoonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const { theme, themeToggle } = useContext(ThemeContext);


    return (
        <nav className={`nunito-sans-name ${theme ? "dark-nav" : "light-nav"}`}>
            <NavLink to={"/"} style={{ textDecoration: "none" }}> <p className={theme ? "light-text" : "dark-text"}>Where in the world?</p></NavLink>
            <button className={`nunito-sans-text theme-btn ${theme ? "dark-btn" : "light-btn"}`} onClick={themeToggle}> <IoMoonOutline />{theme ? "Ligth Mode" : "Dark Mode"}
            </button>
        </nav>
    )
};

export default Navbar;
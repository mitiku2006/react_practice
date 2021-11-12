import React from "react";
import logo from "../../logo.svg";
import classes from "./Topbar.module.css";

const Topbar = (props) => {
    return (
        <header className={classes.AppHeader}>
            <nav src={logo} className={classes.Topbar}>
                <img src={"exp-logo.png"} alt={"Expedia Logo"}/>
            </nav>
        </header>
    )
}

export default Topbar;

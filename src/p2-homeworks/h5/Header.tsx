import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes';
import classes from "./Header.module.css";



function Header() {
    return (
            <div className={classes.navbar}>
                <NavLink to={PATH.PRE_JUNIOR} className={classes.noActive}>pre_junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={classes.noActive}>pre_junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={classes.noActive}>pre_junior</NavLink>
                <div className={classes.circle}/>
            </div>
    )
}

export default Header

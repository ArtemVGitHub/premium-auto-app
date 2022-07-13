import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navigate.module.scss'

const Navigate = () => {
    return (
        <nav className={classes.Navbar}>
            <ul className={classes.Navbar__List}>
                <li className={classes.Navbar__Item}>
                    <NavLink className={classes.Navbar__Link} to="/blanks">
                        <i className="bi bi-files"></i>
                        <span>Договора</span>
                    </NavLink>
                </li>
                <li className={classes.Navbar__Item}>
                    <NavLink className={classes.Navbar__Link} to="/new">
                        <i className="bi bi-file-earmark-plus"></i>
                        <span>Новый</span>
                    </NavLink>
                </li>
                <li className={classes.Navbar__Item}>
                    <NavLink className={classes.Navbar__Link} to="/account">
                        <i className="bi bi-file-person"></i>
                        <span>Аккаунт</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigate

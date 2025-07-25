import { NavLink } from "react-router";
import { useSelector } from "react-redux";

import classes from "./Header.module.css";
import headerLogo from "../../assets/header-logo.png";

function Header() {
    const token = useSelector((state) => state.auth.token);
    return (
        <header className={classes.header}>
            <NavLink to="/home" className={classes.logo}>
                <img src={headerLogo} />
            </NavLink>
            <div className={classes.headerOptions}>
                <nav className={classes.categories}>
                    <NavLink to="/home">Factions</NavLink>
                    <NavLink>Weapons</NavLink>
                    <NavLink>Stratagems</NavLink>
                </nav>
                {!token ? (
                    <nav className={classes.categories}>
                        <NavLink>Create Account</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </nav>
                ) : (
                    <nav className={classes.categories}>
                        <NavLink>Log out</NavLink>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;

import { NavLink, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import headerLogo from "../../assets/header-logo.png";
import { setToken } from "../../slices/authSlice";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const role = useSelector((state) => state.auth.role);

    const logoutHandler = () => {
        dispatch(setToken(null));
        localStorage.removeItem("userToken");
        localStorage.removeItem("userRole");

        navigate("/login");
    };

    const token = useSelector((state) => state.auth.token);
    return (
        <header className={classes.header}>
            <NavLink to="/home" className={classes.logo}>
                <img src={headerLogo} />
            </NavLink>
            <div className={classes.headerOptions}>
                <nav className={classes.categories}>
                    <NavLink to="/factions">Factions</NavLink>
                    <NavLink>Weapons</NavLink>
                    <NavLink>Stratagems</NavLink>
                </nav>
                {!token ? (
                    <nav className={classes.categories}>
                        <NavLink to="/signup">Sign up</NavLink>
                        <NavLink to="/login">Log in</NavLink>
                    </nav>
                ) : (
                    <nav className={classes.categories}>
                        {role === "admin" && (
                            <NavLink to="/admin">Admin Page</NavLink>
                        )}
                        <a onClick={logoutHandler}>Log out</a>
                    </nav>
                )}
            </div>
        </header>
    );
}

export default Header;

import { Outlet, useLocation } from "react-router";

import classes from "./Layout.module.css";
import Header from "../Header/Header";

function Layout() {
    const location = useLocation();

    return (
        <div className={classes.container}>
            <div
                className={`${classes.bg} ${
                    location.pathname !== "/" ? classes.bgBlur : ""
                }`}
                style={{ backgroundImage: "url('/heart-of-democracy-4k.jpg')" }}
            ></div>

            {location.pathname !== "/" && (
                <div className={classes.backdrop}></div>
            )}
            {location.pathname !== "/" && <Header />}
            <Outlet />
        </div>
    );
}

export default Layout;

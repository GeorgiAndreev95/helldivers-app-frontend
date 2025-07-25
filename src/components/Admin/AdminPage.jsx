import { useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

import classes from "./AdminPage.module.css";

const AdminPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <div className={classes.adminPageWrapper}>
            <div className={classes.adminTitle}>
                <h1>Admin Options</h1>
                <p>Add and manage all assets here.</p>
            </div>
            <nav className={classes.adminOptions}>
                <Link to="add-faction">Add Faction</Link>
                <Link>View/Edit Factions</Link>
            </nav>
            <nav className={classes.adminOptions}>
                <Link>Add Enemy Unit</Link>
                <Link>View/Edit Enemy Units</Link>
            </nav>
        </div>
    );
};

export default AdminPage;

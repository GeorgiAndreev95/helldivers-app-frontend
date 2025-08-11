import { Link } from "react-router";

import classes from "./AdminPage.module.css";

const AdminPage = () => {
    return (
        <div className={classes.adminPageWrapper}>
            <div className={classes.adminTitle}>
                <h1>Admin Options</h1>
                <p>Add and manage all assets here.</p>
            </div>
            <nav className={classes.adminOptions}>
                <Link to="add-faction">Add Faction</Link>
                <Link to="factions">View/Edit/Delete Factions</Link>
            </nav>
            <nav className={classes.adminOptions}>
                <Link to="add-enemy-unit">Add Enemy Unit</Link>
                <Link>View/Edit/Delete Enemy Units</Link>
            </nav>
        </div>
    );
};

export default AdminPage;

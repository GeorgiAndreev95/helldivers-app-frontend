import { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import classes from "./ViewFactions.module.css";
import { fetchFactions } from "../../../slices/factionsSlice";

function ViewFactions() {
    const dispatch = useDispatch();
    const factions = useSelector((state) => {
        return state.factions.factions;
    });
    const status = useSelector((state) => {
        return state.factions.status;
    });

    useEffect(() => {
        if (status === "idle" || factions.length === 0) {
            dispatch(fetchFactions());
        }
    }, [dispatch, status, factions]);

    return (
        <div className={classes.viewFactionsContainer}>
            <h3 className={classes.viewFactionsClassTitle}>
                View/Edit/Delete Factions
            </h3>

            {factions.map((faction) => (
                <div key={faction.id} className={classes.viewFactionContainer}>
                    <div className={classes.viewFactionImgContainer}>
                        <img
                            className={classes.viewFactionImg}
                            src={`http://localhost:3000${faction.image}`}
                            alt={faction.name}
                        />
                        <p className={classes.viewFactionName}>
                            {faction.name}
                        </p>
                    </div>
                    <div className={classes.viewFactionsButtons}>
                        <Link>Faction Units</Link>
                        <Link to={`/admin/edit-faction/${faction.id}`}>
                            Edit/Delete Faction
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ViewFactions;

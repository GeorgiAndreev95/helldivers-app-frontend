import { useEffect } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { fetchEnemyUnits } from "../../../slices/enemyUnitSlice";
import classes from "./ViewEnemyUnits.module.css";

const ViewEnemyUnits = () => {
    const dispatch = useDispatch();
    const enemyUnits = useSelector((state) => state.enemyUnits.enemyUnits);
    const status = useSelector((state) => state.enemyUnits.status);

    useEffect(() => {
        if (status === "idle" || enemyUnits.length === 0) {
            dispatch(fetchEnemyUnits());
        }
    }, [dispatch, enemyUnits.length, status]);

    return (
        <div className={classes.viewEnemyUnitsContainer}>
            <h1 className={classes.viewEnemyUnitsTitle}>
                View/Edit/Delete Enemy Units
            </h1>

            {enemyUnits.map((enemyUnit) => (
                <div
                    key={enemyUnit.id}
                    className={classes.viewEnemyUnitContainer}
                >
                    <div className={classes.viewEnemyUnitImgContainer}>
                        <img
                            className={classes.viewEnemyUnitImg}
                            src={`http://localhost:3000${enemyUnit.image}`}
                            alt={enemyUnit.name}
                        />
                    </div>
                    <div className={classes.viewEnemyUnitInfo}>
                        <div>
                            <p className={classes.viewEnemyUnitName}>
                                {enemyUnit.name}
                            </p>
                            <p className={classes.viewEnemyUnitDescription}>
                                {enemyUnit.description}
                            </p>
                        </div>

                        <div className={classes.viewEnemyUnitStatsContainer}>
                            <div className={classes.viewEnemyUnitStats}>
                                <p>Damage: {enemyUnit.damage}</p>
                                <p>Health: {enemyUnit.damage}</p>
                            </div>
                            <div className={classes.viewFactionsButtons}>
                                <Link
                                    to={`/admin/edit-enemy-unit/${enemyUnit.id}`}
                                >
                                    Edit/Delete Unit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ViewEnemyUnits;

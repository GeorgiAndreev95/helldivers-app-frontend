import { useSelector } from "react-redux";

import classes from "./Faction.module.css";

function Faction() {
    const factions = useSelector((state) => {
        return state.factions.factions;
    });
    return (
        <div className={classes.factionsContainer}>
            <h3 className={classes.classTitle}>Factions</h3>

            {factions.map((faction) => (
                <div key={faction.id} className={classes.factionContainer}>
                    <div className={classes.imgContainer}>
                        <img
                            className={classes.factionImg}
                            src={`http://localhost:3000${faction.image}`}
                            alt={faction.name}
                        />
                        <p className={classes.factionName}>{faction.name}</p>
                    </div>
                    <p>{faction.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Faction;

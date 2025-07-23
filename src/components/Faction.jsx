import { useSelector } from "react-redux";

function Faction() {
    const factions = useSelector((state) => {
        return state.factions.factions;
    });
    return (
        <div>
            <h3>Factions</h3>

            <ul>
                {factions.map((faction) => (
                    <div key={faction.id}>
                        <li>{faction.name}</li>
                        <p>{factions[0].description}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Faction;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Faction from "../components/Factions/Faction";
import { getFactions } from "../services/factionService";
import { setFactions } from "../slices/factionsSlice";

function Factions() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFacions = async () => {
            try {
                const data = await getFactions();
                dispatch(setFactions(data.factions));
                console.log(data.factions);
            } catch (error) {
                console.error("Error fetching factions:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFacions();
    }, [dispatch]);

    return <>{isLoading ? <p>Loading...</p> : <Faction />}</>;
}

export default Factions;

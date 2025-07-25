import Factions from "./Factions";

import classes from "./LandingPage.module.css";

function Home() {
    return (
        <>
            <div className={classes.content}>
                <Factions />
            </div>
        </>
    );
}

export default Home;

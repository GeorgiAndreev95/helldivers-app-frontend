import { Link } from "react-router";

import Factions from "./Factions";
import enlistImg from "../assets/enlist.png";
import classes from "./LandingPage.module.css";

function Home() {
    return (
        <>
            <div className={classes.content}>
                <h1>Greetings Helldiver!</h1>
                <div className={classes.contentWrapper}>
                    <div className={classes.imgWrapper}>
                        <img className={classes.enlist} src={enlistImg} />
                    </div>

                    <div className={classes.mainContent}>
                        <p>
                            Welcome to the frontlines of the Super-Earth Defense
                            Force - The Galaxy's Last Line of Offence!
                            <br /> Freedom. Peace. Democracy. Our way of life.
                            The key pillars of our civilization are all at risk.
                        </p>
                        <p>
                            Super Earth's enemies are advancing on all fronts.
                            Prove to yourself that you have the strength and the
                            courage to be free. Gear up, and prepare to protect
                            freedom and Managed Democracy at any cost. Failure
                            is not an option.
                        </p>
                        <p>
                            Every choice matters. Every battle shapes the fate
                            of countless worlds. Join your fellow Helldivers,
                            master powerful weaponry, and bring Managed
                            Democracy to the stars - one alien at a time.
                        </p>
                    </div>
                </div>

                <div className={classes.callToAction}>
                    <h2>Mission Intel</h2>
                    <p>
                        Before you deploy, gather crucial intelligence on the
                        galaxy's hostile factions. Liberty's enemies march ever
                        closer. Knowing your enemies is the first step toward
                        victory. Study their tactics, strengths, and weaknesses.
                    </p>
                    <Link to="/factions" className={classes.deployButton}>
                        <strong>Learn About Your Enemies</strong>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;

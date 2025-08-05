import { useNavigate } from "react-router";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate("/home");
    };

    return (
        <div className={classes.overlayContainer}>
            <div className={classes.overlay}>
                <button onClick={handleEnter} className={classes.button}>
                    Enter Page
                </button>
            </div>
        </div>
    );
};

export default LandingPage;

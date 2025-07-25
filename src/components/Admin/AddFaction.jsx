import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import classes from "./AddFaction.module.css";

const AddFaction = () => {
    const navigate = useNavigate();
    const [fileName, setFileName] = useState("No file chosen");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("No file chosen");
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (!token) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <div className={classes.addFactionContainer}>
            <h1>Add Faction</h1>
            <form className={classes.addFactionForm} onSubmit={onSubmitHandler}>
                <input
                    className={classes.factionName}
                    name="name"
                    type="text"
                    required
                    placeholder="Faction Name"
                />
                <input
                    className={classes.hiddenFileUpload}
                    name="image"
                    id="file-upload"
                    type="file"
                    required
                    onChange={handleFileChange}
                />
                <label
                    htmlFor="file-upload"
                    className={classes.customFileButton}
                >
                    Upload Image{" - "}
                    <span className={classes.fileName}>{fileName}</span>
                </label>

                <textarea
                    className={classes.factionDescription}
                    name="description"
                    type="text"
                    required
                    placeholder="Description"
                />
                <button className={classes.submitButton} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddFaction;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import classes from "./AddFaction.module.css";
import { createFaction } from "../../services/factionService";
import { fetchFactions } from "../../slices/factionsSlice";

const AddFaction = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [factionName, setFactionName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file chosen");
    const token = useSelector((state) => state.auth.token);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
            setFile(selectedFile);
        } else {
            setFileName("No file chosen");
            setFile(null);
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (token && file) {
            try {
                await createFaction(factionName, description, file);
                dispatch(fetchFactions());
                navigate("/admin");
            } catch (error) {
                console.error("Error creating faction:", error);
            }
        }
    };

    const onNameChangeHandler = (event) => {
        setFactionName(event.target.value);
    };

    const onDescriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };

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
                    value={factionName}
                    onChange={onNameChangeHandler}
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
                    value={description}
                    onChange={onDescriptionChangeHandler}
                />
                <button className={classes.submitButton} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddFaction;

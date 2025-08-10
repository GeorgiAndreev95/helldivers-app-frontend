import { useState } from "react";
import classes from "./AddEnemyUnit.module.css";

const AddEnemyUnit = () => {
    const [unitName, setUnitName] = useState();
    const [file, setFile] = useState(null);
    const [health, setHealth] = useState(null);
    const [damage, setDamage] = useState(null);
    const [fileName, setFileName] = useState("No file chosen");
    const [description, setDescription] = useState("");
    const [spawning, setSpawning] = useState("");
    const [behavior, setBehavior] = useState("");

    const onNameChangeHandler = (event) => {
        setUnitName(event.target.value);
    };
    const onDescriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    };
    const onSpawningChangeHandler = (event) => {
        setSpawning(event.target.value);
    };
    const onBehaviorChangeHandler = (event) => {
        setBehavior(event.target.value);
    };
    const onHealthChangeHandler = (event) => {
        setHealth(event.target.value);
    };
    const onDamageChangeHandler = (event) => {
        setDamage(event.target.value);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFileName(selectedFile.name);
            setFile(selectedFile);
        } else {
            setFileName("No file chosen");
            setFile(null);
        }
    };

    return (
        <div className={classes.addFactionContainer}>
            <h1>Add Enemy Unit</h1>
            <form className={classes.addFactionForm} onSubmit={onSubmitHandler}>
                <input
                    className={classes.unitInputField}
                    name="name"
                    type="text"
                    required
                    placeholder="Unit Name"
                    value={unitName}
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
                    className={classes.unitTextareaField}
                    name="description"
                    type="text"
                    required
                    placeholder="Description"
                    value={description}
                    onChange={onDescriptionChangeHandler}
                />
                <textarea
                    className={classes.unitTextareaField}
                    name="spawning"
                    type="text"
                    required
                    placeholder="Spawning info"
                    value={spawning}
                    onChange={onSpawningChangeHandler}
                />
                <textarea
                    className={classes.unitTextareaField}
                    name="behavior"
                    type="text"
                    required
                    placeholder="Behavior"
                    value={behavior}
                    onChange={onBehaviorChangeHandler}
                />
                <input
                    className={classes.unitInputField}
                    name="health"
                    type="text"
                    required
                    placeholder="Health"
                    value={health}
                    onChange={onHealthChangeHandler}
                />
                <input
                    className={classes.unitInputField}
                    name="damage"
                    type="number"
                    required
                    placeholder="Damage"
                    value={damage}
                    onChange={onDamageChangeHandler}
                />

                <button className={classes.submitButton} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddEnemyUnit;

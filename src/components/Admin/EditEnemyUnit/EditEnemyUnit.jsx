import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import { fetchFactions } from "../../../slices/factionsSlice";
import { fetchEnemyUnits } from "../../../slices/enemyUnitSlice";
import {
    deleteEnemyUnit,
    editEnemyUnit,
    getEnemyUnit,
} from "../../../services/enemyUnitService";
import classes from "./EditEnemyUnit.module.css";

const EditEnemyUnit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const [unitName, setUnitName] = useState("");
    const [health, setHealth] = useState("");
    const [damage, setDamage] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file chosen");
    const [description, setDescription] = useState("");
    const [spawning, setSpawning] = useState("");
    const [behavior, setBehavior] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [armor, setArmor] = useState("");
    const [selectedFaction, setSelectedFaction] = useState("");
    const [loading, setLoading] = useState(true);
    const dialogRef = useRef();
    const token = useSelector((state) => state.auth.token);
    const factions = useSelector((state) => state.factions.factions);

    const onNameChangeHandler = (event) => setUnitName(event.target.value);
    const onDescriptionChangeHandler = (event) =>
        setDescription(event.target.value);
    const onSpawningChangeHandler = (event) => setSpawning(event.target.value);
    const onBehaviorChangeHandler = (event) => setBehavior(event.target.value);
    const onHealthChangeHandler = (event) => setHealth(event.target.value);
    const onDamageChangeHandler = (event) => setDamage(event.target.value);
    const onDifficultyChangeHandler = (event) =>
        setDifficulty(event.target.value);
    const onArmorChangeHandler = (event) => setArmor(event.target.value);
    const onFactionChangeHandler = (event) =>
        setSelectedFaction(event.target.value);

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

    useEffect(() => {
        dispatch(fetchFactions());
    }, [dispatch]);

    useEffect(() => {
        const fetchFactionData = async () => {
            try {
                const { enemyUnit } = await getEnemyUnit(id);
                console.log(enemyUnit);
                setUnitName(enemyUnit.name);
                setDescription(enemyUnit.description);
                setSpawning(enemyUnit.spawning);
                setBehavior(enemyUnit.behavior);
                setHealth(enemyUnit.health);
                setDamage(enemyUnit.damage);
                setDifficulty(enemyUnit.minimumDifficulty);
                setArmor(enemyUnit.armor);
                setSelectedFaction(enemyUnit.factionId);
            } catch (err) {
                console.error("Failed to fetch enemy unit:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFactionData();
    }, [id]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (token) {
            try {
                await editEnemyUnit(
                    id,
                    unitName,
                    description,
                    spawning,
                    behavior,
                    health,
                    damage,
                    difficulty,
                    armor,
                    file,
                    selectedFaction
                );
                dispatch(fetchEnemyUnits());
                navigate("/admin/enemy-units");
            } catch (error) {
                console.error("Error editing enemy unit:", error);
            }
        }
    };

    const handleDeleteClick = () => {
        dialogRef.current?.showModal();
    };

    const confirmDelete = async () => {
        if (token) {
            try {
                await deleteEnemyUnit(id);
                dispatch(fetchEnemyUnits());
                navigate("/admin/enemy-units");
            } catch (error) {
                console.error("Error deleting enemy unit:", error);
            } finally {
                dialogRef.current?.close();
            }
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className={classes.addEnemyUnitContainer}>
            <h1>Add Enemy Unit</h1>
            <form
                className={classes.addEnemyUnitForm}
                onSubmit={onSubmitHandler}
            >
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
                    type="number"
                    min="0"
                    required
                    placeholder="Health"
                    value={health}
                    onChange={onHealthChangeHandler}
                />
                <input
                    className={classes.unitInputField}
                    name="damage"
                    type="number"
                    min="0"
                    required
                    placeholder="Damage"
                    value={damage}
                    onChange={onDamageChangeHandler}
                />
                <div className={classes.difficultyOptions}>
                    <label htmlFor="difficultyOptions">
                        Select Minimum Difficulty:
                    </label>
                    <select
                        id="difficultyOptions"
                        value={difficulty}
                        onChange={onDifficultyChangeHandler}
                        required
                    >
                        <option value="">--Select--</option>
                        <option value="trivial">Trivial (1)</option>
                        <option value="easy">Easy (2)</option>
                        <option value="medium">Medium (3)</option>
                        <option value="challenging">Challenging (4)</option>
                        <option value="hard">Hard (5)</option>
                        <option value="extreme">Extreme (6)</option>
                        <option value="suicide-mission">
                            Suicide Mission (7)
                        </option>
                        <option value="impossible">Impossible (8)</option>
                        <option value="helldive">Helldive (9)</option>
                        <option value="super-helldive">
                            Super Helldive (10)
                        </option>
                    </select>
                </div>
                <div className={classes.difficultyOptions}>
                    <label htmlFor="armorOptions">Select Armor Value:</label>
                    <select
                        id="armorOptions"
                        value={armor}
                        onChange={onArmorChangeHandler}
                        required
                    >
                        <option value="">--Select--</option>
                        <option value="unarmored">Unarmored</option>
                        <option value="light">Light</option>
                        <option value="medium">Medium</option>
                        <option value="heavy">Heavy</option>
                        <option value="tank">Tank</option>
                    </select>
                </div>
                <div className={classes.difficultyOptions}>
                    <label htmlFor="factionOptions">Select Faction:</label>
                    <select
                        id="factionOptions"
                        value={selectedFaction}
                        onChange={onFactionChangeHandler}
                        required
                    >
                        <option value="">--Select--</option>
                        {factions.map((faction) => (
                            <option key={faction.id} value={faction.id}>
                                {faction.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={classes.buttonsContainer}>
                    <button className={classes.submitButton} type="submit">
                        Submit Changes
                    </button>
                    <button
                        className={classes.submitButton}
                        type="button"
                        onClick={handleDeleteClick}
                    >
                        Delete Enemy Unit
                    </button>
                </div>
            </form>
            <dialog ref={dialogRef}>
                <p>Are you sure you want to permanently delete this unit?</p>
                <div>
                    <button onClick={confirmDelete}>Delete</button>
                    <button onClick={() => dialogRef.current?.close()}>
                        Cancel
                    </button>
                </div>
            </dialog>
        </div>
    );
};

export default EditEnemyUnit;

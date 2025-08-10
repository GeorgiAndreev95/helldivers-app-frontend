import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

import classes from "./EditFaction.module.css";
import {
    deleteFaction,
    editFaction,
    getFaction,
} from "../../../services/factionService";
import { fetchFactions } from "../../../slices/factionsSlice";

const EditFaction = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [factionName, setFactionName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("No file chosen");
    const [loading, setLoading] = useState(true);
    const dialogRef = useRef();
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchFactionData = async () => {
            try {
                const { faction } = await getFaction(id);
                setFactionName(faction.name);
                setDescription(faction.description);
            } catch (err) {
                console.error("Failed to fetch faction:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFactionData();
    }, [id]);

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

        if (token) {
            try {
                await editFaction(id, factionName, description, file);
                dispatch(fetchFactions());
                navigate("/admin/factions");
            } catch (error) {
                console.error("Error creating faction:", error);
            }
        }
    };

    const onNameChangeHandler = (event) => setFactionName(event.target.value);
    const onDescriptionChangeHandler = (event) =>
        setDescription(event.target.value);
    const handleDeleteClick = () => {
        dialogRef.current?.showModal();
    };

    const confirmDelete = async () => {
        if (token) {
            try {
                await deleteFaction(id);
                dispatch(fetchFactions());
                navigate("/admin/factions");
            } catch (error) {
                console.error("Error deleting faction:", error);
            } finally {
                dialogRef.current?.close();
            }
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className={classes.addFactionContainer}>
            <h1>Edit/Delete Faction</h1>
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
                <div className={classes.buttonsContainer}>
                    <button className={classes.submitButton} type="submit">
                        Submit Changes
                    </button>
                    <button
                        className={classes.submitButton}
                        type="button"
                        onClick={handleDeleteClick}
                    >
                        Delete Faction
                    </button>
                </div>
            </form>

            <dialog ref={dialogRef}>
                <p>Are you sure you want to permanently delete this faction?</p>
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

export default EditFaction;

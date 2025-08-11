import axiosInstance from "../../axiosInstance";

export const getEnemyUnits = async () => {
    try {
        const { data } = await axiosInstance.get("/enemy-units");

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getEnemyUnit = async (id) => {
    try {
        const { data } = await axiosInstance.get(`/enemy-unit/${id}`);

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createEnemyUnit = async (
    name,
    description,
    spawning,
    behavior,
    health,
    damage,
    minimumDifficulty,
    armor,
    image,
    factionId
) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("spawning", spawning);
        formData.append("behavior", behavior);
        formData.append("health", health);
        formData.append("damage", damage);
        formData.append("minimumDifficulty", minimumDifficulty);
        formData.append("armor", armor);
        formData.append("factionId", factionId);
        formData.append("image", image);

        const { data } = await axiosInstance.post("/enemy-unit", formData);

        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const editEnemyUnit = async (
    id,
    name,
    description,
    spawning,
    behavior,
    health,
    damage,
    minimumDifficulty,
    armor,
    image,
    factionId
) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("spawning", spawning);
        formData.append("behavior", behavior);
        formData.append("health", health);
        formData.append("damage", damage);
        formData.append("minimumDifficulty", minimumDifficulty);
        formData.append("armor", armor);
        formData.append("factionId", factionId);
        if (image) {
            formData.append("image", image);
        }

        const { data } = await axiosInstance.put(`/enemy-unit/${id}`, formData);

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteEnemyUnit = async (id) => {
    try {
        const response = await axiosInstance.delete(`/enemy-unit/${id}`);

        console.log(response);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

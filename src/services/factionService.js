import axiosInstance from "../../axiosInstance";

export const getFactions = async () => {
    try {
        const { data } = await axiosInstance.get("/factions");

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createFaction = async (name, description, image, token) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("image", image);

        const { data } = await axiosInstance.post("/factions", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

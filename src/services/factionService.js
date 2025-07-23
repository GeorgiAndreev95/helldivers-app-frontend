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

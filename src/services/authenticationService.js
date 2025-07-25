import axiosInstance from "../../axiosInstance";

export const authentication = async (email, password) => {
    try {
        const { data } = await axiosInstance.post("/admin/login", {
            email,
            password,
        });
        console.log(data);
        return data.admin.token;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

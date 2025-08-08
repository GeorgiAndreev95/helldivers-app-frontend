import axiosInstance from "../../axiosInstance";

export const authentication = async (email, password) => {
    try {
        const { data } = await axiosInstance.post("/user/login", {
            email,
            password,
        });
        console.log(data);
        return data.user;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const signup = async (email, password, confirmPassword) => {
    try {
        const { data } = await axiosInstance.post("/user/signup", {
            email,
            password,
            confirmPassword,
        });
        console.log(data);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

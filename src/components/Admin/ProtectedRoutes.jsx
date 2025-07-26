import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    const token = useSelector((state) => state.auth.token);

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

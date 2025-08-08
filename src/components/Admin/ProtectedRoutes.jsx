import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
    const token = useSelector((state) => state.auth.token);
    const role = useSelector((state) => state.auth.role);

    return token && role === "admin" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

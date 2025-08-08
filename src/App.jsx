import { Routes, Route } from "react-router";

import Layout from "./components/Loadout/Layout";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Factions from "./pages/Factions";
import Login from "./components/Login/Login";
import AdminPage from "./components/Admin/AdminPage";
import AddFaction from "./components/Admin/AddFaction";
import ProtectedRoutes from "./components/Admin/ProtectedRoutes";
import ViewFactions from "./components/Admin/ViewFactions";
import EditFaction from "./components/Admin/EditFaction";
import Signup from "./components/Login/Signup";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="home" element={<Home />} />
                <Route path="factions" element={<Factions />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="admin" element={<AdminPage />} />
                    <Route path="admin/add-faction" element={<AddFaction />} />
                    <Route path="admin/factions" element={<ViewFactions />} />
                    <Route
                        path="admin/edit-faction/:id"
                        element={<EditFaction />}
                    />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;

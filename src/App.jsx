import { Routes, Route } from "react-router";

import Layout from "./components/Loadout/Layout";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import AdminPage from "./components/Admin/AdminPage";
import AddFaction from "./components/Admin/AddFaction";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="admin" element={<AdminPage />} />
                <Route path="admin/add-faction" element={<AddFaction />} />
            </Route>
        </Routes>
    );
}

export default App;

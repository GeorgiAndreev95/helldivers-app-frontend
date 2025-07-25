import { Routes, Route } from "react-router";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Layout from "./components/Loadout/Layout";
import Login from "./components/Login/Login";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
}

export default App;

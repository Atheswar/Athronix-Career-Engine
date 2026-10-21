import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";


function App() {

    const [page, setPage] = useState("home");

    return (
        <div>

            <Navbar
                setPage={setPage}
            />

            {page === "home" && (
                <Home
                    setPage={setPage}
                />
            )}

            {page === "dashboard" && (
                <Dashboard />
            )}

        </div>
    );
}


export default App;
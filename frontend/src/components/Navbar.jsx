function Navbar({ setPage }) {

    return (
        <nav className="navbar">

            <div
                className="logo"
                onClick={() => setPage("home")}
            >
                Athronix Career
            </div>

            <div className="nav-links">

                <button
                    onClick={() => setPage("home")}
                >
                    Home
                </button>

                <button
                    onClick={() => setPage("dashboard")}
                >
                    Dashboard
                </button>

            </div>

        </nav>
    );
}


export default Navbar;
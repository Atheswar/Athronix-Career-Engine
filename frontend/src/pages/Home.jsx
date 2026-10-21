function Home({ setPage }) {

    return (
        <main className="hero">

            <div className="hero-content">

                <h1>
                    Find the Right Career
                    with AI
                </h1>

                <p>
                    Athronix Career analyzes your
                    resume skills and finds suitable
                    job opportunities.
                </p>

                <button
                    onClick={() =>
                        setPage("dashboard")
                    }
                >
                    Start Career Analysis
                </button>

            </div>

        </main>
    );
}


export default Home;
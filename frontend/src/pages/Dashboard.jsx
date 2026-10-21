import { useState } from "react";

import ResumeUpload from "../components/ResumeUpload";
import JobCard from "../components/JobCard";


function Dashboard() {

    const [result, setResult] =
        useState(null);


    return (
        <main className="dashboard">

            <h1>
                Career Dashboard
            </h1>

            <ResumeUpload
                onResult={setResult}
            />

            {result && (

                <section className="results">

                    <div className="resume-result">

                        <h2>
                            Resume Analysis
                        </h2>

                        <p>
                            <strong>
                                File:
                            </strong>{" "}
                            {result.resume.filename}
                        </p>

                        <p>
                            <strong>
                                Skills Found:
                            </strong>{" "}
                            {result.resume.skill_count}
                        </p>

                        <div className="skills">

                            {result.resume.skills.map(
                                (skill) => (

                                    <span
                                        className="skill matched"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>

                                )
                            )}

                        </div>

                    </div>


                    <h2>
                        Recommended Jobs
                    </h2>


                    {result.matching.recommendations.map(
                        (item) => (

                            <JobCard
                                key={item.job.id}
                                job={item.job}
                                score={item.match_score}
                                matchedSkills={
                                    item.matched_skills
                                }
                            />

                        )
                    )}

                </section>

            )}

        </main>
    );
}


export default Dashboard;
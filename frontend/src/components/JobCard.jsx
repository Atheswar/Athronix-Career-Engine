import MatchScore from "./MatchScore";


function JobCard({
    job,
    score,
    matchedSkills
}) {

    return (
        <div className="job-card">

            <div className="job-header">

                <div>

                    <h3>
                        {job.title}
                    </h3>

                    <p>
                        {job.company}
                    </p>

                    <p>
                        📍 {job.location}
                    </p>

                </div>

                <MatchScore
                    score={score}
                />

            </div>

            <p>
                {job.description}
            </p>

            <div className="skills">

                {job.skills.map(
                    (skill) => (

                        <span
                            key={skill}
                            className={
                                matchedSkills
                                    .includes(skill)
                                    ? "skill matched"
                                    : "skill"
                            }
                        >
                            {skill}
                        </span>

                    )
                )}

            </div>

        </div>
    );
}


export default JobCard;
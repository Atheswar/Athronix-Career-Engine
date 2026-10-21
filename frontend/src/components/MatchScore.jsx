function MatchScore({ score }) {

    return (
        <div className="match-score">

            <span>
                Match Score
            </span>

            <strong>
                {score}%
            </strong>

        </div>
    );
}


export default MatchScore;
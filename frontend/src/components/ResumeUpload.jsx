import { useState } from "react";

import {
    analyzeResume,
    matchJobs
} from "../services/api";


function ResumeUpload({ onResult }) {

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!file) {
            alert("Please select a resume.");
            return;
        }

        try {

            setLoading(true);

            const resumeResult =
                await analyzeResume(file);

            const matchResult =
                await matchJobs(
                    resumeResult.skills
                );

            onResult({
                resume: resumeResult,
                matching: matchResult
            });

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.detail ||
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <form
            className="upload-box"
            onSubmit={handleSubmit}
        >

            <h2>Upload Your Resume</h2>

            <p>
                Upload PDF, DOCX or TXT resume
            </p>

            <input
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={(event) =>
                    setFile(event.target.files[0])
                }
            />

            <button
                type="submit"
                disabled={loading}
            >
                {loading
                    ? "Analyzing..."
                    : "Analyze Resume"}
            </button>

        </form>
    );
}


export default ResumeUpload;
import axios from "axios";


const API_URL =
    "http://localhost:8000/api";


export const analyzeResume =
    async (file) => {

        const formData =
            new FormData();

        formData.append(
            "file",
            file
        );

        const response =
            await axios.post(
                `${API_URL}/resume/analyze`,
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data"
                    }
                }
            );

        return response.data;
    };


export const matchJobs =
    async (skills) => {

        const response =
            await axios.post(
                `${API_URL}/matching/`,
                {
                    skills: skills
                }
            );

        return response.data;
    };


export const getJobs =
    async () => {

        const response =
            await axios.get(
                `${API_URL}/jobs/`
            );

        return response.data;
    };
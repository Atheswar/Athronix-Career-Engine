from fastapi import APIRouter
from app.database.database import get_jobs


router = APIRouter()


@router.get("/")
def get_all_jobs():

    jobs = get_jobs()

    return {
        "count": len(jobs),
        "jobs": jobs
    }


@router.get("/{job_id}")
def get_job(job_id: int):

    jobs = get_jobs()

    for job in jobs:

        if job["id"] == job_id:
            return job

    return {
        "error": "Job not found"
    }
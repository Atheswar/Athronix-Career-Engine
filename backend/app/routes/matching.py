from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

from app.database.database import get_jobs
from app.services.job_matcher import (
    calculate_match,
    get_matching_skills
)


router = APIRouter()


class MatchRequest(BaseModel):
    skills: List[str]


@router.post("/")
def match_jobs(request: MatchRequest):

    jobs = get_jobs()

    results = []

    for job in jobs:

        score = calculate_match(
            request.skills,
            job["skills"]
        )

        matched_skills = get_matching_skills(
            request.skills,
            job["skills"]
        )

        results.append({
            "job": job,
            "match_score": score,
            "matched_skills": matched_skills
        })

    results.sort(
        key=lambda item: item["match_score"],
        reverse=True
    )

    return {
        "resume_skills": request.skills,
        "recommendations": results
    }
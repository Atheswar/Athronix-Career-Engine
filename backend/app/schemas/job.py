from pydantic import BaseModel
from typing import List


class JobResponse(BaseModel):
    id: int
    title: str
    company: str
    location: str
    description: str
    skills: List[str]
from pydantic import BaseModel
from typing import List


class ResumeResponse(BaseModel):
    filename: str
    skills: List[str]
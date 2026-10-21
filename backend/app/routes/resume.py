from fastapi import APIRouter, UploadFile, File, HTTPException
import os
import tempfile

from app.services.resume_parser import extract_text
from app.services.skill_extractor import extract_skills


router = APIRouter()


@router.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...)
):

    allowed_extensions = [
        ".pdf",
        ".docx",
        ".txt"
    ]

    extension = os.path.splitext(
        file.filename
    )[1].lower()

    if extension not in allowed_extensions:

        raise HTTPException(
            status_code=400,
            detail="Only PDF, DOCX and TXT files are supported."
        )

    content = await file.read()

    temp_file = tempfile.NamedTemporaryFile(
        delete=False,
        suffix=extension
    )

    try:

        temp_file.write(content)
        temp_file.close()

        text = extract_text(temp_file.name)

        skills = extract_skills(text)

        return {
            "filename": file.filename,
            "skills": skills,
            "skill_count": len(skills),
            "text_preview": text[:1000]
        }

    finally:

        if os.path.exists(temp_file.name):
            os.remove(temp_file.name)
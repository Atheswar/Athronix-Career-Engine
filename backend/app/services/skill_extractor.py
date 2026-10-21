from app.database.database import get_skills


def extract_skills(text):
    text = text.lower()

    skills_data = get_skills()

    detected_skills = []

    for skill in skills_data:
        skill_name = skill["name"]

        if skill_name.lower() in text:
            detected_skills.append(skill_name)

    return detected_skills
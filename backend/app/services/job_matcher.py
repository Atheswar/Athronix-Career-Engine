def calculate_match(resume_skills, job_skills):

    resume_skills_lower = {
        skill.lower()
        for skill in resume_skills
    }

    job_skills_lower = {
        skill.lower()
        for skill in job_skills
    }

    if not job_skills_lower:
        return 0

    matched_skills = (
        resume_skills_lower.intersection(job_skills_lower)
    )

    score = (
        len(matched_skills)
        / len(job_skills_lower)
    ) * 100

    return round(score, 2)


def get_matching_skills(resume_skills, job_skills):

    resume_skills_lower = {
        skill.lower(): skill
        for skill in resume_skills
    }

    matched = []

    for skill in job_skills:
        if skill.lower() in resume_skills_lower:
            matched.append(skill)

    return matched
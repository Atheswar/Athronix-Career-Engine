class Job:
    def __init__(
        self,
        job_id,
        title,
        company,
        location,
        description,
        skills
    ):
        self.id = job_id
        self.title = title
        self.company = company
        self.location = location
        self.description = description
        self.skills = skills
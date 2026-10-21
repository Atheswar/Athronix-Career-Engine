from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import jobs
from app.routes import resume
from app.routes import matching


app = FastAPI(
    title="Athronix Career API",
    description="AI-Based Resume Screening and Job Matching System",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(jobs.router, prefix="/api/jobs", tags=["Jobs"])
app.include_router(resume.router, prefix="/api/resume", tags=["Resume"])
app.include_router(matching.router, prefix="/api/matching", tags=["Matching"])


@app.get("/")
def home():
    return {
        "message": "Welcome to Athronix Career API",
        "status": "running"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy"
    }
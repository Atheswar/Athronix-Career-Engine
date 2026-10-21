# 🚀 Athronix Career

An AI-powered, full-stack web application for **resume screening, skill extraction, and intelligent job matching**. Built with **FastAPI backend and React frontend**, Athronix Career helps candidates understand their skills and discover job opportunities that match their profile.

---

## 🎯 Features

### 📄 Resume Management
✅ Upload resumes in PDF, DOCX, and TXT formats  
✅ Automatic resume text extraction  
✅ Resume content analysis  
✅ Technical skill identification  
✅ Skill count and profile summary  

### 🧠 AI-Powered Resume Screening
✅ Automatic skill extraction from resumes  
✅ Resume-to-job skill comparison  
✅ Candidate skill profiling  
✅ Match score calculation  
✅ Relevant job recommendations  

### 💼 Job Matching
✅ Compare candidate skills with job requirements  
✅ Calculate job compatibility percentage  
✅ Display matched skills  
✅ Rank jobs based on match score  
✅ Location-based job information  

### 📊 Career Dashboard
✅ Resume analysis dashboard  
✅ Extracted skill display  
✅ Recommended jobs  
✅ Match percentage visualization  
✅ Matched and missing skill identification  

### 🔌 REST API
✅ FastAPI-based backend  
✅ RESTful API architecture  
✅ Swagger API documentation  
✅ CORS support  
✅ Separate service and route layers  

### 🤖 AI / ML Extension
The current application provides a foundation for advanced AI-based career intelligence.

Planned capabilities include:

🤖 NLP-based resume understanding  
🧠 Semantic resume-to-job matching  
🎯 Skill gap analysis  
📚 Personalized learning recommendations  
💬 AI career assistant  
🔎 Intelligent job discovery  
📈 Candidate career scoring  

Planned Evolution:

```text
Resume Upload
      ↓
Resume Text Extraction
      ↓
NLP / Skill Extraction
      ↓
Candidate Profile
      ↓
Semantic Job Matching
      ↓
Skill Gap Analysis
      ↓
Job Recommendation
      ↓
Personalized Career Guidance
```

---

# 🛠️ Tech Stack

## Backend

| Technology | Usage |
|---|---|
| Python | Programming Language |
| FastAPI | Backend Framework |
| Pydantic | Data Validation |
| Uvicorn | ASGI Server |
| PyPDF | PDF Resume Processing |
| python-docx | DOCX Resume Processing |
| REST API | Backend Communication |

## Frontend

| Technology | Usage |
|---|---|
| React | Frontend Framework |
| JavaScript | Programming Language |
| Vite | Frontend Build Tool |
| Axios | HTTP Client |
| HTML5 | Page Structure |
| CSS3 | Responsive Styling |

## Data

| Technology | Usage |
|---|---|
| JSON | Job and Skill Data |
| File Processing | Resume Data |

---

# 📋 Prerequisites

Before you begin, make sure the following are installed:

- Python 3.10+
- Node.js 18+
- npm
- Git
- VS Code or any preferred IDE

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Atheswar/athronix-career.git
```

Navigate to the project:

```bash
cd athronix-career
```

---

# ⚙️ Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

✅ Backend API:

```text
http://localhost:8000
```

✅ Swagger API Documentation:

```text
http://localhost:8000/docs
```

---

# 🎨 Frontend Setup

Open a new terminal.

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

✅ Frontend application:

```text
http://localhost:5173
```

---

# 🚀 Running the Application

Start the backend first:

```bash
cd backend
venv\Scripts\activate
uvicorn app.main:app --reload
```

Then start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open the application:

```text
http://localhost:5173
```

---

# 📁 Project Structure

```text
athronix-career/
│
├── backend/                                  # FastAPI Backend
│   ├── app/
│   │   ├── database/
│   │   │   └── database.py                  # Data Access Utilities
│   │   │
│   │   ├── models/                           # Application Models
│   │   │   ├── job.py
│   │   │   └── resume.py
│   │   │
│   │   ├── schemas/                          # Pydantic Schemas
│   │   │   ├── job.py
│   │   │   └── resume.py
│   │   │
│   │   ├── routes/                           # REST API Routes
│   │   │   ├── jobs.py
│   │   │   ├── resume.py
│   │   │   └── matching.py
│   │   │
│   │   ├── services/                         # Business Logic
│   │   │   ├── resume_parser.py
│   │   │   ├── skill_extractor.py
│   │   │   └── job_matcher.py
│   │   │
│   │   └── main.py                           # FastAPI Application Entry
│   │
│   ├── requirements.txt                       # Python Dependencies
│   └── .env.example                           # Environment Configuration
│
├── frontend/                                 # React Frontend
│   ├── src/
│   │   ├── components/                       # Reusable Components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ResumeUpload.jsx
│   │   │   ├── JobCard.jsx
│   │   │   └── MatchScore.jsx
│   │   │
│   │   ├── pages/                            # Application Pages
│   │   │   ├── Home.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── services/                         # API Service Layer
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx                           # Main React Component
│   │   ├── main.jsx                          # React Entry Point
│   │   └── index.css                         # Global Styles
│   │
│   ├── public/                               # Public Assets
│   ├── index.html                            # HTML Template
│   └── package.json                          # Dependencies
│
├── data/                                     # Application Data
│   ├── jobs.json                             # Job Dataset
│   └── skills.json                           # Skill Dataset
│
├── .gitignore                                # Git Ignore Rules
└── README.md                                 # Project Documentation
```

---

# 🔌 API Endpoints

## Resume API

### Analyze Resume

```text
POST /api/resume/analyze
```

Upload:

```text
PDF
DOCX
TXT
```

Response:

```json
{
  "filename": "resume.pdf",
  "skills": [
    "Python",
    "FastAPI",
    "SQL",
    "React"
  ],
  "skill_count": 4
}
```

---

## Jobs API

### Get All Jobs

```text
GET /api/jobs/
```

Returns all available jobs.

### Get Job by ID

```text
GET /api/jobs/{job_id}
```

Returns details of a specific job.

---

## Job Matching API

### Match Resume with Jobs

```text
POST /api/matching/
```

Request:

```json
{
  "skills": [
    "Python",
    "FastAPI",
    "SQL",
    "Git"
  ]
}
```

Response:

```json
{
  "resume_skills": [
    "Python",
    "FastAPI",
    "SQL",
    "Git"
  ],
  "recommendations": [
    {
      "job": {
        "id": 2,
        "title": "Python Developer",
        "company": "AI Technologies"
      },
      "match_score": 80.0,
      "matched_skills": [
        "Python",
        "FastAPI",
        "SQL",
        "Git"
      ]
    }
  ]
}
```

---

# 🧠 Matching Algorithm

The current version uses a **skill-based matching algorithm**.

```text
Candidate Resume Skills
          ↓
Extract Technical Skills
          ↓
Compare With Job Skills
          ↓
Find Matching Skills
          ↓
Calculate Match Percentage
          ↓
Rank Jobs
          ↓
Display Recommendations
```

### Match Score

```text
Match Score =
(Number of Matched Skills / Number of Required Skills) × 100
```

For example:

```text
Candidate Skills:
Java
Spring Boot
SQL
Git

Job Requirements:
Java
Spring Boot
SQL
REST API
Git

Matched Skills = 4
Required Skills = 5

Match Score = 80%
```

---

# 🗄️ Data Structure

## Jobs

```json
{
  "id": 1,
  "title": "Java Developer",
  "company": "Tech Solutions",
  "location": "Chennai",
  "description": "Develop backend applications using Java and Spring Boot.",
  "skills": [
    "Java",
    "Spring Boot",
    "SQL",
    "REST API",
    "Git"
  ]
}
```

## Skills

```json
{
  "name": "Java"
}
```

---

# 🔄 Application Workflow

```text
                    ATHRONIX CAREER
                           │
                           ▼
                    Resume Upload
                           │
                           ▼
                  FastAPI REST API
                           │
                           ▼
                  Resume Text Parser
                           │
                           ▼
                   Skill Extraction
                           │
                           ▼
                  Candidate Profile
                           │
                           ▼
                   Job Matching Engine
                           │
                    ┌──────┴──────┐
                    ▼             ▼
               Job Skills     Match Score
                    │             │
                    └──────┬──────┘
                           ▼
                  Ranked Job Results
                           │
                           ▼
                    React Dashboard
```

---

# 📊 Example Use Case

A candidate uploads a resume containing:

```text
Java
Spring Boot
MySQL
REST API
Git
React
```

Athronix Career analyzes the resume and extracts these skills.

The system then compares the skills against available job requirements.

Example:

| Job | Match |
|---|---:|
| Java Developer | 100% |
| Backend Developer | 80% |
| Python Developer | 40% |
| Frontend Developer | 40% |

The highest matching jobs are displayed first.

---

# 🔮 Future Roadmap

## Phase 1 — Core Platform

✅ Resume upload  
✅ Resume text extraction  
✅ Skill extraction  
✅ Job database  
✅ Skill-based job matching  
✅ Match score  
✅ React dashboard  

## Phase 2 — AI / NLP

🔄 NLP-based resume understanding  
🔄 Semantic similarity matching  
🔄 Context-aware skill extraction  
🔄 Job description analysis  
🔄 Skill gap detection  

## Phase 3 — Career Intelligence

🔄 Personalized job recommendations  
🔄 Learning recommendations  
🔄 Resume improvement suggestions  
🔄 AI career assistant  
🔄 Career readiness score  

## Phase 4 — Platform Expansion

🔄 User authentication  
🔄 MySQL/PostgreSQL integration  
🔄 Job application tracking  
🔄 Recruiter dashboard  
🔄 Job search API integration  
🔄 Android application  

---

# 🧪 Testing

Backend health check:

```text
GET /api/health
```

Expected response:

```json
{
  "status": "healthy"
}
```

API documentation:

```text
http://localhost:8000/docs
```

Frontend:

```text
http://localhost:5173
```

---

# 📦 Production Build

## Frontend

```bash
cd frontend
npm run build
```

Production files will be generated in:

```text
frontend/dist/
```

## Backend

Run with:

```bash
uvicorn app.main:app
```

For production deployment, configure:

- Environment variables
- Production database
- HTTPS
- CORS restrictions
- Secure file upload handling

---

# ☁️ Deployment

Athronix Career can be deployed using modern cloud platforms.

### Backend

Possible deployment platforms:

- Render
- Railway
- AWS
- Azure
- Google Cloud

### Frontend

Possible deployment platforms:

- Vercel
- Netlify
- Render

### Deployment Flow

```text
GitHub
   ↓
Backend Deployment
   ↓
FastAPI API
   ↓
Frontend Deployment
   ↓
React Application
   ↓
Production Users
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch:

```bash
git checkout -b feature/YourFeature
```

3. Make your changes.

4. Commit your changes:

```bash
git commit -m "Add YourFeature"
```

5. Push your branch:

```bash
git push origin feature/YourFeature
```

6. Open a Pull Request.

---

# 📞 Support & Contact

**Atheswar M A**

📧 Email: athesmuthu@gmail.com

🔗 GitHub: Atheswar

🔗 LinkedIn: Atheswar M A

---

# 🎯 Quick Commands Reference

## Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Production Build

```bash
cd frontend
npm run build
```

## Git

```bash
git add .
git commit -m "Build Athronix Career application"
git push origin main
```

---

# ✨ Built With

❤️ Passion for Building Useful Software  
🐍 Python  
⚡ FastAPI  
⚛️ React  
🧠 AI & Machine Learning Concepts  
📄 Resume Intelligence  
🎯 Job Matching  
🚀 Modern Web Technologies  

---

## 🎉 Athronix Career

**Helping candidates discover better career opportunities through intelligent resume analysis and job matching.**

Happy Coding! 🚀
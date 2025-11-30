# Here are your Instructions
This repository contains a frontend (Vite + React) in the `frontend/` folder and a FastAPI backend in the `backend/` folder. Below are quick commands to run the project locally.

## Prerequisites

- Docker (for MongoDB or docker-compose option)
- Python 3.10+ and `pip`
- Node.js and `npm`

## Start the backend (FastAPI)

From the repository root run:

```bash
python3 -m pip install -r [requirements.txt](http://_vscodecontentref_/5)
python3 -m uvicorn backend.server:app --reload --host 0.0.0.0 --port 8000
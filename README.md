# Studiroute Student Portal

A small student portal project containing a PocketBase backend and a Vite + React frontend.

**Repository layout**
- `backend/` : PocketBase binary and database files (`pb_data/`).
- `frontend/` : Vite + React app (source in `frontend/src`).

**Prerequisites**
- Node.js (LTS) and `npm` for the frontend.
- On Windows the included `pocketbase.exe` is used for the backend. Alternatively install PocketBase for your platform.

**Run locally (Windows / PowerShell)**

1) Start the backend (PocketBase). From the repository root:

```powershell
Set-Location .\backend
.\pocketbase.exe serve --dir .\pb_data
```

PocketBase by default listens on `http://127.0.0.1:8090` (adjust if you configured a different port).

2) Start the frontend (Vite + React). In a new terminal:

```powershell
Set-Location .\frontend
npm install
npm run dev
```

Open the dev server address printed by Vite (usually `http://localhost:5173`). The frontend is typically configured to talk to the backend at `http://127.0.0.1:8090` — change that base URL in the frontend code if needed.

**Build frontend for production**

```powershell
Set-Location .\frontend
npm run build
```

**Notes & Tips**
- There is a `frontend/README.md` with frontend-specific notes; this root README provides a quick start for the whole project.
- If you need to reinitialize the PocketBase data in `backend/pb_data`, stop the server and replace the files (or back them up) — be careful, data files are included in the repo currently.

**Creating the GitHub repository & pushing**
- If you want me to create the GitHub repository for you with the GitHub CLI, tell me the `username`, `repo-name`, and `visibility` (public/private) and I can continue.
- Or run these commands locally (replace placeholders):

```powershell
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

**Contributing**
- Open issues and PRs are welcome. Describe your changes and how to test them.

**License**
- Add a `LICENSE` file if you want to set a license for this project.

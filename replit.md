# Biomedical Engineering Portfolio

## Overview
A professional portfolio website for a biomedical engineer featuring:
- Static pages served via Express.js
- Contact form with SQLite database backend
- Real-time display of consultation history

## Project Structure
```
.
├── index.js          # Express server (port 5000)
├── biomedica.db      # SQLite database for comments/consultations
├── package.json      # Node.js dependencies
└── public/           # Static frontend files
    ├── index.html    # Main HTML page
    ├── script.js     # Frontend JavaScript
    └── styles.css    # Stylesheet
```

## Technology Stack
- **Runtime**: Node.js 20
- **Framework**: Express.js 5.x
- **Database**: SQLite3 (file-based)
- **Frontend**: Vanilla HTML/CSS/JS

## Running the Application
The application runs on port 5000 via the "Web Server" workflow:
```bash
node index.js
```

## API Endpoints
- `GET /api/comentarios` - Retrieve all consultations
- `POST /api/comentarios` - Submit a new consultation (requires: nombre, mensaje)

## Recent Changes
- 2026-01-28: Configured for Replit environment (port 5000, 0.0.0.0 host binding)


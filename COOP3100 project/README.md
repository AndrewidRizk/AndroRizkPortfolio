# Andro Rizk - Professional Portfolio

A modern, responsive portfolio website built with React, Vite, and TailwindCSS.

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or the next available port).

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## Adding Your Assets

To personalize the portfolio, add these files to the `/public` folder:

- **`headshot.jpg`** - Your professional headshot photo
- **`resume.pdf`** - Your resume PDF
- **`project-studyspots.png`** - Screenshot of the StudySpots project (or remove from code)

Then update the URLs in `src/Portfolio.jsx`:
- `RESUME_URL` (line 10)
- `HEADSHOT_URL` (line 11)
- `ABOUT_VIDEO_URL` (line 12) - Replace with your YouTube/Vimeo embed URL

## Project Structure

```
├── public/              # Static assets (add your images/PDFs here)
├── src/
│   ├── Portfolio.jsx    # Main portfolio component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind imports
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## Deployment

Deploy to:
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag the `dist/` folder after running `npm run build`
- **GitHub Pages**: Use `gh-pages` package

## Tech Stack

- React 18
- Vite 5
- TailwindCSS 3
- Modern ES modules

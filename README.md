# Astuti Kumari — Cybersecurity Portfolio

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📝 Personalize

All your data lives in **one file**: `src/constants/data.js`

Update these fields:
- `PERSONAL.email` — your email
- `PERSONAL.github` — your GitHub URL
- `PERSONAL.linkedin` — your LinkedIn URL
- `PERSONAL.tryhackme` — your TryHackMe profile URL
- `PERSONAL.resume` — put `resume.pdf` in the `/public` folder
- `PROJECTS[*].github` — your actual GitHub repo links
- `LABS[1].link` — your TryHackMe profile link
- `BLOGS[*].link` — your Medium article links

## 📁 Structure

```
src/
├── constants/
│   └── data.js          ← ALL your content lives here
├── components/
│   ├── Portfolio.jsx     ← root composer
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx         ← also exports SectionHeader, AnimCard, Badge
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Labs.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   ├── Blogs.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── useInView.js      ← scroll animation hook
├── App.jsx
├── main.jsx
└── index.css             ← CSS variables & globals
```

## 🌐 Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy ✅

## 📄 Resume

Place your `resume.pdf` inside the `/public` folder.
It will be available at `https://yoursite.vercel.app/resume.pdf`
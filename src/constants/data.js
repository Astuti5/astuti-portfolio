// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Astuti Kumari",
  title: "Cybersecurity Student | Penetration Tester | Bug Bounty Learner",
  tagline: "Passionate about securing web applications through practical penetration testing, vulnerability assessment, and hands-on security research.",
  location: "Ranchi, Jharkhand, India",
  email: "your.email@example.com",       // ← UPDATE
  github: "https://github.com/yourusername",  // ← UPDATE
  linkedin: "https://linkedin.com/in/yourusername", // ← UPDATE
  tryhackme: "https://tryhackme.com/p/yourusername", // ← UPDATE
  resume: "/resume.pdf",  // ← put resume.pdf in /public folder
  status: "Open to AppSec & VAPT Internships",
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "Home",     id: "home" },
  { label: "About",    id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Labs",     id: "labs" },
  { label: "Skills",   id: "skills" },
  { label: "Certs",    id: "certifications" },
  { label: "Contact",  id: "contact" },
]

// ─── HERO STATS ───────────────────────────────────────────────────────────────
export const STATS = [
  { value: 100, suffix: "+", label: "Security Labs" },
  { value: 6,   suffix: "",  label: "Projects" },
  { value: 2,   suffix: "",  label: "Internships" },
  { value: 8,   suffix: "+", label: "Certificates" },
]

// ─── HERO TERMINAL LINES ──────────────────────────────────────────────────────
export const TERMINAL_LINES = [
  { type: "prompt",  text: "whoami" },
  { type: "output",  text: "Astuti Kumari — Cybersecurity Student & Penetration Tester" },
  { type: "prompt",  text: "ls -la skills/" },
  { type: "output",  text: "WebAppSec  VAPT  BurpSuite  Kali  Python  OWASP" },
  { type: "prompt",  text: "cat status.txt" },
  { type: "success", text: "[ OPEN TO INTERNSHIPS ] AppSec | VAPT | Bug Bounty" },
  { type: "prompt",  text: "nmap -sV targets.txt" },
  { type: "output",  text: "Scanning... vulnerabilities identified. Report generated." },
]

// ─── CURRENTLY LEARNING ───────────────────────────────────────────────────────
export const CURRENTLY_LEARNING = [
  { icon: "🕷️", text: "PortSwigger Web Security Academy — Advanced Labs" },
  { icon: "🎯", text: "Bug Bounty Methodology & Recon Automation" },
  { icon: "🐍", text: "Python Security Automation & Tool Development" },
  { icon: "📦", text: "Hack The Box — Active Machines" },
]

// ─── ABOUT POINTS ─────────────────────────────────────────────────────────────
export const ABOUT_POINTS = [
  { icon: "🎓", text: "B.Tech CSE Student — Cybersecurity focus" },
  { icon: "🔍", text: "VAPT Intern @ JD Infotech (July–Aug 2025)" },
  { icon: "💻", text: "Cybersecurity Intern @ Prodigy InfoTech (June–July 2025)" },
  { icon: "🎓", text: "Cybersecurity Trainer @ Technoryx Society" },
  { icon: "🌐", text: "Focus: Web App Security & Bug Bounty Hunting" },
  { icon: "🚩", text: "Active CTF player — TryHackMe, PicoCTF, HTB" },
]

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    icon: "🛡️",
    role: "Cyber Security Intern — VAPT & Web Security",
    org: "JD Infotech",
    period: "July 2025 – August 2025",
    color: "var(--burgundy-glow)",
    points: [
      "Performed Vulnerability Assessment & Penetration Testing on web applications.",
      "Practiced SQL Injection, XSS, and security misconfiguration exploitation.",
      "Worked with Kali Linux, Burp Suite, and OSINT reconnaissance techniques.",
    ],
  },
  {
    icon: "💻",
    role: "Cybersecurity Intern",
    org: "Prodigy InfoTech",
    period: "June 2025 – July 2025",
    color: "var(--rose)",
    points: [
      "Built security tools: Caesar Cipher, Password Strength Checker, Keylogger, Network Packet Analyzer.",
      "Strengthened Python scripting for cybersecurity automation.",
      "Delivered production-ready internship deliverables.",
    ],
  },
  {
    icon: "🎓",
    role: "Cybersecurity Trainer",
    org: "Technoryx Society",
    period: "August 2025 – Present",
    color: "var(--mint)",
    points: [
      "Mentor juniors in Networking, Linux, OWASP Top 10, and Web Security.",
      "Guide learners through TryHackMe and PortSwigger Academy labs.",
      "Conduct hands-on cybersecurity awareness sessions and workshops.",
    ],
  },
  {
    icon: "📢",
    role: "Media & Social Outreach Team Lead",
    org: "Technoryx Society",
    period: "August 2025 – Present",
    color: "var(--amber)",
    points: [
      "Lead an 8-member media and outreach team.",
      "Manage technical branding, event promotions, and content calendar.",
      "Create cybersecurity awareness content for LinkedIn and Instagram.",
    ],
  },
  {
    icon: "🔬",
    role: "Cybersecurity Trainee — Self-Directed Research",
    org: "Application Security & Bug Bounty Learning",
    period: "2024 – Present",
    color: "var(--cream-muted)",
    points: [
      "Completing TryHackMe, PortSwigger, PicoCTF, Bandit, and HTB labs.",
      "Studying secure code review and bug bounty methodologies.",
      "Building personal security tools and publishing research notes.",
    ],
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    icon: "🔐",
    title: "Password Strength Checker",
    tech: ["Python", "Security"],
    desc: "Evaluates password entropy, complexity patterns, and strength scoring. Provides actionable feedback to improve credential security.",
    github: "https://github.com/yourusername/password-strength-checker", // ← UPDATE
    demo: null,
  },
  {
    icon: "🛰️",
    title: "Network Port Scanner",
    tech: ["Python", "Networking"],
    desc: "Lightweight Nmap-inspired scanner to enumerate open ports, detect running services, and map basic network topology.",
    github: "https://github.com/yourusername/port-scanner", // ← UPDATE
    demo: null,
  },
  {
    icon: "📡",
    title: "Network Packet Analyzer",
    tech: ["Python", "Scapy"],
    desc: "Captures and dissects live network packets to analyze protocols, detect anomalies, and understand traffic patterns in real time.",
    github: "https://github.com/yourusername/packet-analyzer", // ← UPDATE
    demo: null,
  },
  {
    icon: "⌨️",
    title: "Simple Keylogger",
    tech: ["Python", "Security Research"],
    desc: "Educational security tool demonstrating keystroke logging mechanics — built to understand and defend against such attack vectors.",
    github: "https://github.com/yourusername/keylogger-edu", // ← UPDATE
    demo: null,
  },
  {
    icon: "🔑",
    title: "Caesar Cipher Tool",
    tech: ["Python", "Cryptography"],
    desc: "Implements classical substitution cipher with brute-force and frequency analysis capabilities. Explores foundational cryptography concepts.",
    github: "https://github.com/yourusername/caesar-cipher", // ← UPDATE
    demo: null,
  },
  {
    icon: "🌐",
    title: "Cybersecurity Portfolio",
    tech: ["React", "Vite"],
    desc: "This portfolio — a production-grade, interactive single-page application showcasing security skills, projects, and learning journey.",
    github: "https://github.com/yourusername/portfolio", // ← UPDATE
    demo: null,
  },
]

// ─── LABS ─────────────────────────────────────────────────────────────────────
export const LABS = [
  {
    icon: "🕷️",
    platform: "PortSwigger Web Security Academy",
    color: "var(--burgundy-glow)",
    stat: "13+ Labs Done",
    items: ["SQL Injection", "XSS", "Authentication Flaws", "Access Control", "CSRF", "SSRF", "Command Injection", "File Upload", "JWT Attacks", "Clickjacking", "Path Traversal", "XXE", "Business Logic"],
    note: "Practical labs focused on real-world web vulnerabilities and secure remediation.",
    link: "https://portswigger.net/web-security/all-labs", // Opens the public labs page
    linkLabel: "View Academy",
  },
  {
    icon: "🚩",
    platform: "TryHackMe",
    color: "var(--mint)",
    stat: "12+ Rooms",
    items: ["Jr Penetration Tester", "Pre Security", "Web Fundamentals", "OWASP Top 10", "Burp Suite", "Nmap", "Linux PrivEsc", "Metasploit", "Hydra", "Vulnversity", "Blue", "RootMe"],
    note: "Structured learning paths and rooms for practical offensive security skills.",
    link: "https://tryhackme.com/p/yourusername", // ← UPDATE with your THM username
    linkLabel: "View My Profile",
  },
  {
    icon: "📦",
    platform: "Hack The Box",
    color: "var(--amber)",
    stat: "Active",
    items: ["Starting Point", "Academy Modules", "Basic Enumeration", "Footprinting", "Network Traffic Analysis"],
    note: "Machine exploitation and academy module completion.",
    link: "https://www.hackthebox.com",
    linkLabel: "Visit HTB",
  },
  {
    icon: "🎯",
    platform: "PicoCTF & OverTheWire",
    color: "var(--rose)",
    stat: "7 Categories",
    items: ["Web Exploitation", "Cryptography", "Reverse Engineering", "Forensics", "Bandit Wargame", "SSH & Bash", "Linux Permissions"],
    note: "CTF challenges and wargames building real penetration testing intuition.",
    link: "https://picoctf.org",
    linkLabel: "Visit PicoCTF",
  },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const SKILLS = [
  { cat: "Offensive Tools", color: "var(--burgundy-glow)", items: ["Burp Suite", "Nmap", "Metasploit", "Wireshark", "Nikto", "OWASP ZAP", "Dirb", "Gobuster"] },
  { cat: "Security Platforms", color: "var(--mint)", items: ["TryHackMe", "PortSwigger", "Hack The Box", "PicoCTF", "OverTheWire", "Forage"] },
  { cat: "Programming", color: "var(--amber)", items: ["Python", "Bash", "Java", "C", "C++", "SQL"] },
  { cat: "OS & DevTools", color: "var(--rose)", items: ["Kali Linux", "Linux", "Git", "GitHub", "MySQL", "MongoDB"] },
]

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
// HOW TO USE image & verifyUrl:
// image: "/certs/tata.jpg"     ← put your cert JPG/PNG in /public/certs/ folder
// verifyUrl: "https://..."     ← paste the Forage / Credly / LinkedIn verify link
// Modal handles all cases: image only, verifyUrl only, both, or neither.

export const CERTS = [
  {
    icon: "🎓",
    name: "Ethical Hacking & Cyber Security",
    org: "IIT Delhi — World Technocon",
    image: "/certs/iit-delhi.jpg",   // ← add image to /public/certs/
    verifyUrl: null,
  },
  {
    icon: "🏆",
    name: "Grandmaster Level 3 — Cyber Security",
    org: "Skill Certification",
    image: "/certs/grandmaster.jpg",
    verifyUrl: null,
  },
  {
    icon: "🔷",
    name: "Tata Cybersecurity Analyst",
    org: "Forage Virtual Experience",
    image: "/certs/tata.jpg",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/yourlink", // ← UPDATE
  },
  {
    icon: "🛡️",
    name: "AIG Shields Up Cybersecurity",
    org: "Forage Job Simulation",
    image: "/certs/aig.jpg",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/yourlink", // ← UPDATE
  },
  {
    icon: "💳",
    name: "Mastercard Cybersecurity",
    org: "Forage Virtual Experience",
    image: "/certs/mastercard.jpg",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/yourlink", // ← UPDATE
  },
  {
    icon: "🔍",
    name: "Deloitte Cyber Security",
    org: "Forage Virtual Experience",
    image: "/certs/deloitte.jpg",
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/yourlink", // ← UPDATE
  },
  {
    icon: "💻",
    name: "IBM Cybersecurity Fundamentals",
    org: "IBM SkillsBuild",
    image: "/certs/ibm.jpg",
    verifyUrl: null,
  },
  {
    icon: "📜",
    name: "Cybersecurity Internship",
    org: "Prodigy InfoTech",
    image: "/certs/prodigy.jpg",
    verifyUrl: null,
  },
]

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────
export const BLOGS = [
  {
    icon: "💉",
    title: "Understanding SQL Injection for Beginners",
    tag: "Web Security",
    desc: "A practical guide to SQL Injection — how it works, common attack patterns, and how developers can prevent it.",
    link: "https://medium.com/@yourusername", // ← UPDATE
    readTime: "5 min read",
  },
  {
    icon: "🔫",
    title: "Getting Started with Burp Suite",
    tag: "Tools",
    desc: "Step-by-step introduction to intercepting HTTP requests, using Repeater, and discovering web application vulnerabilities.",
    link: "https://medium.com/@yourusername", // ← UPDATE
    readTime: "7 min read",
  },
  {
    icon: "📋",
    title: "OWASP Top 10 — Simply Explained",
    tag: "Web Security",
    desc: "Breaking down the most critical web application vulnerabilities with real examples and practical mitigation techniques.",
    link: "https://medium.com/@yourusername", // ← UPDATE
    readTime: "8 min read",
  },
]

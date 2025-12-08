export const BOOT_MESSAGES = [
    "BIOS Date 01/01/24 15:23:00 Ver: 1.0.2",
    "CPU: Quantum Core i9, Speed: 9000MHz",
    "Memory Test: 64536K OK",
    "Loading Kernel...... OK",
    "Mounting File System...... OK",
    "Starting User Interface......",
    "Welcome, 4nkit.",
];

export const SKILLS = [
    {
        category: "01_CORE_SYSTEMS",
        items: ["C / C++", "Java", "Python", "Git", "SQL"],
    },
    {
        category: "02_BACKEND_INFRA",
        items: ["Django", "Flask", "Node.js", "Express", "SpringBoot"],
    },
    {
        category: "03_FRONTEND_UI",
        items: ["HTML5 / CSS3", "JavaScript", "React.js"],
    },
];

export const EXPERIENCE = [
    {
        id: "current",
        hash: "#8f3a2c",
        time: "Current",
        company: "TCS (Tata Consultancy Services)",
        role: "System Engineer",
        points: [
            "Integrated Python/Django middleware for internal tools.",
            "Automated ETQ API data fetching workflows.",
            "Optimized SQL queries reducing load times.",
            "Collaborated in Agile/Scrum environment.",
        ],
    },
    {
        id: "init",
        hash: "#init00",
        time: null,
        company: null,
        role: null,
        points: [],
        isStart: true,
    },
];

export const PROJECTS = [
    {
        id: "text-editor",
        path: "~/projects/text_editor",
        cmd: "cat README.md",
        title: "Text Editor in C",
        desc: "A lightweight, terminal-based text editor built from scratch using raw mode input processing.",
        stack: "[ C ] [ Make ] [ Unix APIs ]",
        link: "https://github.com/Ankit-Patra/kilo",
    },
    {
        id: "django-app",
        path: "~/projects/django_app",
        cmd: "cat description.txt",
        title: "Django Web App",
        desc: "Scalable web application featuring custom user authentication and PostgreSQL integration.",
        stack: "[ Django ] [ Python ] [ SQL ]",
        link: "#",
    },
    {
        id: "react-dash",
        path: "~/projects/react_dashboard",
        cmd: "npm start",
        title: "React Dashboard",
        desc: "Interactive dashboard visualizing real-time data with responsive components.",
        stack: "[ React ] [ Node ] [ Chart.js ]",
        link: "#",
    },
    {
        id: "devops-cli",
        path: "~/projects/devops_cli",
        cmd: "python3 main.py --help",
        title: "DevOps CLI Tool",
        desc: "Automation CLI to scaffold projects and manage local docker containers efficiently.",
        stack: "[ Python ] [ Docker ] [ Click ]",
        link: "#",
    },
];

export const SOCIALS = {
    linkedin: "https://www.linkedin.com/in/ankitpatra123",
    github: "https://github.com/Ankit-Patra",
    email: "ankitpatra0123@gmail.com",
};

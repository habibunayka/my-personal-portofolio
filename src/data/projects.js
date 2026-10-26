// Existing card content, kept separate from modal presentation.
export const projects = [
    {
        title: "RPLint",
        subtitle: "Fingerprint Attendance System",
        image: "/assets/projects/rplint.png",
        id: "rplint",
        stacks: ["Laravel", "React Native", "Visual Basic"],
        overview:
            "RPLint is a fingerprint-based attendance management system designed to help schools record and monitor student attendance accurately and efficiently. The system integrates a fingerprint device with a centralized database, an admin and teacher web dashboard, a student mobile application, and a desktop attendance application.",
        features: [
            "Automatic fingerprint-based attendance",
            "Real-time attendance monitoring",
            "Student Android application",
            "Student and class management",
            "Class schedule management",
            "Attendance filtering by class and time range",
            "Attendance status for on-time, late, sick, and permitted students",
            "Special day and attendance exemption management",
            "Monthly attendance report export to Excel",
            "Student data import through Excel",
            "Fingerprint registration and management",
            "Student attendance history",
            "Daily class schedule display",
        ],
        role: "Full Stack Developer, Mobile Developer, IoT Engineer",
        contributions: [
            "Developed the web dashboard for attendance management and monitoring",
            "Developed the Android application for students",
            "Developed the desktop application for fingerprint attendance",
            "Integrated the system with the fingerprint device",
            "Connected applications with the centralized database and server",
            "Developed student, class, schedule, and attendance management features",
            "Implemented attendance reporting and Excel export functionality",
        ],
        year: "2026",
        links: [
            {
                label: "Report PDF (Indonesian)",
                url: "https://drive.google.com/file/d/1ISG-3o-iFAhwwJIevSBCDR2EzAD348kp/view?usp=sharing",
            },
            {
                label: "GitHub",
                url: "https://github.com/habibunayka/rplint",
            },
        ],
    },
    {
        title: "Lapor Dewan RIJAL",
        subtitle: "Public Complaint & Reporting Platform",
        image: "/assets/projects/lapor-dewan-rijal.png",
        id: "lapor-dewan-rijal",
        stacks: ["Laravel", "Tailwind CSS"],
        overview:
            "Lapor Dewan RIJAL is a public reporting platform designed to provide residents with an easy and accessible way to submit complaints, reports, and findings related to their local community. The platform helps streamline communication between residents and the RIJAL council while making public reports easier to manage and follow up.",
        features: [
            "Public complaint submission",
            "Community report management",
            "Easy-to-use reporting interface",
            "Information about the RIJAL council",
            "Report tracking and management",
            "Responsive web interface",
            "Clear call-to-action for submitting reports",
            "Community-focused information platform",
        ],
        role: "Full Stack Developer",
        contributions: [
            "Developed the public-facing website",
            "Designed and implemented the landing page interface",
            "Developed the complaint and reporting workflow",
            "Implemented responsive layouts for different screen sizes",
            "Built the navigation and content structure",
            "Integrated the reporting functionality with the backend",
            "Optimized the user experience for simple and accessible reporting",
        ],
        year: "2025",
        links: [
            {
                label: "Live Website",
                url: "https://lapordewanrijal.com",
            },
        ],
    },
    {
        title: "Cogito",
        subtitle: "Interactive Debate Platform",
        image: "/assets/projects/cogito.png",
        id: "cogito",

        stacks: ["Kotlin", "Node.js", "Express.js", "PostgreSQL", "Qwen Model"],

        overview:
            "Cogito is an interactive debate platform designed to strengthen critical thinking, logical reasoning, and perspective-taking through structured debates with AI or other users. Inspired by the Socratic method of questioning, Cogito encourages users to discover logical insights rather than simply receive answers. The platform leverages AI-powered argument generation, context-aware counterarguments, and logical fallacy detection to evaluate arguments, identify flawed reasoning, and promote meaningful, evidence-based discussions.",

        features: [
            "AI-powered debates with context-aware argument generation",
            "Real-time debates between users using Socket.io",
            "AI opponents that generate logical counterarguments",
            "Matchmaking based on user interests and skill levels",
            "AI-powered logical fallacy detection",
            "Detection of common fallacies such as ad hominem, strawman, and false cause",
            "Structured debate sessions to maintain focus and logical progression",
            "Argument evaluation and logical reasoning analysis",
            "Debate history, argument records, and scoring",
            "Interactive learning experience that encourages critical thinking",
        ],

        role: "Backend Developer",

        contributions: [
            "Developed the mobile application interface using Kotlin",
            "Built RESTful APIs using Node.js and Express.js",
            "Integrated an LLM-powered engine for argument generation and contextual counterarguments",
            "Designed PostgreSQL database structures for users, debates, arguments, and scores",
            "Implemented real-time communication for live debate sessions using Socket.io",
            "Developed NLP-based logical fallacy detection for identifying flawed arguments",
            "Implemented matchmaking functionality for debates between users and AI",
            "Designed structured debate workflows to maintain relevance and logical consistency",
            "Integrated AI-driven reasoning capabilities to support meaningful debate evaluation",
            "Focused on an accessible and engaging user experience for first-time debaters",
        ],
        year: "2025",
        links: [
            {
                label: "Github",
                url: "https://github.com/LazyPota/Cogito",
            },
            {
                label: "Devpost",
                url: "https://devpost.com/software/cogito",
            },
        ],
    },

    {
        title: "Moneasy",
        subtitle: "Personal Finance Management Platform",
        image: "/assets/projects/moneasy.png",
        id: "moneasy",

        stacks: ["Golang", "Gin", "GORM", "MySQL", "REST API", "JWT"],

        overview:
            "Moneasy is a personal finance management platform designed to help Generation Z manage their personal finances and develop healthier financial habits. The application provides features for transaction management, smart budgeting, financial health analysis, and goal-based savings. As a Backend Developer, I focused on server-side development, database management, API development, and business logic to support financial tracking and budgeting functionalities.",

        features: [
            "Smart budgeting based on users' spending activities",
            "Financial health analysis based on financial data",
            "Transaction management for income and expenses",
            "Expense categorization and financial record tracking",
            "Goal-based savings management",
            "Financial data management through a MySQL database",
            "RESTful API integration for application features",
        ],

        role: "Backend Developer",

        contributions: [
            "Developed backend services using Golang and the Gin web framework",
            "Designed and implemented RESTful APIs for financial management features",
            "Implemented server-side business logic for transaction management",
            "Developed budgeting logic to support financial planning features",
            "Designed and managed relational database models using MySQL and GORM",
            "Implemented database operations for financial transactions and user data",
            "Supported financial health analysis through backend data processing",
            "Developed backend functionality for goal-based savings management",
            "Configured database connections and environment-based application settings",
            "Collaborated with frontend and machine learning components to support application integration",
        ],

        year: "2025",

        links: [
            {
                label: "GitHub",
                url: "https://github.com/habibunayka/moneasy",
            },
            {
                label: "Presentation (Canva)",
                url: "https://canva.link/9wosc9rzw39a63t",
            },
        ],
    },

    {
        title: "Rounded Blue Portfolio",
        subtitle: "Personal Portfolio Website",
        image: "/assets/projects/portofolio.png",
        id: "rounded-blue-portfolio",

        stacks: ["HTML", "CSS", "JavaScript", "Responsive Design", "EmailJS"],

        overview:
            "Rounded Blue Portfolio is a personal portfolio website designed to showcase my profile, technical skills, projects, and journey in software development. Featuring a modern blue-themed aesthetic, rounded UI elements, and a clean layout, the website provides a responsive and engaging browsing experience. Built with HTML, CSS, and JavaScript, it includes interactive navigation, scroll reveal animations, project showcases, and a contact form to help visitors explore my work and connect with me.",

        features: [
            "Modern blue-themed design with rounded UI elements",
            "Responsive layouts for desktop and mobile devices",
            "Interactive navigation with a sticky header",
            "Animated section reveals while scrolling",
            "Dedicated sections for profile, projects, and technical skills",
            "Project showcase cards with custom visual illustrations",
            "Personal education and development journey timeline",
            "Contact form integration using EmailJS",
            "Client-side contact form validation",
            "Social media links for easier communication",
        ],

        role: "Frontend Developer & UI Designer",

        contributions: [
            "Designed and implemented a rounded blue visual identity for the portfolio",
            "Developed the website structure using semantic HTML",
            "Created reusable styling patterns and responsive layouts with CSS",
            "Implemented interactive navigation and mobile menu functionality",
            "Developed scroll reveal animations using JavaScript",
            "Designed project showcase cards with custom CSS illustrations",
            "Organized portfolio content into clear and accessible sections",
            "Implemented the skills section and education timeline",
            "Integrated EmailJS for contact form functionality",
            "Optimized the interface for usability across different screen sizes",
        ],

        year: "2024",

        links: [
            {
                label: "GitHub",
                url: "https://github.com/habibunayka/rounded-blue-portfolio",
            },
        ],
    },
    {
        title: "GoPlants!",
        subtitle: "Pixel Art Farming Game",
        image: "/assets/projects/go-plants.png",
        id: "go-plants",

        stacks: ["HTML", "CSS", "JavaScript", "Game Development", "Pixel Art", "AI Integration"],

        overview:
            "GoPlants! is a pixel art farming simulation game developed for the LCGN AI 2025 competition. The game features an interactive gardening experience where players cultivate plants, monitor growth timers, collect in-game currency, and unlock customization options. Combining retro-inspired visuals with interactive gameplay mechanics, GoPlants! earned 2nd place nationally in LCGN AI 2025, demonstrating the team's creativity and ability to develop an engaging game experience.",

        features: [
            "Pixel art farming environment with retro-inspired visuals",
            "Plant cultivation and growth progression mechanics",
            "Multiple plant varieties with distinctive appearances",
            "Individual growth timers for plant development",
            "In-game currency and reward system",
            "Interactive plant and garden management",
            "In-game shop and item management interfaces",
            "Plant upgrades and progression mechanics",
            "Customizable plant pot skins",
            "Background music and interactive sound effects",
            "Interactive game navigation and gameplay screens",
        ],

        role: "Game Developer",

        contributions: [
            "Contributed to the development of GoPlants! for the LCGN AI 2025 competition",
            "Developed interactive gameplay mechanics using HTML, CSS, and JavaScript",
            "Implemented plant growth progression and timer functionality",
            "Developed in-game currency and plant management systems",
            "Implemented interactive interfaces for player navigation and actions",
            "Integrated pixel art assets for plants, backgrounds, and game objects",
            "Implemented gameplay audio and sound effect interactions",
            "Developed game screens and interactive dialogue sequences",
            "Contributed to the game's visual presentation and player experience",
            "Collaborated with the team to deliver a competition-ready game",
        ],

        year: "2025",

        links: [
            {
                label: "GitHub",
                url: "https://github.com/habibunayka/go-plants",
            },
            {
                label: "Youtube Demo",
                url: "https://www.youtube.com/watch?v=D8NjHypIJKY",
            },
        ],
    },
];

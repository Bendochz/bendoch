import { Activity, User, Code, Terminal, Box } from 'lucide-react';

export const INITIAL_STATE = {
    currentDir: "~/bendoch-corp",
    activeBuffer: "readme.md",
    mode: "NORMAL",
    founders: [
        {
            id: "ajay",
            name: "Ajay Giri",
            os: "macOS/Linux",
            role: "Full Stack & Systems", // Reflected his "Dual Nature"
            skills: ["RUST", "NEXT.JS", "SYSTEM DESIGN", "COMPILERS"],
            desc: "Full-Stack dev with a Systems heart. Bridging high-level web with low-level Rust.",
            status: "Compiling...",
            socials: {
                github: "https://github.com/imajaygiri",
                email: "mailto:sinexcosecx@gmail.com",
                linkedin: "https://www.linkedin.com/in/ajay-giri-8a8604380/",
            }
        },
        {
            id: "vatsal",
            name: "Vatsal Jaiswal",
            os: "Arch Linux",
            role: "Systems Programmer",
            skills: ["C", "RISC-V", "OS DEV", "VERILOG"],
            desc: "The Kernel Hacker. Designed a custom RISC-V compatible core and shell.",
            status: "Debugging Kernel",
            socials: {
                github: "https://github.com/Vatsalj17/",
                email: "mailto:vatsaljaiswal17@gmail.com",
                linkedin: "https://www.linkedin.com/in/vatsalj17/"
            }
        },
        {
            id: "aditya_m",
            name: "Aditya Mahore",
            os: "macOS",
            role: "Game Dev & Graphics", // Updated per your input
            skills: ["C++", "JAVA", "OPENGL", "GAME PHYSICS"],
            desc: "Building 2D adventure games in Java and porting engines to C++.", 
            status: "Rendering",
            socials: {
                github: "https://github.com/adityacore20",
                email: "mailto:adityamahore013@gmail.com",
                linkedin: "https://www.linkedin.com/in/aditya-mahore-671089329/"
            }
        },
        {
            id: "harsh",
            name: "Harsh Raj Singh",
            os: "Arch Linux",
            role: "Embedded Engineer",
            skills: ["EMBEDDED C", "PCB DESIGN", "IOT", "RTOS"],
            desc: "The Hardware Bridge. Translating software logic into voltage on custom PCBs.",
            status: "Soldering",
            socials: {
                github: "https://github.com/hrs-temp",
                email: "mailto:harsh@bendoch.com", 
                linkedin: "https://www.linkedin.com/in/harsh-raj-singh-50379630a/"
            }
        },
        {
            id: "aditya_d",
            name: "Aditya Dagar",
            os: "Linux/Win",
            role: "Android & ML Eng", // Updated per your input
            skills: ["KOTLIN", "ANDROID", "TENSORFLOW LITE", "PYTHON"],
            desc: "Native Android specialist diving deep into on-device Machine Learning.",
            status: "Training Model",
            socials: {
                github: "https://github.com/adidroid",
                email: "mailto:aditya1dagar@gmail.com",
                linkedin: "https://www.linkedin.com/in/aditya-dagar-875a29328/"
            }
        },
        {
            id: "akshit",
            name: "Akshit Kohli",
            os: "macOS",
            role: "Cloud & Web Ops",
            skills: ["AWS", "DOCKER", "REACT", "LINUX"],
            desc: "The Infrastructure. Orchestrating scalable cloud deployments.",
            status: "Deploying",
            socials: {
                github: "https://github.com/Akshit-kohli",
                email: "mailto:akshit.kohli2006@gmail.com",
                linkedin: "https://www.linkedin.com/in/akshit-kohli2006/"
            }
        },
    ],
    projects: [
        {
            id: "cli-tool",
            name: "Repo Manager CLI",
            lang: "Rust",
            author: "Ajay Giri",
            desc: "A high-performance terminal tool to manage git repositories.",
            url: "https://github.com/imajaygiri"
        },
        {
            id: "mini-cpu",
            name: "RISC-V Simulator",
            lang: "Verilog/C",
            author: "Vatsal Jaiswal",
            desc: "A custom instruction set architecture implementation.",
            url: "https://github.com/Vatsalj17/"
        },
        {
            id: "adventure-game",
            name: "2D Adventure Game", // Specific update for Mahore
            lang: "Java",
            author: "Aditya Mahore",
            desc: "A complete 2D game with custom physics and rendering logic.",
            url: "https://github.com/adityacore20"
        },
        {
            id: "iron-health",
            name: "Iron Health Tracker",
            lang: "Kotlin/ML",
            author: "Aditya Dagar",
            desc: "Native Android app integrated with predictive health models.",
            url: "https://github.com/adidroid"
        }
    ],
    files: [
        { name: "README.md", icon: <Activity size={14} />, content: "home" },
        { name: "team.json", icon: <User size={14} />, content: "team" },
        { name: "projects.go", icon: <Box size={14} />, content: "projects" },
        { name: "services.rs", icon: <Code size={14} />, content: "services" },
        { name: "contact.sh", icon: <Terminal size={14} />, content: "contact" },
    ],
};

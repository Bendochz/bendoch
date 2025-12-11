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
            role: "Full Stack & Systems",
            skills: ["RUST", "NEXT.JS", "SYSTEM DESIGN", "COMPILERS", "DOCKER"],
            desc: "Full-Stack developer with a Systems heart. Bridging high-level Web with low-level Rust.",
            status: "Compiling...",
            socials: {
                github: "https://github.com/imajaygiri",
                email: "mailto:sinexcosecx@gmail.com",
                linkedin: "https://www.linkedin.com/in/ajay-giri-8a8604380/",
                instagram: "https://www.instagram.com/_ajaygiri",
            }
        },
        {
            id: "vatsal",
            name: "Vatsal Jaiswal",
            os: "Arch Linux",
            role: "Systems Programmer",
            skills: ["C", "ASSEMBLY", "OS DEV", "GDB", "LINUX KERNEL"],
            desc: "Low-level specialist. Creator of custom Shells, Mini CPUs, and GDB implementations.",
            status: "Debugging...",
            socials: {
                github: "https://github.com/Vatsalj17",
                email: "mailto:vatsaljaiswal17@gmail.com",
                linkedin: "https://www.linkedin.com/in/vatsalj17/"
            }
        },
        {
            id: "aditya_m",
            name: "Aditya Mahore",
            os: "macOS",
            role: "Game Dev & Graphics",
            skills: ["C++", "JAVA", "OPENGL", "GAME PHYSICS", "SPRING BOOT"],
            desc: "The Graphics Engine. Building 2D adventure games in Java and porting engines to C++.",
            status: "Rendering...",
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
            skills: ["EMBEDDED C", "VERILOG", "RTOS", "PCB DESIGN"],
            desc: "The Hardware Interface. Translating software logic into voltage on custom PCBs.",
            status: "Soldering...",
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
            role: "Android & ML Eng",
            skills: ["KOTLIN", "ANDROID", "TENSORFLOW LITE", "PYTHON", "JETPACK"],
            desc: "Native Android specialist diving deep into on-device Machine Learning models.",
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
            skills: ["AWS", "DOCKER", "REACT", "PYTHON", "LINUX"],
            desc: "The Infrastructure. Orchestrating scalable cloud deployments and web systems.",
            status: "Deploying...",
            socials: {
                github: "https://github.com/Akshit-kohli",
                email: "mailto:akshit.kohli2006@gmail.com",
                linkedin: "https://www.linkedin.com/in/akshit-kohli2006/"
            }
        },
    ],
    // UPDATED PROJECTS LIST
    projects: [
        {
            id: "hls-engine",
            name: "HLS Video Engine",
            lang: "Node.js/FFmpeg",
            author: "Ajay Giri",
            desc: "Scalable video streaming backend with adaptive bitrate HLS transcoding.",
            url: "https://github.com/imajaygiri/video_streaming"
        },
        {
            id: "vsh-shell",
            name: "VSH - Unix Shell",
            lang: "C/Syscalls",
            author: "Vatsal Jaiswal",
            desc: "POSIX-compliant shell with pipelines, I/O redirection, and job control.",
            url: "https://github.com/Vatsalj17/vsh"
        },
        {
            id: "native-chan",
            name: "Native Chan Client",
            lang: "Kotlin/Compose",
            author: "Aditya Dagar",
            desc: "High-performance Android client for imageboards with pagination.",
            url: "https://github.com/adidroid/4chan"
        },
        {
            id: "adventure-engine",
            name: "2D Adventure Engine",
            lang: "Java/OpenGL",
            author: "Aditya Mahore",
            desc: "Complete 2D game framework and adventure game built from scratch.",
            url: "https://github.com/adityacore20/Adventure-Game"
        },
        {
            id: "smart-circuit",
            name: "Smart Circuit Controller",
            lang: "Embedded C/IoT",
            author: "Harsh Raj Singh",
            desc: "IoT based circuit controller for home automation and energy efficiency.",
            url: "https://github.com/hrs-temp"
        },
        {
            id: "cloud-drive",
            name: "Cloud Drive System",
            lang: "HTML/CSS",
            author: "Akshit Kohli",
            desc: "Responsive file storage interface clone inspired by Google Drive.",
            url: "https://github.com/Akshit-kohli"
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

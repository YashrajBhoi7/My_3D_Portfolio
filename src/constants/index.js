import { devtown, internpe} from "../assets/images";
import {
   
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    ecommerce,
    fusionai,
    portfolio,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
 
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Devtown",
        icon: devtown,
        iconBg: "#accbe1",
        date: "16 June 2022 - 24 June 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend developer",
        company_name: "Internpe",
        icon: internpe,
        iconBg: "#fbc3bc",
        date: "23 July 2023 - 23 July 2023",
        points: [
            "Developing and maintaining web applications using Html , Css , Javascript and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YashrajBhoi7',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yashraj-bhoi',
    }
];

export const projects = [
    {
        iconUrl: fusionai,
        theme: 'btn-back-red',
        name: 'AI Saas Platform',
        description: 'A Next.js app with React that includes user authentication with Clerk and real-time payments with Stripe, along with features like AI chat, image generation, code snippets, and music generation.',
        link: 'https://github.com/YashrajBhoi7',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-green',
        name: '3D Developer Portfolio',
        description: 'A 3D portfolio using React combines the flexibility and robustness of React with visual appeal of 3D graphics .',
        link: 'https://github.com/YashrajBhoi7',
    },
    {
        iconUrl: ecommerce,
        theme: 'btn-back-blue',
        name: 'E-commerce website',
        description: 'An e-commerce website using HTML, CSS, and JavaScript involves designing a user-friendly interface, implementing product listings, shopping cart functionality.',
        link: 'https://github.com/YashrajBhoi7',
    },
    
   
];
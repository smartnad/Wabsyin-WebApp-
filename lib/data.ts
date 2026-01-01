import { Code, Layout, Rocket, BrainCircuit, Zap } from "lucide-react";


export const services = [
    {
        icon: Code, // Using component reference to avoid serialization issues if any
        title: "Web App Development",
        desc: "Full-stack scalable applications using Next.js & Firebase. We build robust systems."
    },
    {
        icon: Layout,
        title: "UI/UX & Product Design",
        desc: "User-centric interfaces that convert. We turn complex flows into simple, beautiful designs."
    },
    {
        icon: Rocket,
        title: "Startup MVP Development",
        desc: "From idea to launch in weeks. Speed without technical debt to validate your market."
    },
    {
        icon: BrainCircuit,
        title: "SaaS & AI Solutions",
        desc: "Integrating AI models and SaaS logic. Subscription models, auth, and AI features."
    },
    {
        icon: Zap,
        title: "Performance & SEO",
        desc: "Optimizing for Core Web Vitals to ensure your app ranks high and loads instantly."
    },
];

export const projects = [
    {
        title: "The Kua Sigma",
        desc: "A modern educational platform with interactive modules.",
        link: "https://thekua-sigma.vercel.app",
        tags: ["Next.js", "Education", "Platform"],
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Doctor App",
        desc: "Comprehensive telemedicine and appointment booking solution.",
        link: "https://doctor-app-woad-phi.vercel.app",
        tags: ["Healthcare", "App", "Booking"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Green Energy",
        desc: "Sustainable energy solutions dashboard and tracking.",
        link: "https://green-enargy-z2jh.vercel.app",
        tags: ["Green Tech", "Dashboard"],
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "The Luxury Outfit",
        desc: "Premium e-commerce experience for high-end fashion.",
        link: "https://theluxuryoutfit.com",
        tags: ["E-commerce", "Fashion", "Premium"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Tab Tab Profile",
        desc: "Social profile aggregator and bio link tool.",
        link: "https://tab-tab-two.vercel.app/profile",
        tags: ["Social", "Tool"],
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "Cyber Cafe Online",
        desc: "Digital services platform for local businesses.",
        link: "https://cybercafeonlinebusiness.com",
        tags: ["Business", "Services"],
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2670&auto=format&fit=crop"
    }
];

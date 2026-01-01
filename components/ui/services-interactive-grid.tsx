"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Layout, Rocket, BrainCircuit, Zap, ArrowUpRight } from "lucide-react";

// --- Data ---
const services = [
    {
        icon: Code,
        title: "Web App Development",
        desc: "Full-stack scalable applications using Next.js & Firebase. We build robust systems.",
        tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Layout,
        title: "UI/UX & Product Design",
        desc: "User-centric interfaces that convert. We turn complex flows into simple, beautiful designs.",
        tags: ["Figma", "Design Systems", "Prototyping"],
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        icon: Rocket,
        title: "Startup MVP Development",
        desc: "From idea to launch in weeks. Speed without technical debt to validate your market.",
        tags: ["Rapid Dev", "Scalable", "MVP"],
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
    {
        icon: BrainCircuit,
        title: "SaaS & AI Solutions",
        desc: "Integrating AI models and SaaS logic. Subscription models, auth, and AI features.",
        tags: ["OpenAI", "LangChain", "Stripe"],
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    },
    {
        icon: Zap,
        title: "Performance & SEO",
        desc: "Optimizing for Core Web Vitals to ensure your app ranks high and loads instantly.",
        tags: ["Lighthouse 100", "SEO", "Vitals"],
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full bg-white rounded-3xl border border-slate-200 p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-indigo-100 hover:-translate-y-1"
        >
            {/* Background Gradient Animation on Hover */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-indigo-50/50 via-transparent to-transparent`}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.bg} ${service.color} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                        <service.icon size={28} />
                    </div>
                    <ArrowUpRight className={`text-slate-300 transition-all duration-300 group-hover:text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1`} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                    {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                    {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 group-hover:text-indigo-600 transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export function InteractiveServicesGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <ServiceCard key={idx} service={service} index={idx} />
            ))}
        </div>
    );
}

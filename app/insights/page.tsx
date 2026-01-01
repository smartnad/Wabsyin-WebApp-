"use client";

import { motion } from "framer-motion";
import { Server, Code2, Globe, Cpu } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { InteractiveMobileFirst } from "@/components/ui/mobile-first-interactive";

const capabilities = [
    {
        category: "Frontend Engineering",
        items: ["Next.js (App Router)", "React 19", "Tailwind CSS v4", "Framer Motion", "TypeScript"],
        icon: Code2,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        category: "Backend & Data",
        items: ["Firebase", "Node.js (Serverless)", "PostgreSQL (Supabase)", "Redis", "Edge Functions"],
        icon: Server,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    },
    {
        category: "Infrastructure",
        items: ["Vercel Edge Network", "CI/CD Pipelines", "Docker", "AWS S3 Integration"],
        icon: Globe,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        category: "AI & Performance",
        items: ["OpenAI API Integration", "Core Web Vitals Opt.", "Image Optimization", "SEO Strategy"],
        icon: Cpu,
        color: "text-rose-500",
        bg: "bg-rose-500/10"
    }
];

export default function InsightsPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center mb-20"
            >
                <div className="inline-block p-2 px-4 rounded-full bg-secondary/5 text-secondary text-sm font-semibold tracking-wide uppercase mb-6">
                    Capabilities & Insights
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
                    Our <span className="text-primary">Tech Stack</span> Radar.
                </h1>
                <p className="text-xl text-muted-foreground">
                    We bet on proven, scalable technologies that power the modern web. No legacy code, no bloat.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {capabilities.map((cap, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="h-full p-8 md:p-10 hover:shadow-xl transition-shadow border-primary/5 bg-white dark:bg-white dark:border-slate-100">
                            <div className={`w-14 h-14 rounded-2xl ${cap.bg} ${cap.color} flex items-center justify-center mb-6`}>
                                <cap.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 font-display text-slate-900">{cap.category}</h3>
                            <ul className="space-y-4">
                                {cap.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                        <span className="font-medium text-slate-500">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Insight Snippet */}
            {/* Insight Snippet */}
            <InteractiveMobileFirst />
        </div>
    );
}

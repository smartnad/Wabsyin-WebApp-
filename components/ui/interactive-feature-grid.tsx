"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Layers, Code2, ArrowRight } from "lucide-react";

// --- Utility Components ---

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            className={`relative rounded-3xl overflow-hidden bg-white border border-slate-200 group ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.1), transparent 40%)`,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};

// --- Feature Visuals ---

const SpeedVisual = () => (
    <div className="w-full h-32 bg-slate-50 relative overflow-hidden rounded-xl border border-slate-100 mb-6 flex items-center justify-center">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />

        {/* Animated Rocket */}
        <motion.div
            animate={{ x: [0, 100, 0], y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 p-3 bg-white rounded-full shadow-lg border border-indigo-100"
        >
            <Rocket className="w-6 h-6 text-indigo-600 transform -rotate-45" />
        </motion.div>

        {/* Motion Streaks */}
        {[1, 2, 3].map((i) => (
            <motion.div
                key={i}
                className="absolute h-0.5 bg-indigo-200 rounded-full"
                style={{
                    left: "20%",
                    top: `${30 + i * 20}%`,
                    width: 20 + i * 10
                }}
                animate={{ x: [-20, 200], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
            />
        ))}
    </div>
);

const ScalableVisual = () => (
    <div className="w-full h-32 bg-slate-50 relative overflow-hidden rounded-xl border border-slate-100 mb-6 flex items-center justify-center p-4">
        <div className="flex flex-col gap-2 w-full max-w-[140px]">
            <motion.div
                className="h-3 bg-white rounded-md border border-slate-200 shadow-sm w-[80%] mx-auto"
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
                className="h-3 bg-white rounded-md border border-slate-200 shadow-sm w-[90%] mx-auto"
                animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
            />
            <motion.div
                className="h-3 bg-white rounded-md border border-indigo-200 shadow-sm border-b-2 border-indigo-400 w-full mx-auto relative overflow-hidden"
            >
                <motion.div
                    className="absolute inset-0 bg-indigo-50"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>
            <div className="flex gap-1 justify-center mt-1">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-75" />
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-150" />
            </div>
        </div>
    </div>
);

const CodeVisual = () => (
    <div className="w-full h-32 bg-slate-900 relative overflow-hidden rounded-xl border border-slate-800 mb-6 flex flex-col p-4 font-mono text-[10px] text-slate-300 shadow-inner">
        <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500/20" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
            <div className="w-2 h-2 rounded-full bg-green-500/20" />
        </div>
        <div className="space-y-1">
            <p><span className="text-purple-400">const</span> <span className="text-blue-400">Future</span> = () ={">"} {"{"}</p>
            <p className="pl-2"><span className="text-purple-400">return</span> (</p>
            <p className="pl-4 text-green-400">"Wabsyin Built"</p>
            <p className="pl-2">);</p>
            <p>{"}"};</p>
            <motion.div
                className="w-2 h-4 bg-indigo-500 mt-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </div>
    </div>
);

// --- Main Grid Component ---

const features = [
    {
        title: "Startup Speed",
        desc: "We build MVP-ready products in weeks. Speed to market is our priority, ensuring you launch before the trend fades.",
        icon: Rocket,
        visual: SpeedVisual,
        color: "bg-blue-500"
    },
    {
        title: "Scalable Architecture",
        desc: "Built on Next.js and Firebase. Ready to handle 10 or 100k users. We engineer for growth from the first line of code.",
        icon: Layers,
        visual: ScalableVisual,
        color: "bg-indigo-500"
    },
    {
        title: "Clean Code",
        desc: "Maintainable, typed, and documented. We don't just write code; we craft assets that your future engineering team will thank us for.",
        icon: Code2,
        visual: CodeVisual,
        color: "bg-purple-500"
    }
];

export function InteractiveFeatureGrid() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-white relative overflow-hidden user-select-none">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Why Founders Trust Us</h2>
                    <p className="text-xl text-slate-500">We bring the rigor of big tech engineering to your early-stage startup.</p>
                </motion.div>

                {/* Grid */}
                <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                        >
                            <SpotlightCard className="h-full p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-500 flex flex-col">

                                {/* Interactive Visual Header */}
                                <feature.visual />

                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-lg ${feature.color} bg-opacity-10 flex items-center justify-center text-indigo-600`}>
                                        <feature.icon size={20} className="text-slate-700" /> {/* Overridden for cleaner look, or use feature.color text */}
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-slate-900">{feature.title}</h3>
                                </div>

                                <p className="text-slate-500 leading-relaxed mb-6 flex-1">
                                    {feature.desc}
                                </p>

                                <div className="flex items-center text-sm font-semibold text-indigo-600 group cursor-pointer hover:gap-2 transition-all">
                                    Learn more <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

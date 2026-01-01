"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Globe, TrendingUp, Search, MousePointerClick, ArrowUp } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon, delay, color }: { title: string, description: string, icon: any, delay: number, color: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-slate-900/50 p-6 rounded-2xl backdrop-blur-md border border-slate-800 overflow-hidden transition-all duration-300 hover:bg-slate-800/80 hover:border-slate-700"
        >
            {/* Background Glow */}
            <div
                className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: color ? color : undefined }}
            />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-slate-600 transition-colors">
                        <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Interactive Element based on Title */}
                    {title === "User Traffic" && (
                        <div className="flex items-center gap-1 text-[10px] font-mono text-green-400 bg-green-900/30 px-2 py-1 rounded-full">
                            <ArrowUp size={10} /> 60%
                        </div>
                    )}
                    {title === "Google Indexing" && (
                        <motion.div
                            animate={{ rotate: isHovered ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-blue-400"
                        >
                            <Search size={16} />
                        </motion.div>
                    )}
                    {title === "Conversion Rates" && (
                        <motion.div
                            animate={{ scale: isHovered ? 1.2 : 1 }}
                            className="text-pink-400"
                        >
                            <MousePointerClick size={16} />
                        </motion.div>
                    )}
                </div>

                <h4 className="font-bold text-lg mb-3 text-white tracking-tight">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export function InteractiveMobileFirst() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 w-full rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden relative bg-slate-950 border border-slate-900"
        >
            {/* Main Background Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,70,229,0.1),transparent_50%)]" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-10 text-white font-display"
                >
                    Why "Mobile-First" Matters?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                    <FeatureCard
                        title="Google Indexing"
                        description="Google predominantly uses the mobile version of the content for indexing and ranking."
                        icon={Globe}
                        delay={0.1}
                        color="var(--blue-500-20)" // fallback if needed, handling with class logic
                    />
                    <FeatureCard
                        title="User Traffic"
                        description="Over 60% of all web traffic comes from mobile devices. If it breaks on mobile, it's broken."
                        icon={Smartphone}
                        delay={0.2}
                        color="var(--indigo-500-20)"
                    />
                    <FeatureCard
                        title="Conversion Rates"
                        description="A seamless mobile experience significantly boosts user retention and conversion action."
                        icon={TrendingUp}
                        delay={0.3}
                        color="var(--pink-500-20)"
                    />
                </div>
            </div>
        </motion.div>
    );
}

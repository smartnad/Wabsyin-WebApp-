"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { projects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroSection02 } from "@/components/ui/hero-02";
import { Timeline } from "@/components/ui/timeline"; // Added Timeline import

export default function ProjectsPage() {
    const timelineData = projects.map((project, index) => ({
        title: project.title,
        content: (
            <div className="group relative pl-4 md:pl-0">
                <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base font-normal mb-6 leading-relaxed max-w-xl">
                    {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full shadow-sm hover:bg-slate-50 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Premium Browser Window Card */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 backdrop-blur-sm overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-slate-300/80 hover:-translate-y-1">
                    {/* Browser Toolbar */}
                    <div className="h-9 bg-white border-b border-slate-100 flex items-center px-4 space-x-2">
                        <div className="flex space-x-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                        </div>
                        <div className="ml-4 h-5 flex-1 max-w-[200px] bg-slate-100/80 rounded-md text-[10px] text-slate-400 flex items-center px-2 font-mono truncate">
                            {project.link.replace('https://', '')}
                        </div>
                    </div>
                    {/* Project Image Container */}
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <Link href={project.link} target="_blank">
                                <Button className="rounded-full px-6 bg-white text-black hover:bg-slate-50 border-none shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium">
                                    View Live Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Link href={project.link} target="_blank" className="flex items-center text-slate-600 hover:text-primary text-sm font-medium transition-colors">
                        View Case Study <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
        ),
    }));

    return (
        <div className="w-full bg-white">
            <HeroSection02 />
            <div className="relative z-10 bg-white">
                <Timeline data={timelineData} />
            </div>
        </div>
    );
}

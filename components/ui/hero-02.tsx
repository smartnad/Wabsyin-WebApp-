/* eslint-disable @next/next/no-img-element */
"use client";

import { GradientWave } from "@/components/ui/gradient-wave";
import { Button } from "@/components/ui/Button";
import { ClaudeAI, Cursor, Github, Google, Grok, OpenAI } from "@aliimam/logos";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Link from "next/link";
import { Code, Layout, Rocket, BrainCircuit } from "lucide-react";

const technologies = [
    {
        name: "Web Apps",
        designation: "Frontend & Backend",
        description: "Robust scalable applications.",
        logo: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2564&auto=format&fit=crop",
        icon: <Code className="h-6 w-6 text-black" />,
    },
    {
        name: "UI/UX Design",
        designation: "Product Design",
        description: "User-centric beautiful interfaces.",
        logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop",
        icon: <Layout className="h-6 w-6 text-black" />,
    },
    {
        name: "MVP Dev",
        designation: "Startup Launch",
        description: "From idea to market fast.",
        logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        icon: <Rocket className="h-6 w-6 text-black" />,
    },
    {
        name: "AI Solutions",
        designation: "SaaS & Intelligence",
        description: "Smart, automated systems.",
        logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        icon: <BrainCircuit className="h-6 w-6 text-black" />,
    },
];

export function HeroSection02() {
    return (
        <div className="min-h-screen relative">
            <div className="overflow-hidden flex flex-col px-6 items-center justify-center">
                <GradientWave className="absolute inset-0 opacity-50 dark:opacity-10" />
                <div className="flex w-full absolute z-20 top-4 px-4 justify-between items-center">
                    <div>
                        <span className="font-bold text-xl tracking-tight">Wabsyin</span>
                    </div>
                    <Link href="/services">
                        <Button className="rounded-full">Explore Services</Button>
                    </Link>
                </div>

                <div className="z-10 mt-28 my-20 space-y-10 border shadow-2xl rounded-xl p-10 lg:p-20 mx-auto max-w-7xl flex flex-col bg-white/95">
                    <div className="flex justify-center flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        <h1 className="text-3xl font-medium mix-blend-overlay md:text-5xl lg:text-8xl text-center">
                            Shipped <br /> Reality
                        </h1>
                        <p className="max-w-md text-sm text-center lg:text-left text-slate-600">
                            We don&apos;t just design; we deploy production-grade applications.
                            Discover top-notch development tools and resources that help you craft
                            stunning interfaces and robust systems.
                        </p>
                    </div>

                    {/* Logos Row */}
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="flex justify-center flex-wrap -space-y-4 -space-x-6">
                            <OpenAI
                                className="bg-white border text-black shadow-2xl h-20 w-20 rounded-full p-5"
                                size={20}
                                height={25}
                            />
                            <ClaudeAI
                                className="bg-white border shadow-2xl h-20 w-20 rounded-full p-5"
                                size={20}
                                height={24}
                            />
                            <Cursor
                                className="bg-white hidden md:block h-20 w-20 text-black border shadow-2xl rounded-full p-5"
                                size={20}
                                height={16}
                            />
                            <Github
                                className="bg-white h-20 border text-black shadow-2xl w-20 rounded-full p-5"
                                size={20}
                                height={20}
                            />
                            <Grok
                                className="bg-white hidden md:block h-20 w-20 text-black border shadow-2xl rounded-full p-5"
                                size={20}
                                height={30}
                            />
                            <Google
                                className="bg-white h-20 w-20 border shadow-2xl rounded-full p-5"
                                size={20}
                                height={30}
                            />
                        </div>
                        <h1 className="text-3xl font-medium mix-blend-overlay md:text-5xl lg:text-8xl text-center">
                            Modern Tech
                        </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end gap-10 justify-between w-full">
                        <div className="flex flex-col">
                            <h1 className="underline font-medium text-3xl mix-blend-overlay md:text-5xl lg:text-8xl text-left">
                                Build & Scale
                            </h1>
                        </div>
                        <Link href="/services">
                            <Button className="px-10 h-16 text-lg rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-200">View Services</Button>
                        </Link>
                    </div>
                </div>


            </div>
            <div className="w-full z-10 relative flex flex-col items-center mb-20">
                <p className="text-center text-muted-foreground mb-10 text-lg z-10 relative">
                    Powered by the best technologies in the industry
                </p>
                <Marquee className="w-full">
                    {technologies.map((tech, index) => (
                        <div key={index} className="h-full">
                            <div className="flex items-center gap-3 h-full overflow-visible border rounded-xl mx-10 min-w-[280px] bg-white/90 p-2 shadow-sm">
                                <div className="absolute bg-white border-r -z-50 p-3 rounded-l-md -left-12.5 top-6 shadow-sm">
                                    {tech.icon}
                                </div>
                                <div className="flex flex-col px-4 py-3 flex-1 pl-16">
                                    <h3 className="font-semibold text-md">{tech.name}</h3>
                                    <p className="text-sm text-muted-foreground font-medium">
                                        {tech.designation}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {tech.description}
                                    </p>
                                </div>
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="h-20 w-20 object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

"use client";

import * as React from "react";
import { motion, useAnimate } from "framer-motion";
import { Code, Layout, Search, Cloud, Lock, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/shadcn-button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

const processSteps = [
    {
        phase: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your business logic, user needs, and market positioning to define a clear roadmap.",
        icon: Search
    },
    {
        phase: "02",
        title: "UI/UX Design",
        desc: "Crafting intuitive, high-fidelity prototypes. We focus on interaction design and visual hierarchy.",
        icon: Layout
    },
    {
        phase: "03",
        title: "Agile Development",
        desc: "Building with Next.js & Tailwind. Two-week sprints with regular demos and feedback loops.",
        icon: Code
    },
    {
        phase: "04",
        title: "QA & Testing",
        desc: "Rigorous testing for performance, security, and responsiveness across all devices.",
        icon: Lock
    },
    {
        phase: "05",
        title: "Launch & Scale",
        desc: "Deploying to Vercel/Edge. Setting up analytics, monitoring, and scaling infrastructure.",
        icon: Cloud
    }
];

function ConnectSection() {
    const [scope, animate] = useAnimate();

    React.useEffect(() => {
        animate(
            [
                ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
                ["#javascript", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 50, top: 102 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#react-js", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 224, top: 170 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#typescript", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 88, top: 198 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#next-js", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 200, top: 60 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
            ],
            {
                repeat: Number.POSITIVE_INFINITY,
            },
        );
    }, [animate]);

    return (
        <section className="relative mx-auto mb-20 mt-20 max-w-5xl px-4 py-12">
            <HighlightGroup className="group h-full">
                <div
                    className="group/item h-full md:col-span-6 lg:col-span-12"
                    data-aos="fade-down"
                >
                    <HighlighterItem className="rounded-3xl p-6">
                        <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white">
                            <Particles
                                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                                quantity={200}
                                color={"#000000"}
                                vy={-0.2}
                            />
                            <div className="flex justify-center">
                                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                                    <div
                                        className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                                        ref={scope}
                                    >
                                        <Code className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-slate-800" />
                                        <div
                                            id="next-js"
                                            className="absolute bottom-12 left-14 rounded-3xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs text-slate-500 opacity-50"
                                        >
                                            UI-UX
                                        </div>
                                        <div
                                            id="react-js"
                                            className="absolute left-2 top-20 rounded-3xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs text-slate-500 opacity-50"
                                        >
                                            Graphic Design
                                        </div>
                                        <div
                                            id="typescript"
                                            className="absolute bottom-20 right-1 rounded-3xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs text-slate-500 opacity-50"
                                        >
                                            Web Application
                                        </div>
                                        <div
                                            id="javascript"
                                            className="absolute right-12 top-10 rounded-3xl border border-slate-200 bg-slate-50 px-2 py-1.5 text-xs text-slate-500 opacity-50"
                                        >
                                            Branding
                                        </div>

                                        <div id="pointer" className="absolute">
                                            <svg
                                                width="16.8"
                                                height="18.2"
                                                viewBox="0 0 12 13"
                                                className="fill-red-500"
                                                stroke="white"
                                                strokeWidth="1"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                                                />
                                            </svg>
                                            <span className="bg-red-500 relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                                                Wabsyin
                                            </span>
                                        </div>
                                    </div>

                                    <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                                        <div className="flex flex-col items-center">
                                            <h3 className="mt-6 pb-1 font-bold">
                                                <span className="text-2xl md:text-4xl text-slate-900">
                                                    Ready to Collaborate?
                                                </span>
                                            </h3>
                                        </div>
                                        <p className="mb-4 text-slate-500 text-center">
                                            Let's bring your ideas to life.
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            <Link
                                                href="/contact"
                                                className={cn(
                                                    buttonVariants({
                                                        variant: "default",
                                                    })
                                                )}
                                            >
                                                Book a call
                                            </Link>
                                            <Link
                                                href="mailto:contact@wabsyin.com"
                                                target="_blank"
                                                className={cn(
                                                    buttonVariants({
                                                        variant: "outline",
                                                        size: "icon",
                                                    }),
                                                )}
                                            >
                                                <span className="flex items-center gap-1">
                                                    <Mail strokeWidth={1} className="h-5 w-5 text-slate-700" />
                                                </span>
                                            </Link>
                                            <Link
                                                href="https://wa.me/919365086541"
                                                target="_blank"
                                                className={cn(
                                                    buttonVariants({
                                                        variant: "outline",
                                                        size: "icon",
                                                    }),
                                                )}
                                            >
                                                <span className="flex items-center gap-1">
                                                    <MessageCircle
                                                        strokeWidth={1}
                                                        className="h-4 w-4 text-slate-700"
                                                    />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </HighlighterItem>
                </div>
            </HighlightGroup>
        </section>
    );
}

export default function ProcessPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <div className="inline-block p-2 px-4 rounded-full bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
                    How We Work
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground">
                    From Concept to <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Code</span>.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A transparent, agile workflow designed to ship high-quality products faster.
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                {/* Connecting Line (Desktop) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block rounded-full" />

                {processSteps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={step.phase}
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex items-center gap-8 md:gap-16 mb-16 md:mb-24 flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Content Side */}
                            <div className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 md:hidden`}>
                                    <step.icon size={24} />
                                </div>
                                <span className="text-6xl font-bold text-muted/30 font-display block mb-2">{step.phase}</span>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                            </div>

                            {/* Center Marker */}
                            <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-primary/10 shadow-xl">
                                <step.icon className="text-primary w-6 h-6" />
                                {/* Pulse Effect */}
                                <div className="absolute inset-0 rounded-full bg-primary/5 animate-ping opacity-20" />
                            </div>

                            {/* Empty Side for layout balance on Desktop */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Replaced CTA with ConnectSection */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <ConnectSection />
            </motion.div>
        </div>
    );
}

"use client";

import { Button } from "@/components/ui/shadcn-button";
import Link from "next/link";
import {
    FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
    FaTwitter, FaLinkedin, FaInstagram, FaGoogle, FaApple
} from "react-icons/fa";
import {
    SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiFacebook
} from "react-icons/si";

const fallbackUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Among_Us_icon.png"
];

const iconConfigs = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: FaAws, color: "#FF9900" },
    { Icon: FaDocker, color: "#2496ED" },
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: SiNextdotjs, color: "#000000" },
    { Icon: SiVercel, color: "#000000" },
    { Icon: SiRedux, color: "#764ABC" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: FaGithub, color: "#181717" },
    { Icon: FaTwitter, color: "#1DA1F2" },
    { Icon: FaLinkedin, color: "#0077B5" },
    { Icon: FaInstagram, color: "#E1306C" },
    { Icon: FaGoogle, color: "#DB4437" },
    { Icon: FaApple, color: "#000000" },
    { Icon: SiFacebook, color: "#1877F2" },
    { Icon: null, img: fallbackUrls[0] },
    { Icon: null, img: fallbackUrls[1] },
];

export default function StackFeatureSection() {
    const orbitCount = 3;
    const orbitGap = 8; // rem between orbits
    const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

    return (
        <section className="relative w-full py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
                {/* Left side: Heading and Text */}
                <div className="w-full lg:w-1/2 z-10 mb-16 lg:mb-0 lg:pr-12">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-slate-900 leading-tight font-display">
                        Build your <span className="text-indigo-600">Idea</span>
                    </h1>
                    <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                        We use a cutting edge tech stack including Next.js, React, Tailwind CSS and more to build pixel perfect, highly performant applications.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-indigo-200 hover:shadow-indigo-300">
                            <Link href="/projects">View Our Work</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-white text-slate-900 border-slate-200 hover:bg-slate-50">
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </div>

                {/* Right side: Orbit animation */}
                <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                    <div className="relative w-[40rem] h-[40rem] flex items-center justify-center scale-75 md:scale-100">
                        {/* Center Circle */}
                        <div className="w-24 h-24 rounded-full bg-slate-50 shadow-xl border border-slate-100 flex items-center justify-center relative z-10">
                            <FaReact className="w-12 h-12 text-blue-400" />
                        </div>

                        {/* Generate Orbits */}
                        {[...Array(orbitCount)].map((_, orbitIdx) => {
                            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
                            const angleStep = (2 * Math.PI) / iconsPerOrbit;

                            return (
                                <div
                                    key={orbitIdx}
                                    className="absolute rounded-full border border-dashed border-slate-200"
                                    style={{
                                        width: size,
                                        height: size,
                                        animation: `spin ${20 + orbitIdx * 10}s linear infinite`,
                                    }}
                                >
                                    {iconConfigs
                                        .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                                        .map((cfg, iconIdx) => {
                                            const angle = iconIdx * angleStep;
                                            const x = 50 + 50 * Math.cos(angle);
                                            const y = 50 + 50 * Math.sin(angle);

                                            return (
                                                <div
                                                    key={iconIdx}
                                                    className="absolute bg-white rounded-full p-3 shadow-lg border border-slate-100"
                                                    style={{
                                                        left: `${x}%`,
                                                        top: `${y}%`,
                                                        transform: "translate(-50%, -50%)",
                                                    }}
                                                >
                                                    {cfg.Icon ? (
                                                        <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                                                    ) : (
                                                        <img
                                                            src={cfg.img}
                                                            alt="icon"
                                                            className="w-6 h-6 object-contain"
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </section>
    );
}

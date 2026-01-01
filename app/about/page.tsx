"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, User, Target, Zap } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
    {
        title: "Moonbeam",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
        title: "Cursor",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
        title: "Rogue",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
        title: "Editorially",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
        title: "Editrix AI",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
        title: "Pixel Perfect",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
        title: "Algochurn",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
        title: "Aceternity UI",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
        title: "Tailwind Master Kit",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
        title: "SmartBridge",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
        title: "Renderwork Studio",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
        title: "Creme Digital",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
        title: "Golden Bells Academy",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
        title: "Invoker Labs",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
        title: "E Free Invoice",
        link: "/services",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
];

const logos = [
    {
        src: "https://svgl.app/library/nvidia-wordmark-light.svg",
        alt: "Nvidia Logo",
    },
    {
        src: "https://svgl.app/library/supabase_wordmark_light.svg",
        alt: "Supabase Logo",
    },
    {
        src: "https://svgl.app/library/openai_wordmark_light.svg",
        alt: "OpenAI Logo",
    },
    {
        src: "https://svgl.app/library/turso-wordmark-light.svg",
        alt: "Turso Logo",
    },
    {
        src: "https://svgl.app/library/vercel_wordmark.svg",
        alt: "Vercel Logo",
    },
    {
        src: "https://svgl.app/library/github_wordmark_light.svg",
        alt: "GitHub Logo",
    },
    {
        src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
        alt: "Claude AI Logo",
    },
    {
        src: "https://svgl.app/library/clerk-wordmark-light.svg",
        alt: "Clerk Logo",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* 1. HERO - Storytelling Header */}
            <section className="relative pt-24 pb-10 bg-gradient-to-b from-indigo-50/30 to-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-full text-center relative z-10">
                    <LogoCloud logos={logos} />
                </div>
                {/* Background Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-30">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                </div>
            </section>

            {/* 1.5. SCROLL ANIMATION HERO */}
            <HeroScrollDemo />


            {/* 2. OUR DNA / MINDSET - Hero Parallax Text Replacement */}
            <HeroParallax products={products} />


        </div >
    );
}

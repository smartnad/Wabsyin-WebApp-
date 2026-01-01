"use client";

import {
    Home,
    User,
    Zap,
    Briefcase,
    Lightbulb,
    Mail,
    Linkedin,
    Twitter,
    Github
} from "lucide-react";
import Link from "next/link";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";

const navItems = [
    {
        title: "Home",
        icon: <Home className="h-full w-full" />,
        href: "/",
    },
    {
        title: "Services",
        icon: <Zap className="h-full w-full" />,
        href: "/services",
    },
    {
        title: "Projects",
        icon: <Briefcase className="h-full w-full" />,
        href: "/projects",
    },
    {
        title: "Insights",
        icon: <Lightbulb className="h-full w-full" />,
        href: "/insights",
    },
    {
        title: "Connect",
        icon: <Mail className="h-full w-full" />,
        href: "/connect",
    },
];

const socialItems = [
    {
        title: "LinkedIn",
        icon: <Linkedin className="h-full w-full" />,
        href: "https://linkedin.com", // Placeholder
    },
    {
        title: "GitHub",
        icon: <Github className="h-full w-full" />,
        href: "https://github.com", // Placeholder
    }
];

export function DockNavigation() {
    return (
        <div className="fixed top-6 left-1/2 max-w-full -translate-x-1/2 z-50">
            <Dock
                magnification={70}
                distance={100}
                panelHeight={60}
                className="items-center px-4 bg-[#2957e8] border border-white/10 shadow-[0_10px_40px_-10px_rgba(41,87,232,0.4)] rounded-full gap-2"
            >
                {navItems.map((item, idx) => (
                    <Link key={idx} href={item.href}>
                        <DockItem
                            className="aspect-square rounded-full bg-white border border-white/10 shadow-sm hover:shadow-md text-slate-900 transition-colors"
                        >
                            <DockLabel>{item.title}</DockLabel>
                            <DockIcon>{item.icon}</DockIcon>
                        </DockItem>
                    </Link>
                ))}

                {/* Separator for Socials */}
                <div className="h-8 w-[1px] bg-white/20 mx-1" />

                {socialItems.map((item, idx) => (
                    <Link key={idx} href={item.href} target="_blank">
                        <DockItem
                            className="aspect-square rounded-full bg-white border border-white/10 shadow-sm hover:shadow-md text-slate-900 transition-colors"
                        >
                            <DockLabel>{item.title}</DockLabel>
                            <DockIcon>{item.icon}</DockIcon>
                        </DockItem>
                    </Link>
                ))}

            </Dock>
        </div>
    );
}

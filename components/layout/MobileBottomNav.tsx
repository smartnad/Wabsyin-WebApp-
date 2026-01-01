"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Zap, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Zap },
    { name: "Work", href: "/projects", icon: Briefcase },
    { name: "Connect", href: "/contact", icon: MessageCircle },
];

export function MobileBottomNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
            <div className="bg-white/90 backdrop-blur-xl border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-6 py-2 pb-5">
                <ul className="flex justify-between items-center">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;

                        return (
                            <li key={link.name}>
                                <Link href={link.href} className="relative flex flex-col items-center gap-1 p-2 group">
                                    {isActive && (
                                        <motion.div
                                            layoutId="mobile-nav-pill"
                                            className="absolute -top-2 w-8 h-1 bg-primary rounded-full shadow-[0_2px_8px_rgba(79,70,229,0.5)]"
                                        />
                                    )}
                                    <div className={cn(
                                        "transition-colors duration-300",
                                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary/70"
                                    )}>
                                        <Icon strokeWidth={isActive ? 2.5 : 2} size={24} />
                                    </div>
                                    <span className={cn(
                                        "text-[10px] font-medium transition-colors duration-300",
                                        isActive ? "text-primary" : "text-muted-foreground"
                                    )}>
                                        {link.name}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

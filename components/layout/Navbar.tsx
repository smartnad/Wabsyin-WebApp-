"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Work", href: "/projects" },
    { name: "Insights", href: "/insights" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
                    isScrolled ? "py-3" : "py-5"
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className={cn(
                        "mx-auto px-6 transition-all duration-300 flex items-center justify-between",
                        isScrolled
                            ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-sm rounded-full max-w-5xl mx-4 lg:mx-auto pl-6 pr-2 py-2"
                            : "container bg-transparent"
                    )}
                >

                    <Link href="/" className="flex items-center gap-2 z-50 mr-8" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="font-display font-bold text-2xl tracking-tight text-foreground flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-lg">W</span>
                            Wabsyin
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-muted/50",
                                    pathname === link.href ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 ml-auto">
                        <div className="hidden md:block">
                            <Link href="/contact">
                                <Button size="sm" variant="primary" className="rounded-full px-6 h-10 shadow-lg shadow-primary/25">
                                    Let&#39;s Talk <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Hamburger - Only visible on mobile, changes state */}
                        <button
                            className="md:hidden z-50 p-2 text-foreground focus:outline-none bg-muted/50 rounded-full"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay for standard nav items not in bottom bar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="fixed inset-x-4 top-20 bg-white/95 backdrop-blur-3xl z-[55] rounded-3xl border border-border/50 shadow-2xl p-6 md:hidden flex flex-col gap-4 overflow-hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-muted/50 transition-colors"
                                >
                                    <span className="text-lg font-medium text-foreground">{link.name}</span>
                                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                        <ArrowRight size={14} className="text-muted-foreground" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="h-px bg-border my-2" />
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                            <Button className="w-full text-lg py-6 shadow-xl rounded-2xl">
                                Connect Now
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

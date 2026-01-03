"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-16 pb-24 md:pb-12 bg-slate-50 border-t border-border mt-0 relative z-50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/images/logo-icon.png" alt="Wabsyin Logo" width={50} height={50} className="rounded-full object-cover" />
                            <span className="font-display font-bold text-xl tracking-tight text-foreground">Wabsyin</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
                            Startup-grade product design & development agency. We build digital assets that scale and perform.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                                <Github size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all shadow-sm">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-slate-400 hover:text-blue-700 hover:border-blue-700 transition-all shadow-sm">
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors block py-0.5">About Us</Link></li>
                            <li><Link href="/process" className="hover:text-primary transition-colors block py-0.5">Process</Link></li>
                            <li><Link href="/insights" className="hover:text-primary transition-colors block py-0.5">Insights</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors block py-0.5">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Services</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/services" className="hover:text-primary transition-colors block py-0.5">Web App Development</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors block py-0.5">UI/UX Design</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors block py-0.5">MVP Solutions</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors block py-0.5">SaaS Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Connect</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="mailto:netnad345@gmail.com" className="hover:text-primary transition-colors break-all">netnad345@gmail.com</a></li>
                            <li><a href="https://wa.me/919365086541" className="hover:text-primary transition-colors">+91 93650 86541</a></li>
                            <li className="pt-3">
                                <a href="/contact" className="inline-flex items-center text-xs font-bold text-primary uppercase tracking-wide border-b border-primary/20 pb-0.5 hover:border-primary transition-colors">
                                    Start a Project <span className="ml-1">&rarr;</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} Wabsyin Agency. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

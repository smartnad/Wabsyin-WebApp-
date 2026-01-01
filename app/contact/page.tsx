"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { LocationMap } from "@/components/ui/expand-map";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const Icons = {
    whatsapp: () => (
        <svg width="100" height="100" viewBox="0 0 175.216 175.552" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                </linearGradient>
                <filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
                    <feGaussianBlur stdDeviation="3.531" />
                </filter>
            </defs>
            <path d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" fill="#b3b3b3" filter="url(#a)" />
            <path d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" fill="#ffffff" />
            <path d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" fill="url(#linearGradient1780)" />
            <path d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" fill="url(#b)" />
            <path d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" fill="#ffffff" fillRule="evenodd" />
        </svg>
    ),
    email: () => (
        <svg width="100" height="100" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm0 8c12.15 0 22 9.85 22 22s-9.85 22-22 22-22-9.85-22-22 9.85-22 22-22zm0 10c-1.104 0-2.13.448-2.88 1.172L16.63 32.5c-.75.724-1.22 1.707-1.22 2.81 0 2.21 1.79 4 4 4h25.18c2.21 0 4-1.79 4-4 0-1.103-.47-2.086-1.22-2.81L34.88 21.172A4.01 4.01 0 0 0 32 20zm0 4.828l9.656 9.344H22.344L32 24.828z" fill="#3B82F6" />
            <rect x="14" y="20" width="36" height="26" rx="4" fill="#3B82F6" />
            <path d="M14 24L32 36L50 24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

export default function ContactPage() {
    return (

        <div className="container mx-auto px-4 py-20 min-h-[80vh] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl text-center"
            >
                <div className="inline-block p-2 px-4 rounded-full bg-green-50 text-green-600 text-sm font-semibold tracking-wide uppercase mb-6">
                    Available for New Projects
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-foreground">
                    Let&#39;s Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Vision</span>.
                </h1>

                <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    We skip the 5-page forms. Direct access to our lead engineers and designers.
                    Tell us about your project, timeline, and budget.
                </p>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* WhatsApp Card */}
                    <Link href="https://wa.me/919365086541" target="_blank" className="group">
                        <Card className="h-full flex flex-col items-center justify-center p-10 hover:border-green-500/30 cursor-pointer transition-all hover:shadow-2xl hover:shadow-green-500/10 bg-white dark:bg-white border-green-100/50 dark:border-green-100/50">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <MessageCircle className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-slate-900">WhatsApp</h3>
                            <p className="text-lg font-medium text-slate-900 mb-1">+91 93650 86541</p>
                            <p className="text-slate-500 text-sm mb-8">Best for quick queries & quotes</p>
                            <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-600 hover:text-white hover:border-green-600">
                                Chat Now
                            </Button>
                        </Card>
                    </Link>

                    {/* Email Card */}
                    <Link href="mailto:netnad345@gmail.com" className="group">
                        <Card className="h-full flex flex-col items-center justify-center p-10 hover:border-blue-500/30 cursor-pointer transition-all hover:shadow-2xl hover:shadow-blue-500/10 bg-white dark:bg-white border-blue-100/50 dark:border-blue-100/50">
                            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                <Mail className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-slate-900">Email</h3>
                            <p className="text-lg font-medium text-slate-900 mb-1">netnad345@gmail.com</p>
                            <p className="text-slate-500 text-sm mb-8">For detailed briefs & specs</p>
                            <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600">
                                Send Email
                            </Button>
                        </Card>
                    </Link>
                </div>

                {/* Info Footer with Orbiting Circles */}
                <div className="mt-16 w-full relative flex h-[600px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background/50 border border-slate-100 dark:border-slate-800">
                    {/* Orbiting Circles Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Inner Circles */}
                        <OrbitingCircles
                            className="size-[40px] border-none bg-transparent"
                            duration={20}
                            delay={0}
                            radius={200}
                        >
                            <Icons.whatsapp />
                        </OrbitingCircles>

                        {/* Outer Circles (reverse) */}
                        <OrbitingCircles
                            className="size-[60px] border-none bg-transparent"
                            radius={320}
                            duration={30}
                            reverse
                        >
                            <Icons.email />
                        </OrbitingCircles>
                    </div>

                    {/* Map Content Center */}
                    <div className="relative z-20 flex flex-col items-center gap-6">
                        <div className="flex items-center gap-2 mb-2 bg-white/90 dark:bg-black/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Reply time: ~2 hours</span>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Main HQ</p>
                            <LocationMap location="Nagaon, Assam, India" coordinates="26.347° N, 92.684° E" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

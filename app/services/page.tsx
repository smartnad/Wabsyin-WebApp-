"use client";

import { motion } from "framer-motion";

import { RevealImageList } from "@/components/ui/reveal-images";
import { InteractiveServicesGrid } from "@/components/ui/services-interactive-grid";

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-20 min-h-[80vh]">

            {/* HERO SECTION */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-left"
                >
                    <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                    <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 text-slate-900 leading-tight">
                        Built for <span className="text-indigo-600">Growth</span>.
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed">
                        We don't just write code. We build business assets that scale with your vision.
                        From MVP to Enterprise, we deliver excellence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center lg:justify-end"
                >
                    <RevealImageList />
                </motion.div>
            </div>

            {/* SERVICES GRID */}
            <InteractiveServicesGrid />
        </div>
    );
}

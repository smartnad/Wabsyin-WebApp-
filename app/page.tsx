"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, Rocket, Layers, Code2, Zap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import StackFeatureSection from "@/components/ui/stack-feature-section";
import { HeroDashboardVisual } from "@/components/ui/hero-dashboard-visual";
import { AnalyticsDashboardVisual } from "@/components/ui/analytics-dashboard-visual";
import { InteractiveFeatureGrid } from "@/components/ui/interactive-feature-grid";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">

      {/* 1. HERO SECTION */}
      {/* Background: Very soft/clean gradient (White -> Slate-50) */}
      <section className="relative w-full min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white">

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-indigo-100/20 to-transparent rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-50/40 to-transparent rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-600 text-xs md:text-sm font-semibold mb-8 mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Accepting New Projects for 2025
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1] text-slate-900">
              Built for <span className="text-indigo-600 relative inline-block">
                Growth
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>.<br />
              Designed for <span className="italic font-serif text-slate-700">Humans</span>.
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              We bridge the gap between "Agency" and "Product Team".
              Wabsyin builds high-fidelity SaaS applications with engineering rigor and premium design.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
              <Link href="/projects">
                <Button size="lg" className="rounded-full shadow-lg shadow-indigo-200 hover:shadow-indigo-300 w-full sm:w-auto h-14 text-lg px-8">
                  View Our Work <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="rounded-full bg-white border border-slate-200 text-slate-900 shadow-sm hover:bg-slate-50 w-full sm:w-auto h-14 text-lg px-8">
                  Start Project
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100/50 border border-slate-200 bg-slate-50">
                {/* Browser Window Controls */}
                <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <div className="ml-4 flex-1 h-5 bg-white rounded-md border border-slate-200/50" />
                </div>
                <HeroDashboardVisual />
              </div>

              {/* Floating UI Elements with Glassmorphism */}
              {/* Floating UI Elements with Glassmorphism - Removed as requested */}
            </div>
            {/* Decorative blob behind image */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          </motion.div>
        </div>
      </section>


      {/* 2. PRODUCT PARTNER SECTION (Not an Agency) */}
      {/* Background: Contrast - Slate-50/60 (Light Grey) to separate from Hero */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Visual: Product Screenshot / Abstract */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 p-2 overflow-hidden relative">
                  <AnalyticsDashboardVisual />
                  {/* Overlay Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2 z-20">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-800">System Active</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:pl-10 order-1 lg:order-2"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider mb-6 text-indigo-600 shadow-sm">
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
                Not an Agency.<br />
                <span className="text-indigo-600">A Product Partner.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                Traditional agencies bill by the hour and disappear after launch.
                We bill by value and stay to ensure scale. We obsess over your user journey,
                load times, and deployment strategy.
              </p>

              <ul className="space-y-6">
                {[
                  { title: "Co-Founder Mindset", desc: "We challenge your assumptions to build better products, not just what you asked for." },
                  { title: "Engineering Excellence", desc: "Scalable architecture that can handle 10 or 10M users. Next.js + Tailwind + Firebase." },
                  { title: "Design for Conversion", desc: "Beautiful interfaces that actually convert users into paying customers." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm flex-shrink-0 text-indigo-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3. WHY WABSYIN? / FEATURES */}
      <InteractiveFeatureGrid />


      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-slate-900">Loved by Founders</h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here is what 20+ founders have to say.
          </p>
        </div>
        <StaggerTestimonials />
      </section>

      {/* 5. STACK FEATURE SECTION */}
      <StackFeatureSection />

    </div>
  );
}

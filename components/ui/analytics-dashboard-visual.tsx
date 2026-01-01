"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    MoreHorizontal,
    Settings,
    Maximize2,
    Minimize2,
    Activity
} from "lucide-react";

// Mock Data for Charts
const histogramData = [20, 45, 30, 80, 50, 90, 70, 40, 60, 30, 50, 80, 60, 40, 20, 10, 30, 45, 60, 40, 30, 20, 10];
const lineChartData = [10, 30, 20, 50, 40, 70, 60, 80, 50, 60, 90, 80];

const AnimatedBar = ({ height, index }: { height: number, index: number }) => (
    <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: `${height}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.03, ease: "easeOut" }}
        className="w-full bg-cyan-500/80 rounded-t-sm hover:bg-cyan-400 transition-colors relative group"
    >
        <div className="absolute bottom-0 left-0 w-full h-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
);

export function AnalyticsDashboardVisual() {
    return (
        <div className="w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl font-mono relative">

            {/* Top Bar / Badge Area */}
            {/* Typically internal UI, but we can integrate the "System Active" badge here if needed, 
          or let the parent handle it. The design shows headers. */}

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

                {/* Chart 1: Load Time vs Bounce Rate (Bar + Line) */}
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800/50 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-[10px] uppercase font-bold text-slate-400 mb-1">Load Time vs Bounce Rate</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl text-white font-bold">57.1%</span>
                                <span className="text-[10px] text-red-400 bg-red-400/10 px-1 rounded flex items-center gap-1">
                                    <ArrowUpRight size={10} /> 7%
                                </span>
                            </div>
                        </div>
                        <MoreHorizontal size={14} className="text-slate-600 cursor-pointer hover:text-white" />
                    </div>

                    <div className="h-32 flex items-end gap-1 relative pl-6 pb-4">
                        {/* Y-Axis Label */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] text-slate-600 font-medium py-1">
                            <span>100%</span>
                            <span>50%</span>
                            <span>0%</span>
                        </div>

                        {/* Histogram Bars */}
                        {histogramData.map((h, i) => (
                            <div key={i} className="flex-1 h-full flex items-end">
                                <AnimatedBar height={h} index={i} />
                            </div>
                        ))}

                        {/* Trend Line Overlay (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible ml-1" preserveAspectRatio="none">
                            <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                d="M0,80 C20,75 40,70 60,60 C80,50 100,55 120,45 C140,35 160,40 180,30 C200,20 220,25 240,20"
                                fill="none"
                                stroke="#f472b6" // pink-400
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Chart 2: Start Render vs Bounce Rate (Bar Chart Primary) */}
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-800/50 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-[10px] uppercase font-bold text-slate-400 mb-1">Start Render vs Bounce Rate</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl text-white font-bold">1.03s</span>
                                <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-1 rounded flex items-center gap-1">
                                    Median
                                </span>
                            </div>
                        </div>
                        <MoreHorizontal size={14} className="text-slate-600 cursor-pointer hover:text-white" />
                    </div>

                    <div className="h-32 flex items-end gap-1 relative pl-6 pb-4">
                        {/* Y-Axis */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] text-slate-600 font-medium py-1">
                            <span>40K</span>
                            <span>20K</span>
                            <span>0</span>
                        </div>

                        {/* Histogram Bars - Cyan */}
                        {[...histogramData].reverse().map((h, i) => (
                            <div key={i} className="flex-1 h-full flex items-end">
                                {/* Highlight bar with different color if needed */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.03, ease: "easeOut" }}
                                    className={`w-full rounded-t-sm transition-colors relative group ${i === 4 ? "bg-white" : "bg-cyan-600 hover:bg-cyan-500"}`} // Highlight median bar
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Metrics */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-6 pt-2 border-t border-slate-800/50">

                    {/* Metric 1 */}
                    <div>
                        <h4 className="text-[10px] uppercase text-cyan-400 font-bold mb-2">Page Load (LUX)</h4>
                        <div className="text-3xl font-bold text-cyan-400 mb-1">0.7s</div>
                        <div className="h-10 relative mt-2">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    d="M0,35 C20,35 40,10 60,10 C80,10 100,5 120,25"
                                    fill="none" stroke="#22d3ee" strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Metric 2 */}
                    <div>
                        <h4 className="text-[10px] uppercase text-purple-400 font-bold mb-2">Page Views (LUX)</h4>
                        <div className="text-3xl font-bold text-purple-400 mb-1">2.7M</div>
                        <div className="h-10 relative mt-2">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    d="M0,20 C30,20 40,35 70,35 C90,35 110,10 130,5"
                                    fill="none" stroke="#c084fc" strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Metric 3 */}
                    <div>
                        <h4 className="text-[10px] uppercase text-pink-400 font-bold mb-2">Bounce Rate (LUX)</h4>
                        <div className="text-3xl font-bold text-pink-400 mb-1">40.6%</div>
                        <div className="h-10 relative mt-2">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    viewport={{ once: true }}
                                    d="M0,10 C20,10 40,30 60,30 C90,30 100,5 130,5"
                                    fill="none" stroke="#f472b6" strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Grid/Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        </div>
    );
}

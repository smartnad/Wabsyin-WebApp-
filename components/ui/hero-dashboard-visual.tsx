"use client";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    FileBox,
    Users,
    Settings,
    Bell,
    Search,
    MoreHorizontal,
    ChevronDown
} from "lucide-react";

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${active ? "bg-indigo-50 text-indigo-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
        <Icon size={18} />
        <span>{label}</span>
    </div>
);

const ChartBar = ({ height, delay }: { height: string, delay: number }) => (
    <motion.div
        initial={{ height: 0 }}
        animate={{ height }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="w-full bg-indigo-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
    />
);

const ChartBarStack = ({ h1, h2, delay }: { h1: string, h2: string, delay: number }) => (
    <div className="w-full flex flex-col justify-end gap-1 h-full">
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: h2 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="w-full bg-indigo-200 rounded-sm"
        />
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: h1 }}
            transition={{ duration: 0.6, delay }}
            className="w-full bg-indigo-500 rounded-sm"
        />
    </div>
);

export function HeroDashboardVisual() {
    return (
        <div className="w-full bg-white rounded-xl overflow-hidden flex flex-col h-full font-sans select-none">

            {/* App Shell */}
            <div className="flex h-full">
                {/* Sidebar */}
                <div className="w-48 bg-slate-50/50 border-r border-slate-100 p-4 hidden sm:flex flex-col gap-6">
                    <div className="flex items-center gap-2 px-2">
                        <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-sm opacity-50" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm">Indigo Analytics</span>
                    </div>

                    <div className="space-y-1">
                        <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
                        <SidebarItem icon={FileBox} label="Reports" />
                        <SidebarItem icon={Users} label="Users" />
                        <SidebarItem icon={Settings} label="Settings" />
                    </div>

                    <div className="mt-auto">
                        <div className="bg-indigo-600 rounded-xl p-4 text-white text-xs relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="font-bold mb-1">Upgrade Plan</p>
                                <p className="opacity-80 mb-2">Get access to pro features.</p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-w-0 bg-white">
                    {/* Header */}
                    <div className="h-14 border-b border-slate-50 flex items-center justify-between px-6">
                        <h2 className="font-bold text-slate-800">Dashboard</h2>
                        <div className="flex items-center gap-4">
                            <Search size={18} className="text-slate-400" />
                            <Bell size={18} className="text-slate-400" />
                            <div className="flex items-center gap-2 pl-2 border-l border-slate-100">
                                <div className="w-7 h-7 bg-indigo-100 rounded-full border border-indigo-200 overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                                </div>
                                <span className="text-xs font-semibold text-slate-700 hidden md:block">Jann Haslem</span>
                                <ChevronDown size={14} className="text-slate-400" />
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6 overflow-hidden flex-1 flex flex-col gap-6">

                        {/* Top Row: Charts */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-48 md:h-64">
                            {/* Revenue Growth - Line Chart */}
                            <div className="md:col-span-2 border border-slate-100 rounded-xl p-4 flex flex-col shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-bold text-slate-800">Revenue Growth</h3>
                                    <div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12% Growth</div>
                                </div>
                                <div className="flex-1 relative flex items-end px-2 pb-2">
                                    {/* Line Chart Path */}
                                    <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                            d="M0,100 C40,90 80,80 120,85 C160,90 200,60 240,40 C280,20 320,50 360,60 C400,70 440,30 500,10"
                                            fill="none"
                                            stroke="#6366f1"
                                            strokeWidth="3"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        <motion.path
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            d="M0,100 C40,90 80,80 120,85 C160,90 200,60 240,40 C280,20 320,50 360,60 C400,70 440,30 500,10 L500,150 L0,150 Z"
                                            fill="url(#chartGradient)"
                                        />
                                    </svg>
                                    {/* Y-Axis Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-px bg-slate-50" />)}
                                    </div>
                                </div>
                            </div>

                            {/* User Acquisition - Bar Chart */}
                            <div className="border border-slate-100 rounded-xl p-4 flex flex-col shadow-sm">
                                <div className="mb-4">
                                    <h3 className="text-sm font-bold text-slate-800">Acquisition</h3>
                                </div>
                                <div className="flex-1 flex items-end justify-between gap-2">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                                        <div key={day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                            <ChartBarStack h1={`${40 + Math.random() * 40}%`} h2={`${20 + Math.random() * 20}%`} delay={i * 0.1} />
                                            <span className="text-[10px] text-slate-400">{day}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row - Data Table & Donut */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                            {/* Recent Transactions */}
                            <div className="md:col-span-2 border border-slate-100 rounded-xl p-4 shadow-sm overflow-hidden">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-sm font-bold text-slate-800">Recent Transactions</h3>
                                    <MoreHorizontal size={16} className="text-slate-400" />
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { name: "Pro Subscription", date: "Today, 10:23 AM", amount: "$240.00", status: "Completed" },
                                        { name: "Design Assets", date: "Yesterday, 4:50 PM", amount: "$49.00", status: "Pending" },
                                        { name: "Consultation", date: "Mar 21, 2024", amount: "$150.00", status: "Completed" },
                                    ].map((tx, i) => (
                                        <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">{tx.name[0]}</div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-700">{tx.name}</p>
                                                    <p className="text-[10px] text-slate-400">{tx.date}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs font-bold text-slate-700">{tx.amount}</p>
                                                <p className={`text-[10px] ${tx.status === "Completed" ? "text-emerald-500" : "text-amber-500"}`}>{tx.status}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stats / Donut */}
                            <div className="border border-slate-100 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="50" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                                        <motion.circle
                                            initial={{ strokeDasharray: "0 1000" }}
                                            animate={{ strokeDasharray: "220 1000" }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            cx="64" cy="64" r="50" stroke="#6366f1" strokeWidth="12" fill="none" strokeLinecap="round" className="drop-shadow-lg"
                                        />
                                        <motion.circle
                                            initial={{ strokeDasharray: "0 1000" }}
                                            animate={{ strokeDasharray: "70 1000" }}
                                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                            cx="64" cy="64" r="50" stroke="#a5b4fc" strokeWidth="12" fill="none" strokeDashoffset="-240" strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-bold text-slate-800">532</span>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Users</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-4 text-[10px] font-medium text-slate-500">
                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-500" /> Premium</div>
                                    <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-300" /> Basic</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

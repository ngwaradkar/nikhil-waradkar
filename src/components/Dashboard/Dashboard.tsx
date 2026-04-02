"use client";

import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';
import { Activity, Zap, Layers, AlertCircle } from "lucide-react";

// Mock Data
const weeklyProductionData = [
    { day: 'Mon', plan: 120, actual: 115 },
    { day: 'Tue', plan: 130, actual: 132 },
    { day: 'Wed', plan: 125, actual: 120 },
    { day: 'Thu', plan: 140, actual: 138 },
    { day: 'Fri', plan: 135, actual: 140 },
    { day: 'Sat', plan: 90, actual: 85 },
    { day: 'Sun', plan: 0, actual: 0 },
];

const oeeData = [
    { name: 'Availability', value: 92, fill: '#0ff0fc' },
    { name: 'Loss', value: 8, fill: 'rgba(255,255,255,0.1)' },
];

const qualityData = [
    { name: 'Quality Yield', value: 98, fill: '#bc13fe' },
    { name: 'Defect Rate', value: 2, fill: 'rgba(255,255,255,0.1)' },
];

const efficiencyData = [
    { name: 'Performance', value: 88, fill: '#0ff0fc' },
    { name: 'Loss', value: 12, fill: 'rgba(255,255,255,0.1)' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass p-3 border border-white/10 rounded-lg shadow-xl !bg-[#0b1121]/90 backdrop-blur-md">
                <p className="text-white font-bold mb-1">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={`item-${index}`} style={{ color: entry.color }} className="text-sm font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function Dashboard() {
    return (
        <section id="dashboard" className="py-24 relative overflow-hidden bg-industrial-slate min-h-screen border-y border-white/5">
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-neon-purple/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle title="Real-time KPI Tracking" subtitle="Manufacturing Dashboard" />

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
                    {[
                        { title: "Overall Equipment Effectiveness", value: "85.4%", icon: <Zap size={20} />, color: "text-neon-cyan" },
                        { title: "Production Target", value: "96.2%", icon: <Activity size={20} />, color: "text-neon-blue" },
                        { title: "Inventory Turnover", value: "14.2x", icon: <Layers size={20} />, color: "text-neon-purple" },
                        { title: "Downtime Alerts", value: "2", icon: <AlertCircle size={20} />, color: "text-[#ff2a5f]" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-6 rounded-2xl border border-white/5 relative group overflow-hidden"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 mb-4 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{stat.title}</div>
                            <div className="text-3xl tracking-tight text-white font-mono">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5 h-[400px] flex flex-col"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
                            Production Volume (Plan vs Actual)
                        </h3>
                        <div className="flex-1 w-full relative min-h-[250px]">
                            <ResponsiveContainer width="100%" height={300} minHeight={250}>
                                <BarChart data={weeklyProductionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.3)" style={{ fontSize: '12px' }} tickLine={false} axisLine={false} />
                                    <YAxis stroke="rgba(255,255,255,0.3)" style={{ fontSize: '12px' }} tickLine={false} axisLine={false} />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                    <Bar dataKey="plan" name="Planned" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} barSize={20} />
                                    <Bar dataKey="actual" name="Actual" fill="#0ff0fc" radius={[4, 4, 0, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-6 rounded-2xl border border-white/5 h-[400px] flex flex-col"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-6">OEE Breakdown</h3>

                        <div className="flex-1 flex flex-col justify-around">
                            {[
                                { title: "Availability", data: oeeData, color: "#0ff0fc" },
                                { title: "Performance", data: efficiencyData, color: "#0ff0fc" },
                                { title: "Quality", data: qualityData, color: "#bc13fe" }
                            ].map((chart, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-16 h-16 relative flex-shrink-0">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={chart.data}
                                                    cx="50%" cy="50%" innerRadius={22} outerRadius={30}
                                                    startAngle={90} endAngle={-270}
                                                    dataKey="value" stroke="none"
                                                />
                                            </PieChart>
                                        </ResponsiveContainer>
                                        <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold text-white">
                                            {chart.data[0].value}%
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">{chart.title}</div>
                                        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${chart.data[0].value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: chart.color }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

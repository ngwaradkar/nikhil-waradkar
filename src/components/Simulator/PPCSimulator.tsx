"use client";

import { useState } from "react";
import SectionTitle from "../UI/SectionTitle";
import { motion } from "framer-motion";
import { Play, TrendingDown, Timer } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

export default function PPCSimulator() {
    const [demand, setDemand] = useState(1000);
    const [capacity, setCapacity] = useState(120); // units per hour
    const [hours, setHours] = useState(8);
    const [result, setResult] = useState<any>(null);

    const runSimulation = () => {
        const totalCapacity = capacity * hours;
        const fulfillment = Math.min(100, (totalCapacity / demand) * 100);
        const shortfall = Math.max(0, demand - totalCapacity);
        const timeRequired = demand / capacity;

        setResult({
            fulfillment: fulfillment.toFixed(1),
            shortfall,
            timeRequired: timeRequired.toFixed(1),
            chartData: [
                { name: "Total Demand", value: demand },
                { name: "Current Capacity", value: totalCapacity, color: shortfall > 0 ? "#ff4444" : "#00ff88" }
            ]
        });
    };

    return (
        <section id="simulator" className="py-24 bg-industrial-surface">
            <div className="container mx-auto px-6">
                <SectionTitle title="Live PPC Simulator" subtitle="Decision Support System" />

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 glass rounded-3xl border border-white/5"
                    >
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Daily Demand (Units)</label>
                                    <span className="text-neon-blue font-mono font-bold">{demand}</span>
                                </div>
                                <input
                                    type="range" min="500" max="5000" step="100" value={demand}
                                    onChange={(e) => setDemand(parseInt(e.target.value))}
                                    className="w-full accent-neon-blue h-1 bg-white/10 rounded-lg cursor-pointer"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Line Capacity (Units/Hr)</label>
                                    <span className="text-neon-purple font-mono font-bold">{capacity}</span>
                                </div>
                                <input
                                    type="range" min="50" max="500" step="10" value={capacity}
                                    onChange={(e) => setCapacity(parseInt(e.target.value))}
                                    className="w-full accent-neon-purple h-1 bg-white/10 rounded-lg cursor-pointer"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Shift Operating Hours</label>
                                    <span className="text-neon-cyan font-mono font-bold">{hours}h</span>
                                </div>
                                <input
                                    type="range" min="4" max="24" step="1" value={hours}
                                    onChange={(e) => setHours(parseInt(e.target.value))}
                                    className="w-full accent-neon-cyan h-1 bg-white/10 rounded-lg cursor-pointer"
                                />
                            </div>

                            <button
                                onClick={runSimulation}
                                className="w-full py-4 bg-neon-blue text-industrial-base font-black rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all uppercase tracking-widest"
                            >
                                Generate Production Plan <Play size={18} fill="currentColor" />
                            </button>
                        </div>
                    </motion.div>

                    <div className="min-h-[400px]">
                        {result ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 glass rounded-2xl border border-white/5">
                                        <div className="flex items-center gap-3 text-slate-500 mb-2">
                                            <TrendingDown size={14} /> <span className="text-[10px] font-bold uppercase tracking-wider">Fulfillment %</span>
                                        </div>
                                        <div className={`text-4xl font-black ${parseFloat(result.fulfillment) < 100 ? "text-red-400" : "text-emerald-400"}`}>
                                            {result.fulfillment}%
                                        </div>
                                    </div>
                                    <div className="p-6 glass rounded-2xl border border-white/5">
                                        <div className="flex items-center gap-3 text-slate-500 mb-2">
                                            <Timer size={14} /> <span className="text-[10px] font-bold uppercase tracking-wider">Time Needed</span>
                                        </div>
                                        <div className="text-4xl font-black text-white">
                                            {result.timeRequired}h
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[250px] glass rounded-2xl border border-white/5 p-6 relative">
                                    <ResponsiveContainer width="100%" minHeight={200} aspect={3}>
                                        <BarChart data={result.chartData}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 10 }} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 10 }} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: "#121214", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}
                                                itemStyle={{ color: "#fff", fontWeight: "bold" }}
                                            />
                                            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                                {result.chartData.map((entry: any, index: number) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color || "#334155"} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>

                                {result.shortfall > 0 && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                                        Capacity Bottleneck: Shortfall of {result.shortfall} units detected for this demand.
                                    </div>
                                )}
                            </motion.div>
                        ) : (
                            <div className="h-full glass rounded-3xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center p-12">
                                <div className="text-slate-600 mb-4 font-mono">SYSTEM READY</div>
                                <p className="text-slate-500 text-sm italic">Adjust parameters and run simulation to analyze manufacturing throughput.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

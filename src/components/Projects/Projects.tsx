"use client";

import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import { ArrowUpRight, Target, Lightbulb, Zap } from "lucide-react";

const projects = [
    {
        title: "AI Production Planning System",
        problem: "Manual scheduling for 200+ SKU variants was leading to 15% idle time and frequent bottleneck shifts.",
        solution: "Developed a Python-based genetic algorithm integrated with SAP PP to optimize production sequences based on real-time constraints.",
        impact: "Reduced idle time by 12% and improved throughput by 18%. Recognized with Digital Transformation Award 2026.",
        tags: ["Python", "SAP PP", "AI", "Optimization"],
        color: "neon-blue"
    },
    {
        title: "Real-time Plan vs Actual Dashboard",
        problem: "Lack of visibility into floor-level deviations until the end of the shift, causing delayed corrective actions.",
        solution: "Implemented an automated data pipeline using SAP IPMS and scanning systems to provide live KPI tracking.",
        impact: "95% accuracy in daily tracking and 20% faster response to production lags.",
        tags: ["Analytics", "SAP IPMS", "Dashboard", "Real-time"],
        color: "neon-purple"
    },
    {
        title: "SAP MRP Optimization",
        problem: "High inventory carrying costs and frequent stockouts due to unoptimized lead time parameters.",
        solution: "Re-engineered MRP parameters and implemented automated safety stock calculations using historical demand data.",
        impact: "22% reduction in excess inventory and zero stockouts for critical components in 12 months.",
        tags: ["SAP MM", "MRP", "Inventory", "Supply Chain"],
        color: "neon-cyan"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-industrial-surface/30">
            <div className="container mx-auto px-6">
                <SectionTitle title="Industrial Impact" subtitle="Featured Projects" />

                <div className="grid lg:grid-cols-1 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass rounded-3xl overflow-hidden border border-white/5 flex flex-col lg:flex-row group"
                        >
                            <div className="lg:w-1/3 p-8 bg-industrial-base relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <ArrowUpRight size={120} />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-white mb-4">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, j) => (
                                            <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-400">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-2/3 p-8 grid md:grid-cols-3 gap-8">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest">
                                        <Target size={14} /> Problem
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-neon-blue font-bold text-xs uppercase tracking-widest">
                                        <Lightbulb size={14} /> Solution
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                                        <Zap size={14} /> Impact
                                    </div>
                                    <p className="text-slate-200 text-sm font-bold leading-relaxed">{project.impact}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

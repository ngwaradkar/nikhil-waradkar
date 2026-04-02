"use client";

import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";

const experiences = [
    {
        company: "Rheinmetall Automotive India Pvt Ltd",
        role: "Assistant Manager - Production Planning & Control",
        period: "May 2018 – Present",
        location: "Pune, India",
        description: "Leading in-house planning, subcontracting, and SAP MRP activities. Proven track record in optimizing production schedules, inventory management, and cross-functional collaboration.",
        highlights: [
            "In-House Planning: Developed detailed production schedules, optimized workflow, and addressed production delays.",
            "MPS (Master Production Schedule): Integrated sales and operational plans to balance capacity and market requirements.",
            "Raw Material Planning: Analyzed requirements, coordinated with suppliers, and maintained optimal inventory.",
            "SAP MRP: Generated production schedules, conducted regular MRP runs, and resolved data accuracy issues.",
            "Material Movement: Tracked transfers, issues, and receipts in SAP to maintain inventory accuracy.",
            "Inventory Management: Implemented cycle counts, stock audits, and strategies to improve turnover rates."
        ]
    },
    {
        company: "Tata Motors, Pune",
        role: "Senior Associate (PPC Department)",
        period: "Jun 2014 – Apr 2018",
        location: "Pune, India",
        description: "Managed production planning and TCF line sequencing for high-volume vehicle manufacturing.",
        highlights: [
            "Production Planning: Ensured 100% schedule adherence based on sales data.",
            "TCF Line Sequencing: Managed daily sequencing for Xenon Trim, Chassis, and Final lines to achieve high-volume targets.",
            "Assembly Flow Optimization: Resolved bottlenecks from Trim assembly to vehicle rollout.",
            "Manufacturing Planning: Developed Monthly, Weekly, and 3-Day production plans to maximize productivity.",
            "Systems Management: Expertly used SAP IPMS and aggregate scanning for real-time tracking.",
            "Supply Chain & Shortages: Released schedules, managed vendors, and resolved critical material shortages.",
            "Quality & Compliance: Implemented World Class Quality (WCQ) and monitored SRT parameters."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6">
                <SectionTitle title="Professional Journey" subtitle="Experience History" />

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
                        >
                            {/* Timeline Marker */}
                            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-neon-blue shadow-[0_0_10px_rgba(0,242,255,0.8)]" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                    <div className="text-neon-purple text-sm font-bold uppercase tracking-wider">{exp.company}</div>
                                </div>
                                <div className="mt-2 md:mt-0 text-slate-500 text-sm font-mono">{exp.period}</div>
                            </div>

                            <p className="text-slate-400 mb-6 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                                {exp.description}
                            </p>

                            <div className="grid md:grid-cols-1 gap-3">
                                {exp.highlights.map((highlight, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-neon-blue/80 shrink-0" />
                                        <span className="text-slate-300 text-sm">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

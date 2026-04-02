"use client";

import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";

const stats = [
    { label: "Years Experience", value: "11+" },
    { label: "SAP Expertise", value: "Expert" }
];

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionTitle title="Engineering Excellence" subtitle="Professional Summary" />

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video glass rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-transparent opacity-50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-8 p-8">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                                            <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-neon-purple/30 rounded-tr-3xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-neon-blue/30 rounded-bl-3xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-xl text-slate-300 leading-relaxed font-sans">
                            Experienced in <span className="text-white font-bold">Production Planning & Control</span> with over 10 years of expertise in in-house and subcontract planning, raw material management, and SAP MRP activities.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Proven track record in optimizing production schedules, inventory management, and cross-functional collaboration.
                            Currently driving digital transformation and AI-based automation at Rheinmetall Automotive India.
                        </p>

                        <div className="pt-8 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white font-bold mb-2">Leadership</h4>
                                <p className="text-slate-400 text-sm">Managing large-scale manufacturing operations and cross-functional teams.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-2">Innovation</h4>
                                <p className="text-slate-400 text-sm">Implementing AI solutions for production scheduling and demand forecasting.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

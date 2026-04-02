"use client";

import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import { Settings, BarChart3, Database, Cpu, PieChart, Package } from "lucide-react";

const skillCategories = [
    {
        title: "SAP PP/MM",
        description: "Expert level configuration and operation for production and material management.",
        icon: <Database className="w-6 h-6" />
    },
    {
        title: "MRP Planning",
        description: "Advanced Material Requirement Planning and scheduling for complex supply chains.",
        icon: <Settings className="w-6 h-6" />
    },
    {
        title: "AI Automation",
        description: "Integrating machine learning for predictive maintenance and scheduling.",
        icon: <Cpu className="w-6 h-6" />
    },
    {
        title: "Data Analytics",
        description: "Real-time dashboarding for Plan vs Actual and efficiency tracking.",
        icon: <BarChart3 className="w-6 h-6" />
    },
    {
        title: "Inventory Optimization",
        description: "Multi-level inventory management and stock level optimization strategies.",
        icon: <Package className="w-6 h-6" />
    },
    {
        title: "Capacity Planning",
        description: "Strategic resource allocation and bottleneck detection for maximum throughput.",
        icon: <PieChart className="w-6 h-6" />
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-industrial-surface/50">
            <div className="container mx-auto px-6">
                <SectionTitle title="Technical Expertise" subtitle="Skills & Competencies" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="p-8 glass rounded-2xl border border-white/5 group hover:border-neon-blue/30 transition-all cursor-default"
                        >
                            <div className="w-12 h-12 bg-industrial-base rounded-xl flex items-center justify-center text-neon-blue mb-6 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                                {skill.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

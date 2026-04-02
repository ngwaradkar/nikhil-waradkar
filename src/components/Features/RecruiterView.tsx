"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle2, Star } from "lucide-react";

export default function RecruiterView() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-slate-50 text-slate-900 p-8 md:p-16 lg:p-24"
        >
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                        <h1 className="text-5xl font-black mb-4">Nikhil Waradkar</h1>
                        <p className="text-xl font-bold text-indigo-600 uppercase tracking-widest">Assistant Manager - Production Planning & Control</p>
                        <div className="mt-4 text-slate-500 font-medium">Pune, India | ngwaradkar@gmail.com | +91-8668634502</div>
                    </div>
                    <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-lg flex items-center gap-3 hover:bg-indigo-600 transition-colors">
                        <Download size={20} /> Export Resume
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-12 border-y border-slate-200 py-12">
                    <div className="space-y-2">
                        <div className="text-3xl font-black">11+</div>
                        <div className="text-slate-500 text-sm uppercase font-bold tracking-wider">Years Exp</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-black">SAP</div>
                        <div className="text-slate-500 text-sm uppercase font-bold tracking-wider">Certified PP/MM</div>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-black border-l-4 border-indigo-600 pl-4">Core Expertise</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {["Production Planning & Scheduling", "SAP PP/MM Optimization", "MRP & Material Planning", "Inventory Management", "Capacity Bottleneck Detection", "AI-based Automation"].map((skill, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                <CheckCircle2 size={18} className="text-emerald-500" />
                                <span className="font-bold text-slate-700">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-12">
                    <h2 className="text-2xl font-black border-l-4 border-indigo-600 pl-4">Professional Record</h2>
                    <div className="space-y-12">
                        <div className="relative pl-8 border-l-2 border-slate-200">
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600" />
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-slate-800">Rheinmetall Automotive India</h3>
                                <span className="text-slate-500 font-mono text-sm font-semibold">May 2018 - Present</span>
                            </div>
                            <p className="text-md font-bold text-indigo-700 mb-6">Assistant Manager - Production Planning & Control</p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">In-House Planning</h4>
                                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                        <li>Developed and managed detailed production schedules to ensure timely completion of manufacturing processes.</li>
                                        <li>Coordinated with production teams to optimize workflow and resource utilization.</li>
                                        <li>Monitored production progress and adjusted schedules to address delays and changes in production demands.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Prepare MPS (Master Production Schedule)</h4>
                                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                        <li>Developed and maintained the Master Production Schedule to align with sales forecasts and customer demands.</li>
                                        <li>Integrated sales and operational plans into the MPS to balance production capacity and market requirements.</li>
                                        <li>Reviewed and adjusted the MPS periodically to address changes in demand and production capabilities.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Raw Material Planning</h4>
                                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                        <li>Analyzed production requirements and created raw material plans to meet manufacturing needs.</li>
                                        <li>Coordinated with suppliers to ensure timely delivery of raw materials and maintained optimal inventory levels.</li>
                                        <li>Monitored raw material usage and adjusted orders based on production fluctuations and inventory policies.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">SAP MRP Related Activities</h4>
                                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                        <li>Utilized SAP MRP (Material Requirements Planning) to generate and manage production schedules and procurement plans.</li>
                                        <li>Conducted regular MRP runs in SAP to update production plans and ensure alignment with demand forecasts.</li>
                                        <li>Troubleshot and resolved issues related to SAP MRP processes and data accuracy.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Material Movement in SAP</h4>
                                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                        <li>Oversaw the tracking and management of material movements in SAP, including transfers, issues, and receipts.</li>
                                        <li>Ensured accurate and timely updates of material transactions in SAP to maintain inventory accuracy.</li>
                                        <li>Collaborated with logistics and warehouse teams to optimize material flow and minimize handling times.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">Inventory Management</h4>
                                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                                        <li>Implemented and maintained effective inventory management practices to ensure optimal stock levels.</li>
                                        <li>Conducted regular inventory audits and cycle counts to verify stock accuracy and identify discrepancies.</li>
                                        <li>Developed and executed strategies to reduce excess inventory and improve turnover rates.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative pl-8 border-l-2 border-slate-200">
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-300" />
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-slate-800">Tata Motors, Pune</h3>
                                <span className="text-slate-500 font-mono text-sm font-semibold">Jun 2014 - Apr 2018</span>
                            </div>
                            <p className="text-md font-bold text-slate-700 mb-6">Senior Associate (PPC Department)</p>

                            <ul className="list-disc pl-5 text-slate-600 space-y-2">
                                <li><span className="font-bold text-slate-700">Production Planning:</span> Established and monitored production plans based on sales data, ensuring 100% schedule adherence.</li>
                                <li><span className="font-bold text-slate-700">TCF Line Sequencing:</span> Managed daily sequencing of aggregates for the Xenon Trim, Chassis, and Final (TCF) lines to achieve high-volume production targets.</li>
                                <li><span className="font-bold text-slate-700">Assembly Flow Optimization:</span> Monitored TCF line constraints and provided real-time feedback to stakeholders to ensure a smooth flow from Trim assembly to Final vehicle rollout.</li>
                                <li><span className="font-bold text-slate-700">Cross-Functional Coordination:</span> Coordinated closely with Production, Quality, and Logistics teams to resolve line bottlenecks and ensure timely vehicle dispatch.</li>
                                <li><span className="font-bold text-slate-700">Manufacturing Planning:</span> Developed Monthly, Weekly, and 3-Day production plans to maximize shop floor productivity.</li>
                                <li><span className="font-bold text-slate-700">Systems Management:</span> Expertly used SAP IPMS (Integrated Production Management System) and aggregate scanning for real-time production tracking.</li>
                                <li><span className="font-bold text-slate-700">Supply Chain Coordination:</span> Released schedules to suppliers and maintained strong relationships to ensure a steady flow of materials.</li>
                                <li><span className="font-bold text-slate-700">Shortage Management:</span> Took direct follow-up with vendors and visited vendor sites to resolve critical material shortages and process issues.</li>
                                <li><span className="font-bold text-slate-700">Quality & Compliance:</span> Implemented WCQ (World Class Quality) under the SLT pillar and monitored SRT parameters for daily, weekly, and monthly compliance.</li>
                                <li><span className="font-bold text-slate-700">Data Integrity:</span> Maintained up-to-date and accurate production information data to support management reviews and audits.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                    <div className="flex items-center gap-4 mb-4">
                        <Star className="text-indigo-600 fill-indigo-600" />
                        <h2 className="text-xl font-black">AI & Digital Transformation Award</h2>
                    </div>
                    <p className="text-slate-700">Awarded for implementing AI-driven scheduling that significantly reduced manual effort and improved throughput by 18% in 2026.</p>
                </div>
            </div>
        </motion.div>
    );
}

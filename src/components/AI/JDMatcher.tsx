"use client";

import { useState } from "react";
import SectionTitle from "../UI/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Brain, CheckCircle2 } from "lucide-react";

export default function JDMatcher() {
    const [jd, setJd] = useState("");
    const [matching, setMatching] = useState(false);
    const [score, setScore] = useState<number | null>(null);

    const calculateMatch = () => {
        if (!jd.trim()) return;
        setMatching(true);

        // Simulated Analysis
        setTimeout(() => {
            const skills = ["sap", "ppc", "planning", "mrp", "inventory", "ai", "automation"];
            let matches = 0;
            skills.forEach(s => {
                if (jd.toLowerCase().includes(s)) matches++;
            });

            const result = matches === 0 ? 45 : Math.min(95, 60 + matches * 5);
            setScore(result);
            setMatching(false);
        }, 1500);
    };

    return (
        <section className="py-24 bg-industrial-base">
            <div className="container mx-auto px-6">
                <SectionTitle title="Smart Profile Matcher" subtitle="Recruiter Tools" />

                <div className="max-w-4xl mx-auto glass p-8 rounded-3xl border border-white/5">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                            <Brain size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Resume vs JD Intelligence</h3>
                            <p className="text-slate-500 text-sm italic">Paste a job description to analyze Nikhil's fit automatically.</p>
                        </div>
                    </div>

                    <textarea
                        value={jd}
                        onChange={(e) => setJd(e.target.value)}
                        placeholder="Paste Job Description here... (e.g., Seeking PPC Manager with SAP expertise and automation skills)"
                        className="w-full h-40 bg-industrial-base border border-white/10 rounded-2xl p-4 text-slate-300 text-sm focus:outline-none focus:border-neon-purple transition-colors resize-none mb-6 font-sans"
                    />

                    <button
                        onClick={calculateMatch}
                        disabled={matching}
                        className="w-full py-4 bg-neon-purple text-white font-black rounded-xl hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                        {matching ? "Analyzing Industrial Fit..." : "Run AI Analysis"} <Search size={18} />
                    </button>

                    <AnimatePresence>
                        {score && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10 text-center"
                            >
                                <div className="text-sm text-slate-500 uppercase font-black tracking-widest mb-4">Industrial Compatibility Match</div>
                                <div className="text-7xl font-display font-black text-white mb-6">
                                    {score}%
                                </div>
                                <div className="flex flex-wrap justify-center gap-6 mt-8">
                                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                                        <CheckCircle2 size={16} /> Technical Skills Match
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                                        <CheckCircle2 size={16} /> domain expertise Confirmed
                                    </div>
                                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                                        <CheckCircle2 size={16} /> Experience Level verified
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

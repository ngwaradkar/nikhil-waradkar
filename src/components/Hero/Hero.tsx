"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import HeroScene from "./HeroScene";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden">
            <HeroScene />

            <div className="container mx-auto px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs font-bold tracking-widest uppercase"
                    >
                        Assistant Manager - PPC
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-black font-display mb-6 leading-[0.9]">
                        Driving Smart <br />
                        <span className="text-gradient">Manufacturing</span> <br />
                        with AI & Data
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-sans max-w-xl">
                        11+ Years of expertise in Production Planning, SAP PP/MM,
                        and AI-driven automation for industrial excellence.
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <button className="px-8 py-4 bg-neon-blue text-industrial-base font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,242,255,0.6)] transition-all transform hover:-translate-y-1">
                            View Projects
                        </button>
                        <button className="px-8 py-4 border border-white/10 glass rounded-xl hover:bg-white/5 transition-all text-white font-bold transform hover:-translate-y-1">
                            Download Resume
                        </button>
                        <a
                            href="https://www.linkedin.com/in/nikhil-waradkar-268705153/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-14 h-14 border border-white/10 glass rounded-xl hover:bg-white/5 transition-all text-white hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(15,240,252,0.4)] transform hover:-translate-y-1"
                            title="LinkedIn Profile"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest"
            >
                <span>Scroll to Explore</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-neon-blue to-transparent" />
            </motion.div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import SectionTitle from "../UI/SectionTitle";
import { Mail, Phone, Globe, Send, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionTitle title="Let's Build Smarter" subtitle="Get In Touch" />

                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Interested in digital transformation or manufacturing optimization?
                            I'm always open to discussing new opportunities and industrial innovations.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:ngwaradkar@gmail.com" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-neon-blue group-hover:neon-border transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Email Me</div>
                                    <div className="text-white font-bold group-hover:text-neon-blue transition-colors">ngwaradkar@gmail.com</div>
                                </div>
                            </a>

                            <a href="tel:+918668634502" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-neon-purple group-hover:border-neon-purple/50 group-hover:shadow-[0_0_15px_rgba(188,19,254,0.4)] transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Call Me</div>
                                    <div className="text-white font-bold group-hover:text-neon-purple transition-colors">+91-8668634502</div>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/nikhil-waradkar-268705153/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-neon-cyan group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(15,240,252,0.4)] transition-all">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">LinkedIn</div>
                                    <div className="text-white font-bold group-hover:text-neon-cyan transition-colors">Nikhil Waradkar</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                                    <input type="text" className="w-full bg-industrial-base border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                                    <input type="email" className="w-full bg-industrial-base border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                                <input type="text" className="w-full bg-industrial-base border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors" placeholder="Collaboration Opportunity" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                                <textarea rows={4} className="w-full bg-industrial-base border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none" placeholder="How can I help you?"></textarea>
                            </div>

                            <button className="w-full py-4 bg-neon-blue text-industrial-base font-black rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

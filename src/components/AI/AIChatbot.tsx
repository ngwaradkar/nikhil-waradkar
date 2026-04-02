"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "bot", text: "Hello! I'm Nikhil's AI assistant. How can I help you understand his industrial impact today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulated Bot Performance
        setTimeout(() => {
            let response = "That's a great question about Nikhil's work in PPC. He specializes in SAP PP/MM and AI-driven scheduling. Would you like to see his projects or impact metrics?";

            if (input.toLowerCase().includes("sap")) {
                response = "Nikhil has 11+ years of experience in SAP PP/MM, specifically in MRP runs, material movement, and dashboard analytics.";
            } else if (input.toLowerCase().includes("impact") || input.toLowerCase().includes("achievement")) {
                response = "Nikhil's biggest impact was a 22% improvement in productivity on HMT press machines and building an AI-based scheduling system.";
            }

            setMessages(prev => [...prev, { role: "bot", text: response }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-80 md:w-96 glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 bg-neon-blue/10 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Bot className="text-neon-blue" size={20} />
                                <span className="font-bold text-sm text-white">Nikhil's AI Assistant</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed ${m.role === "user"
                                            ? "bg-neon-blue text-industrial-base font-bold"
                                            : "bg-white/5 text-slate-300 border border-white/5"
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-industrial-base/50 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Ask about SAP, AI, Experience..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-neon-blue"
                            />
                            <button onClick={handleSend} className="p-2 bg-neon-blue text-industrial-base rounded-lg hover:brightness-110 transition-all">
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-neon-blue text-industrial-base rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:scale-110 transition-all active:scale-95"
            >
                <MessageSquare size={24} />
            </button>
        </div>
    );
}

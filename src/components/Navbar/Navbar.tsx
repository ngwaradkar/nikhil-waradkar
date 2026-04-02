"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, UserSearch, Rocket, Palette } from "lucide-react";

interface NavbarProps {
    isRecruiterMode: boolean;
    onToggle: () => void;
}

const themes = [
    { id: "default", name: "Cyberpunk", primary: "#00f2ff", base: "#0a0a0c" },
    { id: "ocean", name: "Oceanic", primary: "#00d4ff", base: "#010b19" },
    { id: "sunset", name: "Sunset", primary: "#ff512f", base: "#1a0f14" },
    { id: "forest", name: "Forest", primary: "#10b981", base: "#09120e" }
];

export default function Navbar({ isRecruiterMode, onToggle }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTheme, setActiveTheme] = useState("default");
    const [showThemeMenu, setShowThemeMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        // Load saved theme
        const savedTheme = localStorage.getItem("app-theme") || "default";
        setActiveTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme === "default" ? "" : savedTheme);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const changeTheme = (themeId: string) => {
        setActiveTheme(themeId);
        localStorage.setItem("app-theme", themeId);
        document.documentElement.setAttribute("data-theme", themeId === "default" ? "" : themeId);
        setShowThemeMenu(false);
    };

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    if (isRecruiterMode) {
        return (
            <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="container mx-auto px-6 h-12 flex items-center justify-between">
                    <div className="text-xl font-black text-slate-900 tracking-tight">
                        NIKHIL <span className="text-indigo-600">WARADKAR</span>
                    </div>
                    <button
                        onClick={onToggle}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-indigo-600 transition-all font-bold text-sm shadow-lg shadow-indigo-500/20"
                    >
                        <Rocket size={16} /> Exit Recruiter Mode
                    </button>
                </div>
            </nav>
        );
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-industrial-base/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-black font-display tracking-tight text-white"
                >
                    NIKHIL <span className="text-neon-blue">WARADKAR</span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-400 font-sans">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-4 border-l border-white/10 pl-6 relative">
                        {/* Theme Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setShowThemeMenu(!showThemeMenu)}
                                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors text-white"
                                title="Change Theme"
                            >
                                <Palette size={18} />
                            </button>

                            {showThemeMenu && (
                                <div className="absolute top-12 right-0 w-48 p-2 rounded-2xl border border-white/10 bg-industrial-surface/95 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                                    <div className="text-[10px] uppercase font-bold text-slate-500 opacity-70 mb-2 px-2 pt-1">Select Theme</div>
                                    {themes.map(t => (
                                        <button
                                            key={t.id}
                                            onClick={() => changeTheme(t.id)}
                                            className={`flex items-center gap-3 w-full p-2 rounded-xl transition-colors ${activeTheme === t.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                                        >
                                            <div
                                                className="w-4 h-4 rounded-full border border-white/20"
                                                style={{ backgroundColor: t.primary }}
                                            />
                                            <span className="text-xs font-bold text-white capitalize tracking-wide">{t.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={onToggle}
                            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-neon-purple/50 bg-neon-purple/10 text-neon-purple hover:bg-neon-purple hover:text-white transition-all shadow-[0_0_15px_rgba(188,19,254,0.2)]"
                        >
                            <UserSearch size={16} /> <span className="hidden xl:inline">Recruiter Mode</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-industrial-surface border-b border-white/5 p-6 flex flex-col gap-6 lg:hidden"
                >
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-white">
                            {link.name}
                        </a>
                    ))}

                    <div className="flex flex-col gap-3 py-4 border-y border-white/5">
                        <div className="text-[10px] uppercase font-bold text-slate-500 opacity-70">Themes</div>
                        <div className="flex items-center gap-4">
                            {themes.map(t => (
                                <button
                                    key={t.id}
                                    onClick={() => changeTheme(t.id)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all ${activeTheme === t.id ? 'border-white scale-110' : 'border-transparent opacity-60'}`}
                                    style={{ backgroundColor: t.primary }}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => { onToggle(); setIsMenuOpen(false); }}
                        className="w-full py-4 rounded-xl bg-neon-purple/20 text-neon-purple font-bold text-left px-4 mt-2"
                    >
                        Recruiter Mode
                    </button>
                </motion.div>
            )}
        </nav>
    );
}

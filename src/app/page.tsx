"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import FactoryTwin from "@/components/Factory/FactoryTwin";
import Dashboard from "@/components/Dashboard/Dashboard";
import PPCSimulator from "@/components/Simulator/PPCSimulator";
import Contact from "@/components/Contact/Contact";
import AIChatbot from "@/components/AI/AIChatbot";
import JDMatcher from "@/components/AI/JDMatcher";
import RecruiterView from "@/components/Features/RecruiterView";

export default function Home() {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const toggleRecruiterMode = () => {
    setIsRecruiterMode(!isRecruiterMode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isRecruiterMode) {
    return (
      <main className="min-h-screen bg-slate-50">
        <Navbar isRecruiterMode={true} onToggle={toggleRecruiterMode} />
        <RecruiterView />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between selection:bg-neon-blue/30 selection:text-industrial-base">
      <Navbar isRecruiterMode={false} onToggle={toggleRecruiterMode} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <FactoryTwin />
      <Dashboard />
      <PPCSimulator />
      <JDMatcher />
      <Contact />
      <AIChatbot />

      <footer className="w-full py-12 border-t border-white/5 bg-industrial-base">
        <div className="container mx-auto px-6 text-center">
          <div className="text-slate-500 text-sm font-mono mb-4 uppercase tracking-widest">
            Nikhil Waradkar &copy; {new Date().getFullYear()} / PMC & AI Transformation
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto opacity-50 rounded-full" />
        </div>
      </footer>
    </main>
  );
}

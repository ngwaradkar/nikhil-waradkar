import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Cpu, Globe, Zap } from 'lucide-react'

export default function App() {
    return (
        <div className="min-h-screen selection:bg-indigo-500/30">
            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-pink-500/10 rounded-full blur-[120px]" />
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 glass">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold font-display"
                    >
                        Nikhil<span className="text-indigo-500">.</span>
                    </motion.div>
                    <div className="flex gap-8 text-sm font-medium text-slate-400">
                        {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                <section id="hero" className="py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
                                Full Stack <br />
                                <span className="text-gradient">Developer</span>
                            </h1>
                            <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                                I build high-performance, beautiful web applications with modern technologies.
                                Focused on creating seamless user experiences and scalable backend architectures.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-500/20">
                                    Contact Me
                                </button>
                                <div className="flex items-center gap-4 px-4">
                                    <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-slate-700 transition-all">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-slate-700 transition-all">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative aspect-square glass rounded-3xl p-8 overflow-hidden group"
                        >
                            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="flex flex-col h-full justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
                                        <Code2 size={24} />
                                    </div>
                                    <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                                        AVAILABLE FOR HIRE
                                    </div>
                                </div>
                                <div>
                                    <div className="text-slate-500 text-sm font-mono mb-2">/current-tech-stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'Firebase', 'TypeScript', 'Tailwind', 'GSAP'].map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Features / Skill Cards */}
                <section className="py-20">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Zap />, title: 'Fast Performance', desc: 'Blazing fast load times and smooth interactions.' },
                            { icon: <Cpu />, title: 'Modern Stack', desc: 'Utilizing the latest and greatest in web tech.' },
                            { icon: <Globe />, title: 'Scalable Design', desc: 'Architecture that grows with your business.' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 glass rounded-3xl border border-white/5 hover:border-white/10 transition-all group"
                            >
                                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Nikhil Resume Profile. Built with React & Firebase.
                </div>
            </footer>
        </div>
    )
}

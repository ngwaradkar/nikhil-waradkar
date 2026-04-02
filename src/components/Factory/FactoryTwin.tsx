"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Text, ContactShadows, Float } from "@react-three/drei";
import { useState, useRef, useLayoutEffect } from "react";
import SectionTitle from "../UI/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FactoryZone({ position, color, label, status, onClick }: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={position} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onClick}>
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[1.5, hovered ? 1.2 : 1, 1.5]} />
                    <meshStandardMaterial
                        color={hovered ? "#00f2ff" : color}
                        metalness={0.8}
                        roughness={0.1}
                        transparent
                        opacity={hovered ? 0.9 : 0.8}
                    />
                </mesh>

                {/* Wireframe outline */}
                <mesh>
                    <boxGeometry args={[1.51, hovered ? 1.21 : 1.01, 1.51]} />
                    <meshStandardMaterial color="#00f2ff" wireframe transparent opacity={hovered ? 0.8 : 0.2} />
                </mesh>

                {/* Label above */}
                <Text position={[0, 1.5, 0]} fontSize={0.2} color="white" outlineWidth={0.02} outlineColor="#000">
                    {label}
                </Text>

                {/* Status indicator ring */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, hovered ? -0.5 : -0.4, 0]}>
                    <ringGeometry args={[0.8, 1, 32]} />
                    <meshBasicMaterial color={status === "Running" ? "#00ff88" : "#ff4444"} transparent opacity={hovered ? 0.8 : 0.3} />
                </mesh>
            </group>
        </Float>
    );
}

export default function FactoryTwin() {
    const [selectedZone, setSelectedZone] = useState<any>(null);
    const sectionRef = useRef(null);

    const zones = [
        { label: "Production Line", color: "#1e1e20", status: "Running", position: [-2.5, 0, 0], data: { efficiency: "98%", bottleneck: "None", shift: "A" } },
        { label: "Warehouse", color: "#1e1e20", status: "Running", position: [0, 0, -2.5], data: { inventory: "Low", material_flow: "Optimal", active_skus: "450" } },
        { label: "Planning Room", color: "#1e1e20", status: "Running", position: [2.5, 0, 0], data: { accuracy: "99.2%", updates: "Real-time", systems: "SAP/AI" } }
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".factory-ui-card",
                { y: 50, opacity: 0, rotateX: 10 },
                {
                    y: 0, opacity: 1, rotateX: 0,
                    duration: 1, stagger: 0.2, ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="factory" ref={sectionRef} className="py-24 bg-industrial-base relative overflow-hidden [perspective:1000px]">
            <div className="container mx-auto px-6">
                <SectionTitle title="Digital Twin Simulation" subtitle="Factory Overview" />

                <div className="grid lg:grid-cols-3 gap-12 items-center mt-12">
                    <div className="factory-ui-card lg:col-span-2 h-[600px] rounded-3xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,242,255,0.05)] border border-white/10 [transform-style:preserve-3d] backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent">
                        <Canvas shadows>
                            <PerspectiveCamera makeDefault position={[8, 6, 8]} fov={35} />
                            <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />
                            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
                            <Environment preset="night" />

                            <gridHelper args={[20, 20, 0x00f2ff, 0x121214]} position={[0, -0.5, 0]} />

                            {zones.map((zone, i) => (
                                <FactoryZone key={i} {...zone} onClick={() => setSelectedZone(zone)} />
                            ))}

                            <ContactShadows position={[0, -0.5, 0]} opacity={0.6} scale={15} blur={2.5} far={4.5} color="#000" />
                        </Canvas>

                        {/* Floating Status UI */}
                        <div className="absolute top-6 left-6 pointer-events-none">
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl"
                            >
                                <div className="text-[10px] text-neon-blue font-bold uppercase tracking-widest mb-1">System Status</div>
                                <div className="text-white text-sm font-mono flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                                    LIVE FACTORY FEED
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="space-y-8 [perspective:1000px]">
                        <div className="factory-ui-card p-8 rounded-3xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] min-h-[450px] backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden group transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,242,255,0.1)]">

                            {/* Glassmorphism subtle glow */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-neon-blue/20 transition-all duration-500" />

                            <AnimatePresence mode="wait">
                                {selectedZone ? (
                                    <motion.div
                                        key={selectedZone.label}
                                        initial={{ opacity: 0, y: 20, rotateX: -10 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        exit={{ opacity: 0, y: -20, rotateX: 10 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <h3 className="text-4xl font-black text-white mb-3 tracking-tight">{selectedZone.label}</h3>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase mb-10 shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center gap-2 w-max">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {selectedZone.status}
                                        </div>

                                        <div className="space-y-6">
                                            {Object.entries(selectedZone.data).map(([key, value]: any, i) => (
                                                <motion.div
                                                    key={key}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 + 0.2, ease: "easeOut" }}
                                                    className="p-4 rounded-xl bg-black/20 border border-white/5 hover:bg-black/30 transition-colors"
                                                >
                                                    <div className="text-xs text-neon-blue uppercase font-bold tracking-widest mb-1">{key.replace("_", " ")}</div>
                                                    <div className="text-2xl text-white font-mono">{value}</div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col items-center justify-center h-full text-center py-20"
                                    >
                                        <div className="w-24 h-24 rounded-full border border-dashed border-white/20 flex items-center justify-center text-slate-500 mb-8 relative">
                                            <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm animate-pulse" />
                                            <span className="text-2xl z-10 font-light">?</span>

                                            {/* decorative rings */}
                                            <div className="absolute -inset-4 border border-white/5 rounded-full" />
                                            <div className="absolute -inset-8 border border-white/5 rounded-full" />
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">Select a sector of the factory twin<br />to see live PPC metadata.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

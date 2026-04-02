"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

function DroneModel() {
    const droneRef = useRef<THREE.Group>(null);
    const [hasMounted, setHasMounted] = useState(false);

    useLayoutEffect(() => {
        setHasMounted(true);
        if (!droneRef.current) return;

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                }
            });

            tl.to(droneRef.current.position, {
                y: -12, // Move down
                x: 6,   // Sweep across screen
                z: 2,
            }, 0)
                .to(droneRef.current.rotation, {
                    x: Math.PI * 4,
                    y: Math.PI * 2,
                    z: Math.PI,
                }, 0);
        });

        return () => ctx.revert();
    }, []);

    if (!hasMounted) return null;

    return (
        <group ref={droneRef} position={[-5, 4, -4]} scale={0.8}>
            <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
                {/* Outer wireframe shell */}
                <mesh castShadow receiveShadow>
                    <icosahedronGeometry args={[1.5, 1]} />
                    <meshStandardMaterial color="#00f2ff" wireframe transparent opacity={0.6} />
                </mesh>

                {/* Inner solid core */}
                <mesh scale={0.7}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#1e1e20" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Neon pulsing core */}
                <mesh scale={0.3}>
                    <sphereGeometry args={[1.5, 16, 16]} />
                    <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={2} />
                </mesh>
            </Float>
        </group>
    );
}

export default function FloatingDrone() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <Environment preset="city" />
                <DroneModel />
            </Canvas>
        </div>
    );
}

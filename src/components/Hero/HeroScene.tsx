"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function FactoryModel() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        // Pointer values are between -1 and 1
        const targetX = (state.pointer.x * Math.PI) / 6;
        const targetY = (state.pointer.y * Math.PI) / 6;

        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef}>
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[2, 1, 3]} />
                    <meshStandardMaterial color="#1e1e20" metalness={0.8} roughness={0.2} />
                </mesh>
                {/* Conveyor belts / Industrial elements */}
                {[...Array(5)].map((_, i) => (
                    <mesh key={i} position={[0, -0.6, (i - 2) * 0.8]} receiveShadow>
                        <boxGeometry args={[2.5, 0.1, 0.5]} />
                        <meshStandardMaterial color="#121214" />
                    </mesh>
                ))}
            </group>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 bg-industrial-base">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Environment preset="city" />

                <FactoryModel />

                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />

                {/* Background Particles / Grid */}
                <gridHelper args={[100, 50, 0x00f2ff, 0x121214]} position={[0, -1.5, 0]} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-industrial-base pointer-events-none" />
        </div>
    );
}

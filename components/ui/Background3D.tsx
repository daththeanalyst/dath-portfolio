"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function ParticleGlobe() {
  const ref = useRef<THREE.Points>(null);

  // Generate points on a sphere to represent a geospatial/data node network
  const particlesCount = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Golden ratio spiral for even distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;
      
      const r = 3.5; // Radius
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      // Introduce slight randomness for 'network' feel
      pos[i * 3] += (Math.random() - 0.5) * 0.1;
      pos[i * 3 + 1] += (Math.random() - 0.5) * 0.1;
      pos[i * 3 + 2] += (Math.random() - 0.5) * 0.1;
    }
    return pos;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.05;
      ref.current.rotation.x -= delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function DataFlowLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const points = [];
    // random flying lines
    for(let i=0; i<100; i++) {
       const x = (Math.random() - 0.5) * 15;
       const y = (Math.random() - 0.5) * 15;
       const z = (Math.random() - 0.5) * 15;
       points.push(new THREE.Vector3(x, y, z));
       points.push(new THREE.Vector3(x + (Math.random()-0.5)*2, y + (Math.random()-0.5)*2, z + (Math.random()-0.5)*2));
    }
    geometry.setFromPoints(points);
    return geometry;
  }, []);

  useFrame((state, delta) => {
    if(linesRef.current) {
        linesRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={lineGeometry}>
      <lineBasicMaterial color="#a855f7" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
    </lineSegments>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 bg-void w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <ParticleGlobe />
        <DataFlowLines />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      {/* Vignette Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-void)_100%)] opacity-80" />
    </div>
  );
}

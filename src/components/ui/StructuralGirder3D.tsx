'use client';

import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';

function GirderMesh() {
  const groupRef = useRef<any>(null);

  // Slow frame-based rotation
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.003;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <group ref={groupRef}>
      {/* 4 Vertical Columns */}
      <mesh position={[-0.8, 0, -0.8]}>
        <boxGeometry args={[0.12, 3.6, 0.12]} />
        <meshBasicMaterial color="#121212" />
        <Edges color="#FFC80A" threshold={15} />
      </mesh>
      <mesh position={[0.8, 0, -0.8]}>
        <boxGeometry args={[0.12, 3.6, 0.12]} />
        <meshBasicMaterial color="#121212" />
        <Edges color="#FFC80A" threshold={15} />
      </mesh>
      <mesh position={[-0.8, 0, 0.8]}>
        <boxGeometry args={[0.12, 3.6, 0.12]} />
        <meshBasicMaterial color="#121212" />
        <Edges color="#FFC80A" threshold={15} />
      </mesh>
      <mesh position={[0.8, 0, 0.8]}>
        <boxGeometry args={[0.12, 3.6, 0.12]} />
        <meshBasicMaterial color="#121212" />
        <Edges color="#FFC80A" threshold={15} />
      </mesh>

      {/* Horizontal bracing rings (top, middle, bottom) */}
      <mesh position={[0, 1.6, 0]}>
        <boxGeometry args={[1.72, 0.1, 1.72]} />
        <meshBasicMaterial color="#121212" />
        <Edges color="#FFC80A" threshold={15} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.72, 0.1, 1.72]} />
        <meshBasicMaterial color="#121212" />
        <Edges color="#FFC80A" threshold={15} />
      </mesh>
      <mesh position={[0, -1.6, 0]}>
        <boxGeometry args={[1.72, 0.1, 1.72]} />
        <meshBasicMaterial color="#121212" />
        <Edges color="#FFC80A" threshold={15} />
      </mesh>

      {/* Diagonal bracing cross-bars */}
      <mesh position={[0, 0.8, -0.8]} rotation={[0, 0, Math.PI / 4.5]}>
        <boxGeometry args={[2.2, 0.05, 0.05]} />
        <meshBasicMaterial color="#0b0b0b" />
        <Edges color="#ffffff" opacity={0.25} transparent threshold={15} />
      </mesh>
      <mesh position={[0, -0.8, -0.8]} rotation={[0, 0, -Math.PI / 4.5]}>
        <boxGeometry args={[2.2, 0.05, 0.05]} />
        <meshBasicMaterial color="#0b0b0b" />
        <Edges color="#ffffff" opacity={0.25} transparent threshold={15} />
      </mesh>
      <mesh position={[-0.8, 0.8, 0]} rotation={[Math.PI / 4.5, 0, 0]}>
        <boxGeometry args={[0.05, 2.2, 0.05]} />
        <meshBasicMaterial color="#0b0b0b" />
        <Edges color="#ffffff" opacity={0.25} transparent threshold={15} />
      </mesh>
      <mesh position={[-0.8, -0.8, 0]} rotation={[-Math.PI / 4.5, 0, 0]}>
        <boxGeometry args={[0.05, 2.2, 0.05]} />
        <meshBasicMaterial color="#0b0b0b" />
        <Edges color="#ffffff" opacity={0.25} transparent threshold={15} />
      </mesh>
    </group>
  );
}

export const StructuralGirder3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full bg-charcoal-dark/20 border border-white/5 flex items-center justify-center font-mono text-[9px] text-white/35 select-none">
        [ RENDER // INITIALIZING_CAD_GRID ]
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[160px] relative">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] text-gold/40">
          [ VECTOR_MODEL // LOADING ]
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <GirderMesh />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </Suspense>
    </div>
  );
};
export default StructuralGirder3D;

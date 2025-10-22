"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Splat } from "@react-three/drei";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="h-screen">
      <Canvas
        camera={{ 
          position: [5, 2, 5], 
          fov: 45,
          near: 0.1,
          far: 1000 
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]} // Adaptive pixel ratio
      >
        <Suspense >
          <OrbitControls 
            enableDamping
            dampingFactor={0.05}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={20}
            minDistance={2}
          />
          
          <ambientLight intensity={0.6} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={0.8}
          />
          
          <Splat 
            src="https://huggingface.co/cakewalk/splat-data/resolve/main/garden.splat?raw=true"
            toneMapped={true}
            scale={1}
            position={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
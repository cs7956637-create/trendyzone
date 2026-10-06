import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Sparkles } from 'lucide-react';

function RotatingGiftBox() {
  const boxRef = useRef();
  
  useFrame((state) => {
    boxRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    boxRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={boxRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#ec4899" roughness={0.2} metalness={0.5} />
      </mesh>
    </Float>
  );
}

export default function Showcase3D() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> Interactive 3D Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Experience Our Gifts in <span className="text-pink-400">Immersive 3D</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0">
            Rotate, inspect, and explore our signature surprise gift boxes before ordering directly on WhatsApp!
          </p>
        </div>

        {/* Right 3D Canvas */}
        <div className="h-[350px] sm:h-[400px] w-full relative bg-black/20 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 5, 2]} intensity={2} />
            <RotatingGiftBox />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-pink-200 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur border border-white/20">
            ✨ Interactive 3D Model • Drag to Rotate
          </div>
        </div>

      </div>
    </section>
  );
}
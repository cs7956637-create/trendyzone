import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

function FloatingToy() {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#ec4899" roughness={0.3} metalness={0.8} wireframe={false} />
      </mesh>
    </Float>
  );
}

export default function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-purple-50/30 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold">
            <Sparkles className="w-4 h-4" /> TrendyZone Special Collection
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 leading-tight">
            Little Things. <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Big Smiles.
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Discover adorable toys, custom keychains and gifts made to make every moment special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => onShopClick('toys')}
              className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-2xl shadow-lg shadow-pink-200 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Shop Toys <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onShopClick('keychains')}
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-2xl border border-gray-200 shadow-sm transition transform hover:-translate-y-1"
            >
              Explore Keychains
            </button>
          </div>
        </motion.div>

        {/* Right 3D Interactive Canvas */}
        <div className="h-[350px] sm:h-[450px] w-full relative">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 5, 2]} intensity={1.5} />
            <FloatingToy />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400 bg-white/60 px-3 py-1 rounded-full backdrop-blur">
            ✨ Drag to rotate 3D Object
          </div>
        </div>

      </div>
    </section>
  );
}
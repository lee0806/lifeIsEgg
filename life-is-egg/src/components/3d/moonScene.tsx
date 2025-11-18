"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import BackgroundPlanets from "./BackgroundPlants";


export default function MoonScene() {
  return (
    <>
      {/* 배경색 검은색 */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#05031a] via-[#20145a] to-[#5a1abf]">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 40 }}
          gl={{ alpha: true }}
          className="w-full h-full"
        >
          {/* 카메라 위치와 시야각 설정 */}
          <Suspense fallback={null}>
            {/* 로딩 중일 때 아무것도 표시하지 않음 */}
            <ambientLight intensity={0.5} />
            {/* 주변광 설정 */}
            <directionalLight position={[3, 3, 3]} intensity={1} />

            

            

            {/* 별 설정 */}
            <Stars
              radius={20}
              depth={10}
              count={2000}
              factor={2}
              saturation={0}
              fade
            />

            {/* <OrbitControls enablePan={false} enableZoom={false} /> */}
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

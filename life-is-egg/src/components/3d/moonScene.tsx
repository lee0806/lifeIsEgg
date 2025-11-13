"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Moon from "./moon";

export default function MoonScene() {
  return (
    <>
      {/* 배경색 검은색 */}
      <div className="fixed inset-0 bg-black">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          {/* 카메라 위치와 시야각 설정 */}
          <Suspense fallback={null}>
            {/* 로딩 중일 때 아무것도 표시하지 않음 */}
            <ambientLight intensity={0.5} />
            {/* 주변광 설정 */}
            <directionalLight position={[3, 3, 3]} intensity={1} />

            {/* 달 */}
            <Moon />

            {/* 별 설정 */}
            <Stars
              radius={50}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
            />

            <OrbitControls enablePan={false} enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

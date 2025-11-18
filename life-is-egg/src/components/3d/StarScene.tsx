"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import BackgroundPlanets from "./BackgroundPlants";
import MenuStar from "./MenuStar";

type StarSceneProps = {
  starVisibility: number;
  activeStar: StarId | null;
  onSelectStar: (id: string | null) => void;
};

type StarId = "about" | "projects" | "skills" | "contact";

export default function StarScene({
  starVisibility,
  activeStar,
  onSelectStar,
}: StarSceneProps) {
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
            {/* 별 설정 */}
            <Stars
              radius={20}
              depth={10}
              count={2000}
              factor={2}
              saturation={0}
              fade
            />

            {/* 메뉴용 반짝이는 큰 별들 */}
            <MenuStar
              id="about"
              position={[-1.8, 0.8, -3]}
              starVisibility={starVisibility}
              activeStar={activeStar}
              onSelectStar={onSelectStar}
            />
            <MenuStar
              id="projects"
              position={[0, 1.2, -3]}
              starVisibility={starVisibility}
              activeStar={activeStar}
              onSelectStar={onSelectStar}
            />
            <MenuStar
              id="skills"
              position={[1.6, 0.6, -3]}
              starVisibility={starVisibility}
              activeStar={activeStar}
              onSelectStar={onSelectStar}
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

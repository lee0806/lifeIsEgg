"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Line } from "@react-three/drei";
import { Suspense } from "react";

import { StarId } from "@/types";
import { StarSceneProps } from "@/types";

import MenuStar from "./MenuStar";


export default function StarScene({
  starVisibility,
  activeStar,
  onSelectStar,
}: StarSceneProps) {
  const constellationPoints: [number, number, number][] = [
    // 별자리 점들 좌표 (전체를 약간 오른쪽으로 이동)
    [-1.2, 1.4, -3], // 왼쪽 위
    [-0.2, 0.9, -3], // 중간
    [0.6, 0.4, -3], // 오른쪽 아래로 내려가는 지점
    [1.0, -0.1, -3], // 가장 아래쪽 작은 별
  ];
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
              radius={22} // 별 구체의 반지름
              depth={10} // 별의 깊이
              count={3000} // 별의 개수
              factor={2.5} // 별 크기 조절
              saturation={0} // 채도
              fade // 별의 페이드 인/아웃
            />

            {/* Aries 별자리 선 */}
            <Line
              points={constellationPoints} // 별자리 점들 좌표
              color="white" // 선 색상
              lineWidth={1} // 선 두께
              transparent // 투명도 설정
              opacity={0.6} // 선 투명도
            />
            {/* 메뉴용 반짝이는 큰 별들 */}

            <MenuStar
              id="about"
              position={constellationPoints[0]}
              starVisibility={starVisibility}
              activeStar={activeStar}
              onSelectStar={onSelectStar}
            />
            <MenuStar
              id="projects"
              position={constellationPoints[1]}
              starVisibility={starVisibility}
              activeStar={activeStar}
              onSelectStar={onSelectStar}
            />
            <MenuStar
              id="skills"
              position={constellationPoints[2]}
              starVisibility={starVisibility}
              activeStar={activeStar}
              onSelectStar={onSelectStar}
            />
            <MenuStar
              id="contact"
              position={constellationPoints[3]}
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

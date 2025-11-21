"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const techStack = [
  {
    id: 1,
    title: "개발 기술",
    techs: ["React", "Next.js", "TypeScript", "JavaScript", "Python"],
  },
  {
    id: 2,
    title: "스타일링 및 마크업",
    techs: ["TailwindCSS", "CSS"],
  },
  {
    id: 3,
    title: "형상 관리",
    techs: ["Git", "GitHub", "Git Flow", "GitHub Flow"],
  },
  {
    id: 4,
    title: "UI/UX 디자인",
    techs: ["Figma"],
  },
];

function RocketModel() {
  const model = useGLTF("/models/rocket.glb");

  return (
    <primitive
      object={model.scene}
      scale={5.5}
      rotation={[Math.PI / 6, Math.PI / 30, -Math.PI / 4]}
    />
  );
}

export default function About() {
  return (
    <div className="relative z-[60] w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl px-6 py-12 md:px-12 lg:px-24">
      {/* 3D Moon on the right side */}
      <div className="pointer-events-none absolute top-29 left-120 -translate-y-1/2 w-[100px] h-[100px] opacity-60">
        <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 3, 4]} intensity={1.1} />
          <Suspense fallback={null}>
            <RocketModel />
          </Suspense>
        </Canvas>
      </div>
      <section className="text-left space-y-6 w-full max-w-6xl mx-auto">
        <div className="text-6xl font-[800] leading-tight text-gray-400">
          ABOUT ME
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto space-y-10 mt-20">
        {/* 상단 소개 영역 */}
        <section className="space-y-4 text-left">
          <p className="text-sm font-[500] text-gray-400">
            작은 시작, 의미 있는 연결
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            안녕하세요! 저는 프론트엔드 개발자 이세현입니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            저는 누구보다 성장하고 팀에서 필요한 개발자가 되는 것이 꿈입니다.
            사용자의 문제를 해결하고 팀과 함께 성장하는 개발자가 되고자 합니다.
            팀 전체의 생산성을 높이고 서로를 이해하며 협력하는 문화를 만들어가는
            데 기여하고 싶습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            팀원들과 함께 &#34;사용자가 원하는 서비스가 무엇일까?&#34;,
            &#34;복잡한 데이터를 사용자에게 어떻게 제공할까?&#34; 고민하며
            사용자를 위한 서비스를 만들어 왔습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            사용자의 요구사항을 빠르게 파악하고 문제를 찾아내 해결하는 개발자가
            되고자 합니다. 사용자가 실제로 필요한 부분을 고민하고 팀원들과 함께
            더 나은 서비스를 구현하는 것이 저의 목표입니다.
          </p>
        </section>

        {/* 구분선 */}
        <div className="w-full h-px bg-white/20" />

        {/* 기술 카드 섹션 */}
        <section className="space-y-6">
          <p className="text-sm text-gray-400">나의 기술들</p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {techStack.map((stack) => (
              <div
                key={stack.id}
                className="relative flex flex-col justify-between h-64 rounded-3xl bg-purple-300/85 text-slate-900 px-6 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out transform hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {stack.title}
                  </h3>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-900/70 text-base font-semibold">
                    {stack.id}
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {stack.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/60 text-slate-900 text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

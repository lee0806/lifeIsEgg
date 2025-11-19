"use client";

import React from "react";

export default function About() {
  return (
    <div className="w-full max-w-5xl h-full max-h-10xl flex flex-col">
      <section className="relative z-60 text-[36px] font-[900] mt-30 text-white">
        ABOUT ME
      </section>
      <section className="relative z-60 w-full min-h-screen items-center justify-center">
        {/* Skill Highlight Box */}

        <div className=" bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-8 md:px-16 md:py-16 text-left">
          <ul className="text-gray-200 font-main font-[500] text-lg md:text-xl leading-relaxed space-y-3">
            <li>• 인터랙티브 Web Experience 개발</li>
            <li>• React · Next.js 기반 프론트엔드 아키텍처 설계</li>
            <li>• Three.js · R3F 기반 3D 시각 효과 및 사용자 인터랙션 구현</li>
            <li>• TailwindCSS · Design System 기반 UI 구조화</li>
            <li>• 데이터 기반 애니메이션 · 시각화 구현</li>
            <li>• 프로젝트 구조 관리 · 재사용 가능한 컴포넌트 패턴 설계</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

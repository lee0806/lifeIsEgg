"use client";

import React, { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        {
          name: "React",
          level: 90,
          description: "컴포넌트 기반 UI 라이브러리",
        },
        { name: "Next.js", level: 85, description: "React 풀스택 프레임워크" },
        {
          name: "TypeScript",
          level: 88,
          description: "정적 타입 지원 JavaScript",
        },
        {
          name: "TailwindCSS",
          level: 92,
          description: "유틸리티 우선 CSS 프레임워크",
        },
        {
          name: "Framer Motion",
          level: 80,
          description: "React 애니메이션 라이브러리",
        },
      ],
    },
    threejs: {
      title: "3D & Graphics",
      icon: "🌌",
      skills: [
        {
          name: "Three.js",
          level: 82,
          description: "웹 기반 3D 그래픽스 라이브러리",
        },
        {
          name: "React Three Fiber",
          level: 78,
          description: "React용 Three.js 렌더러",
        },
        { name: "WebGL", level: 75, description: "웹 그래픽 라이브러리" },
        { name: "Blender", level: 70, description: "3D 모델링 및 애니메이션" },
        { name: "GLSL", level: 65, description: "GPU 셰이더 프로그래밍" },
      ],
    },
    backend: {
      title: "Backend & Tools",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 80, description: "JavaScript 런타임 환경" },
        { name: "Express.js", level: 75, description: "Node.js 웹 프레임워크" },
        { name: "MongoDB", level: 78, description: "NoSQL 문서 데이터베이스" },
        { name: "PostgreSQL", level: 72, description: "관계형 데이터베이스" },
        { name: "Git", level: 88, description: "버전 관리 시스템" },
      ],
    },
    design: {
      title: "Design & UX",
      icon: "✨",
      skills: [
        { name: "Figma", level: 85, description: "UI/UX 디자인 도구" },
        {
          name: "Adobe Creative Suite",
          level: 80,
          description: "크리에이티브 디자인 툴",
        },
        { name: "Design System", level: 82, description: "일관된 디자인 규칙" },
        { name: "User Research", level: 75, description: "사용자 경험 리서치" },
        {
          name: "Prototyping",
          level: 78,
          description: "인터랙티브 프로토타이핑",
        },
      ],
    },
  };

  return (
    <div className="relative z-60 w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl p-8 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
          SKILLS
        </h1>
        <p className="text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
          끊임없는 학습과 실험을 통해 쌓아온 기술적 역량들입니다.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(skillCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              activeCategory === key
                ? "bg-white/20 text-white border border-white/30"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white/90 border border-white/10"
            }`}
          >
            <span className="text-2xl">{category.icon}</span>
            <span>{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Content */}
      <div className="max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {
              skillCategories[activeCategory as keyof typeof skillCategories]
                .title
            }
          </h2>

          <div className="space-y-6">
            {skillCategories[
              activeCategory as keyof typeof skillCategories
            ].skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                    <p className="text-white/60 text-sm">{skill.description}</p>
                  </div>
                  <span className="text-white/80 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-purple-400 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="absolute top-0 h-3 flex items-center justify-end pr-2">
                    <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Philosophy */}
      <div className="mt-12 max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            학습 철학
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/5 rounded-2xl">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                지속적 개선
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                매일 조금씩이라도 발전하는 것을 목표로 합니다.
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-2xl">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                실험정신
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                새로운 기술과 방법론에 대한 적극적인 탐구를 즐깁니다.
              </p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-2xl">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                지식 공유
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                배운 것을 다른 사람들과 나누며 함께 성장합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

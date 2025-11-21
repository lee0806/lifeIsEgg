"use client";

import React from "react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Helios",
      description: "CCTV 영상 데이터를 이용한 실시간 도로 노후화 탐지 시스템",
      tech: ["Next.js", "Three.js", "TypeScript", "TailwindCSS"],
      status: "완료",
      liveUrl: "#",
      githubUrl: "#",
      image: "/project/Helios.png",

      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      id: 2,
      title: "HotSpot",
      description: "데이터 시각화와 실시간 인터랙션이 결합된 대시보드 플랫폼",
      tech: ["React", "D3.js", "WebSocket", "Node.js"],
      status: "완료",
      liveUrl: "#",
      githubUrl: "#",
      image: "/project/Helios.png",

      color: "from-green-500/20 to-teal-500/20",
    },
    {
      id: 3,
      title: "Motion Design System",
      description:
        "재사용 가능한 애니메이션 컴포넌트 라이브러리와 디자인 시스템",
      tech: ["React", "Framer Motion", "Storybook", "CSS-in-JS"],
      status: "완료",
      liveUrl: "#",
      githubUrl: "#",
      image: "/project/Helios.png",

      color: "from-pink-500/20 to-orange-500/20",
    },
    {
      id: 4,
      title: "AI-Powered Chat Interface",
      description:
        "자연어 처리 기반 실시간 채팅 인터페이스와 스마트 응답 시스템",
      tech: ["Next.js", "OpenAI API", "Socket.io", "Prisma"],
      status: "완료",
      liveUrl: "#",
      githubUrl: "#",
      image: "/project/Helios.png",

      color: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  return (
    <div className="relative z-60 w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
          PROJECTS
        </h1>
        <p className="text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
          기술과 창의성의 경계를 넘나드는 프로젝트들을 소개합니다.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "완료"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : project.status === "진행중"
                      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Image/Icon Area */}
              <div className="relative h-75 overflow-hidden bg-linear-to-br from-white/5 to-white/10 flex items-center justify-center">
                {project.image.startsWith("/") ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 600px"
                    />
                  </>
                ) : (
                  <div className="text-6xl">{project.image}</div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/70 leading-relaxed mb-4 text-m line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-white/80 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-white/60 text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                  >
                    <span>바로가기</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
                  >
                    <svg
                      className="w-4 h-4 text-white/80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            새로운 프로젝트를 함께 만들어보세요
          </h3>
          <p className="text-white/80 mb-6 leading-relaxed">
            혁신적인 아이디어와 기술적 도전을 통해 의미 있는 결과물을
            만들어갑니다.
          </p>
          <button className="px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105">
            협업 문의하기
          </button>
        </div>
      </div>
    </div>
  );
}

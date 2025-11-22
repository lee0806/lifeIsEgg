"use client";

import React from "react";
import * as THREE from "three";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function BookModel() {
  const { scene } = useGLTF("/models/books.glb");

  // 간단한 단색 머티리얼 강제 적용 (텍스처가 없을 때 대비)
  React.useEffect(() => {
    scene.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#CF7EFC",
          metalness: 0.1,
          roughness: 0.7,
        });
      }
    });
  }, [scene]);

  return (
    <group rotation={[0, Math.PI / 2, 0]}>
      {/* Y축 기준으로 90도 회전해서 옆모습을 보이도록 */}
      <primitive object={scene} scale={70} />
    </group>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Helios",
      description: "CCTV 영상 데이터를 이용한 실시간 도로 노후화 탐지 시스템",
      tech: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Zustand",
        "ReactQuery",
        "AI",
        "YOLOv8",
      ],
      liveUrl: "/helios",
      githubUrl: "https://github.com/Helios-CCTV/Helios-web",
    },
    {
      id: 2,
      title: "HotSpot",
      description:
        "유동인구 데이터 기반 창업 입지 추천 및 손익 분석 플랫폼 (배포 레포)",
      tech: ["React", "JavaScript", "CSS", "ReactQuery", "XGBoost"],
      liveUrl: "/hotspot",
      githubUrl: "https://github.com/lee0806/HotSpotDistribution",
    },
    {
      id: 3,
      title: "눈길",
      description: "시각 장애인을 위한 실시간 상황인지 내비게이션 서비스 설계",
      tech: ["React-Native", "JavaScript", "CSS", "YOLOv8", "FastAPI"],
      liveUrl: "/eyepath",
      githubUrl: "https://github.com/Eye-Path/react-native-eyepath",
    },
    {
      id: 4,
      title: "Portfolio",
      description: "개인 포트폴리오 웹사이트",
      tech: ["Next.js", "TypeScript", "Vercel", "Zustand"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="relative z-[60] w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl px-6 py-12 md:px-12 lg:px-24 pt-30">
      {/* Header */}
      <div className="relative text-left max-w-6xl w-full mb-12 flex items-start justify-between gap-8">
        <div>
          <h1 className="text-6xl font-black text-gray-200 mb-4 tracking-tight">
            PROJECTS
          </h1>
          <p className="text-xl text-gray-200/80 font-medium max-w-2xl leading-relaxed">
            제가 진행했던 프로젝트들을 모아봤어요.
          </p>
        </div>
        <div className="pointer-events-none absolute top-[-45%] right-[-6%] w-[200px] h-[200px] opacity-80">
          <Canvas camera={{ position: [100, 0, 6], fov: 45 }}>
            <ambientLight intensity={1.2} />
            <directionalLight position={[-12, -5, 12]} intensity={2} />
            <BookModel />
          </Canvas>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Project Content */}
              <div className="py-6 px-2">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/70 leading-relaxed mb-4 text-m line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 5).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-white/80 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-white/60 text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.liveUrl}
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
    </div>
  );
}

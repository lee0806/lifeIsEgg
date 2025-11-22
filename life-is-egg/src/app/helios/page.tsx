"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/ui/Footer";

export default function Helios() {
  const router = useRouter();
  return (
    <>
      <div className="relative z-[60] w-full h-full flex flex-col gap-15 items-center justify-center bg-white/5 backdrop-blur-xl px-6 py-12 md:px-12 lg:px-24 pt-50">
        <section className="text-left space-y-6 w-full max-w-6xl mx-auto">
          {/* <section className="max-w-6xl w-full"></section> */}

          <button
            onClick={() => router.back()}
            className="cursor-pointer z-70 absolute flex top-25 items-center justify-left w-14 h-14 bg-transparent hover:bg-transparent transition"
            aria-label="뒤로가기"
          >
            <svg width="36" height="36" viewBox="6 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <h2 className="text-4xl font-[900] text-gray-200 tracking-tight">
            Helios
          </h2>
        </section>

        {/* 상단 소개 영역 */}
        <section className="space-y-4 text-left w-full max-w-6xl">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Helios는 CCTV 영상 데이터를 이용해 도로 노후화 상태를 실시간으로
            분석하고 파손 구간을 탐지하는 지능형 도로 관리 시스템을 개발하는
            팀입니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            기존의 도로 점검 방식은 인력 중심의 현장 조사에 의존하고 있어 많은
            시간과 비용이 소요되며 위험 구간을 구분하는 데 어려움이 있습니다.
            이런 문제를 해결하기 위해 전국에 설치된 CCTV 영상을 이용해 도로
            상태를 분석할 수 있는 시스템을 기획했습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            UI/UX 설계부터 서비스의 흐름을 직접 기획하고 React 기반의 웹을
            구성하였으며 반응형 인터페이스를 구현했습니다. 사용자의 서비스
            접근성을 높이기 위해 Zustand와 React Query를 활용해 상태 관리와
            불필요한 호출을 줄이고 로딩, 에러, 성공에 대해 직관적인 피드백을
            제공했습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            완성도 높은 서비스를 위해 API 명세서를 기반으로 Backend팀과 소통하며
            설계한 데이터 구조에 맞게 프로젝트를 구성했습니다. 모든 과정은
            문서화하여 팀 내의 협업 효율성을 높였습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            일반 사용자와 도로 관리자가 모두 사용할 수 있는 서비스로 일반
            사용자는 도로 상황에 대한 신고, 위험 도로 인지를 가능하게 하고
            관리자는 효율적인 도로 관리 체계를 이룰 수 있습니다.
          </p>
        </section>

        <div className="w-full max-w-6xl h-px bg-white/20" />

        <section className="text-left w-full max-w-6xl">
          <h2 className="text-4xl font-[900] text-gray-200 tracking-tight mb-15">
            프로젝트 정보
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-y-4 md:gap-y-6 md:gap-x-8 items-start">
            {/* 기간 */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              기간
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              2025.07 - 2025.11
            </div>

            {/* 성과 */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              성과
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              국가보안기술연구소장상
            </div>

            {/* 기여도 */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              기여도
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              100%
            </div>

            {/* 주요 기술 */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              주요 기술
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              React, TypeScript, TailwindCSS, Zustand, ReactQuery, Kakao Map API
            </div>

            {/* GitHub */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              GitHub
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              <a
                href="https://github.com/Helios-CCTV/Helios-web"
                target="_blank"
                className="text-blue-400 underline"
              >
                https://github.com/Helios-CCTV/Helios-web
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

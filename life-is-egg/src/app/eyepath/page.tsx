"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/ui/Footer";

export default function EyePath() {
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
            눈길
          </h2>
        </section>

        {/* 상단 소개 영역 */}
        <section className="space-y-4 text-left w-full max-w-6xl">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            눈길은 시각 장애인을 위한 실시간 상황인지 내비게이션 서비스를 설계한
            팀입니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            많은 시각장애인이 이동 과정에서 어려움을 겪고 있으며 국내 수십만
            명의 시각장애인이 일상적인 보행에 어려움을 가지고 있습니다. 현재
            사용되는 흰 지팡이는 가까운 지면 장애물만 인지할 수 있고 허리 높이
            이상의 물체나 장애물 탐지에 어려움이 있으며 안내견은 높은 양육
            비용과 긴 훈련 기간으로 인해 일부 시각장애인만이 이용할 수 있는
            한계가 있습니다. 이로 인해 시각장애인은 보행 환경에 대한 실시간
            정보를 얻기 어려워 예기치 못한 위험에 노출되고 있습니다. 눈길은
            시각장애인을 위해 보행 중 주변 장애물과 위험 요소를 인식하고 안전한
            이동 방향을 안내하는 스마트 보행 보조 시스템입니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            React-Native를 활용하여 시각 장애인이 
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
              2025.03 - 2025.06
            </div>

            {/* 성과 */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              성과
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              2025 산학협력 캡스톤 디자인 경진대회 기초 캡스톤 부문 : 은상,
              한국정보기술학회 대학생논문경진대회 : 우수논문상
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
              React-Native, JavaScript, CSS, YOLOv8, FastAPI
            </div>

            {/* GitHub */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              GitHub
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              <a
                href="https://github.com/Eye-Path/react-native-eyepath"
                target="_blank"
                className="text-blue-400 underline"
              >
                https://github.com/Eye-Path/react-native-eyepath
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

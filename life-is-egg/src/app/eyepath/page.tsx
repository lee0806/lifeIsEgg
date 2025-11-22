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
            React-Native를 활용하여 시각 장애인이 사용할 수 있는 직관적인 모바일
            인터페이스를 설계하고 구현했습니다. 큰 글자와 대비되는 색상을
            적용했으며 화면을 보지 않고도 상황을 인지할 수 있도록 UI를
            설계했습니다. 또한 YOLO 기반의 객체 인식 모델과 연동하여 보행 중
            감지된 장애물 정보를 서버로부터 실시간으로 수신하고 이를 사용자에게
            안내하는 기능을 구현했습니다. 이를 통해 시각장애인이 보행 중 발생할
            수 있는 위험 요소를 인지하고 이동의 안정성과 독립성을 높일 수
            있었습니다.
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

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/ui/Footer";

export default function HotSpot() {
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
            HotSpot
          </h2>
        </section>

        {/* 상단 소개 영역 */}
        <section className="space-y-4 text-left w-full max-w-6xl">
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            HotSpot은 유동인구 데이터를 기반으로 예비 창업자에게 적합한 입지
            정보를 제공하고 손익 분석을 지원하는 플랫폼 개발 팀입니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            현대 사회에서의 창업은 개인의 경제적 자립, 지역 경제 활성화 등
            중요한 역할을 하고 있습니다. 하지만 예비 창업자들은 상권의 포화,
            예측하기 어려운 유동인구의 변화, 지역 소비 특성을 파악하기 어렵다는
            문제가 있습니다. 기존의 상권 분석 방식은 접근성의 문제와 미래의
            유동인구 데이터를 반영하지 않고 있으며 정확한 손익 분석이 어려운
            문제가 있습니다. 해당 문제를 해결하기 위해 유동인구 데이터를 이용해
            시간대, 연령대, 성별 등 다양한 기준으로 이동 패턴을 분석하고
            사용자에게 직관적으로 상권의 특성과 수익성을 제공하는 플랫폼을
            기획했습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            서비스의 전체 화면 구조와 페이지를 직접 설계하고 구현했습니다.
            창업자가 실제 서비스를 이용하는 흐름을 고려해 사용자 동선을 계획하고
            이를 바탕으로 페이지 흐름을 구성해 예비 창업자분들이 자연스럽게
            서비스를 이해하고 사용할 수 있도록 UI를 구성했습니다. 또한 외부의
            API를 이용해 유동인구, 임대료, 상권 정보 등 수많은 데이터를 수집하고
            이를 ReactQuery와 Axios를 활용해 안정적으로 처리했습니다. 가공된
            데이터를 필요한 정보만 시각적으로 제공하면서 방대한 데이터를
            효율적으로 다루는 방식을 고민하고 설계할 수 있었습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            API 명세서와 페이지 흐름 등 주요 설계 자료를 문서화하고 팀원들과
            공유했습니다. 기능 변경 사항이 발생하면 이를 기록하고 갱신하면서
            개발 과정의 혼선을 줄였으며 이를 통해 모두 동일한 기준으로 작업할 수
            있었습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            유동인구, 상권 포화도, 예상 수익 구조를 한번에 확인할 수 있어
            불필요한 시간과 비용을 절감할 수 있었습니다. 또한 복잡한 통계자료를
            직접 해석하지 않고 시각화된 정보를 제공받아 창업 준비과정의 부담을
            줄일 수 있습니다. 최종적으로 사용자는 데이터에 기반한 창업
            의사결정을 내릴 수 있습니다.
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
              2025 산학협력 캡스톤 디자인 경진대회 심화 캡스톤 부문 : 동상
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
              React, JavaScript, CSS, ReactQuery, Kakao Map API
            </div>

            {/* GitHub */}
            <div className="text-lg md:text-2xl leading-relaxed text-gray-200 font-[800]">
              GitHub
            </div>
            <div className="text-lg md:text-xl leading-relaxed text-gray-200">
              <a
                href="https://github.com/lee0806/HotSpotDistribution"
                target="_blank"
                className="text-blue-400 underline"
              >
                https://github.com/lee0806/HotSpotDistribution
              </a>
              <span className="text-gray-400 pl-5 text-sm">
                Private organizations이므로 배포 repository만 공개
              </span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

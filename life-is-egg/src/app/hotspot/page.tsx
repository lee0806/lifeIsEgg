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
            서비스의 전체 화면 구조와 사용자 흐름을 설계하고 구현했습니다. 예비
            창업자의 이용성을 고려해 직관적인 UI를 구성했으며 방대한 데이터를
            ReactQuery와 Axios로 안정적으로 처리했습니다. 가공된 데이터를
            시각화하여 필요한 정보만 사용자에게 효과적으로 전달 할 수 있도록
            설계했습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            API 명세서와 페이지 흐름 등 주요 설계 자료를 문서화하고 팀원들과
            공유했습니다. 기능 변경 사항이 발생하면 이를 기록하고 갱신하면서
            개발 과정의 혼선을 줄였으며 이를 통해 모두 동일한 기준으로 작업할 수
            있었습니다.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            유동인구, 상권 포화도, 예상 수익 구조를 한번에 확인할 수 있어 예비
            창업자는 불필요한 시간과 비용을 절감할 수 있습니다. 최종적으로
            사용자는 데이터에 기반한 창업 의사결정을 내릴 수 있습니다.
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

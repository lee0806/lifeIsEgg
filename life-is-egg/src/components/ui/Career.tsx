import React from "react";

// 경력 / 활동 타임라인 데이터
const careerItems = [
  {
    period: "2020.02 - Present",
    title: "경기대학교 토목공학과 - 컴퓨터공학과 복수전공",
    role: "학부생 / 프론트엔드 & 웹 서비스 개발 학습",
    description:
      "자료구조, 운영체제, 컴퓨터 그래픽스 등 전공 과목과 함께 웹 개발, 컴퓨터 비전, 딥러닝 등을 병행해서 공부하고 있습니다.",
    type: "education",
  },
  {
    period: "2025.03 - 2025.06",
    title: "교내 기초 캡스톤 프로젝트 - 눈길 : EyePath",
    role: "프론트엔드 개발 & PM",
    description:
      "시각 장애인을 위한 실시간 상황인지 내비게이션 서비스 설계를 진행했습니다.",
    type: "project",
  },
  {
    period: "2025.03 - 2025.06",
    title:
      "교내 심화 캡스톤 프로젝트 - 유동인구 데이터 기반 창업 입지 추천 및 손익 분석 플랫폼",
    role: "React 기반 프론트엔드 개발",
    description:
      "유동인구 데이터를 기반으로 창업 입지를 추천하고 손익을 분석하는 플랫폼을 개발했습니다.",
    type: "project",
  },
  {
    period: "2025.07 - 2025.11",
    title: "NETCC12 - CCTV 영상 데이터를 이용한 실시간 도로 노후화 탐지 시스템",
    role: "프론트엔드 개발 & PM & AI 모델 개발",
    description:
      "CCTV 영상 데이터를 기반으로 AI 모델을 제작하고 제작한 모델을 통해 도로 파손과 노후화를 실시간 탐지하는 시스템을 개발했습니다.",
    type: "personal",
  },
  {
    period: "2025.12 - Present",
    title: "kt cloud & groom DeepDive 20기 - 풀스택 과정",
    role: "프론트엔드 & 백엔드 개발 학습",
    description:
      "kt cloud & groom 에서 주관하는 풀스택 개발자 양성 과정에 참여하여 프론트엔드와 백엔드 전반에 걸친 개발 역량을 강화하고 있습니다.",
    type: "personal",
  },
];

const typeBadge: Record<string, string> = {
  education: "학업",
  project: "프로젝트",
  personal: "사이드",
};

export default function Career() {
  return (
    <section className="relative z-[60] w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl px-6 py-12 md:px-12 lg:px-24 pt-50">
      {/* 섹션 헤더 */}
      <header className="text-left space-y-6 w-full max-w-6xl mx-auto">
        <h2 className="text-6xl font-black text-gray-200 mb-4 tracking-tight">
          걸어온 발자국과 성장 기록
        </h2>
        <p className="text-xl text-gray-200/80 font-medium max-w-2xl leading-relaxed">
          저의 성장 과정을 담아 봤어요.
        </p>
      </header>

      {/* 타임라인 래퍼 */}
      <div className="w-full max-w-6xl mx-auto space-y-10 mt-20">
        {careerItems.map((item, idx) => (
          <article
            key={item.title + idx}
            className={`relative grid grid-cols-12 items-start ${
              idx % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <div
              className={`col-span-6 ${
                idx % 2 === 0 ? "col-start-1" : "col-start-7"
              }`}
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                {item.title}
              </h3>

              <p className="text-m font-medium text-slate-400 mb-6">
                {item.period}
              </p>

              <p className="text-m text-slate-300">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

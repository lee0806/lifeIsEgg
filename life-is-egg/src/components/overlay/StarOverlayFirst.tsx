"use client";

import React from "react";
import { StarId } from "@/types";
import { useStateStore } from "@/store/starStore";
import { X, ArrowRight } from "lucide-react";

const STAR_OVERLAY_POSITION: Record<StarId, { top: string; left: string }> = {
  about: { top: "60%", left: "27%" },     // 첫 번째 별 주변 (위치는 나중에 조정 가능)
  projects: { top: "35%", left: "55%" },  // 두 번째 별 주변
  skills: { top: "50%", left: "65%" },    // 세 번째 별 주변
  contact: { top: "40%", left: "70%" },   // 네 번째 별 주변
};

export default function StarOverlay() {
  const { activeStar, closeStar } = useStateStore();

  // 활성화된 별이 없으면 렌더링하지 않음
  if (!activeStar) return null;

  const pos = STAR_OVERLAY_POSITION[activeStar];

  return (
    // 뷰포트 전체를 덮지만 클릭은 오버레이 박스에만 적용되도록 pointer-events 설정
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* 별 주변에 떠 있는 툴팁 카드 */}
      <div
        className="absolute w-72 sm:w-80 pointer-events-auto transform -translate-y-full transition-transform duration-300"
        style={{
          top: pos.top,
          left: pos.left,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* 상단 색 띠 */}
          <div className="h-1 bg-gradient-to-r from-indigo-400 via-sky-400 to-violet-500" />

          {/* 닫기 버튼 */}
          <button
            onClick={closeStar}
            className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 group"
            aria-label="닫기"
          >
            <X className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* 내용 영역 */}
          <div className="p-4">
            <h2 className="text-base font-semibold text-white mb-1">
              타이틀
            </h2>
            <p className="text-xs text-gray-400 mb-3">서브 타이틀</p>

            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              선택한 별에 대한 간단한 설명이 들어가는 영역입니다. 위치는 각
              별 주변에 작게 떠 있는 툴팁 형태로 표시됩니다.
            </p>

            <div className="flex items-center justify-between gap-2">
              <button
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 text-xs font-semibold text-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>자세히 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={closeStar}
                className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-white font-medium border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { StarId } from "@/types";
import { useStateStore } from "@/store/starStore";
import { X, ArrowRight } from "lucide-react";

export default function StarOverlay() {
  const { activeStar, openStar, closeStar } = useStateStore();

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={closeStar}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
            activeStar ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Card */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-lg transform transition-all duration-300 ${
            activeStar
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-4"
          }`}
        >
          {/* Gradient glow effect */}
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br opacity-20 blur-2xl`}
          />

          {/* Main card */}
          <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Header gradient */}
            <div className={`h-2 bg-gradient-to-r`} />

            {/* Close button */}
            <button
              onClick={closeStar}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 group"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Content */}
            <div className="p-8 sm:p-10">
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br mb-6`}
              >
                <span className="text-3xl"></span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                타이틀
              </h2>
              <p className="text-lg text-gray-400 mb-6">서브 타이틀</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8">
                설명 텍스트가 여기에 들어갑니다. 이 영역에는 선택된 별에 대한
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  // onClick={() => navigateToSection(starData.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r text-white font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200`}
                >
                  <span>자세히 보기</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={closeStar}
                  className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  닫기
                </button>
              </div>
            </div>

            {/* Decorative stars */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
            <div className="absolute bottom-20 left-10 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-75" />
            <div className="absolute top-1/2 right-16 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </>
  );
}

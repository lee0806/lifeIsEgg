"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Helios() {
  const router = useRouter();
  return (
    <>
      <div className="relative z-[60] w-full h-full min-h-600 flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl px-6 py-12 md:px-12 lg:px-24 pt-50">
        <div className="max-w-6xl w-full space-y-8">
          <button
            onClick={() => router.back()}
            className="pointer-events-auto absolute top-6 left-6 z-[70] flex items-center justify-center w-14 h-14 bg-transparent hover:bg-transparent transition"
            aria-label="뒤로가기"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

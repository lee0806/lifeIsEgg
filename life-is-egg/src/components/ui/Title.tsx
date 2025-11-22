import React from "react";
import { TitleProps } from "@/types/index";

export default function Title({ fadeProgress }: TitleProps) {
  return (
    <>
      <div
        className="top-40 pointer-events-none absolute inset-0 flex justify-center z-40"
        style={{
          opacity: 1 - fadeProgress,
          transform: `translateY(${fadeProgress * 40}px)`,
        }}
      >
        <div className="text-center select-none">
          <h1 className="text-8xl md:text-12xl font-[800] tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fadein-slow">
            Starlit
          </h1>
          <h1 className="text-7xl md:text-8xl font-[900] tracking-tight text-white/90 mt-2 animate-fadein-slower">
            Portfolio
          </h1>
        </div>
      </div>
    </>
  );
}

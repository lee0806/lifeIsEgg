import React from "react";

type TitleProps = {
  fadeProgress: number;
};

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
          <h1 className="text-8xl md:text-12xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-fadein-slow">
            Starlit
          </h1>
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-widest text-white/90 mt-2 animate-fadein-slower">
            Portfolio
          </h1>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div className="relative z-[60] w-full h-full flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl px-6 py-12 md:px-12 lg:px-24 pt-30">
      <div className="max-w-6xl w-full">
        <div className="w-full h-px bg-white/20" />
        <section className="text-left w-full py-5 text-sm text-white flex flex-col gap-3">
          <p className="cursor-pointer hover: line-clamp-1">
            leeseh0806@gmail.com
          </p>
          <a
            href="https://github.com/lee0806"
            className="cursor-pointer hover: line-clamp-1"
          >
            https://github.com/lee0806
          </a>
        </section>
      </div>
    </div>
  );
}

import React from "react";

export default function Contact() {
  return (
    <div className="relative z-[60] w-full h-full flex flex-col gap-15 justify-center items-center bg-white/5 backdrop-blur-xl px-6 py-16 md:px-12 lg:px-24">
      <section className="w-full max-w-6xl mx-auto space-y-10">
        {/* 헤더 영역 */}
        <header className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-black text-gray-200 tracking-tight">
            CONTACT
          </h1>
          <p className="text-base md:text-xl text-gray-200/80 font-medium max-w-3xl leading-relaxed">
            저와 함께 할 수 있어요.
          </p>
        </header>
      </section>

      <section className="w-full max-w-6xl space-y-10">
        {/* 내용 영역 */}
        <div className="grid grid-cols-1 items-start">
          {/* 연락 수단 카드 */}
          <div className="grid gap-15 items-start">
            {/* 이메일 */}
            <a
              href="mailto:your.email@example.com"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/0 px-4 py-3 hover:border-violet-400/80 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">이메일</span>
                <span className="text-sm md:text-base font-medium text-gray-100">
                  leesh0806@gmail.com
                </span>
              </div>
              <span className="text-sm text-violet-300 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all">
                메일 쓰기 →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/lee0806"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/0 px-4 py-3 hover:border-violet-400/80 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">GitHub</span>
                <span className="text-sm md:text-base font-medium text-gray-100">
                  https://github.com/lee0806
                </span>
              </div>
              <span className="text-sm text-violet-300 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all">
                GitHub 보기 →
              </span>
            </a>

            {/* 추가 채널 예시: 블로그 / Velog 등 */}
            <a
              href="https://velog.io/@ummm/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/0 px-4 py-3 hover:border-violet-400/80 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Velog</span>
                <span className="text-sm md:text-base font-medium text-gray-100">
                  https://velog.io/@ummm
                </span>
              </div>
              <span className="text-sm text-violet-300 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all">
                글 보러가기 →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

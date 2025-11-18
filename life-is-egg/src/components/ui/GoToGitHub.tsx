import React from "react";

type GoToGitHubProps = {
  href?: string;
  fadeProgress: number;
};

export default function GoToGitHub({ href, fadeProgress }: GoToGitHubProps) {
  const link = href ?? "https://github.com/lee0806";

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="
        fixed md:absolute
        top-6 right-6
        inline-flex items-center gap-2
        rounded-full
        border border-white/10
        bg-white/5
        px-4 py-2
        text-xs md:text-sm
        font-medium
        text-slate-50/90
        backdrop-blur-md
        shadow-[0_0_0_1px_rgba(15,23,42,0.4)]
        hover:bg-white/10
        hover:border-white/20
        hover:shadow-[0_10px_30px_rgba(15,23,42,0.45)]
        hover:text-white
        transition-all duration-200
      "
      style={{
        opacity: 1 - fadeProgress,
        transform: `translateY(${fadeProgress * 40}px)`,
      }}
    >
      {/* GitHub 아이콘 */}
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/60">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-3.5 w-3.5 text-white"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.48.55-3-1.22-3-1.22-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-1.98-.23-4.06-1.03-4.06-4.6 0-1.02.35-1.86.93-2.51-.09-.23-.4-1.17.09-2.45 0 0 .75-.25 2.46.96A8.21 8.21 0 0 1 12 7.07c.76 0 1.53.1 2.24.29 1.7-1.21 2.45-.96 2.45-.96.49 1.28.18 2.22.09 2.45.58.65.93 1.49.93 2.51 0 3.58-2.09 4.37-4.08 4.6.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      </span>

      <span className="tracking-tight">See on GitHub</span>
    </a>
  );
}

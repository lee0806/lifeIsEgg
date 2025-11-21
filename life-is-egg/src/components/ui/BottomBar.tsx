import React from "react";
import { BottomBarProps } from "@/types/index";

export default function BottomBar({ fadeProgress }: BottomBarProps) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-180 flex items-center justify-center"
      style={{
        opacity: 1 - fadeProgress,
        transform: `translateY(${fadeProgress * 40}px)`,
      }}
    >
      <div className="animate-bounce flex flex-col items-center gap-1 text-white/80">
        <svg
          className="h-6 w-6 md:h-7 md:w-7"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 16.5c-.26 0-.51-.1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42L12 14.09l5.29-5.3a1 1 0 0 1 1.42 1.42l-6 6c-.2.19-.45.29-.71.29Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

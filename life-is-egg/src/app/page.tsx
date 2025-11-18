"use client";

import { useState, useEffect, use } from "react";

import StarScene from "@/components/3d/StarScene";
import Moon from "@/components/3d/Moon";
import Desert from "@/components/3d/Desert";
import Title from "@/components/ui/Title";
import GoToGitHub from "@/components/ui/GoToGitHub";
import BottomBar from "@/components/ui/BottomBar";

type StarId = "about" | "projects" | "skills" | "contact";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeStar, setActiveStar] = useState<StarId | null>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeProgress = Math.min(scrollY / 200, 1);
  const starVisibility = Math.min(Math.max((scrollY - 150) / 200, 0), 1);

  return (
    <>
      <main className="relative h-[200vh] overflow-hidden ">
        <div className="fixed inset-0 -z-10">
          {/* 별 */}
          <StarScene
            starVisibility={starVisibility}
            activeStar={activeStar}
            onSelectStar={setActiveStar}
          />
          {/* 달 */}
          <Moon />
        </div>

        {/* 사막 */}
        <Desert fadeProgress={fadeProgress} />

        {/* 제목 */}
        <Title fadeProgress={fadeProgress} />
        {/* GitHub 이동 버튼 */}
        <GoToGitHub fadeProgress={fadeProgress} />
        {/* 하단 바 */}
        <BottomBar fadeProgress={fadeProgress} />
      </main>
    </>
  );
}

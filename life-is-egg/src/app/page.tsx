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
  const fadeProgress_2 = Math.min(scrollY / 50, 1);
  const starVisibility = Math.min(Math.max((scrollY - 150) / 200, 0), 1);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden ">
        <div className="fixed inset-0 ">
          {/* 별 */}
          <StarScene
            starVisibility={starVisibility}
            activeStar={activeStar}
            onSelectStar={setActiveStar}
          />
          {/* 달 */}
          <Moon />
        </div>

        <section className="relative h-screen overflow-hidden">
          {/* 사막 */}
          <Desert fadeProgress={fadeProgress_2} />

          {/* 제목 */}
          <Title fadeProgress={fadeProgress} />
          {/* GitHub 이동 버튼 */}
          <GoToGitHub fadeProgress={fadeProgress} />
          {/* 하단 바 */}
          <BottomBar fadeProgress={fadeProgress} />
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-3xl px-4 py-24 text-center">
            {/* 이후 About / Projects 등 콘텐츠 추가 */}
            <h2 className="text-3xl font-semibold mb-4">Explore the Stars</h2>
            <p className="text-sm text-gray-300">
              아래 영역은 별을 클릭해서 섹션을 여는 인터랙션을 배치할
              자리입니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

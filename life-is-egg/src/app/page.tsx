"use client";

import { useState, useEffect, useRef } from "react";
import { StarId } from "@/types";

import StarScene from "@/components/3d/StarScene";
import Moon from "@/components/3d/Moon";
import Desert from "@/components/3d/Desert";
import Title from "@/components/ui/Title";
import GoToGitHub from "@/components/ui/GoToGitHub";
import BottomBar from "@/components/ui/BottomBar";
import StarOverlay from "@/components/overlay/StarOverlay";
import { useStateStore } from "@/store/starStore";
import About from "@/components/ui/About";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const activeStar = useStateStore((state) => state.activeStar);
  const setActiveStar = useStateStore((state) => state.setActiveStar);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isAnimating = false;
    let currentSection = 0;
    const sectionCount = 3; // Desert, StarOverlay, About

    const onWheel = (e: WheelEvent) => {
      if (!el) return;
      if (isAnimating) return;

      const delta = e.deltaY;
      if (delta === 0) return;

      e.preventDefault();

      if (delta > 0 && currentSection < sectionCount - 1) {
        currentSection += 1;
      } else if (delta < 0 && currentSection > 0) {
        currentSection -= 1;
      } else {
        return;
      }

      isAnimating = true;
      const targetTop = window.innerHeight * currentSection;

      el.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });

      setTimeout(() => {
        isAnimating = false;
      }, 700); // 스크롤 속도 (ms 단위, 느리게 이동)
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel as any);
    };
  }, []);

  const fadeProgress = Math.min(scrollY / 200, 1);
  const fadeProgress_2 = Math.min(scrollY / 50, 1);
  const starVisibility = Math.min(Math.max((scrollY - 150) / 200, 0), 1);

  return (
    <>
      <main
          ref={scrollRef}
          className="relative h-screen overflow-x-hidden overflow-y-scroll scroll-smooth"
        >
        <div className="fixed inset-0 h-screen snap-start">
          {/* 별 */}
          <StarScene
            starVisibility={starVisibility}
            activeStar={activeStar}
            onSelectStar={setActiveStar}
          />
          {/* 달 */}
          <Moon />
        </div>

        <section className="relative h-screen overflow-hidden snap-start">
          {/* 사막 */}
          <Desert fadeProgress={fadeProgress_2} />

          {/* 제목 */}
          <Title fadeProgress={fadeProgress} />
          {/* GitHub 이동 버튼 */}
          <GoToGitHub fadeProgress={fadeProgress} />
          {/* 하단 바 */}
          <BottomBar fadeProgress={fadeProgress} />
        </section>

        <section className="h-screen flex items-center justify-center snap-start">
          {activeStar && <StarOverlay />}
        </section>

        <section className="h-screen flex items-center justify-center snap-start">
          <About />
        </section>

      </main>
    </>
  );
}

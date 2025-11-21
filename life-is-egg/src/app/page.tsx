"use client";

import { useState, useEffect } from "react";
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
import Career from "@/components/ui/Career";
import Projects from "@/components/ui/Projects";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const activeStar = useStateStore((state) => state.activeStar);
  const setActiveStar = useStateStore((state) => state.setActiveStar);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);
    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  const fadeProgress = Math.min(scrollY / 200, 1);
  const fadeProgress_2 = Math.min(scrollY / 50, 1);
  const starVisibility = Math.min(Math.max((scrollY - 150) / 200, 0), 1);

  const showStarBackground =
    viewportHeight === 0 || scrollY < viewportHeight * 1.8;

  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden">
        <div
          className="fixed inset-0 pointer-events-none transition-opacity duration-700 ease-out"
          style={{
            opacity: showStarBackground ? 1 : 0,
          }}
        >
          <div className="pointer-events-auto">
            <StarScene
              starVisibility={starVisibility}
              activeStar={activeStar}
              onSelectStar={setActiveStar}
            />
          </div>
          <Moon />
        </div>
        <section className="relative h-screen overflow-hidden">
          <Desert fadeProgress={fadeProgress_2} />

          <Title fadeProgress={fadeProgress} />
          <GoToGitHub fadeProgress={fadeProgress} />
          <BottomBar fadeProgress={fadeProgress} />
        </section>

        <section className="relative h-screen inset-0 z-60 flex items-center justify-center">
          {activeStar && <StarOverlay />}
        </section>

        <section className="z-60 relative flex items-center justify-center">
          <About />
        </section>

        <section className="z-60 relative flex items-center justify-center">
          <Career />
        </section>

        <section className="z-60 relative flex items-center justify-center">
          <Projects />
        </section>
      </main>
    </>
  );
}

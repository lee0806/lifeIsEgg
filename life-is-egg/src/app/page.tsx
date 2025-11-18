"use client";

import { useState, useEffect, use } from "react";

import MoonScene from "@/components/3d/moonScene";
import Moon from "@/components/3d/Moon";
import Desert from "@/components/3d/Desert";
import Title from "@/components/ui/Title";
import GoToGitHub from "@/components/ui/GoToGitHub";
import BottomBar from "@/components/ui/BottomBar";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        <MoonScene />
        {/* 사막 */}
        <Desert />
        {/* 달 */}
        <Moon />
        {/* 제목 */}
        <Title />
        {/* GitHub 이동 버튼 */}
        <GoToGitHub />
        {/* 하단 바 */}
        <BottomBar />
      </main>
    </>
  );
}

import React from "react";
import { useState, useEffect } from "react";

export default function Desert() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute w-full h-screen overflow-hidden bg-transparent opacity-55"
      style={{ opacity: scrollY < 150 ? 1 : 0 }}
    >
      {/* Animated 3D Desert Layers */}
      <div className="absolute inset-0 flex items-end justify-center">
        {/* Back layer - furthest */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%] opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(40, 18, 72, 0.0), rgba(76, 29, 149, 0.65))",
            clipPath:
              "polygon(0 70%, 10% 68%, 22% 66%, 36% 65%, 52% 65%, 68% 66%, 82% 68%, 92% 70%, 100% 72%, 100% 100%, 0 100%)",
          }}
        />

        {/* Middle layer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%] opacity-50"
          style={{
            background:
              "linear-gradient(to bottom, rgba(88, 28, 135, 0.5), rgba(67, 20, 120, 0.9))",
            clipPath:
              "polygon(0 66%, 8% 63%, 18% 61%, 30% 60%, 44% 59%, 58% 60%, 72% 62%, 86% 64%, 100% 66%, 100% 100%, 0 100%)",
          }}
        />

        {/* Front layer - closest */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(109, 40, 217, 0.85), rgba(76, 18, 109, 1))",
            clipPath:
              "polygon(0 64%, 10% 60%, 22% 57%, 36% 55%, 50% 54%, 64% 55%, 78% 58%, 90% 61%, 100% 64%, 100% 100%, 0 100%)",
          }}
        />

        {/* Very front detail layer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(60, 12, 100, 0.95), rgba(35, 6, 70, 1))",
            clipPath:
              "polygon(0 78%, 12% 74%, 28% 71%, 46% 69%, 64% 70%, 82% 73%, 100% 76%, 100% 100%, 0 100%)",
          }}
        />
      </div>

      {/* Animated glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-400/15 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      />

      {/* Subtle stars or particles */}
      <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/40 rounded-full animate-pulse" />
      <div
        className="absolute top-32 left-[30%] w-1 h-1 bg-white/30 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-24 right-[25%] w-2 h-2 bg-cyan-300/30 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-40 right-[15%] w-1 h-1 bg-purple-300/30 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}

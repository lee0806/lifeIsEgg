"use client";

import { useMemo } from "react";

export default function BackgroundPlanets() {
  // 행성들의 위치/색을 간단히 하드코딩
  const planets = useMemo(
    () => [
      {
        position: [2.3, 1.5, -4],
        color: "#ff6b81",
        scale: 0.3,
        opacity: 0.2,
      },
      {
        position: [5, 0.5, -5],
        color: "#ffb64b",
        scale: 0.3,
        opacity: 0.3,
      },
      {
        position: [5, 2, -7],
        color: "#5fd0ff",
        scale: 0.5,
        opacity: 0.3,
      },
    ],
    []
  );

  return (
    <>
      {planets.map((p, idx) => (
        <mesh
          key={idx}
          position={p.position}
          scale={p.scale}
        >
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial
            color={p.color}
            metalness={0.1}
            roughness={0.5}
            transparent
            opacity={p.opacity + 0.1}
          />
        </mesh>
      ))}
    </>
  );
}

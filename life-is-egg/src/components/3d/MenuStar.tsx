// src/components/3d/MenuStar.tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type StarId = "about" | "projects" | "skills" | "contact";

type MenuStarProps = {
  id: StarId;
  position: [number, number, number];
  starVisibility: number; // 0 ~ 1
  activeStar: StarId | null;
  onSelectStar: (id: StarId) => void;
};

export default function MenuStar({
  id,
  position,
  starVisibility,
  activeStar,
  onSelectStar,
}: MenuStarProps) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();

    // 기본 반짝임 (scale)
    const pulse = 1 + Math.sin(t * 2.5) * 0.2 * starVisibility;

    // 선택된 별이면 더 크게 / 더 반짝이게
    const isActive = activeStar === id;
    const extra = isActive ? 0.4 : 0;

    const s = 0.7 + extra; // 기본 크기
    ref.current.scale.setScalar(s * pulse);

    // 살짝 회전
    ref.current.rotation.z = t * 0.6;
  });

  // starVisibility에 따라 서서히 나타나게
  const baseOpacity = 0.2 + starVisibility * 0.8;

  return (
    <mesh
      ref={ref}
      position={position}
      onClick={() => onSelectStar(id)}
      // React Three Fiber용 커서
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "default";
      }}
    >
      <icosahedronGeometry args={[0.15, 0]} />
      <meshBasicMaterial
        color={activeStar === id ? "#fff8d0" : "#ffe9a3"}
        transparent
        opacity={baseOpacity}
      />
    </mesh>
  );
}

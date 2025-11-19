// src/components/3d/MenuStar.tsx
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { StarId } from "@/types/index";
import { MenuStarProps } from "@/types/index";

// 오각별 2D Shape 생성 함수 (라운드 코너 적용)
function createStarShape(
  spikes = 5,
  outerRadius = 0.16,
  innerRadius = 0.1,
  roundness = 0.25 // 0 ~ 0.5 정도 권장
): THREE.Shape {
  const points: THREE.Vector2[] = [];
  const step = Math.PI / spikes;
  let rot = -Math.PI / 2; // 위쪽을 향하도록 시작 각도

  // 바깥/안쪽 점들을 순서대로 생성
  for (let i = 0; i < spikes; i++) {
    // 바깥 꼭짓점
    let x = Math.cos(rot) * outerRadius;
    let y = Math.sin(rot) * outerRadius;
    points.push(new THREE.Vector2(x, y));
    rot += step;

    // 안쪽 꼭짓점
    x = Math.cos(rot) * innerRadius;
    y = Math.sin(rot) * innerRadius;
    points.push(new THREE.Vector2(x, y));
    rot += step;
  }

  const shape = new THREE.Shape();
  const len = points.length;

  // 두 점 사이의 중간점을 roundness 비율로 보간
  const getRoundedMid = (a: THREE.Vector2, b: THREE.Vector2) => {
    return new THREE.Vector2(
      a.x + (b.x - a.x) * roundness,
      a.y + (b.y - a.y) * roundness
    );
  };

  // 시작점: 마지막 점과 첫 점 사이의 중간점
  const firstMid = getRoundedMid(points[len - 1], points[0]);
  shape.moveTo(firstMid.x, firstMid.y);

  // 각 꼭짓점을 control point로 두고, 다음 점과의 중간점으로 곡선 연결
  for (let i = 0; i < len; i++) {
    const curr = points[i];
    const next = points[(i + 1) % len];
    const mid = getRoundedMid(curr, next);
    shape.quadraticCurveTo(curr.x, curr.y, mid.x, mid.y);
  }

  shape.closePath();
  return shape;
}

export default function MenuStar({
  id,
  position,
  starVisibility,
  activeStar,
  onSelectStar,
}: MenuStarProps) {
  // 별 메쉬 참조
  const meshRef = useRef<THREE.Mesh>(null!);

  // 별 모양 Shape은 한 번만 생성
  const starShape = useMemo(() => createStarShape(5, 0.16, 0.1, 0.35), []);
  // ShapeGeometry도 한 번만 생성
  const starGeometry = useMemo(
    () => new THREE.ShapeGeometry(starShape, 32),
    [starShape]
  );

  // 매 프레임마다 별의 애니메이션 업데이트
  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const t = clock.getElapsedTime(); // 경과 시간

    // 기본 반짝임 (scale)
    const pulse = 1 + Math.sin(t * 2) * 0.1 * starVisibility;

    // 선택된 별이면 더 크게
    const isActive = activeStar === id;
    const extra = isActive ? 0.15 : 0;

    const s = 0.3 + extra; // 기본 크기
    meshRef.current.scale.setScalar(s * pulse);

    // 살짝 회전
    meshRef.current.rotation.z = t * 0.4;
  });

  // starVisibility에 따라 서서히 나타나게
  const baseOpacity = 0.3 + starVisibility * 0.7;
  const isActive = activeStar === id;

  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={starGeometry}
      onClick={() => {
        console.log("star id :", id);
        onSelectStar(id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "default";
      }}
    >
      <meshBasicMaterial
        color={isActive ? "#FFE066" : "#FACC15"}
        transparent
        opacity={baseOpacity}
      />
    </mesh>
  );
}

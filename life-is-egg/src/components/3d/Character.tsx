"use client";

import { useRef } from "react";
import { useFrame, type ThreeElements } from "@react-three/fiber";
import * as THREE from "three";

type CharacterProps = ThreeElements["group"] & {
  /** 위아래로 떠다니는 정도 */
  floatAmplitude?: number;
  /** 떠다니는 속도 계수 */
  floatSpeed?: number;
};

export default function Character({
  floatAmplitude = 0.12,
  floatSpeed = 0.8,
  ...props
}: CharacterProps) {
  // 실제로 애니메이션이 적용되는 내부 그룹
  const innerRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!innerRef.current) return;

    const t = clock.getElapsedTime();

    // 살짝 위아래로 떠다니는 효과
    innerRef.current.position.y = Math.sin(t * floatSpeed) * floatAmplitude;

    // 약간의 좌우 회전
    innerRef.current.rotation.y = Math.sin(t * 0.4) * 0.25;
  });

  return (
    // 바깥 그룹은 위치/스케일만 담당 (props.position 등)
    <group {...props}>
      <group ref={innerRef}>
        {/* 몸통 비율: 머리가 더 크고 몸은 짧게 → 캐릭터 느낌 */}
        {/* 배낭(백팩) */}
        <mesh position={[0, 0.45, -0.25]}>
          <boxGeometry args={[0.6, 0.75, 0.35]} />
          <meshStandardMaterial color="#020617" />
        </mesh>

        {/* 몸통 */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.38, 0.42, 0.8, 24]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* 허리 띠 */}
        <mesh position={[0, -0.05, 0]}>
          <torusGeometry args={[0.36, 0.06, 14, 32]} />
          <meshStandardMaterial color="#d4d4d8" />
        </mesh>

        {/* 머리(헬멧 바디) - 더 크게 */}
        <mesh position={[0, 1.0, 0]}>
          <sphereGeometry args={[0.52, 32, 32]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* 헬멧 회색 뚜껑 (lid) */}
        <mesh position={[0, 1.22, 0]}>
          <cylinderGeometry args={[0.54, 0.5, 0.2, 32]} />
          <meshStandardMaterial color="#9ca3af" metalness={0.2} roughness={0.4} />
        </mesh>

        {/* 바이저(유리 부분) - 부드러운 남색 */}
        <mesh position={[0, 1.02, 0.28]}>
          <sphereGeometry
            args={[0.42, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.4]}
          />
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* 헬멧 테두리 링 */}
        <mesh position={[0, 0.88, 0.03]}>
          <torusGeometry args={[0.4, 0.06, 16, 32]} />
          <meshStandardMaterial color="#d4d4d8" />
        </mesh>

        {/* 작은 안테나 */}
        <mesh position={[0.18, 1.32, 0.02]}>
          <cylinderGeometry args={[0.03, 0.03, 0.18, 12]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>
        <mesh position={[0.18, 1.43, 0.02]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>

        {/* 왼팔 - 조금 짧고 통통하게 */}
        <mesh position={[-0.55, 0.35, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.6, 16]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* 오른팔 */}
        <mesh position={[0.55, 0.35, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.6, 16]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* 왼손 장갑 */}
        <mesh position={[-0.55, 0.02, 0]}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial color="#a5b4fc" />
        </mesh>

        {/* 오른손 장갑 */}
        <mesh position={[0.55, 0.02, 0]}>
          <sphereGeometry args={[0.13, 16, 16]} />
          <meshStandardMaterial color="#a5b4fc" />
        </mesh>

        {/* 왼쪽 다리 - 짧고 굵게 */}
        <mesh position={[-0.18, -0.6, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.7, 16]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* 오른쪽 다리 */}
        <mesh position={[0.18, -0.6, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.7, 16]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* 왼쪽 부츠 - 조금 더 둥글게 */}
        <mesh position={[-0.18, -1.0, 0.08]}>
          <boxGeometry args={[0.3, 0.24, 0.5]} />
          <meshStandardMaterial color="#111827" />
        </mesh>

        {/* 오른쪽 부츠 */}
        <mesh position={[0.18, -1.0, 0.08]}>
          <boxGeometry args={[0.3, 0.24, 0.5]} />
          <meshStandardMaterial color="#111827" />
        </mesh>

        {/* 가슴 패널(장식용) */}
        <mesh position={[0, 0.4, 0.26]}>
          <boxGeometry args={[0.32, 0.24, 0.06]} />
          <meshStandardMaterial color="#e5e7eb" />
        </mesh>

        {/* 가슴 패널 버튼들 - 포인트 색상 */}
        <mesh position={[-0.08, 0.42, 0.3]}>
          <sphereGeometry args={[0.032, 12, 12]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
        <mesh position={[0, 0.36, 0.3]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
        <mesh position={[0.08, 0.39, 0.3]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial color="#38bdf8" />
        </mesh>
      </group>
    </group>
  );
}

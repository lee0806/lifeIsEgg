"use client";
import React from "react";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export default function Moon() {
  const earthRef = useRef<THREE.Mesh>(null!);

  const texture = useTexture("/textures/moon.jpg");

  useFrame((_, delta) => {
    if (!earthRef.current) return;
    earthRef.current.rotation.y += delta * 0.2; // 지구 자전
  });

  return (
    <>
      <mesh ref={earthRef}>
        {/* 구체 (반지름 1, 세그먼트 64 / 64) */}
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          color={"white"}
          metalness={0}
          roughness={0.9}
        />
      </mesh>
    </>
  );
}

'use client';

import { useState, useEffect, useMemo } from 'react';

import { GLTFLoader } from 'three-stdlib';
import { Canvas, useLoader } from '@react-three/fiber';

function Leaf({
  model,
  position,
  rotation,
  scale,
  speed,
}: {
  model: 'sky' | 'blue';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
}) {
  const { scene } = useLoader(
    GLTFLoader,
    model === 'sky' ? '/mjc_leaf2.glb' : '/mjc_leaf.glb'
  );
  const copiedScene = useMemo(() => scene.clone(), [scene]); // 모델 복제

  const [info, setInfo] = useState({
    position: position,
    rotation: rotation,
    scale: scale,
  });

  // 흩날리는 애니메이션
  useEffect(() => {
    setInterval(() => {
      setInfo((prev) => ({
        ...prev,
        rotation: [
          prev.rotation[0] + 0.02,
          prev.rotation[1] + 0.005,
          prev.rotation[2] + 0.01,
        ],
        position: [
          prev.position[0] + 0.05 * speed >= 10
            ? (Math.random() - 0.5) * 17 - 20
            : prev.position[0] + 0.05 * speed,
          prev.position[0] + 0.05 * speed >= 10
            ? (Math.random() - 0.5) * 6 + 3
            : prev.position[1] - 0.01 * speed,
          prev.position[0] + 0.05 * speed >= 10
            ? (Math.random() - 0.5) * 3
            : prev.position[2] + 0.005 * speed,
        ],
      }));
    }, 1000 / 60);
  }, []);

  return (
    <group>
      <primitive
        scale={info.scale}
        rotation={info.rotation}
        position={info.position}
        object={copiedScene}
      />
    </group>
  );
}

export default function Mjc_Animation() {
  const [mesh, setMesh] = useState<
    {
      model: 'sky' | 'blue';
      position: [number, number, number];
      rotation: [number, number, number];
      scale: number;
      speed: number;
    }[]
  >([]);

  // for 반복 만큼 나뭇잎 생성
  useEffect(() => {
    const temp = [...mesh];
    for (let i = 0; i < 70; i++) {
      temp.push({
        model: i % 2 === 0 ? 'sky' : 'blue',
        position: [
          (Math.random() - 0.5) * 17 - 20,
          (Math.random() - 0.5) * 6 + 3,
          (Math.random() - 0.5) * 3,
        ],
        rotation: [
          0,
          (Math.random() - 0.5) * 6.28,
          (Math.random() - 0.5) * 6.28,
        ],
        scale: Math.random() * 0.05 + 0.05,
        speed: Math.random() * 1.5 + 0.05,
      });
    }
    setMesh(temp);
  }, []);

  return (
    <div className='w-full h-dvh'>
      <Canvas>
        <ambientLight intensity={2} />
        {mesh.map((item, index) => (
          <Leaf key={index} {...item} />
        ))}
      </Canvas>
    </div>
  );
}

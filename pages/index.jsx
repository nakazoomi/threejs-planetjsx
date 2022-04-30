import { Effects } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Threejs from '../components/Threejs';

// START FUNCTION
export default function Home() {
  return (
    <>
      <Canvas id="threejs-canvas">
        <Suspense fallback={null}>
          <Threejs />
        </Suspense>
      </Canvas>
    </>
  );
}

import * as THREE from 'three';
import {
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
  Html,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Effects,
  Environment,
  Text,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { angleToRadians } from './Angle';
import { useRef } from 'react';

import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// IMPORTANT LINKS
// https://npmmirror.com/package/drei/v/1.5.0#meshdistortmaterial

export default function Threejs() {
  const texture = useLoader(TextureLoader, 'textures/texture.png');

  // console.log(Camera.position);

  return (
    <>
      {/***************************************************************************/}
      {/* OEBIT CONTROLS */}

      {/* <PerspectiveCamera /> */}
      <OrbitControls
        position={(0, 0, -240)}
        enableZoom={true}
        maxDistance={100}
        minDistance={50}
      />
      {/***************************************************************************/}
      {/* GEOMETRIES */}

      {/* NEUTRONEN STRAHL */}

      {/* <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry attach="geometry" args={[2, 3, 320]} />
        <MeshDistortMaterial
          attach="material"
          distort={0.2} // Strength, 0 disables the effect (default=1)
          speed={50} // Speed (default=1)
          color="#ebede1"
          wireframe={true}
        />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry attach="geometry" args={[1, 2, 320]} />
        <MeshWobbleMaterial
          attach="material"
          distort={50} // Strength, 0 disables the effect (default=1)
          speed={100} // Speed (default=1)
          color="#fff"
          wireframe={false}
        />
      </mesh> */}
      {/* Sphere 1 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[21, 32, 32]} />
        <MeshDistortMaterial
          attach="material"
          distort={0.2} // Strength, 0 disables the effect (default=1)
          speed={5} // Speed (default=1)
          color="#f8f8f8"
          wireframe={false}
        />
      </mesh>
      {/* Sphere 2 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[20, 32, 32]} />
        <MeshDistortMaterial
          attach="material"
          distort={0.3} // Strength, 0 disables the effect (default=1)
          speed={5} // Speed (default=1)
          color="#c0c0c0"
          wireframe={false}
        />
      </mesh>
      {/* Sphere 3 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[20, 32, 32]} />
        <MeshDistortMaterial
          attach="material"
          distort={0.3} // Strength, 0 disables the effect (default=1)
          speed={5} // Speed (default=1)
          color="#fff"
          wireframe={false}
        />
      </mesh>
      {/* Sphere 4 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[21, 32, 32]} />
        <MeshWobbleMaterial
          attach="material"
          factor={0.2} // Strength, 0 disables the effect (default=1)
          speed={10} // Speed (default=1)
          color="#d9ff00"
          wireframe={false}
        />
      </mesh>
      {/* Sphere 5 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[21, 32, 32]} />
        <MeshWobbleMaterial
          attach="material"
          factor={0.5} // Strength, 0 disables the effect (default=1)
          speed={10} // Speed (default=1)
          color="#fff"
          wireframe={false}
          // normalMap={texture}
        />
      </mesh>
      {/* Sphere 6 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[22, 32, 32]} />
        <MeshWobbleMaterial
          attach="material"
          factor={4} // Strength, 0 disables the effect (default=1)
          speed={0.21} // Speed (default=1)
          color="#121212"
          wireframe={false}
        />
      </mesh>
      {/* Sphere 7 */}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry attach="geometry" args={[21, 32, 32]} />
        <MeshWobbleMaterial
          attach="material"
          factor={5} // Strength, 0 disables the effect (default=1)
          speed={0.22} // Speed (default=1)
          color="#f8f8f8"
          wireframe={false}
        />
      </mesh>
      {/* Sphere 8 */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[21, 32, 32]} />
        <meshToonMaterial attach="material" color="yellow" wireframe={false} />
      </mesh>

      {/***************************************************************************/}
      {/* ENVIRONMENT */}

      {/* <Sky
        distance={450000} // Camera distance (default=450000)
        sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
        inclination={1} // Sun elevation angle from 0 to 1 (default=0)
        azimuth={0.1} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
      /> */}

      <Stars
        radius={50} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={1} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />

      {/***************************************************************************/}
      {/* LIGHT */}

      {/* Ambient Light */}
      <ambientLight args={['#ffffff', 0.05]} />
      {/* Directional Light */}
      <directionalLight args={['#4100ff', 1]} position={[-1.5, 0, 1]} />
      {/* Point Light */}
      <pointLight args={['#fff', 1]} position={[0, 0, 0]} />
    </>
  );
}

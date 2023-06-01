import React, {  Suspense } from "react";
import { OrbitControls } from "@react-three/drei";


export default function App() {

  return (
    <>
    <mesh position={[0,1,0]} >
      <sphereBufferGeometry args={[2, 24, 24]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
    <mesh position={[1,0,0]} >
      <boxGeometry />
      <meshStandardMaterial color={"blue"} />
    </mesh>

        <ambientLight color={0xffffff} intensity={0.1} />
        <pointLight
          color={0xffffff}
          castShadow
          shadowMapHeight={1024}
          shadowMapWidth={1024}
          position={[0, 3, 2]}
          intensity={0.5}
        />
        <OrbitControls />
        <Suspense fallback={null}>
        </Suspense>
    </>
  );
}

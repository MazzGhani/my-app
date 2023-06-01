import Main from "./Main";
import { Projects } from "./Projects";
import { Intro } from "./Intro";
import { Experience } from "./Experience";
import { Links } from "./Links";
import { Languages } from "./Languages";
import React, {  useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Scroll, ScrollControls, Html } from "@react-three/drei";

function App() {
  const donut = useRef();
  const planeRef = useRef();
  const miningCone= useRef();

  function SpinDonut() {
    useFrame(({ clock }) => {
      donut.current.rotation.x = clock.getElapsedTime();
      planeRef.current.rotation.z = Math.sin(clock.getElapsedTime()*1);
      miningCone.current.rotation.z = Math.sin(clock.getElapsedTime()*1);

    });
  }


  return (
    <div>
      <Main />

      <Intro />
      <Links />
      <Intro />

      <Experience />

      <Projects />
      <div style={{ width: "100%", height: "50vh" }}>
        <Canvas>
          {/* <OrbitControls enableZoom={false} /> */}
          <ambientLight position={[10, 10, 10]} />
          <ScrollControls pages={3} damping={0.1}>
            <Scroll>
            <mesh ref={miningCone} position={[0, 0, 0]}>
                <coneGeometry args={[1,2,10]} />
                <meshStandardMaterial color="brown"  />
              </mesh>
              <mesh  position={[0, -5, 0]}>
                <torusKnotGeometry args={[1,1,100,16]} />
                <meshStandardMaterial color="green" wireframe={true}  />
              </mesh>
              <mesh ref={planeRef} position={[0, -10, 0]}>
                <planeBufferGeometry args={[2, 2, 5, 2]} />
                <meshStandardMaterial color="blue" wireframe={true} />
              </mesh>
              <mesh ref={donut} position={[0, -15, 0]}>
                <torusGeometry />
                <meshStandardMaterial color="red" />
              </mesh>
              <SpinDonut />
            </Scroll>
            <Scroll>
            <Html>
              <div>
                <h1>
                  <a style={
          {textDecoration : 'none'}} 
           href="https://github.com/MazzGhani/ThreeJsJourney/tree/main/29-raging-sea">Mining Project. </a>
                </h1>
              </div>
              <div style={{position:"absolute",top:"50pc"}}>
                <h1>
                  <a style={
          {textDecoration : 'none'}} 
           href="https://text-geo-project-2.vercel.app/">3D Text  </a>
                </h1>
              </div>
              <div style={{position:"absolute",top:"90pc"}}>
                <h1>
                  <a style={
          {textDecoration : 'none'}} 
           href="https://three-js-project-one-psi.vercel.app/">Space Plane Manipulation </a>
                </h1>
              </div>
              <div style={{position:"absolute",top:"150pc"}}>
                <h1>
                  <a style={
          {textDecoration : 'none'}} 
           href="https://stack-ds.vercel.app/">Interactive Stack Data Structure </a>
                </h1>
              </div>
              
            </Html>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>



      <Languages />
      <div style={{ height: "50vh", width: "100%" }}>
        <spline-viewer url="https://prod.spline.design/L-xaHkPSSkpROSeB/scene.splinecode"></spline-viewer>
      </div>
      {/* <Home/> */}
    </div>
  );
}

export default App;

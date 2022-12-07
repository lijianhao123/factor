import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./factor.gltf");
  return (
    <>
      <primitive object={gltf.scene} position={[-2,-1,2]} scale={0.5} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas style={{height:'100vh'}}>
        <Suspense fallback={null}>
        <ambientLight intensity={1} />
  <directionalLight color="white" position={[0, 0, 5]} />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Box = () => {
  return (
    <mesh position={[0, 1, 0]}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="aqua" />
    </mesh>
  );
};
const Plane = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas style={{ height: "100vh", background: "black" }}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.5} />
      <Box />
      <Plane />
    </Canvas>
  );
}

export default App;

import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
//
import GlobalStyle from './GlobalStyle';

const Box = () => {
  /* eslint-disable no-return-assign */
  /* eslint-disable no-multi-assign */
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Canvas>
        <Box />
      </Canvas>
    </>
  );
}

export default App;

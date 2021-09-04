import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import EarthRainbow from "./EarthRainbow"

function Earth() {
  return (
    <Canvas orthographic camera={{ zoom: 60, position: [0, 0, 50] }}>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <EarthRainbow />
      </Suspense>
    </Canvas>
  );
}

export default Earth
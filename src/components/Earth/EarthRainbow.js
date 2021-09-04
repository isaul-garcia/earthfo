/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

import { useAnimations } from "@react-three/drei/useAnimations";
import { a, useSpring } from "@react-spring/three";


export default function Model(props) { 
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/EarthRainbow.glb");
  const { actions } = useAnimations(animations, group);

   // Hover and animation-index states
   const [hovered, setHovered] = useState(false)
   // Animate the selection halo
   const { scale } = useSpring({ scale: hovered ? [0.19,0.19,0.19] : [0.17, 0.17, 0.17]})

  useEffect(() => {
    actions.EarthRotation.play();
    actions.RingRotation.play();
  });

  return (
    <group ref={group} {...props} dispose={null} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <mesh
        name="Sphere"
        material={materials["Material.001"]}
        geometry={nodes.Sphere.geometry}
        scale={[0.8, 0.8, 0.8]}
        position={[0, 0, 3]}
      />
      <a.mesh
        name="Torus001"
        material={materials["Material.003"]}
        geometry={nodes.Torus001.geometry}
        rotation={[0, 0, 0.26]}
        scale={scale}
        position={[0, 0, 3]}
      />
    </group>
  );
}

useGLTF.preload("/EarthRainbow.glb");

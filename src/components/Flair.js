import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import "./App.css";
import duck from "./Silly.glb";

import { OrbitControls } from "drei";

const Model = (props) => {
  const model = useLoader(GLTFLoader, duck);

  // Here's the animation part
  // *************************
  let mixer;

  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    console.log("mixer", mixer);
    // console.log("arrayofmodels", arrModel);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  // *************************

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={model.scene} scale={props.scale} />;
};

const SpinBox = () => {
  const mesh = useRef(null);

  return (
    <mesh castShadow ref={mesh}>
      <planeBufferGeometry />
    </mesh>
  );
};

const Flair = () => {
  return (
    <Canvas
      camera={{ position: [0, 270, 270], fov: 65 }}
      onCreated={({ gl, scene }) => {
        // camera.lookAt(new THREE.Vector3(500, 0, 0));
        // scene.background = new THREE.Color("lightblue");

        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight />
      <pointLight position={[0, 0, 200]} />
      <Suspense fallback={<SpinBox />}>{<Model />}</Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Flair;

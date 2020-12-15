import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "drei";

const Model = (props) => {
  const model = useLoader(GLTFLoader, props.character);

  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return <primitive object={model.scene} scale={props.scale} />;
};

const CharacterBox = () => {
  const mesh = useRef(null);

  return (
    <mesh ref={mesh}>
      <planeBufferGeometry />
    </mesh>
  );
};

const Character = (props) => {
  return (
    <Canvas camera={{ position: [10, 260, 260], fov: 60 }}>
      <ambientLight />
      <pointLight position={[0, 0, 200]} />
      <Suspense fallback={<CharacterBox />}>
        {<Model scale={[0.9, 0.9, 0.9]} character={props.model} />}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default Character;

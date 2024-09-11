import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  useFrame((state, delta) => {
    // damp3 arguments -> currentPosition, targetPosition, velocity, changeThatGoingToHappen
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
  });

  //   if (!isMobile) {
  // as modile devices have small viewport sizes, doing animation is diffcult on that, so we are using differnt type of animation
  useFrame((state, delta) => {
    easing.dampE(
      groupRef.current.rotation,
      [-state.pointer.y / 3, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  //   }
  return (
    <group
      ref={groupRef}
      scale={isMobile ? 1 : 1.3}
    >
      {children}
    </group>
  );
};

export default HeroCamera;

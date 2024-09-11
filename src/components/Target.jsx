import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <mesh
      {...props}
      rotation={[0, Math.PI / 5, 0]}
      ref={targetRef}
      scale={1.5}
    >
      {/* The primitive tag is used to render a raw three.js object in the canvas. Here, we are using it to render the scene object that we loaded using the useGLTF hook. */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;

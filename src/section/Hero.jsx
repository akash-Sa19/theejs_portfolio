import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // arg1 -> schemaOrFolderName
  // arg1 -> settingsOrDepsOrSchema
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });
  return (
    <section className="relative flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
        <p className="text-2xl font-medium text-center text-white sm:text-3xl font-generalsans">
          Hi, I am Akash <span className="waving-hand">👋🏼</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="absolute inset-0 w-full h-full">
        {/* add threejs here */}
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          {/*
            The <Suspense> component is a built-in hook in React that allows us to
            handle loading states in a more elegant way. It wraps a component (or
            components) that may take some time to load, and provides a fallback
            component to be rendered while the wrapped component is loading.
          */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 20]}
            />
            {/* 
              The scale prop is used to scale down the entire HackerRoom mesh.
              The position prop is used to position the HackerRoom mesh at the origin (0, 0, 0).
              The rotation prop is used to rotate the HackerRoom mesh by 90 degrees around the y-axis, 
              which makes the room appear upright in the scene.
            */}
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                // scale={0.07}
                // position={[0, 0, 0]}
                // rotation={[0, -Math.PI / 2, 0]}
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>

            {/* 
              The rotation prop is given three values: [0, -Math.PI / 2, 0].
              The first value, 0, is for the x-axis and sets the rotation to 0 degrees.
              The second value, -Math.PI / 2, is for the y-axis and sets the rotation to -90 degrees, or -PI / 2 radians, which makes the room appear upright in the scene.
              The third value, 0, is for the z-axis and sets the rotation to 0 degrees.
            */}
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight
              intensity={0.5}
              position={[10, 10, 10]}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute left-0 right-0 z-10 w-full bottom-7 c-space">
        <a
          href="#contact"
          className="w-fit"
        >
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

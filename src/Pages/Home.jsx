import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/sky";
import Bird from "../models/bird";
import Plane from "../models/plane";
{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Popup
</div> */
}

const Home = () => {
  const adjustIslandfromAllScreenSizes = () => {
    let screenPosition = [0, -6.5, -43];
    let screenScale = null;
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth <= 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenPosition, screenScale, rotation];
  };
  const [isLandPosition, isLandScale, islandRotation] =
    adjustIslandfromAllScreenSizes();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[10, 2, 5]}
            intensity={3}
            color="#ffcc80"
          />
          <hemisphereLight color="#b1e1ff" groundColor="#000000" />

          <Sky />
          <Bird />
          <Island
            position={isLandPosition}
            scale={isLandScale}
            rotation={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

import React, { Suspense, useState,useEffect,useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/sky";
import Bird from "../models/bird";
import Plane from "../models/plane";
import HomeInfo from "../components/HomeInfo";
import Sakura from "../assets/sakura.mp3"
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(Sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic,setIsPlayingMusic] = useState(true);
  
  useEffect(()=>{
   if (isPlayingMusic) {
      audioRef.current.play().catch((error) => {
        // If browser blocks autoplay, turn switch off visually
        console.log("Audio autoplay failed:", error);
        setIsPlayingMusic(false);
      });
    } else {
      audioRef.current.pause();
    }
  },[isPlayingMusic])
  const adjustIslandfroAllScreenSizes = () => {
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
  const adjustPlanefroAllScreenSizes = () => {
    let screenPosition, screenScale;
    if (window.innerWidth <= 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenPosition, screenScale];
  };
  const [isLandPosition, isLandScale, islandRotation] =
    adjustIslandfroAllScreenSizes();
  const [planePosition, planeScale] = adjustPlanefroAllScreenSizes();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage = {currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[1, 10, 3]}
            intensity={2.5}
            color="#ffffff"
          />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            position={isLandPosition}
            scale={isLandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <audio ref={audioRef} src={Sakura} loop />
        <img src={isPlayingMusic?soundon:soundoff} alt="sound on/off icon"
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={()=>setIsPlayingMusic(!isPlayingMusic)} />
      </div>
    </section>
  );
};

export default Home;

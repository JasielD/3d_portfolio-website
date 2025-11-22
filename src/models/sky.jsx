import React from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from "../assets/3d/sky.glb"

const Sky = () => {
    const sky = useGLTF(skyScene)
    console.log(sky)
  return (
    <mesh>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky

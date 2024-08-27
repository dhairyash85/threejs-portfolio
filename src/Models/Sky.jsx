import React, { useRef, useEffect } from 'react'
import skuScene from "../assets/3d/sky.glb"
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Sky = ({isRotating}) => {
    const sky = useGLTF(skuScene)
    const skyRef = useRef()

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.15 * delta;
        }
    });
    
    return (
        <mesh ref={skyRef}>
            {sky.scene ? <primitive object={sky.scene} /> : null}
        </mesh>
    )
}

export default Sky

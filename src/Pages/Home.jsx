import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Components/Loader'
import Island from '../Models/Island'
import Sky from '../Models/Sky'
import Bird from '../Models/Bird'
import Plane from '../Models/Plane'
import HomeInfo from '../Components/HomeInfo'
const Home = () => {
  const [isRotating, setIsRotating]=useState(false)
  const [currentStage, setCurrentStage]=useState()
  const adjustIsland=()=>{
    let screenScale, screenPosition
    let roatation=[0.1, 4.7, 0]
    screenPosition=[0, -6.5, -43 ]
    if(window.innerWidth<768){
      screenScale=[0.9,0.9,0.9]
    }
    else{
      screenScale=[1,1,1]
    }
    return [screenScale, screenPosition, roatation]

  }
  const adjustPlane=()=>{
    let screenScale, screenPosition
    screenPosition=[0, -6.5, -43 ]
    if(window.innerWidth<768){
      screenScale=[1.5,1.5,1.5]
      screenPosition=[0,-1.5, 0]
    }
    else{
      screenScale=[3,3,3]
      screenPosition=[0, -4, -4]
    }
    return [screenScale, screenPosition]

  }
  const [islandScale, islandPosition, rotation]=adjustIsland()
  const [planeScale, planePosition]=adjustPlane()
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas className={`w-full h-full bg-transparent ${!isRotating? 'cursor-grab':'cursor-grabbing'}`} camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={2}/>
          <hemisphereLight  skyColor="#ble1ff" groundColor="#000000" intensity={1}/>
          <Bird/>
          <Sky isRotating={isRotating}/>
          <Island 
            position={islandPosition}
            scale={islandScale}
            roatation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            />
          <Plane
            planePosition={planePosition}
            planeScale={planeScale }
            isRotating={isRotating}
            rotation={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
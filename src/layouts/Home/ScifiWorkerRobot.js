import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import veribot  from   'assets/veribot.glb';

export function Model(props) {
  const { scene, animations } = useGLTF(veribot)
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    actions.Animation.play()
  }, [])
  return <primitive object={scene} {...props} />
}

export const ScifiWorkerRobot = props => {
    return (
        <Canvas camera={{ fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Model position={[1, -0.5, 0]} />
          <ContactShadows position={[0, -1, 0]} scale={10} far={4} blur={1.75} />
          <Environment preset="park" />
          <OrbitControls autoRotate />
        </Canvas>
      )
};

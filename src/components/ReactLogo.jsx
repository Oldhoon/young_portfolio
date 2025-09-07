
import { Float, useGLTF } from '@react-three/drei'

export function ReactLogo(props) {
  const { nodes, materials } = useGLTF('/models/react_logo.glb')
  return (
    <Float floatIntensity={1}>
      <group position={[4,2.6,0]} scale={0.15} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.4, 0.4, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react_logo.glb')

export default ReactLogo
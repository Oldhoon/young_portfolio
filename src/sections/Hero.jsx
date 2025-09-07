import { OrbitControls} from "@react-three/drei"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Snowman } from "../components/Snowman"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../components/Loader"

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <ParallaxBackground />
        
        <figure className="absolute inset-0" style={{
            width: "100vw", height: "100vh"
        }}>
            <Canvas>
                <Suspense fallback={<Loader />}>
                <ambientLight intensity={4} />
            <Snowman />
            </Suspense>
            <OrbitControls enableZoom={false}/>
            </Canvas>
        </figure>
    </section>
  )
}

export default Hero
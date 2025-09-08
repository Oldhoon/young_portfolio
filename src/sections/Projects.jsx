import { myProjects } from '../constants';
import {Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import Loader from '../components/Loader';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Projects = () => {
    const projectCount = myProjects.length;
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const handleNavingation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
    })}
    const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className='c-space my-20'>
        <p className='headtext'>My Work</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} className='w-full h-96 object-cover rounded-xl'/>
                </div>
                <div className='p-1 backdrop-blur-3xl w-fit rounded-lg backdrop-filter' style={currentProject.logoStyle}>
                    <img src={currentProject.logo} className='w-14 h-14 shadow-sm'/>
                </div>
                <div className='flex flex-col gap-5 text-white my-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                    <p className='subtext'>{currentProject.desc}</p>
                    <p className='subtext'>{currentProject.subdesc}</p>
                </div>

                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3'>{currentProject.tags.map(
                        (tag,index) => (
                            <div key={index} className='tech-logo'>
                                <img src={tag.path} alt={tag.name} className='flex w-10' />
                            </div>))}
                        </div>
                        <a href={currentProject.href} className='flex items-center gap-2 cursor-pointer text-white' target='_blank' rel='noreferrer'>
                            <p>Github Repo</p>
                            <img src="/assets/arrow-up.svg" className='w-4.5' alt='arrow'/>
                        </a>
                </div>
                <div className='flex justify-between items-center mt-7'>
                    <button className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full' onClick={() => handleNavingation('previous')}>
                        <img src="/assets/left-arrow.png" alt='left arrow' className='w-4 h-4'/>
                    </button>
                    <button className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full' onClick={() => handleNavingation('next')}>
                        <img src="/assets/right-arrow.png" alt='right arrow' className='w-4 h-4'/>
                    </button>
                </div>
            </div>
            <div className='border border-black bg-gray-950 rounded-lg h-96 md:h-full'>
                <Canvas>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10,10,5]}/>
                    <Center>
                        <Suspense fallback={<Loader/>}>
                        <group scale={2} position={[0,-3,0]} rotation={[0, -0.1, 0]}>


                        </group>
                        </Suspense>
                    </Center>
                </Canvas>
            </div>
        </div>
        </section>
  )
}

export default Projects
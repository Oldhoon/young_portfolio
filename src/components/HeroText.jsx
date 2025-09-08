import React from "react";
import { FlipWords } from "./FlipWords";
import { TextGenerateEffect } from "./GenerateText";
import {motion} from 'motion/react';


const HeroText = () => {
    const words = ["modern", "scalable", "innovative"];

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* desktop */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium"
        initial={{opacity:0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{delay:1}}>Hi I'm Young</motion.h1>
        <div className="flex flex-col items-start">
          <TextGenerateEffect words={"An aspiring Software Developer \n passionate about creating"}/>
           
          <motion.div>
            <FlipWords words={words} className="font-black text-white text-6xl" />
          </motion.div>
          <motion.p className="text-4xl font-medium text-neutral-300">software</motion.p>
        </div>
      </div>
        {/* mobile */}
        <div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium"
        initial={{opacity:0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{delay:1}}>Hi I'm Young</motion.p>
        <motion.p className="text-3xl font-medium text-neutral-300 text-center">
            An aspiring Software Developer <br /> passionate about creating
          </motion.p>
          <motion.div>
            <FlipWords words={words} className="font-black text-white text-4xl" />
          </motion.div>
          <motion.p className="text-3xl font-medium text-neutral-300">software</motion.p>
        </div>
    </div>
  );
};

export default HeroText;

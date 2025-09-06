import React from "react";
import { FlipWords } from "./FlipWords";
import {motion} from 'motion/react';


const HeroText = () => {
    const words = ["modern", "scalable", "innovative"];

  return (
    // desktop only for now - can add mobile later
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 className="text-4xl font-medium"
        initial={{opacity:0, x:-50}}
        animate={{opacity:1, x:0}}
        transition={{delay:1}}>Hi I'm Young</motion.h1>
        <div className="flex flex-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300">
            An aspiring Software Engineer <br /> dedicated to crafting
          </motion.p>
          <motion.div>
            <FlipWords words={words} className="font-black text-white text-6xl" />
          </motion.div>
          <motion.p className="text-4xl font-medium text-neutral-300">web solutions</motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;

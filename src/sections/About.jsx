import {Socials} from "../components/Socials";
import { useRef } from "react";
import Card from "../components/Card";
import Globe from "react-globe.gl";
import DownloadResumeButton from "../components/DownloadResumeButton";
import { SocialButtonsGroup } from "../components/social-buttons";


const About = () => {
    const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/grid1.png"
            className="absolute scale-[0.9] -right-0.5 -top-0.5"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Young Kim</p>
            <p className="subtext">
              {" "}
              With a background in biochemistry and a second degree in computer
              science, I’m passionate about creating software solutions that
              bridge the gap between science and technology.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-2">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <Card
              style={{ rotate: "20deg", top: "10%", left: "60%" }}
              image={"assets/logos/git.svg"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "20%", left: "5%" }}
              image={"assets/logos/javascript.svg"}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-40deg", top: "50%", left: "18%" }}
              image={"assets/logos/react.svg"}
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "0deg", top: "30%", left: "28%" }}
              image={"assets/logos/cplusplus.svg"}
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "60deg", top: "70%", left: "80%" }}
              image={"assets/logos/visualstudiocode.svg"}
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "-60deg", top: "70%", left: "65%" }}
              image={"assets/logos/nodejs.svg"}
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "-60deg", top: "40%", left: "65%" }}
              image={"assets/logos/python.svg"}
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "30deg", top: "60%", left: "45%" }}
              image={"assets/logos/aws.svg"}
              containerRef={grid2Container}

            />
            <Card
              style={{ rotate: "3deg", top: "69%", left: "45%" }}
              image={"assets/logos/Java.svg"}
              containerRef={grid2Container}

            />
          </div>
        </div>
        {/* grid 3 */}
        <div className="grid-black-color grid-3">
            
            <div className="absolute inset-0 flex justify-center">
                <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"/>
                
            </div>
            <div className="relative z-10 w-[50%]">
                <p className="headtext">Time Zone</p>
                <p className="text-white subtext">I'm based in Vancouver, and open to remote work</p>
            </div>
            
        </div>
        {/* grid 4 */}
        <div className="grid-special-color grid-4">
            <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">Download My Resume</p>
                <DownloadResumeButton/>
            </div>
        </div>
        {/* grid 5 */}
        <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
                <p className="headtext">Find me here and say Hi</p>
                <SocialButtonsGroup className="justify-center mt-20" linkedinUrl="https://www.linkedin.com/in/younghoon/"
                githubUrl="https://github.com/Oldhoon"
                instagramUrl="https://www.instagram.com/oldhoon0207/"
                size="lg"
                />
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                <Socials/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

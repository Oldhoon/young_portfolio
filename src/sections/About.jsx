
const About = () => {
  return (
    <section className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-40 md:inset-y-10 lg:scale-[2.5]"/>
                <div className="z-10">
                    <p className="headtext">Hi, I'm Young Kim</p>
                    <p className="subtext"> I'm a biochemistry graduate currently pursuing a second degree in
              computer science, with a passion for bridging science and
              technology through software development. My background in research
              has honed my analytical thinking, and I'm now applying those
              skills to build practical, user-focused solutions in tech.</p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
            </div>
            {/* grid 2 */}
            <div className="grid-default-color grid-2">
                <div className="flex items-center justify-center w-full h-full">
                    <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
                </div>
            </div>
            {/* grid 3 */}
            <div className="grid-black-color grid-3"></div>
            {/* grid 4 */}
            <div className="grid-special-color grid-4"></div>
            {/* grid 5 */}
            <div className="grid-default-color grid-5"></div>
            
        </div>
    </section>
  )
}

export default About
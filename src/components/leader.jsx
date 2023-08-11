import { dinteractive, minteractive } from "../asset";

const leader = () => (
  <div className="px-5 py-20 space-y-12 | md:flex md:px-0">
    <img src={minteractive} alt="image" className="w-full h-auto | md:hidden" />
    <img
      src={dinteractive}
      alt="image"
      className="w-[60rem] h-auto px-[9.4rem] hidden | md:block"
    />
    <div className="flex flex-col items-center w-full h-auto font-light font-josefin text-center space-y-5 | md:self-end md:-ml-72 md:w-[37.8rem] md:h-[17rem] md:bg-white md:items-end md:justify-end md:px-[5.5rem] md:text-left">
      <h1 className="uppercase text-[2rem] leading-[1] ">
        The leader in interactive VR
      </h1>
      <p className="px-5 | md:px-0 md:py-2">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  </div>
);

export default leader;

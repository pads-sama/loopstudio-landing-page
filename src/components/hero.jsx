
import { mhero, dhero } from "../asset";

const hero = () => (
    <div className="relative">
        <img src={ mhero } alt="Image" className="w-full h-auto | md:hidden" />
        <img src={ dhero } alt="Image" className="w-full h-auto hidden md:block" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center | md:justify-start md:px-[9.4rem] md:items-end">
          <p className="text-white font-light font-josefin border-2 text-[2.5rem] leading-[1] uppercase px-6 py-6 mx-6 | md:mx-0 md:mb-32 md:text-7xl md:w-[59%]">Immersive experiences that deliver</p>
        </div>
    </div>
  )

export default hero
import { useState } from "react";
import { Logo, close, hamburger } from "../asset";
import { navLinks } from "../constants";

const navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="w-full px-5 py-10 h-[100px]
    flex justify-between items-center  | md:pl-[9.4rem] md:pr-[7.3rem] md:mt-9" 
    >
      <img
        src={Logo}
        alt="web logo"
        className="w-[130px] h-auto z-50 | md:w-[150px]"
      />

      <ul className="items-center justify-end flex-1 hidden text-white list-none sm:flex ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-josefin font-semibold text-base border-b-2 border-transparent | hover:border-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8"
            }`}
          >
            <a href={`#${nav.link}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <img
        src={toggle ? close : hamburger}
        alt="hamburger"
        className="w-[25px] h-[16px] cursor-pointer object-contain z-50 sm:hidden"
        onClick={() => setToggle((prev) => !prev)}
      />

      <div
        className={`w-screen bg-black absolute inset-0 -mt-2 h-[40.5rem]  z-40 py-0 ${
          toggle ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-start justify-start flex-1 w-full h-screen px-5 text-lg text-white list-none py-44">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-josefin font-light uppercase ${
                index === navLinks.length - 1 ? "mb-0" : "mb-5"
              }`}
            >
              <a href={`#${nav.link}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default navigation;

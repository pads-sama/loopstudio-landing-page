import { Logo, facebook, instagram, pinterest, twitter,  } from "../asset"
import { navLinks } from "../constants";
const footer = () => (
  <div className="h-auto w-full flex flex-col items-center justify-center py-16 mt-10 | md:flex-wrap md:flex-row md:mt-32 md:px-[9.4rem] md:justify-start md:items-start">
     <div className="w-full | md:flex-1">
       <div className="w-full flex justify-center items-center h-12 | md:justify-start">
         <img
            src={Logo}
            alt="web logo"
            className="w-[130px] h-auto | md:w-[150px]"
          />
       </div>
       
        <div className="flex justify-center w-full h-auto text-center ">
          <ul className="items-center justify-end flex-1 text-white list-none sm:flex py-4 | md:py-0 md:h-12 md:justify-start md:space-x-3">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-josefin font-semibold text-base border-b-2 border-transparent | hover:border-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-3" 
                } | md:mb-0`}
              >
                <a href={`#${nav.link}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
     </div>
      <div className="w-full | md:flex-1">
        <div className="w-full flex space-x-4 justify-center items-center h-12 | md:justify-end">
          <img src={facebook} alt="" className="w-[20px] h-auto"/>
          <img src={twitter} alt="" className="w-[20px] h-auto"/>
          <img src={pinterest} alt="" className="w-[20px] h-auto"/>
          <img src={instagram} alt="" className="w-[20px] h-auto"/>
        </div>
        <div className="flex text-darkGray font-josefin font-semibold justify-center items-center h-12  | md:justify-end">
          <small>© 2021 Loopstudios. All rights reserved.</small>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-center text-center font-light text-xs not-italic font-alata text-darkGray | md:justify-end">
            <samll>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" className="text-blue-600">
                Frontend Mentor
              </a>. 
              Coded by <a href="" className="text-blue-600">Juan Carlos Padillo</a>.</samll>
      </div>
    </div>
  )


export default footer
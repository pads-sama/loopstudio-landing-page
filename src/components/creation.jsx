import React from 'react';
import { creationMobile, creationDesktop } from "../constants";

const grid = 'm-The grid'
const grid2 = 'd-The grid'

const creation = () => (
    <div className=" px-5 font-light font-josefin flex flex-col items-center | md:flex-row md:flex-wrap md:justify-between md:items-center md:pl-[9.4rem] md:pr-[9rem]">
      <div className='md:order-1'>
        <h1 className='uppercase text-[2rem] leading-[1] text-center mb-10' >Our creations</h1>
      </div>
      <div className="relative | md:hidden">
      {creationMobile.map((create) => (
        <div key={create.id} className="relative mb-5">
          <img src={create.image} alt="" className="w-full h-auto" />
          <div className='absolute inset-0 bg-black opacity-30'></div>
          <div className='absolute inset-0 flex items-end justify-start text-white uppercase'>
            <p className={`text-2xl font-light font-josefin mx-5 pb-5 ${create.id === grid ? 'w-16' : 'w-32'}`} >{create.content}</p>
          </div>
        </div>
      ))}
    </div>
      <div className="md:order-3 relative hidden gap-2 flex-wrap | md:flex ">
      {creationDesktop.map((create) => (
        <div key={create.id} className="relative flex-auto">
          <img src={create.image} alt="" className="w-full h-auto" />
          <div className='absolute inset-0 bg-black opacity-30'></div>
          <div className='absolute inset-0 flex items-end justify-start text-white uppercase'>
            <p className={`text-3xl font-light font-josefin mx-5 pb-5 ${create.id === grid2 ? 'w-16' : 'w-40'}`} >{create.content}</p>
          </div>
        </div>
      ))}
    </div>
   <div className='md:order-2 w-auto h-20'>
   <button className=' uppercase border border-black font-semibold px-8 py-[4px] text-sm | hover:bg-black hover:text-white'>See all</button>
   </div>
    </div>
  ) 

export default creation
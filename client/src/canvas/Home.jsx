import React from 'react'
import  beekeper  from "../assets/beekeper.png";
import bee from "../assets/bee.jpg";

function Home() {
  return (
    <div className='flex md:flex-row flex-col  w-full items-center h-screen mx-auto justify-between'>
      <div className='basis-1/2 h-full '>
        <div className='relative flex flex-col gap-10 top-20 lg:left-40 md:left-56 left-24  '>
          <div className='relative'>
            <h3 className='text-3xl font-bold text-secondary'>Honey Bee</h3>
            <h6 className='text-base font-bold text-tertiary'>Pure From Nature</h6>
          </div>
          <div className='relative'>
            <h1 className='sm:text-5xl font-bold text-secondary text-3xl' >Good Honey</h1>
            <h1 className='sm:text-5xl font-bold text-tertiary relative top-5 sm:left-20 text-3xl' >Good Honey</h1>
          </div>
          <div>
            <p className='border-b-2 border-secondary w-1/2 sm:w-9/12 lg:w-1/2 relative top-10' >All our honey is single origin and we are proud practice sustainable beekeeping. Our honey is raw honey that is pure, unpesteurised, unprocessed and with no additives.</p>
          </div>
          <div className='relative top-20'>
            <p className='w-1/2'>We would like to give you the best experience about taste of honey join us now!</p>
          </div>
          <div className='relative top-32'>
            <a href="#work">
              <div className='flex items-center text-center justify-center font-bold
              bg-secondary w-32 h-14 rounded-md shadow-lg
              shadow-secondary text-white
              hover:bg-[#a94b11] hover:shadow-[#a94b11]
              sm:text-[14px] md:text-[12px] lg:text-[16px]'
              >Explore Products</div>
            </a>
            <img src={bee} alt='bee' className='absolute w-72 ml-40 z-0 opacity-10 lg:block hidden'/>
          </div>
        </div>
      </div>
      <div className='basis-1/2 bg-bee-background-one bg-cover h-full lg:block hidden '>
        <img src={beekeper} alt='beekeper' className=' mt-48'/>
      </div>
    </div>
  )
}

export default Home
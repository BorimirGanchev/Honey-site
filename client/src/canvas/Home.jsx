import React from 'react'
import  beekeper  from "../assets/beekeper.png";

function Home() {
  return (
    <div className='flex md:flex-row flex-col w-full items-center h-screen mx-auto justify-between'>
      <div className='basis-1/2 h-full'>
        <div className='relative flex flex-col gap-10 top-20 left-20'>
          <div className='relative'>
            <h3 className='text-3xl font-bold text-secondary'>Honey Bee</h3>
            <h6 className='text-base font-bold text-tertiary'>Pure From Nature</h6>
          </div>
          <div className='relative'>
            <h1>Good Noney</h1>
            <h1>Good Honey</h1>
          </div>
          <div>
            <p>All our honey is single origin and we are proud practice sustainable beekeeping. Our honey is raw honey that is pure, unpesteurised, unprocessed and with no additives.</p>
          </div>
          <div>We would like to give you the best experience about taste of honey join us now!</div>
          <div></div>
        </div>
      </div>
      <div className='basis-1/2 bg-[#ffe6a1] h-full md:block hidden'>
        <img src={beekeper} alt='beekeper' className=''/>
      </div>
    </div>
  )
}

export default Home
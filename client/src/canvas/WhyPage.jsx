import React from 'react'
import beeHive2   from "../assets/beeHive2.png";
import honey from "../assets/honey.png";
import beeOnFlower from "../assets/beeOnFlower.png"
import beeHive from "../assets/beeHive.png"
import bee from "../assets/bee.png"
import beekeper2 from "../assets/beekeper2.png"
import honeyDripper from "../assets/honeyDripperBg2.png"
import honeyBg from "../assets/honeyBg2.png"
import { SectionWrapper } from '../hoc';

function whyPage() {
  return (
    <div className='mt-24 sm:py-20 py-10'>
      <h1 className=' text-tertiary font-bold text-center text-5xl'>Why Bori | Honey Provider?</h1>
      <div className='grid lg:grid-cols-3 gap-8 relative mt-16 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center z-10'>
        <img src={beeHive2} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Natural 100%</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> Our honey is 100% original, a pure and unadulterated testament to the craftsmanship of honeybees, the diverse tapestry of blooming landscapes, and the natural wonders of the world. </p>
        </div>
        <div className='flex flex-col justify-center items-center z-10'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Creamed Honey</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> Discover our Creamed Honey, a 100% original and untouched masterpiece, crafted by the diligent hands of honeybees, capturing the essence of diverse blossoms and nature's sweetest wonders in every velvety spoonful.</p>
        </div>
        <div className='flex flex-col justify-center items-center z-10'>
        <img src={beeOnFlower} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Field Honey</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> Indulge in our Field Honey, meticulously cultivated by our honeybees as they gather nectar from the wide expanse of wildflowers, encapsulating the pure essence of nature's bounty in every golden drop.</p>
        </div>
        <div className='flex flex-col justify-center items-center z-10'>
        <img src={beeHive} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Original Taste</h1>
        <p className=' text-tertiary font-bold text-center w-2/3 '> Discover a taste that is truly original, a testament to the craftsmanship of honeybees, the diverse tapestry of blooming landscapes, and the natural wonders of the world. </p>
        </div>
        <div className='flex flex-col justify-center items-center z-10'>
        <img src={bee} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Bea Health</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> Our bees are the epitome of robust health and vitality, ensuring the purest, most exquisite honey for your enjoyment.  </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={beekeper2} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Beekeper</h1>
        <p className=' text-tertiary font-bold text-center w-2/3 z-10'> Our beekeepers are the true artisans behind our honey, their expertise and unwavering dedication ensuring the highest standards of quality and flavor, making every jar a testament to their exceptional craftsmanship.</p>
        <img src={honeyBg} alt='bee' className='sm:absolute sm:block hidden object-left bot-0 left-0 sm:w-32 lg:w-40 z-0'/>
        <img src={honeyDripper} alt='bee' className='sm:absolute sm:block hidden object-left -top-20 right-0 w-32 sm:w-40 lg:w-56 -z-1'/>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper (whyPage, "about")
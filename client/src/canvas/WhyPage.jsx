import React from 'react'
import beeHive2   from "../assets/beeHive2.png";
import honey from "../assets/honey.png";
import beeOnFlower from "../assets/beeOnFlower.png"
import beeHive from "../assets/beeHive.png"
import bee from "../assets/bee.png"
import beekeper2 from "../assets/beekeper2.png"
import honeyDripper from "../assets/honeyDripperBg.png"
import honeyBg from "../assets/honeyBg.png"
import { SectionWrapper } from '../hoc';

function whyPage() {
  return (
    <div className='mt-24 sm:py-20 py-10'>
      <h1 className=' text-tertiary font-bold text-center text-5xl'>Why Anna | Honey Provider?</h1>
      <div className='grid lg:grid-cols-3 gap-8 relative mt-16 md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center'>
        <img src={beeHive2} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Natural 100%</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> asjd iuasud uiahs diushd auh diuasd suhd iudhh hhduiha uui ahhushuisdhs hudsudsuhu husuh s ihasiu hushhuiuh auhsaushid </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Creamed Honey</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> asjd iuasud uiahs diushd auh diuasd suhd iudhh hhduiha uui ahhushuisdhs hudsudsuhu husuh s ihasiu hushhuiuh auhsaushid </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={beeOnFlower} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Field Honey</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> asjd iuasud uiahs diushd auh diuasd suhd iudhh hhduiha uui ahhushuisdhs hudsudsuhu husuh s ihasiu hushhuiuh auhsaushid </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={beeHive} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Original Taste</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> asjd iuasud uiahs diushd auh diuasd suhd iudhh hhduiha uui ahhushuisdhs hudsudsuhu husuh s ihasiu hushhuiuh auhsaushid </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={bee} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Bea Health</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> asjd iuasud uiahs diushd auh diuasd suhd iudhh hhduiha uui ahhushuisdhs hudsudsuhu husuh s ihasiu hushhuiuh auhsaushid </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={beekeper2} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Beekeper</h1>
        <p className=' text-tertiary font-bold text-center w-2/3'> asjd iuasud uiahs diushd auh diuasd suhd iudhh hhduiha uui ahhushuisdhs hudsudsuhu husuh s ihasiu hushhuiuh auhsaushid </p>
        <img src={honeyBg} alt='bee' className='absolute object-left bot-0 left-0 w-40 -z-1'/>
        <img src={honeyDripper} alt='bee' className='absolute object-left -top-20 right-0 w-56 -z-1'/>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper (whyPage, "about")
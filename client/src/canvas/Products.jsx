import honey from "../assets/honey.png";
import flowerOne from "../assets/flowerOne.png"
import flowerTwo from "../assets/flowerTwo.png"
import { SectionWrapper } from '../hoc';

function Products() {
  return (
    <div className='sm:py-20 py-10'>
      <h1 className=' text-tertiary font-bold text-center text-5xl'>Products</h1>
      <div className='grid lg:grid-cols-3 gap-8 mt-16 relative md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Pure Raw Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Pure Raw Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Pure Raw Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Pure Raw Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Pure Raw Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={honey} alt='beeHive2' className='w-40 h-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Pure Raw Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        <img src={flowerOne} alt='flowerOne' className='absolute object-left bot-0 left-0 w-40 -z-1'/>
        <img src={flowerTwo} alt='flowerTwo' className='absolute object-left -top-20 right-0 w-56 -z-1'/>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper (Products, "work")
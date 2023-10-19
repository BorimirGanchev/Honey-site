import honey from "../assets/honey.png";
import { SectionWrapper } from '../hoc';

function Products() {
  return (
    <div className=''>
      <h1 className=' text-tertiary font-bold text-center text-5xl'>Products</h1>
      <div className='grid lg:grid-cols-3 gap-8 mt-16 md:grid-cols-2'>
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
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper (Products, "work")
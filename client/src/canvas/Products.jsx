import honey from "../assets/honey.png";
import flowerOne from "../assets/flowerOne2.png"
import flowerTwo from "../assets/flowerTwo2.png"
import lipovMed from "../assets/lipovMed.jpeg"
import akacievMed from "../assets/akacia.jpeg"
import gorskiMed from "../assets/gorskiMed.jpeg"
import polskiMed from "../assets/polskiMed.jpeg"
import kestenovMed from "../assets/kestenovMed.jpeg"
import borovMed from "../assets/borovMed.jpeg"
import { SectionWrapper } from '../hoc';

function Products() {
  return (
    <div className='sm:py-20 py-10'>
      <h1 className=' text-tertiary font-bold text-center text-5xl'>Products</h1>
      <div className='grid lg:grid-cols-3 gap-8 mt-16 relative md:grid-cols-2'>
        <div className='flex flex-col justify-center items-center'>
        <img src={lipovMed} alt='beeHive2' className='w-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Linden Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={akacievMed} alt='beeHive2' className='w-72'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Аcacia Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={gorskiMed} alt='beeHive2' className='w-72'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Wildflower Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={polskiMed} alt='beeHive2' className='w-52'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Мeadow Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={kestenovMed} alt='beeHive2' className='w-40'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Chestnut Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <img src={borovMed} alt='beeHive2' className='w-64'/>
        <h1 className=' font-bold text-tertiary text-xl text-center'>Pine Honey</h1>
        <h1 className=' font-bold text-secondary text-lg text-center'>12 BGN</h1>
        <img src={flowerOne} alt='flowerOne' className='sm:absolute sm:block hidden object-left bot-0 left-0 sm:w-32 lg:w-40 -z-1 '/>
        <img src={flowerTwo} alt='flowerTwo' className='sm:absolute sm:block hidden object-left -top-20 right-0 sm:w-48 lg:hidden -z-1'/>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper (Products, "work")
import Category from '../components/Category'
import Footer from '../components/Footer'
import { Icon } from '@chakra-ui/react'
import { TbCurrencyNaira } from 'react-icons/tb'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {Link} from 'react-router-dom'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
const Main = () => {
  return (
    <div className=' h-fit'>
      <div className=' bg-zinc-100 pt-8'>
        <div className='flex justify-around'>
         <div className='space-y-5'>
           <h1 className='text-2xl font-bold'>Budget</h1>
           <div className='flex space-x-2'>
             <Icon as={TbCurrencyNaira} className='bg-blue-300 rounded-full text-white mt-1'/>
             <h5 className='text-sm'>Montly Budget</h5>
           </div>
           <div className='bg-white w-64 rounded-md p-3 font-bold text-2xl'>
             <h1>$120,000</h1>
           </div>
         </div>
         <div className='text-zinc-100'>.</div>
        </div>
             <div className='flex justify-around mt-5'>
                <div className='flex gap-5 text-sm'>
                   <h4>Last Month</h4>
                   <Link to='/' className='hover:text-blue-700 hover:underline decoration-4'>This Month</Link>
                </div>
                <div className=''>
                  <Icon as={HiOutlineDotsHorizontal} />
                </div>
             </div>
        <div className='flex justify-center mt-10'>
          <CircularProgress value={50} color='blue.700' size='120px' thickness='12px'>
             <CircularProgressLabel>49%</CircularProgressLabel>
          </CircularProgress>
        </div>
        <div className='flex justify-center mt-8'>
           <div className='flex  flex-col space-y-3'>
             <small className='text-base'>Amount spent so far</small>
             <small className='text-blue-700 text-lg font-semibold'>$50,000/$120,000</small>
           </div>
        </div>
        <Category/>
        <Footer/>
      </div>
    </div>
  )
}

export default Main

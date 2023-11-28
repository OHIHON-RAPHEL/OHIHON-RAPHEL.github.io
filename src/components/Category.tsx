import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { MdOutlineSavings } from 'react-icons/md'
import { PiBowlFood } from 'react-icons/pi'



const Category = () => {
  return (
    <div>
      <h1 className='font-bold mt-8 text-2xl grid justify-center'>Category Breackdown</h1>
      <div className='flex justify-around mt-5'>
         <div className='space-y-7'>
          <div className='flex space-x-4'>
            <CircularProgress value={50} color='yellow.700' size='50px' thickness='12px' className='bg-amber-600 rounded-full'>
              <CircularProgressLabel><Icon as={PiBowlFood} className='text-lg'/></CircularProgressLabel>
            </CircularProgress>
            <div>
              <h4 className='font-bold'>Food and Drink</h4>
              <h4>40%</h4>
            </div>
          </div>
          <div className='flex space-x-4'>
             <CircularProgress value={50} color='green.700' size='50px'thickness='12px' className='bg-green-300 rounded-full'>
                <CircularProgressLabel><Icon as={MdOutlineSavings} className='text-lg'/></CircularProgressLabel>
             </CircularProgress>
             <div>
                <h4 className='font-bold'>savings</h4>
                <h4>20%</h4>
             </div>
          </div>
         </div>
         <div className='space-y-14'>
           <h4 className='font-bold'>$20,000/$42,000</h4>
           <h4 className='font-bold'>$10,000/$20,000</h4>
         </div>

      </div>
    </div>
  )
}

export default Category

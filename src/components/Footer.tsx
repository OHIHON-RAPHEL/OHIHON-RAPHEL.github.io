import {Link} from 'react-router-dom'
import { Icon } from '@chakra-ui/react'
import { IoHomeOutline } from 'react-icons/io5'
import { LiaFileSolid } from 'react-icons/lia'
import { RiBarChartFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { PiDotsThreeCircleVerticalLight } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className=' bg-white pt-6 pb-4'>
      <div className=''>
        <div className='flex justify-around font-extralight'>
          <div className='flex flex-col hover:text-black hover:font-bold space-y-2'>
            <Icon as={IoHomeOutline} className='hover:text-blue-700 text-xl'/>
            <Link to='/'>Home</Link>
          </div>
          <div className='flex flex-col hover:text-black hover:font-bold space-y-2'>
            <Icon as={LiaFileSolid} className='hover:text-blue-700 text-xl'/>
            <Link to='/'>Reports</Link>
          </div>
          <div className='flex flex-col hover:text-black hover:font-bold space-y-2'>
            <Icon as={PiDotsThreeCircleVerticalLight} className='hover:text-blue-700'/>
            <Link to='/'>Chat</Link>
          </div>
          <div className='flex flex-col hover:text-black hover:font-bold space-y-2'>
            <Icon as={RiBarChartFill} className='hover:text-blue-700 text-xl'/>
            <Link to='/'>Budget</Link>
          </div>
          <div className='flex flex-col hover:text-black hover:font-bold space-y-2'>
            <Icon as={CgProfile} className='hover:text-blue-700 text-xl'/>
            <Link to='/'>Profile</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
const Footer = () => {
  return (
    // mt-[2432px] 
    <div className='w-full h-[452px] mt-[2432px]  text-left-[11px] bg-footer'>
      <div className='flex justify-around items-center mt-4 w-[100%] h-[100%] p-5'>
            <div className='flex justify-around items-center text-foottext h-[300px] w-[666px] mt-4'>
                <ul className='flex items-start justify-center flex-col h-[100%] mb-3'>
                    <div className='text-xl mb-4 text-fh'>
                    <p>Categories</p>
                    </div>
                    <li className='leading-10'>Web Builder</li>
                    <li className='leading-10'>Hosting</li>
                    <li className='leading-10'>Data Center</li>
                    <li className='leading-10'>Robotic-Automation</li>
                </ul>
                <ul className='flex items-start justify-center flex-col h-[100%] mt-16'>
                    <div className='text-xl mb-4 text-fh'>
                    <p>Contact</p>
                    </div>
                    <li className='leading-10'>Contact</li>
                    <li className='leading-10'>Privacy Policy</li>
                    <li className='leading-10'>Terms Of Service</li>
                    <li className='leading-10'>Categories</li>
                    <li className='leading-10'>Categories</li>
                    <li className='leading-10'>About</li>
                </ul>
            </div>
            <div className='flex justify-center items-center mr-6'>
                <p className='mr-4 text-country'>United States</p>
                <FaAngleDown className='text-arrow' />
            </div>
      </div>
    </div>
  )
}

export default Footer


// width: 102px
// height: 24px
// top: 2486px
// left: 295px


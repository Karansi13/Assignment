import React from 'react'
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <>
    <div className='w-full h-[64px] bg-navbg flex justify-around items-center text-left'>
        <div className='flex justify-around items-center'>
      <div className='flex justify-center items-center mr-5'>
        <div className='text-search text-3xl relative left-9'>
        <CiSearch />
        </div>
        <input type="text" className='rounded-md border border-bc-900 w-[258px] h-[37px] mr-5'/>
      </div>
      <div className='flex justify-center items-center text-textcolor ml-14'>
        <p className='text-sm mx-5 text-left font-medium font-Inter cursor-pointer'>Categories</p>
        <p className='text-sm mx-5 text-left font-medium font-Inter cursor-pointer'>Website Builders</p>
        <div className='ml-14'>
        <p className='text-sm mx-5 text-left font-medium font-Inter cursor-pointer '>Today's deals</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Navbar

// width: 258px
// height: 37px
// top: 14px
// left: 480px
// border-radius: 8px
// border: 1px



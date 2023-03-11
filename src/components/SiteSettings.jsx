import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const SiteSettings = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full '>
      <div
        className=''
        onClick={() => {
          setOpen(!open)
        }}
      >
        <div className={`flex justify-between items-center cursor-pointer`}>
          <p>Settings</p>
          <IoIosArrowDown className={`ml-2 ${open ? 'rotate-180 duration-300' : 'rotate-0 duration-300'}`} />
        </div>
        <div className={`relative md:absolute  ${open ? 'block' : 'hidden'}`}>123</div>
      </div>
    </div>
  )
}

export default SiteSettings

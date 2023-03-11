import React, { useState } from 'react'
import SiteSettings from '../SiteSettings'
import { RiCloseLine } from 'react-icons/ri'
import { FaBars } from 'react-icons/fa'

const Nav = () => {
  // const showMenu = useContext(CountContext)
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <div className=''>
      <div
        className='cursor-pointer md:hidden menu-toggle'
        onClick={handleToggleMenu}
      >
        {showMenu ? <RiCloseLine /> : <FaBars />}
      </div>
      <nav
        className={`rounded-bl-lg  md:bg-transparent md:from-transparent w-1/2 md:w-fit md:block menu z-40 duration-500 absolute p-2 top-full md:opacity-100 md:right-0 md:top-0 md:relative ${
          showMenu ? 'block  right-1  opacity-100 ' : 'opacity-0 -right-1/2'
        }`}
      >
        <ul className=' flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 lg:space-x-4 2xl:space-x-10 '>
          <li
            className={`navListItem d1 ${
              showMenu
                ? 'translate-x-0 '
                : 'translate-x-[100%] md:translate-x-0'
            }`}
          >
            <a href='#'>Home</a>
          </li>
          <li
            className={`navListItem d2 ${
              showMenu
                ? 'translate-x-0 '
                : 'translate-x-[100%] md:translate-x-0'
            }`}
          >
            <a href='#'>About</a>
          </li>
          <li
            className={`navListItem d3 ${
              showMenu
                ? 'translate-x-0 '
                : 'translate-x-[100%] md:translate-x-0'
            }`}
          >
            <a href='#'>Contact</a>
          </li>
          <li
            className={`navListItem d4 ${
              showMenu
                ? 'translate-x-0'
                : 'translate-x-[100%] md:translate-x-0'
            }`}
          >
            <div className='flex justify-between'>
              <SiteSettings />
            </div>
          </li>
        </ul>
      </nav>
      <div
        className={` md:block menu ${
          showMenu
            ? 'block right-1 w-screen h-screen fixed top-0 left-0 z-10'
            : 'hidden'
        }`}
        onClick={handleToggleMenu}
      ></div>
    </div>
  )
}

export default Nav

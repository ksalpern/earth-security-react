import React, { createContext, useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
// import { GiPlanetConquest } from 'react-icons/gi'
import { RiCloseLine } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import SiteSettings from '../SiteSettings'
import Nav from '../Nav/Nav'

export const CountContext = createContext()
const Header = () => {
  // const [showMenu, setShowMenu] = useState(false)

  // const handleToggleMenu = () => {
  //   setShowMenu(!showMenu)
  // }

  // useEffect(() => {
  //   document.addEventListener(
  //     'click',
  //     e => {
  //       if (showMenu === true && e.target !== navigation) {
  //         handleToggleMenu()
  //       }
  //     },
  //     [showMenu]
  //   )
  // })

  return (
    <header className='bg-gradient-to-b from-zinc-900 to-black  text-cyan-200 fixed top-0 left-0 w-screen z-50'>
      <div className='flex justify-between paddingContainer relative paddingTopBottom'>
        <Link to='/'>
          <div className='logo-container absolute left-1/2 -translate-x-1/2 z-50'>
            <div className='logoImg'></div>
            <div className='hand'></div>
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  )
}

export default Header

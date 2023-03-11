import React from 'react'
import { Link } from 'react-router-dom'
import Backgrounds from './Backgrounds/Backgrounds'
import { GiBlackHoleBolas } from 'react-icons/gi'
import Header from './Header/Header'

const Error = bg => {
  return (
    <>
    <Header/>
      <div className='text-white flex justify-center items-center h-screen '>
        <Backgrounds bg={bg.bg.errorImg} />
        <div className='backdrop-blur-2xl p-2 rounded-xl text-2xl '>
          <p>Oops, I think you got lost</p>
          <Link
            to='/'
            className='text-black underline  flex justify-center items-center drop-shadow-2xl animate-pulse'
          >
            <GiBlackHoleBolas className='animate-customSpin m-2' />
            Come back home
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Backgrounds from './Backgrounds/Backgrounds'
import Header from './Header/Header'

const Greeting = bg => {
  // console.log(bg)
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleRegistrationClick = () => {
    setIsRegistrationOpen(!isRegistrationOpen)
  }

  const handleLoginClick = () => {
    setIsLoginOpen(!isLoginOpen)
  }
  return (
    <div className='text-slate-400 paddingTopBottomSection mt-[20vh] flex flex-col items-center'>
      <Header />
      <h1 className=' backdrop-blur-lg p-2'>Universe: Our Past, Present, and Future</h1>
      <Backgrounds bg={bg.bg.greetingBg} className='animate-spin' />
      {/* <Link to='/login' />
      <Link to='/signUp' /> */}
      <div className='p-3'>
        <button className='btn' onClick={handleRegistrationClick}>
          Login
        </button>
        <button className='btn' onClick={handleLoginClick}>
          SignUp
        </button>

        {isRegistrationOpen && <form>{<p> Ваша форма реєстрації</p>}</form>}

        {isLoginOpen && <form>{<p>Ваша форма авторизації</p>}</form>}
      </div>
      
    </div>
  )
}

export default Greeting

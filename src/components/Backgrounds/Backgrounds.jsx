import React from 'react'

const Backgrounds = bg => {
  console.log(bg)
  const BackgroundPage = {
    backgroundImage: `url(${bg.bg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  return <div className='fixed top-0 left-0 w-full h-full -z-[1]' style={BackgroundPage}></div>
}

export default Backgrounds

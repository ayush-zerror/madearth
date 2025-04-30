import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-[100svh] relative overflow-hidden'>
      <video autoPlay muted loop playsInline className='sm:hidden md:hidden block w-full h-full object-cover object-top' src="/showreel.mp4"></video>
      <video autoPlay muted loop playsInline className='sm:block md:block hidden w-full h-full object-cover object-top' src="/showreel.mp4"></video>
      <div className='w-full flex items-center  justify-between absolute top-0 left-0 px-[3vw] sm:py-[2vw]'>
        <img src="/logo.png" className='sm:h-[28vw] md:h-[15vw] lg:h-[12vw] h-[10vw]' alt="" />
        <div className='h-fit' >
          <h1 className='soon text-center sm:text-[4.5vw] md:text-[3.5vw] lg:text-[2.8vw] xl:text-[2.2vw] text-[2.2vw] mix-blend-difference uppercase' style={{ fontWeight: "900" }}>Coming Soon</h1>
          <p className='sm:text-[3vw] text-center md:text-[2vw] lg:text-[1.8vw] xl:text-[1.3vw] text-[1.2vw] sm:font-semibold mix-blend-difference text-white font-regular  font-[font1]'>A Brand New Website Is Coming Soon!</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
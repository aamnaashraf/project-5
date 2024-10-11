import React from 'react'
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] bg-left lg:bg-[10%]'
   style={{backgroundSize:"40%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[90px] sm:text-[70px] font-bold leading-tight flex justify-center items-center'> 
            <div>
                <p className='text-red-800'>Welcome to my blog page!</p>
                <p className='text-[20px] sm:text-[40px] font-medium'>Unlock your business potential...</p>
                <p className='text-[14px] sm:text-[30px] font-medium'>Explore insights,tips, and resources to help your business thrive.</p>
           <a href='#blog' className='text-[25px] mt-4 inline-block bg-yellow text-blue-600 py-2 px-4 rounded hover:bg:gray-200'>
            Start Reading..
           </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

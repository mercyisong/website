import React from 'react'

const Hero = ({herosection, heroSectionVideo}:any) => {
    return (
    <div id='home' className='mt-20 flex flex-col  lg:h-fit'>
     <div className='h-full py-14 sm:pt-28 flex flex-col space-y-12 items-center text-center'>
        <div className='text-4xl sm:text-5xl'>
          MERCY ISONG OUTREACH FOUNDATION
        </div>
        <div className='flex flex-col space-y-4 flex-start lg:h-5/6 h-full'>
            <h1 className='text-2xl sm:text-4xl'>Give proper recognition to those widows who are really in need.</h1>
            <p className='tracking-wider text-xl uppercase font-medium'>1st Timothy 5:3</p>
        </div>
      </div>
      <div className='md:h-64 mt-0 lg:mt-40 h-80 relative'>
          <div className='h-96 grid stripes w-full'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <iframe className='w-full h-full hero-vid' 
              src="https://www.youtube.com/embed/ejU9zcVXmp4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Hero
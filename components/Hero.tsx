import React from 'react'

const Hero = ({herosection, heroSectionVideo}:any) => {
    return (
    <div id='home' className=' flex flex-col lg:h-fit text-white'>
     <div className='h-full hero-v space-y-8 px-4'>
        <div className='text-4xl sm:text-5xl pt-40 '>
          MERCY ISONG OUTREACH FOUNDATION
        </div>
        <div className='w-full flex flex-col sm:items-center'>
            <h1 className='text-2xl sm:text-4xl'>Give proper recognition to those widows who are really in need.</h1>
            <p className='tracking-wider text-xl uppercase font-medium'>1st Timothy 5:3</p>
        </div>
      </div>
      <div className='hero-rm md:h-64 bg-transparent sm:bg-white pt-36 pb-36  h-80 relative'>
          <div className='h-96 grid stripes w-full'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <iframe className='w-full h-full hero-vid' src="https://www.youtube.com/embed/h9RfloX_vRE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Hero
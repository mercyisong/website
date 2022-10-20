import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Mercy from '../components/Mercy'
import Navbar from '../components/Navbar'
import Partner from '../components/Partner'

const Home: NextPage = (props:any) => {
  return (
    <>
      <Head>
        <title>Mercy Isong Outreach Foundation</title>
      </Head>
      <main>
        <div className='px-2 sm:px-0 flex flex-col items-center space-y-4'>
          <h4 className='text-white text-5xl'>
            COMING SOON
          </h4>
          <p className='text-white text-xl'>
              We will be celebrating the launch of our new site very soon!
          </p>
        </div>
      </main>
      <footer className='px-2 sm:px-0 text-white w-full mb-4 absolute bottom-0
                        text-base sm:text-xl
                        flex justify-center font-bold tracking-wider'   >
          MERCY ISONG OUTREACH FOUNDATION
      </footer>
    </>
    
  )
}

export default Home
































{/* <main className='text-gray-800 text-gray-100  text-xl px-6 sm:px-28 flex flex-col space-y-16'>
<Navbar />
<div className='hero'>
<Hero />
</div>
<div className='rm text-gray-800'>
<About />
<Mercy />
</div>

</main>
<footer>
<Footer />
</footer> */}
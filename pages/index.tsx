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
      <main className='text-gray-100 bg-gray-900 text-xl px-6 sm:px-28 flex flex-col space-y-16'>
          <Navbar />
          <Hero />
          <About />
          <Mercy />
          {/* <Partner /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
    
  )
}

export default Home

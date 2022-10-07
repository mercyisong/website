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
    <div>
      <Head>
        <title>Mercy Isong Outreach Foundation</title>
      </Head>
    </div>
    <main className='text-gray-900 text-xl mx-6 sm:mx-28 flex flex-col space-y-16 mb-4'>
        <Navbar />
        <Hero />
        <About />
        <Mercy />
        <Partner />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
    
  )
}

export default Home

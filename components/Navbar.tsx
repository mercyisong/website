import Link from "next/link"
import { useState } from "react"
import { BiMenuAltRight } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
    const [sideNav, setSideNav] = useState<boolean>(false)
    return (
    <div className="bg-black text-white fixed z-40 top-0 left-0 w-full lg:py-8 py-5 px-2">
        <div className="lg:max-w-5xl lg:mx-auto px-6 lg:px-0 flex justify-between items-center">
            {/* <img src="/assets/ApeInLogo.png" className="w-8 h-8" alt="ApeIn logo"/> */}
            <h2 className="uppercase  text-xl  ">MIOF</h2>
            <ul className="lg:flex hidden gap-10 items-center">
                    <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline  font-semibold tracking-wide"><Link href='#home'>Home</Link></li>
                    <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline  font-semibold tracking-wide"><Link href='#about'>About</Link></li>
                    <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline  font-semibold tracking-wide"><Link href='#contact'>Contact</Link></li>
            </ul>
            {!sideNav&&(
                <BiMenuAltRight className=" text-4xl lg:hidden cursor-pointer" onClick={()=>setSideNav(true)}/>
            )}
            {sideNav&&(
                <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white border flex">
                    <div className="w-5/6 bg-black border border-black h-screen flex flex-col p-10">
                    <a href="/" className="flex gap-4 items-center cursor-pointer">
                        {/* <img src="/assets/ApeInLogo.png" className="w-10 h-10" alt="Ape In Logo" /> */}
                        <h2 className="font-semibold text-lg">Mercy Isong</h2>
                    </a>
                    <ul className="lg:hidden flex flex-col mt-16 gap-10">
                        <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline  font-semibold tracking-wide"><Link href='#home'>Home</Link></li>
                        <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline  font-semibold tracking-wide"><Link href='#about'>About</Link></li>
                        <li onClick={()=>setSideNav(false)} className="w-fit active:text-active active:underline  font-semibold tracking-wide"><Link href='#contact'>Contact</Link></li>
                    </ul>
                    </div>
                    <div className="w-1/6 bg-black py-10 flex" onClick={()=>setSideNav(false)}>
                    <IoCloseOutline className=" text-5xl mx-auto cursor-pointer" onClick={()=>setSideNav(false)}/>
                    </div>
                </div>
            )}
        </div>
    </div>
)
}

export default Navbar
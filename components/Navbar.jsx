import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className=' w-full flex items-center justify-between py-10 font-sen'>
            <Link href={"/"} className='text-xl text-white font-bold '>GENMEDIA</Link>
            <div className='hidden md:flex items-center justify-between gap-10  text-white font-rubix'>
                <Link href={"/"} className='text-lg font-light '>Home</Link>
                <Link href={"#explore"} className='text-lg font-light  tracking-wide '>About Us</Link>
                <Link href={"#about"} className='text-lg font-light  tracking-wide '>Services</Link>
                <Link href={"#about"} className='text-lg font-light  tracking-wide '>Contact</Link>
            </div>
            <div className='hidden md:flex items-center justify-center gap-5 '>
                <button className='border rounded-full border-primary px-8 py-1.5 text-white'>
                    Login
                </button>
                <button className=' rounded-full bg-primary px-8 py-1.5 text-white'>
                    Sign up
                </button>
            </div>
        </div>
    )
}
export default Navbar

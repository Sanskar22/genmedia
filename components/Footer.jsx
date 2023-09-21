import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (

        <div className='mt-10 mb-10 w-full'>
            <div className="bg-white h-px"></div>
            <div className=' w-full flex  justify-around py-10 text-sm font-sen'>
                <Link href={"/"} className='text-xl text-white font-bold '>GENMEDIA</Link>
                <div className='hidden md:flex justify-between gap-y-10 gap-x-20 text-white font-inter'>
                    <div className='text-normal font-light '>
                        <Link href={'/'}>Navigate</Link>
                        <div className='flex flex-col mt-4 pt-4 gap-2'>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>About Us</Link>
                            <Link href={"/"}>Services</Link>
                            <Link href={"/"}>Contact</Link>
                        </div>
                    </div>
                    <div className='text-normal font-light '>
                        <Link href={'/'}>Navigate</Link>
                        <div className='flex flex-col mt-4 pt-4 gap-2'>
                            <Link href={"/"}>Browse Services</Link>
                            <Link href={"/"}>Buy Product</Link>
                        </div>
                    </div>
                    <div className='text-normal font-light '>
                        <Link href={'/'}>Navigate</Link>
                        <div className='flex flex-col mt-4 pt-4 gap-2'>
                            <Link href={"/"}>Email</Link>
                            <Link href={"/"}>LinkedIn</Link>
                            <Link href={"/"}>Instagram</Link>
                            <Link href={"/"}>Twitter</Link>
                        </div>
                    </div>
                </div>
                <div className=' md:flex w-72 flex flex-col  text-center text-white gap-5'>
                    <span className='text-lg font-light px-6 tracking-wide '>
                        Join our newsletter
                    </span>
                    <div className='pt-1 mt-1 relative '>
                        <input type={'email'} placeholder='Email Address' className='w-full bg-secondary rounded-full px-4 py-4' />
                        <button className='px-4 py-2 bottom-2 mr-2 absolute right-0 bg-tertiary text-black rounded-full'>Submit</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer

import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='w-full text-white flex flex-row justify-around gap-32 mb-20 p-6  rounded-2xl bg-quaternary'>
            <div className='flex flex-col mt-8 pt-8 align-initial'>
                <h1 className='max-w-lg text-6xl font-bold font-sen leading-lineh1 '>
                    About Us
                </h1>
                <p className='max-w-lg mt-4 font-sen leading-linep'>
                    Welcome to GenMedia, where we harness the limitless potential of artificial intelligence to
                    revolutionize image and video generation.

                    Unlock boundless creativity with GenMedia - your premier destination for AI-generated images and videos.

                    Tap into the extraordinary capabilities of our innovative technology to create stunning visuals that push the limits of imagination. Experience the future of media production with GenMedia.
                </p>
            </div>
            <div className='ml-10 pl-10 mt-4'>
                <Image src={"/contact_us-removebg-preview.png"} alt='hero image' width={505} height={540.16} priority />
            </div>
        </div>
    )
}

export default About

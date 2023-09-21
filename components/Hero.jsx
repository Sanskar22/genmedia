import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='text-white flex flex-row justify-around gap-32 mb-10'>
            <div className='flex flex-col mt-8 pt-8 align-initial'>
                <h1 className='max-w-lg text-6xl font-bold font-sen leading-lineh1 '>
                    Elevate Your Visual Content with AI Innovation.
                </h1>
                <p className='max-w-lg mt-4 font-sen leading-linep'>
                    Unlock the future of visuals with AI,<br /> where innovation transforms art into <br /> extraordinary experiencesassets.
                </p>
                <div className='flex flex-row mt-6 gap-8 font-sen '>
                    <button className='bg-primary rounded-full px-10 py-3 text-white'>
                        Contact
                    </button>
                    <button className='border border-primary rounded-full px-10 py-3 text-white'>
                        Try now
                    </button>
                </div>
            </div>
            <div className='ml-10 pl-10 mt-4'>
                <Image src={"/Other_07.png"} alt='hero image' width={505} height={540.16} priority />
            </div>
        </div>
    )
}

export default Hero

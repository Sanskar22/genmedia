import React from 'react'
import Image from 'next/image'


const Card = () => {
    return (
        <div className='bg-secondary text-white flex text-center flex-col rounded-xl align-center'>
            <div className='p-6 '>
                <Image src={'/download1.jpeg'} alt='image' height={212} width={320} className='m-auto rounded-xl' />
            </div>
            <h1 className='text-2xl font-bold font-sen pb-4'>Image Generator</h1>
            <p className='px-4 font-sen text-md'>Image Generator AI empowers artists, designers, and content creators with an
                endless wellspring of creativity. It can mimic various art styles, adapt to user
                preferences,  and even generate images from textual descriptions.
            </p>
            <div className='my-4 py-2'>
                <button className='border font-sen rounded-full bg-tertiary px-8 py-1.5 text-white'>
                    Try now
                </button>
            </div>
        </div>
    )
}

export default Card

import React from 'react'
import Image from 'next/image'
import TestimonialsItems from './TestimonialsItems'

const Testimonials = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className='mb-10 pb-4 text-center'>
                <h1 className='text-white font-bold font-sen text-6xl tracking-wider'>Testimonials</h1>
            </div>
            <div className='my-10 py-10 grid grid-cols-3 gap-10 align-center justify-items-center'>
                <TestimonialsItems />
                <TestimonialsItems />
                <TestimonialsItems />
            </div>

        </div>
    )
}

export default Testimonials

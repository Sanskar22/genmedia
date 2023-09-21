import React from 'react'
import Image from 'next/image'

const TestimonialsItems = () => {
    return (
        <div className='bg-secondary text-white p-6 flex text-center flex-col rounded-xl align-center'>
            <div className='m-auto -mt-20'>
                <Image src={'/Ellipse 3.png'} alt='image' height={120} width={120} className='rounded-ultra' />
            </div>
            <h1 className='text-2xl font-bold py-2 my-2 font-sen'>Name</h1>
            <p className=' font-sen text-md'>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Repudiandae minus officiis tempore vero hic,
                ducimus dolorum itaque dignissimos fuga eum. Eos, odio dolor quisquam
                labore totam provident deserunt eligendi aut?
            </p>
        </div>
    )
}

export default TestimonialsItems

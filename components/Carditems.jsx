import React from 'react'
import Image from 'next/image'
import Card from './Card'

const Carditems = () => {
    return (
        <div className='my-10 py-10 grid grid-cols-3 gap-10  justify-items-center'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Carditems

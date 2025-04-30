import React from 'react'
import { Link } from 'react-router';

function Product() {
    return (
        <div className='flex flex-col items-start ml-24 gap-8 justify-start pt-16 pb-4 h-[100dvh]'>
            <h1 className='text-7xl font-semibold'>Track your balance</h1>
            <section>
                <h2 className='font-semibold text-4xl'>Title product </h2>
                <p className='text-3xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
                <br></br>
                <p className='text-3xl text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.</p>
            </section>
            <Link to={'./product'} className='p-4 bg-gray-800 rounded px-8 font-semibold text-gray-200 hover:bg-black transition-all duration-250 ease-in-out'>Start now</Link>
        </div>
    )
}

export default Product;
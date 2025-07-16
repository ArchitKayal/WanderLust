import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Discover new horizons, Live your adventure</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-2/3 sm:w-1/3 max-w-lg rounded' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>5+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>1000+</p>
                        <p>Adventures Done</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>5000+</p>
                        <p>Happy Travelers</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>50+</p>
                        <p>Destinations Available</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>With over 5 years of expertise, 1000+ unforgettable adventures, and 5000+ delighted travelers, we’re your trusted partner in exploring 50+ breathtaking destinations. We believe in crafting journeys that inspire, connect, and transform so you can travel with purpose, create memories, and embrace the world one adventure at a time.</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.jpg')"}} id='Header'>
        <NavBar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-4xl font-semibold pt-20'>Explore the world, Embrace your journey</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Packages" className='border border-white px-8 py-3 rounded'>Packages</a>
                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Header
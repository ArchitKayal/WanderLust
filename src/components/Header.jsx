import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header_img.jpg')"}} id='Header'>
        <NavBar/>
    </div>
  )
}

export default Header
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Packages/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
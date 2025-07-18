import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Packages/>
      <Testimonials/>
    </div>
  )
}

export default App
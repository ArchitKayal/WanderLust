import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Packages from './components/Packages'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Packages/>
    </div>
  )
}

export default App
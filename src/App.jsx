import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import News from './page/News.jsx'
import Category from './components/Category.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Category />
      <News />
    </>
  )
}

export default App

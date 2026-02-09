import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import News from './page/News.jsx'
import Category from './components/Category.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Category className="py-10"/>
      <News />
      <Footer />
    </>
  )
}

export default App

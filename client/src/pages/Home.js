import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Blogs/>
      <Footer/>

      
    </div>
  )
}

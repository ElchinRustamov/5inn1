import React from 'react'
import Navbar from '../../Components/Navbar'
import HomeComponent from '../../Components/homeComponent'
import About from '../../Components/About'
import Menu from '../../Components/Menu'
import Contact from '../../Components/Contact'
import Wpbtn from '../../Components/Component/Wpbtn'
const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeComponent/>
    <About />
    <Menu />
    <Contact />
    <Wpbtn/>
    </>
  )
}

export default Home
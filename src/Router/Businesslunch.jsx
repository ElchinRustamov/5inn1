import React from 'react'
import BusinessLunchComponent from '../pages/homre/BusinessLunchComponent'
import Navbar from '../Components/Navbar'

const Businesslunch = () => {
  return (
    <div 
    style={{
      marginTop:"9rem",
    }}
    >
        <Navbar/>
        <BusinessLunchComponent/>
    </div>
  )
}

export default Businesslunch
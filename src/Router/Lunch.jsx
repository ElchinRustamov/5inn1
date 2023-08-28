import React from 'react'
import LunchComponent from '../pages/homre/LunchComponent'
import Navbar from "../Components/Navbar"

const Lunch = () => {
  return (
    <div
    style={{
      marginTop:"9rem",
    }}
    >
        <Navbar/>
        <LunchComponent/>

    </div>
  )
}

export default Lunch
import React from 'react'
import { useNavigate } from 'react-router'
import "./Css/btnback.css"

const Btnback = () => {
  const navigate =useNavigate()
  return (
    <section className='btnback-component'>
    <button onClick={()=> navigate(-1)} className=' btn-back'>
        <i className="fa-solid fa-arrow-left"></i>
    </button>
    </section>
  )
}

export default Btnback
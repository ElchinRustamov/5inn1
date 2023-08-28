import React from 'react'
import "./Css/Wpbtn.css"
import ReactWhatsapp from 'react-whatsapp';
const Wpbtn = () => {
  return (
    <ReactWhatsapp number='+994-55-651-07-00' message='salam hər vaxtınız xeyir,'>
    <div className='fixed-wp'>
      <div className='pulse'>
       <i className="fa-brands fa-whatsapp"/>
    </div>
    </div>
    </ReactWhatsapp>
  )
}

export default Wpbtn
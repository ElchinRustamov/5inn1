import React from 'react'
import LoadingLogo from "../Assets2/LogoGif.gif"
import "../Css/style.css";


const Loading = () => {
  return (
    <div className='loading'>
        
        <img src={LoadingLogo} alt="gif"/>

    </div>
  )
}

export default Loading
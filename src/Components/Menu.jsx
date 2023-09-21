import React from 'react'
import "../Css/style.css";
import { Link } from 'react-router-dom';
import MorningLogo from "../Assets2/1.png"
import BusinessLogo from "../Assets2/2.png"
import LunchLogo from "../Assets2/3.png"
import NightLogo from "../Assets2/4.png"
import EveningLogo from "../Assets2/5.png"


const Menu = () => {
  return (
    <section className='menu' id='menu'>
    <h1 className='heading'>Menu<span>lar</span></h1>
   <div className=''>
   <div className='setmenu' id="anchor">
                    <Link to="/morning">
                        <img src={MorningLogo} alt="logo" />
                    </Link>
                    <Link to="/businesslunch">
                        <img src={BusinessLogo} alt="logo" />
                    </Link>
                    <Link to="/lunch">
                        <img src={LunchLogo} alt="logo" />
                    </Link>
                    <Link to="/night">
                        <img src={NightLogo} alt="logo" />
                    </Link>
                    <Link to="/evening">
                        <img src={EveningLogo} alt="logo" />
                    </Link>
                </div>
   </div>
   
  <div className='menu-parents'>
    <Link to="/sorba" className="sorba">
      <a > Şorbalar </a>
    </Link>

    <Link to="/salat" className="salat">
      <a > Salatlar </a>
    </Link>

    <Link to="/lahmacun" className="lahmacun">
      <a > Lahmacunlar </a>
    </Link>

    <Link to="/pide" className="pide">
      <a > Pideler </a>
    </Link>

    <Link to="/isti-yemekler" className="isti-yemekler">
      <a > İsti Yeməklər </a>
    </Link>

    <Link to="/qarnir" className="qarnir">
      <a > Qarnirlər </a>
    </Link>

    <Link to="/icki" className="icki">
      <a > İçkilər </a>
    </Link>
    </div>

    </section>
  )
}

export default Menu
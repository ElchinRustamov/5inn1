import React from 'react'
import "../Css/style.css";
import { Link } from 'react-router-dom';
import Seher from "../Assets2/Set/Seher.png"
import Nahar from "../Assets2/Set/Nahar.png"
import LunchLogo from "../Assets2/Set/Lunch.png"
import Gece from "../Assets2/Set/Gece.png"
import Axsam from "../Assets2/Set/Axsam.png"


const Menu = () => {
  return (
    <section className='menu' id='menu'>
    <h1 className='heading'>Me<span>nu</span></h1>
   <div className=''>
   <div className='menu-parents' id="anchor">
                    <Link to="/morning" >
                        <img src={Seher} alt="logo" />
                    </Link>
                    <Link to="/businesslunch" >
                        <img src={Nahar} alt="logo" />
                    </Link>
                    <Link to="/lunch" >
                        <img src={LunchLogo} alt="logo" />
                    </Link>
                    <Link to="/night" >
                        <img src={Axsam} alt="logo" />
                    </Link>
                    <Link to="/evening">
                        <img src={Gece} alt="logo" />
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
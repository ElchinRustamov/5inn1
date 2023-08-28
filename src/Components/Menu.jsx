import React from 'react'
import "../Css/style.css";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <section className='menu' id='menu'>
    <h1 className='heading'>Menu<span>lar</span></h1>
   
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
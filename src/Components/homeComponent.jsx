import React from 'react'
import "../Css/style.css";
import LogoFive from "../Assets2/Fiveinn1.png"
import { Link, useNavigate } from 'react-router-dom';
import MorningLogo from "../Assets2/1.png"
import BusinessLogo from "../Assets2/2.png"
import LunchLogo from "../Assets2/3.png"
import NightLogo from "../Assets2/4.png"
import EveningLogo from "../Assets2/5.png"



const HomeComponent = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='home' id='home'>
                <div className="content">
                    <img src={LogoFive} alt="Logo" />
                   
                       
                        <p style={{
                            // fontSize:"1.4rem",
                            // textAlign:"center",
                            // fontWeight:"bold",
                        }}>1. Yemək çatdırılma xidməti<br/>
                        2. Şirniyyatların çatdırılma xidməti<br/>
                        3. Yarım hazırlanmış qidaların çatdırılma xidməti<br/>
                        4. Coffe və içkilərin çatdırılması<br/>
                        5. Katerinq (express mətbəx)<br/>
                        </p>
                    

                </div>
                <div className='setmenu'>
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
            </section>
        </>
    )
}

export default HomeComponent
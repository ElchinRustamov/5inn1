import React from 'react'
import "../Css/style.css";
import LogoFive from "../Assets2/Fiveinn1.png"
import { NavLink, useNavigate } from 'react-router-dom';
import MorningLogo from "../Assets2/Yemek/1.png"
import BusinessLogo from "../Assets2/Yemek/2.png"
import LunchLogo from "../Assets2/Yemek/3.png"
import NightLogo from "../Assets2/Yemek/4.png"
import EveningLogo from "../Assets2/Yemek/5.png"
import { Link,Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const HomeComponent = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='home' id='home'>
                <div className="content">
                    <img src={LogoFive} alt="Logo" />
                </div>
                <div className='header-text_parents'>
                    <div className='header-text'>
                    <p><span style={{color:"white"}}>B</span>u sayt vasitəsi ilə heç bir qeydiyyatdan keçmədən <span style={{color:"orange"}}>yemək</span>,  <span style={{color:"orange"}}>şirniyyat</span> və <span style={{color:"orange"}}>tortları</span> online sifariş verə bilərsiniz.</p>
                    <p><span style={{color:"white"}}>B</span>unun üçün seçdiyiniz yeməkləri səbətə əlavə edib sadəcə təstiq etməyiniz kifayətdir.</p>
                    </div>
                </div>
                <div className='setmenu'>
                    <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
                        <img src={MorningLogo} alt="logo" />
                    </Link>
                    <NavLink to="/seweetmeats">
                        <img src={BusinessLogo} alt="logo" />
                    </NavLink>
                    <NavLink to="/halffood">
                        <img src={LunchLogo} alt="logo" />
                    </NavLink>
                    <NavLink to="/drinks">
                        <img src={NightLogo} alt="logo" />
                    </NavLink>
                    <NavLink to="/katering">
                        <img src={EveningLogo} alt="logo" />
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default HomeComponent
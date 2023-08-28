import React, { useCallback, useContext, useRef, useState } from 'react'
import "../Css/style.css"
import Logo from "../Assets2/LogoGif.gif"
import EnFlag from "../Assets2/EnFlag.png"
import AzFlag from "../Assets2/AzFlag.PNG"
import RusFlag from "../Assets2/RusFlag.png"
import StateContext from '../Context/ContextState'
import ModalSend from './Component/ModalSend'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const { addBasket, setAddBasket, total, setTotal, show, setShow, addMesage, setAddMesage } = useContext(StateContext)
    // const searchRef = useRef(); //axtaris ucun acilan icon
    const navbarRef = useRef(); // navbarda linklerin acilma penceresi
    const basketRef = useRef(); // sebetimizin acilma 
    // const langRef = useRef(); // dil deisimi 
    const navigate = useNavigate()
    // search input 
    
    
    
    const deleteProduct = (id) => {
        setAddBasket((addBasket) => addBasket.filter((item) => id !== item.id))
    }
    const artir = (id) => {

        setAddBasket((addBasket) => {
            return addBasket.map((product) => {
                if (product.id === id) {
                    const newCount = product.count + 1;
                    return {
                        ...product,
                        count: newCount,
                        price: newCount * product.priceTotal
                    };
                }
                return product
            })
        })
    }
    const azalt = (id) => {
      

        setAddBasket((addBasket) => {
            return addBasket.map((product) => {
                if (product.id === id) {
                    const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
                    return {
                        ...product,
                        count: newCount,
                        price: newCount * product.priceTotal
                    };
                }
                return product
            })
        })
    }
    const openModal = ()=>{
        
        setShow(!show)
        setAddMesage(addBasket)
        if (addBasket.length == 0) {
            setShow(false)
            toast.error("Səbət boşdur")
        }
    }
    const searcHandler = () => {
        // searchRef.current.classList.toggle("active")
        navbarRef.current.classList.remove("active")
        // langRef.current.classList.remove("active")
    };
    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active")
        // searchRef.current.classList.remove("active")
        // langRef.current.classList.remove("active")


    };
    const basketHandler = () => {
        basketRef.current.classList.toggle("active")
        // langRef.current.classList.remove("active")
        // searchRef.current.classList.remove("active")

    };
    // const languageHandler = () => {
    //     langRef.current.classList.toggle("active")
    //     searchRef.current.classList.remove("active")

    // }
    return (
        <header className='header'>
            <a href="#" className='logo'>
                <img src={Logo} alt="logo" />
            </a>
            <nav className='navbar' ref={navbarRef}>
                <a href='#home' onClick={()=>{navigate(-1)}}>Əsas</a>
                <a href="#about" onClick={()=>{navigate(-1)}}>Haqqımızda</a>
                <a href="#menu" onClick={()=>{navigate(-1)}}>Menyu</a>
                <a href="#contact" onClick={()=>{navigate(-1)}}>Əlaqə</a>
            </nav>
            <div className="icons">
                {/* <div className='fas fa-search' onClick={searcHandler}></div> */}
                <div className='fa-solid fa-cart-shopping basket-icon' onClick={basketHandler}>
                    <div className='basket-length'>
                        <span>{addBasket.length}</span>
                    </div>
                </div>
                {/* <div className="lang" onClick={languageHandler} style={{ width: "50px", height: "50px", borderRadius: "50%" }}>
                    <img src={AzFlag} alt="img" className='langiconflag' />
                    <div className="language" ref={langRef}>
                        <button>
                            <img src={EnFlag} alt="" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
                            <span>En</span>
                        </button>
                        <button>
                            <img src={RusFlag} alt="" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
                            <span>Ru</span>
                        </button>
                    </div>
                </div> */}



                <div className='fa-solid fa-bars' id='menu-btn' onClick={navbarHandler}></div>
                <div className="basket" ref={basketRef}>
                    <div className="exit" onClick={basketHandler}>
                        <i className="fa-solid fa-xmark" />
                    </div>

                    {
                        addBasket?.map((item, key) => (
                            <div className="basket-body">
                                <div className="basket-body-img">
                                    <img src={item.img} alt="image" />
                                </div>
                                <div className="basket-body-name-price">
                                    <p>{item.name}</p>
                                    <span> {item.priceTotal} ₼</span>
                                </div>
                                <div className="basket-body-count">
                                    <div className="basket-body-count-artir" onClick={() => { artir(item.id) }}>
                                        <i className="fa-solid fa-plus" />
                                    </div>
                                    <div className="basket-body-count-say">
                                        {item.count}
                                    </div>
                                    <div className="basket-body-count-azalt" onClick={() => { azalt(item.id) }}>
                                        <i className="fa-solid fa-minus" />
                                    </div>
                                </div>
                                <div className="basket-body-delete" onClick={() => { deleteProduct(item.id) }}>

                                    <i className="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        ))
                    }
                    <div className='basket-footer'>
                        <div className='basket-footer-price'>
                            <span>Cəmi: {total.price} ₼</span>
                        </div>
                        <div className='basket-footer-send'>
                            <button onClick={openModal}>
                                <p>Təsdiqlə</p>
                            </button>
                            {
                                show && (
                                    <div className="salam">
                                        <ModalSend/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='search-form' ref={searchRef}>
                <input type="search" placeholder='Search here.....' id='search-box'/>
                <label htmlFor="search-box" className='fas fa-search'></label>
            </div> */}
        </header>
    )
}

export default Navbar
import React, { useContext, useEffect, useState } from 'react'
import "../Css/Components.css"
import { NightSetMenu } from '../../Data'
import money from "../../Assets2/WhiteManat.png"
import StateContext from '../../Context/ContextState'
import toast, { Toaster } from 'react-hot-toast';
import Btnback from '../../Components/Component/Btnback'

const NightComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(NightSetMenu)
    }, [])

    const {addBasket,setAddBasket} = useContext(StateContext)

const handlClick = (item)=>{
  let isPresent = false;
  addBasket.forEach((product) => {
    if(item.id===product.id)
    isPresent = true
  });
  if(isPresent)
  return;
  setAddBasket([...addBasket,item]) 
  toast.success("Səbətə əlavə olundu.")
}
    return (
        <section className='setmenu'>
            <Btnback/>
            <div className="setone">
                {
                    data.map((item, key) => (
                        <>
                            <div className='setOne-name'>
                                <p>5 inn 1 Set menu 1 </p>
                            </div>
                            <div className='oneFoods'>
                                <img src={item.setOne.oneFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setOne.oneFoods.name}</p>
                                </div>
                            </div>
                            <div className='twoFoods'>
                                <img src={item.setOne.twoFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setOne.twoFoods.name}</p>
                                </div>
                            </div>
                            <div className='treeFoods'>
                                <img src={item.setOne.treeFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setOne.treeFoods.name}</p>
                                </div>
                            </div>
                            <div className='fooFoods'>
                                <img src={item.setOne.fooFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setOne.fooFoods.name}</p>
                                </div>
                            </div>
                            <div className='fiveFoods'>
                                <img src={item.setOne.fiveFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setOne.fiveFoods.name}</p>
                                </div>
                            </div>
                            <div className='price-setmenu'>
                                <span>9</span>
                                <img src={money} alt="money" style={{ width: "1.5rem", height: "1.5rem" }} />
                            </div>
                            <div className='add-btn' onClick={()=>{handlClick(item.setOne)}}>
                                < i className="fa-solid fa-cart-shopping" />
                            </div>
                        </>
                    ))
                }
            </div>
            <div className="settwo">
                {
                    data.map((item, key) => (
                        <>
                            <div className='setOne-name'>
                                <p>5 inn 1 Set menu 2 </p>
                            </div>
                            <div className='oneFoods'>
                                <img src={item.setTwo.oneFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTwo.oneFoods.name}</p>
                                </div>
                            </div>
                            <div className='twoFoods'>
                                <img src={item.setTwo.twoFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTwo.twoFoods.name}</p>
                                </div>
                            </div>
                            <div className='treeFoods'>
                                <img src={item.setTwo.treeFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTwo.treeFoods.name}</p>
                                </div>
                            </div>
                            <div className='fooFoods'>
                                <img src={item.setTwo.fooFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTwo.fooFoods.name}</p>
                                </div>
                            </div>
                            <div className='fiveFoods'>
                                <img src={item.setTwo.fiveFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTwo.fiveFoods.name}</p>
                                </div>
                            </div>
                            <div className='price-setmenu'>
                                <span>9</span>
                                <img src={money} alt="money" style={{ width: "1.5rem", height: "1.5rem" }} />
                            </div>
                            <div className='add-btn' onClick={()=>{handlClick(item.setTwo)}}>
                                <Toaster position='top-right'/>
                                < i class="fa-solid fa-cart-shopping" />
                            </div>
                        </>
                    ))
                }

            </div>
            <div className="settree">
                {
                    data.map((item, key) => (
                        <>
                            <div className='setOne-name'>
                                <p>5 inn 1 Set menu 3 </p>
                            </div>
                            <div className='oneFoods'>
                                <img src={item.setTree.oneFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTree.oneFoods.name}</p>
                                </div>
                            </div>
                            <div className='twoFoods'>
                                <img src={item.setTree.twoFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTree.twoFoods.name}</p>
                                </div>

                            </div>
                            <div className='treeFoods'>
                                <img src={item.setTree.treeFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTree.treeFoods.name}</p>
                                </div>

                            </div>
                            <div className='fooFoods'>
                                <img src={item.setTree.fooFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTree.fooFoods.name}</p>
                                </div>

                            </div>
                            <div className='fiveFoods'>
                                <img src={item.setTree.fiveFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setTree.fiveFoods.name}</p>
                                </div>
                            </div>

                            <div className='price-setmenu'>
                                <span>9</span>
                                <img src={money} alt="money" style={{ width: "1.5rem", height: "1.5rem" }} />
                            </div>

                            <div className='add-btn' onClick={()=>{handlClick(item.setTree)}}>
                                < i class="fa-solid fa-cart-shopping" />
                            </div>
                        </>
                    ))
                }

            </div>
            {/* <div className="setfo">
                {
                    data.map((item, key) => (
                        <>
                            <div className='setOne-name'>
                                <p>Set 5 inn 1 menu </p>
                            </div>
                            <div className='oneFoods'>
                                <img src={item.setFo.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFo.name}</p>
                                </div>
                            </div>
                            <div className='twoFoods'>
                                <img src={item.setFo.twoFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFo.twoFoods.name}</p>
                                </div>

                            </div>
                            <div className='treeFoods'>
                                <img src={item.setFo.treeFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFo.treeFoods.name}</p>
                                </div>

                            </div>
                            <div className='fooFoods'>
                                <img src={item.setFo.fooFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFo.fooFoods.name}</p>
                                </div>

                            </div>
                            <div className='fiveFoods'>
                                <img src={item.setFo.fiveFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFo.fiveFoods.name}</p>
                                </div>
                            </div>

                            <div className='price-setmenu'>
                                <span>5</span>
                                <img src={money} alt="money" style={{ width: "1.5rem", height: "1.5rem" }} />
                            </div>

                            <div className='add-btn'>
                                < i class="fa-solid fa-cart-shopping" />
                            </div>
                        </>
                    ))
                }

            </div>
            <div className="setfive">
                {
                    data.map((item, key) => (
                        <>
                            <div className='setOne-name'>
                                <p>Set 5 inn 1 menu </p>
                            </div>
                            <div className='oneFoods'>
                                <img src={item.setFive.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFive.name}</p>
                                </div>
                            </div>
                            <div className='twoFoods'>
                                <img src={item.setFive.twoFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFive.twoFoods.name}</p>
                                </div>

                            </div>
                            <div className='treeFoods'>
                                <img src={item.setFive.treeFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFive.treeFoods.name}</p>
                                </div>

                            </div>
                            <div className='fooFoods'>
                                <img src={item.setFive.fooFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFive.fooFoods.name}</p>
                                </div>

                            </div>
                            <div className='fiveFoods'>
                                <img src={item.setFive.fiveFoods.img} alt="logo" />
                                <div className='titleFood'>
                                    <p>{item.setFive.fiveFoods.name}</p>
                                </div>
                            </div>

                            <div className='price-setmenu'>
                                <span>5</span>
                                <img src={money} alt="money" style={{ width: "1.5rem", height: "1.5rem" }} />
                            </div>

                            <div className='add-btn'>
                                < i class="fa-solid fa-cart-shopping" />
                            </div>
                        </>
                    ))
                }

            </div> */}
        </section>
    )
}
export default NightComponent
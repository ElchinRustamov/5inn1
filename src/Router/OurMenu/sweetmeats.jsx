import React, { useContext, useEffect, useState } from 'react'
import {Sweet} from "../../Data"
import "./Css/Menus.css"
import Manat from "../../Assets2/WhiteManat.png"
import Btnback from '../../Components/Component/Btnback'
import StateContext from '../../Context/ContextState'
import toast, { Toaster } from 'react-hot-toast';
import Navbar from "../../Components/Navbar"



const Sweetmeats = () => {
  const [sorbaData, setsorbaData] = useState([])
useEffect(()=>{
    setsorbaData(Sweet);
},[]);
const {addBasket,setAddBasket,searchFilter,setSearchFilter} = useContext(StateContext)

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
    <div className='sorbalar' style={{display:"flex", alignItems:"center", justifyContent:"center",flexWrap:"wrap",padding:'110px 0 100px 0'}}>
      <Navbar/>
      <Btnback/>
      {
         sorbaData 
         && 
         sorbaData.filter((item)=>{
          return searchFilter.toLowerCase() === ''
          ? item
          : item.name.toLowerCase().includes(searchFilter)
         })
         .map((item,key)=>(
          <div className="sorba-header">
            <img src={item.img} alt="image"/>
            <div className="sorba-body">
                <p>{item.name}</p>
                <span>{item.terkibi}</span>
            </div>
            <div className="sorba-footer">
              <div className='sorba-footer-price'>
              <p>{item.price}</p>
              <img src={Manat} alt="image" style={{width:"2rem", height:"2rem"}} />
              </div>
              <div className='sorba-btn'>
                  <button onClick={()=>{handlClick(item)}}>
                     Əlavə et  < i className="fa-solid fa-cart-shopping" />
                     </button>
                  <Toaster position='top-right'/>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )

}

export default Sweetmeats
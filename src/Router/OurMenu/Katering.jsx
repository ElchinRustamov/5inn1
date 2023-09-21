import React from 'react'
import Navbar from '../../Components/Navbar'
import Btnback from '../../Components/Component/Btnback'
import KateringImage from '../../Assets2/FoodsImage/Katering.png'
const Katering = () => {
  return (
    <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap',padding:'110px 0 100px 0'}}>
    <Navbar/>
      <Btnback/>
      <div style={{width:'50%',margin:'0 auto'}}>
         <img style={{width:'100%',height:'500px',borderRadius:'10px'}} src={KateringImage} alt='Katering Image'/>   
       </div>
    </div>
  )
}
export default Katering
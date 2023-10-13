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
         <img style={
          {
            width:'100%',
            height:'500px',
            borderRadius:'20px',
            border:"3px solid orange",
            boxShadow:"2px 4px 17px orange"
        }
        } src={KateringImage} alt='Katering Image'/>  
         <p
         style={{
          textAlign:"center",
          color:"#fff",
          fontSize:"1.6rem",
          fontWeight:"bold",
          margin:"2rem 0",
          letterSpacing:"0.2rem",
         }}
         >Biz, tədbiriniz üçün yemək və içki təchizatı və tədbirə dair digər detalların həllini təqdim edirik.</p> 
         <p
          style={{
            textAlign:"center",
            color:"#fff",
            fontSize:"1.6rem",
            fontWeight:"bold",
            margin:"2rem 0",
            letterSpacing:"0.2rem",

           }}
         >Əgər katering xidmətlərimizə marağınız varsa, başlamaq üçün əlaqə saxlamaq kifayətdir. Bizim ekspertlərimiz sizin tədbirinizin xüsusiyyətlərinə və istəklərinizə əsasən bir təklif hazırlayacaqlar və lazım olan hər şeyi təşkil edəcəklər</p>
         <p
          style={{
            textAlign:"center",
            color:"#fff",
            fontSize:"1.6rem",
            fontWeight:"bold",
            margin:"2rem 0",
            letterSpacing:"0.2rem",

           }}
         >Əlaqə:</p>
         <p
          style={{
            textAlign:"center",
            color:"#fff",
            fontSize:"1.6rem",
            fontWeight:"bold",
            margin:"1rem 0",
            letterSpacing:"0.2rem",

           }}
         >0125417411</p>
         <p
          style={{
            textAlign:"center",
            color:"#fff",
            fontSize:"1.6rem",
            fontWeight:"bold",
            margin:"1rem 0",
            letterSpacing:"0.2rem",

           }}
         >0556510700</p>
    
       </div>
    </div>
  )
}
export default Katering
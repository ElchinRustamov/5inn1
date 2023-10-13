import { createContext, useEffect, useState } from "react";

const StateContext = createContext()

export const StateContextprovider = ({children}) =>{
    const biz = []

    const [addBasket, setAddBasket] = useState([])
    const [addMesage,setAddMesage] =useState([])
    const [searchFilter,setSearchFilter] = useState('');
    

const scaleFactor = 100000; // Çarpanı istediğiniz kadar büyük ayarlayabilirsiniz
const totalVal = addBasket.reduce((prev, curr) => prev + curr.price * scaleFactor, 0);
const formattedTotal = (totalVal / scaleFactor).toFixed(2);
    const [total, setTotal] = useState({
        price: formattedTotal,
    })

    useEffect(()=>{
        const scaleFactor = 100000; // Çarpanı istediğiniz kadar büyük ayarlayabilirsiniz
const totalVal = addBasket.reduce((prev, curr) => prev + curr.price * scaleFactor, 0);
const formattedTotal = (totalVal / scaleFactor).toFixed(2);
        setTotal(
            {
                price: formattedTotal
            }
        )
    },[addBasket])
   

    const [show, setShow] = useState(false);



    DataTransfer = {
        addBasket,
        setAddBasket,
        total,
        setTotal,
        show,
        setShow,
        addMesage,
        setAddMesage,
        searchFilter,
        setSearchFilter
    }
 
    return(
        <StateContext.Provider value={DataTransfer} >
            {children}
        </StateContext.Provider>
    )
} 


export default StateContext
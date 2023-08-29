// import React, { useContext, useState } from 'react'
// import StateContext from '../../Context/ContextState';
// import "./Css/ModalSend.css"
// import PhoneInput from 'react-phone-input-2'
// import "react-phone-input-2/lib/style.css"

// const ModalSend = () => {
//     const { show, setShow } = useContext(StateContext)
//     const [phoneNumber,setPhoneNumber] = useState('')
//     const [valid, setValid] = useState(true)


//     const handleChange = (value)=>{
//         setPhoneNumber(value)
//         setValid(validatePhoneNumber(value))
//     }

//     const validatePhoneNumber = (phoneNumber) =>{
//         const phoneNumberPatt = /^\d{12}$/;
//         return phoneNumberPatt.test(phoneNumber)
//     }

//     const closeModal = () => {
//         setShow(!show)
//     }
//     return (
//         <div className='popup'>

//             <button className='btn-x' onClick={closeModal}>
//                 <i className="fa-solid fa-x" />
//             </button>

//             <div className="popup-container">
//                 <label htmlFor="number">
//                     Telefon nömrəsi:
//                     <PhoneInput
//                      country={"az"}
//                      value={phoneNumber}
//                      onChange={handleChange}
//                     inputProps={{
//                         required: true,
//                     }}
//                      />
//                 </label>
//                 {!valid && <p>zəhmət olmasa '9' rəqəmli nömrəni daxil edin</p>}
//             </div>

//         </div>
//     )
// }

// export default ModalSend

import React, { useContext,useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, setNestedObjectValues } from 'formik';
import * as Yup from 'yup';
import "./Css/ModalSend.css"
import StateContext from '../../Context/ContextState';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';



const ModalForm = ({ onClose}) => {
    const { show, setShow, addMesage,setAddBasket} = useContext(StateContext)
    const [sendingData] = useState(addMesage)
    const form = useRef();
    
    console.log("yoxlama2",sendingData)
   
    const handleSubmit = (values, { resetForm }) => {
        // let arr = [...sendingData];
        
        const nameAndCountArray = [];

        sendingData.forEach(item => {
          const { name, count, priceTotal } = item;
          if (name && count && priceTotal) {
            nameAndCountArray.push({ name, count, priceTotal});
          }
        });
        nameAndCountArray.push(values)
        
            // arr.forEach(item => {
            //     Object.entries(item).forEach((key,value)=>{
            //         newObj[key] =value
            //     })
            //     console.log(newObj)
            // // processedData[item.name,item.price] = item.name;
            // });
            const emailDataFormatted = nameAndCountArray.map(data => {
                return `${data.name ? `Yeməyin Adı: ${data.name}` : ''}${data.userName ? `Müştəri adı: ${data.userName}` : ''}${data.phoneNumber ? ` Telefon nömrəsi: ${data.phoneNumber}` : ''}${data.count ? ` Sayı: ${data.count}` : ''}${data.priceTotal ? ` Qiyməti: ${data.priceTotal}` : ''}`;
              }).join('\n');
          emailjs.send('service_1gs6rom', 'template_6fskvza',{ message: emailDataFormatted }, 'aL_sOdLAcCfdDyagF')
            .then((result) => {
                toast.success("Təşəkürlər tezliklə əlaqə saxlanılacaq!");
            }, (error) => {
                console.log("eror cixdi", error.text);
            });
    
        resetForm()
        setAddBasket([])
        setShow(false)
        
    };

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('Ad önəmlidir'),
        phoneNumber: Yup.string().matches(/^(?:\+994|0)([0-9]{9})$/, 'Keçərli nömrə daxil edin').required('Nömrə vacibdir'),
    });
    return (

        <div className="modal popup">
            <div className="modal-content popup-container">
                <Formik
                    initialValues={{
                        userName: '',
                        phoneNumber: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form ref={form}>
                        <div className='name-modal'>
                            <label htmlFor="name">Ad</label>
                            <Field type="text" id="userName" name="userName" />
                            <ErrorMessage name="userName" component="div" style={{ color: 'red', fontSize:"2rem" }} className="error" />
                        </div>
                        <div className='number-modal'>
                            <label htmlFor="phoneNumber">Nömrə:</label>
                            <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="055-555-55-55"/>
                            <ErrorMessage name="phoneNumber" component="div" className="error" style={{ color: 'red',fontSize:"2rem" }} />
                        </div>
                        <button type="submit">Göndər</button>
                    </Form>
                </Formik>
                
                <button onClick={() => { setShow(!show) }} className='close-modal'> <Toaster position='top-center'/>Bağla</button>
            </div>
        </div>
    );
};

export default ModalForm;

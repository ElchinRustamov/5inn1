import React from 'react'
import "../Css/style.css";


const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h1 className='heading'>
                <span>Əla</span>qə
            </h1>
            <div className="row">
                <a href="https://www.tiktok.com/@5_inn_1?_t=8ewFiS1Ez2H&_r=1" target='_blank'><i className="fa-brands fa-tiktok"></i></a>
                <a href="https://instagram.com/5_inn_1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                <a href="tel:012 541 74 11"><i className="fa-solid fa-phone"></i></a>
            </div>
            <div style={{
                display: "flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",
                marginTop:"2rem",
                fontSize:"2rem",
                color:"#fff",
                fontWeight:"bold"

            }}>
                <p>Şəhər: 012 541 74 11</p>
                <p style={{
                    marginTop:"1rem"
                }}>Mobil: 055 651 07 00</p>

            </div>
        </section>
    )
}

export default Contact
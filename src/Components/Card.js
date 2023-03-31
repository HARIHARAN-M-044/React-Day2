import React from 'react'
import img1 from "../Images/AMG.jpeg";
import img2 from "../Images/jesko.jpg";
import img3 from "../Images/DIVO.jpeg";
import img4 from "../Images/XC40.jpeg";
import img5 from "../Images/cam.jpeg";
import img6 from "../Images/C8.jpeg";
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>AMG</h2>
        <h2>Price : $1,50,000</h2>
        <h2>Type : Sports</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>jesko</h2>
        <h2>Price : $2,89,000</h2>
        <h2>Type : Super Sports </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>DIVO</h2>
        <h2>Price : $3,00,000</h2>
        <h2>Type : Super Sport</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>Volvo-XC40</h2>
        <h2>Price : $80,000</h2>
        <h2>Type : SUV</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>Camero</h2>
        <h2>Price : $1,25,000</h2>
        <h2>Type : Muscle</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>Corvette-C8</h2>
        <h2>Price : $1,50,000</h2>
        <h2>Type : Sports </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>
    </section>
  )
}

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Slider.css"
import axios from 'axios'

const Slider = () => {

  const [slider , setSlider] = useState([])

useEffect(() => {
  axios.get('http://localhost:3002/slider')
    .then(res => setSlider(res.data.sliders)) 
    .catch(error => console.log(error))
} , [])
console.log(slider);

  return (
    <div>
         <div id="carouselExampleControls" className="carousel slide homeslider" data-bs-ride="carousel">
         <div className="carousel-inner">
         {slider.map((sliderss) => (
           <div className="carousel-item active imgs">
             <img src={sliderss.image} className="d-block w-100 img img-fluid" alt="adada"/>
             <div className="pictureText">
               <span className='span'>{sliderss.title}</span>
               <h2 className='h2'>{sliderss.description}</h2>
               <a href="/">SHOP NOW</a>
             </div>
           </div>
           ))}
         </div>
         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
           <span className="carousel-control-prev-icon icon" aria-hidden="true"></span>
           <span className="visually-hidden">Previous</span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
           <span className="carousel-control-next-icon icon" aria-hidden="true"></span>
           <span className="visually-hidden">Next</span>
         </button>
       </div>
    </div>
  )
}

export default Slider
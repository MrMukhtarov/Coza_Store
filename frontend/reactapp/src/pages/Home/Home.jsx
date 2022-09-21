import React, { useEffect } from 'react'
import Instagram from '../Instagram/Instagram'
import Photos from '../Photos/Photos'
import Products from '../Products/Products'
import Slider from '../Slider/Slider'
import Timer from '../Timer/Timer'
import "./Home.css"
import '../Products/Products.css'

const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  });

  return (

    <div>
        <Slider/>
        <Photos/>
        <Products/>
        <Timer/>
        <Instagram/>
    </div>
    
  )
}

export default Home
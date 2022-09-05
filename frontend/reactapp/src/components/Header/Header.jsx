import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Header.css'


const Header = () => {

const [logo , setLogo] = useState([])

useEffect(() => {
    axios.get('http://localhost:3002/logo')
      .then(res => setLogo(res.data.logo)) 
      .catch(error => console.log(error))
  } , [])

    const { pathname } = useLocation();
    if (pathname === "/admin") return null;
    else if (pathname === '/addslider') return null;
    else if (pathname === '/sliderdetail') return null;
    if(pathname === '/updateslider') return null;
    if(pathname === '/addphotos') return null;
    if(pathname === '/photodetail') return null;
    if(pathname === '/addproducts') return null;
    if(pathname === '/productdetail') return null;
    if(pathname === '/addinstagram') return null;
    if(pathname === '/instagramdetail') return null;
    if(pathname === '/logodetail') return null;
    if(pathname === '/settingdetail') return null;

    
  return (
    <header className='header'>
        <div className="container">
        <div className="row py-4 justify-content-between align-items-center">
            <div className="col-lg-2 col-5 logo col-sm-4 col-md-2">
                {logo && logo.slice(0,1).map((logos) => (
                <img className='img-fluid' src={logos.logo} alt="" />
                ))}
            </div>
            <div className="col-lg-6 text-end center">
                <a href="/">HOME</a>
                <a href="/">SHOP</a>
                <a href="/" className='features'>FEATURES</a>
                <a href="/">BLOG</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>

            </div>
            <div className="col-lg-3 col-5 right text-end col-md-3 justify-content-between col-sm-3">
                <i className="fa-solid fa-cart-shopping shp"></i>
                <i className="fa-regular fa-heart shp"></i>
                <i id='icon' className="fa-solid fa-bars ham"></i>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
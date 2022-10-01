import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Cart } from '../../Context/CardContext';
import Menu from '../../Menu/Menu';
import './Header.css'
import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";



const Header = () => {

  const {cart} = useContext(Cart)
  const [isOpen, setIsOpen] = useState(false);
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
    if(pathname === `/updateslider/`) return null;
    if(pathname === '/contactdetail') return null;
    if(pathname === '/messagedetail') return null;
    if(pathname === '/addfaq') return null;
    if(pathname === '/faqdetail') return null;

  return (
    <header className='header'>
        <div className="container">
        <div className="row py-3 justify-content-between align-items-center">
            <div className="col-lg-2 col-5 logo col-sm-4 col-md-2">
                {logo && logo.slice(0,1).map((logos) => (
                <NavLink to={'/'}><img className='img-fluid' src={logos.logo} alt="logo" /></NavLink>
                ))}
            </div>
            <div className="col-lg-6 text-end center">
                <NavLink to="/" data-replace="Home"><span>Home</span></NavLink>
                <NavLink to="/shop" data-replace="Shop"><span>Shop</span></NavLink>
                <NavLink to="/faq" data-replace="FAQs"><span>FAQs</span></NavLink>
                <NavLink to="/" data-replace="Blog"><span>Blog</span></NavLink>
                <NavLink to="/about" data-replace="About"><span>About</span></NavLink>
                <NavLink to="/contact" data-replace="Contact"><span>Contact</span></NavLink>
            </div>
            <div className="col-lg-3 col-6 right text-end col-md-3 justify-content-between col-sm-3">
              <NavLink to='/basket'>
                <i className="fa-solid fa-cart-shopping shp"><span className='zero'>{cart.length}</span></i>
              </NavLink>
              <NavLink to='login'><BiLogIn className='profile'/></NavLink>
              <NavLink to='/register'><CgProfile className='profile'/></NavLink>
                <i className="fa-regular fa-heart shp"></i>
                <div className="burger">
                    <span className='material-icons menu-btn' onClick={() => setIsOpen(true)}><i className="fa-solid fa-bars"></i></span>
                    <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
                </div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header
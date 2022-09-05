import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Footer.css'

const Footer = () => {


    const [settings , setSettings] = useState([])

useEffect(() => {
    axios.get('http://localhost:3002/setting')
      .then(res => setSettings(res.data.settings)) 
      .catch(error => console.log(error))
  } , [])


    const { pathname } = useLocation();
    if (pathname === "/admin") return null;
    else if (pathname === '/addslider') return null;
    else if (pathname === '/sliderdetail') return null;
    else if (pathname === '/updateslider/:id') return null;
    else if (pathname === '/addphotos') return null;
    if(pathname === '/photodetail') return null;
    if(pathname === '/addproducts') return null;
    if(pathname === '/productdetail') return null;
    if(pathname === '/addinstagram') return null;
    if(pathname === '/instagramdetail') return null;
    if(pathname === '/logodetail') return null;
    if(pathname === '/settingdetail') return null;
  return (
    <footer>
        <div className="container">
            <div className="row ">
                <div className="Top row justify-content-between align-items-center">
                    <div className="col-lg-2 categories row flex-direction-column">
                        <h4>CATEGORIES</h4>
                        <div className='row'>
                            <a href="/">Women</a>
                            <a href="/">Men</a>
                            <a href="/">Shoes</a>
                            <a href="/">Watches</a>
                        </div> 
                    </div>
                    <div className="col-lg-2 Help">
                        <h4>HELP</h4>
                        <div className='row'>
                            <a href="/">Track Order</a>
                            <a href="/">Returns</a>
                            <a href="/">Shipping</a>
                            <a href="/">FaQs</a>
                        </div>
                    </div>
                    <div className="col-lg-4 touch">
                        <h4 className='get'>GET IN TOUCH</h4>
                        {settings && settings.map((settingss) => (
                             <div>
                             <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+994) {settingss.phone}</p>
                                 <a href="/"><i className={settingss.icon1}></i></a>
                                 <a href="/"><i className={settingss.icon2}></i></a>
                                 <a href="/"><i className={settingss.icon3}></i></a>
                             </div>
                        ))}
                    </div>
                    <div className="col-lg-3 NEWSLETTER">
                        <h4 className='news'>NEWSLETTER</h4>
                        <input className='input' type="text" placeholder='nicat@gmail.com'/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="bottom text-center">
                 <div className='text'>
                    <p class="stext-107 cl6 txt-center">Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved | This template is made with by <a href="/" className='link'> Colorlib</a></p>
                 </div>
                 <div className="img">
                    <img src="https://preview.colorlib.com/theme/fashe/images/icons/xpaypal.png.pagespeed.ic.5IRC94FTgA.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/fashe/images/icons/xvisa.png.pagespeed.ic.JL9CL229f9.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/fashe/images/icons/xmastercard.png.pagespeed.ic.TeTk-UB0H_.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/fashe/images/icons/xexpress.png.pagespeed.ic.BytsYpfna2.webp" alt="" />
                    <img src="https://preview.colorlib.com/theme/fashe/images/icons/xdiscover.png.pagespeed.ic.CT7I1GD_bQ.webp" alt="" />
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Instagram.css'

const Instagram = () => {

  const [instagram , setInstagram] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/instagram')
      .then(res => setInstagram(res.data.instagram)) 
      .catch(error => console.log(error))
  } , [])

  return (
    <div className="instagram">
                <div className="top text-center">
                    <h3 className='mb-5'>@ FOLLOW US ON INSTAGRAM</h3>
                </div>
                <div className="bottom row justify-content-between">
                    {instagram && instagram.map((instagrams) => (
                         <div className="col-lg-2 imgs">
                         <img className='img-fluid' src={instagrams.image} alt="" />
                         <div className="hovertext">
                             <p>{instagrams.message}</p>
                             <span>Photo by @: {instagrams.user}</span>
                         </div>
                     </div>
                    ))}
                </div>
    </div>
  )
}

export default Instagram
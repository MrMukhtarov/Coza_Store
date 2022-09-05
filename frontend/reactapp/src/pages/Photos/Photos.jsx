import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Photo.css'

const Photos = () => {

    const [photos , setPhotos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/photo')
          .then(res => setPhotos(res.data.photos)) 
          .catch(error => console.log(error))
      } , [])
      console.log(photos);

  return (
    <div>
        <section id="second">
      <div className="container">
        <div className="row all justify-content-between align-items-center">
            <div className="row justify-content-between">
            {photos && photos.slice(0,3).map((photoss) => (
                <div className="col-lg-4">
                   <div className="img1">
                    <img className='img-fluid photo' src={photoss.image} alt="" />
                    <div className="textcat">
                        <a href="/">Shop Now</a>
                    </div>
                  </div>
                </div>     
            ))}
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Photos
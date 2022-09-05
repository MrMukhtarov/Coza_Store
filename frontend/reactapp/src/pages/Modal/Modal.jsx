import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Modal.css'
import { NavLink } from 'react-router-dom'

const Modal = ({hide,name,image,price}) => {

    const [cards , setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/card')
          .then(res => setCards(res.data.cards)) 
          .catch(error => console.log(error))
      } , [cards])

    let modalStyle = {
        display : "block",
        backgroundColor: 'rgbda(0,0,0,0.8)'
    }

  return (
    <div>
            <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title title">Product Detail</h5>
                  <button type="button" className="btn-close" onClick={hide}></button>
                </div>
                <div className="modal-body row justify-content-between">
                <div className="img col-lg-5">
                  <img  src={image} alt="" />
                 </div>
                 <div className="text col-lg-5">
                  <p>{name}</p>
                  <p className='mt-3'>{price} AZN</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sequi!</p>
                 </div>
                 <div className="btn">
                    <NavLink to='/'>ADD TO CARD</NavLink>
                  </div>
                  <div className='btn1'>
                  <NavLink to='/'>READ MORE</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Modal
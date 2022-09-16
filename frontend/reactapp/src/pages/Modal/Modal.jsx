import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './Modal.css'
import { NavLink } from 'react-router-dom'
import { Cart } from '../../Context/CardContext'

const Modal = ({hide,name,image,price,prod}) => {

    const [cards , setCards] = useState([])

  const {cart,setCart} = useContext(Cart)


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
    <div className='all'>
            <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title title">Product Detail</h5>
                  <button type="button" className="btn-close" onClick={hide}></button>
                </div>
                <div className="modal-body row justify-content-between col-12">
                <div className="img col-lg-5">
                  <img src={image} alt="" />
                 </div>
                 <div className="text col-lg-5">
                  <p className='col-8'>{name}</p>
                  <p className='mt-3'>{price} AZN</p>
                  <p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sequi!</p>
                 </div>
                 <div className="btns col-12">
                      <div className='btn1 col-6'>
                      <NavLink to='/'>READ MORE</NavLink>
                      </div>
                      {cart.includes(prod)?(
                        <button 
                        className='remove btn col-6 text-white' 
                        onClick={()=>{
                            setCart(cart.filter((c)=>c._id !==prod._id))
                        }}
                        >Remove From Cart
                        </button>
                        ):(
                        <button 
                        className='add btn col-6' 
                        onClick={()=>{
                            setCart([...cart,prod])
                        }}
                        >Add To Cart
                        </button>
                        )}
                 </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Modal
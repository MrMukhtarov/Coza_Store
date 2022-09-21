import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Products.css'
import Modal from '../Modal/Modal'
import axios from 'axios'

const Products = () => {

  const [cards , setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3002/card')
          .then(res => setCards(res.data.cards)) 
          .catch(error => console.log(error))
      } , [])

      const [model, serModel] = useState(false)
      const [tempdata, setTempData] = useState([])

      const getData = (image,name,price) => {
        let tempData = [image, name,price]
        setTempData(item => [1, ...tempData])
        return serModel(true)
      }

  return (
    <>
         <section id="products">
      <div className="container">
        <div className="row all justify-content-between">
          <div className="top">
            <h3>PRODUCT OVERVIEW</h3>
          </div>
          {cards && cards.map((cardss) => (
              <div className="bottom row col-lg-3 mb-5">
              <div className="box">
                <div className="bottom-img imgs">
                  <img className='img-fluid' src={cardss.image} alt="" />
                    <NavLink className="navlink" to='/' onClick={() => getData(cardss.image, cardss.name, cardss.price)}>Quick View</NavLink>
                </div>
                <div className="bottom-text">
                  <a href="/">{cardss.name}</a>
                  <span>{cardss.price} AZN</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {
      model === true ? <Modal image={tempdata[1]} name={tempdata[2]} price={tempdata[3]} hide={() => serModel(false)}/> : ''
    }
    <div className='navdiv'>
      <NavLink to="/" data-replace="LOAD MORE"><span>LOAD MORE</span></NavLink>
      {/* <NavLink  className="loadmore" to={'/'}>Load More</NavLink> */}
    </div>
    </>
  )
}

export default Products
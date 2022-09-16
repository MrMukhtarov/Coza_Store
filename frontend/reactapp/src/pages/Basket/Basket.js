import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../../Context/CardContext'
// import Products from '../Products/Products'
import './Basket.css'

const Basket = () => {

  const [total, setTotal] = useState()
  // const {cart} = useContext(Cart)

  const {cart,setCart} = useContext(Cart)


  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0))
  }, [cart])

  return (
    <div className='basket'>
      <div className="container py-4 ">
      <span style={{ fontSize:30 }}>{}</span>
      <br />
      <div className="all row">
      <div className='left col-lg-9 text-start'>
        <div className='productContainer'>{cart.map(prod => (
        // <Products prod={prod} key={prod.id}/>
        <div className='w-100 row justify-content-between'>
          <table className='table table-striped ali'>
          <tbody>
          <tr>
            <div className='tddiv'>
            <td className='text-center'>
                <img src={prod.image} className="img-thumbnail img-fluid" alt={prod.name}/>
            </td>
            <td className='w-25'><p className='td mb-0 text-center'>{prod.name}</p></td>
            <td className='w-25'><p className='td mb-0 text-center'>{prod.price} AZN</p></td>
            <td className='w-25 text-center'>
            {cart.includes(prod)?(
              <button 
              className='remove' 
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
            </td>
            </div>
          </tr>
        </tbody>
          </table>
        </div>
      ))}</div>
        </div>
        <div className="right col-lg-3 text-end">
          <h4>Cart Totals</h4>
          <span style={{ fontSize:30 }}>Total: {total} AZN</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Basket
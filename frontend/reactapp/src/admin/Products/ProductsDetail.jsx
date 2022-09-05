import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './ProductDetails.css'

const ProductsDetail = () => {

    const history = useNavigate();

    const [product , setProduct] = useState([])

   const product_arr = product && product.map(item => {
    return item._id
   })
   console.log(product_arr)

   useEffect(() => {
    axios.get('http://localhost:3002/card')
      .then(res => setProduct(res.data.cards)) 
      .catch(error => console.log(error))
  } , [])

  return (
    <div className='productdetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <table className="table table-image me-5">
    {product&&product.map((products,_id)=>(
        <tbody>
          <tr key={products._id}>
            <td className="w-25">
                <img src={products.image} className="img-fluid img-thumbnail" alt=""/>
            </td>
            <td><p className='td'>{products.name}</p></td>
            <td><p className='td'>{products.price} AZN</p></td>
             <td>
             <NavLink to={`/updateproduct/${product_arr[_id]}`} onClick={async() => {
                await axios.put(`http://localhost:3002/card/${product_arr[_id]}`)
                .then(res => res.data)
             }} className='ms-5 btn  btn1 btndel'>Update</NavLink>
             <NavLink to={`/deleteproduct/${product_arr[_id]}`} onClick={async() => {
              await axios.delete(`http://localhost:3002/card/${product_arr[_id]}`)
                .then(() => history('/productdetail'))
             }} className='btn btn2 ms-2 btndel'> Delete</NavLink>
             </td>
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
  )
}

export default ProductsDetail
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown'
import './AddProducts.css'

const AddProducts = () => {

    const history = useNavigate()

    const [inputs,setInputs] = useState({
        image: '',
        name:'',
        price:''
    }) 

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/card', {
            image : String(inputs.image),
            name : String(inputs.name),
            price : Number(inputs.price)
        }).then(res => res.data)
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/admin'));
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-lg-2'>
        <SideBarDropDown/>
        </div>
    <div className="col-lg-4 addproducts container mt-5">
    <form onSubmit={handleSubmit}>
        <h1 className="heading">Add Products</h1>
        <p>Image</p>
        <input value={inputs.image} onChange={handleChange} name='image' type='text'/>
        <p>Name</p>
        <input value={inputs.name} onChange={handleChange} name='name' type='text'/>
        <p>Price</p>
        <input type="text" value={inputs.price} onChange={handleChange} name='price' />
        <input type="submit" value="Add Slider"/>
    </form>
    </div>
    </div>
  )
}

export default AddProducts
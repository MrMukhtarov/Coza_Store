import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './UpdateProduct.css'

const UpdateProduct = () => {

    const history = useNavigate();

    const [inputs,setInputs] = useState({ })

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/card/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.cards))
        }
            fetchHandler();
    }, [id])

    console.log(inputs);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/card/${id}`, {
            image : String(inputs.image),
            name : String(inputs.name),
            price : Number(inputs.price)
        }).then(res => res.data.cards)
        
    }

    
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

  return (
    <div>
        <div className='col-lg-2'>
        <SideBarDropDown/>
        </div>
    <div className="col-lg-4 updateproducts container mt-5 mb-5">
    <form onSubmit={handleSubmit}>
        <h1 className="heading">Update Product</h1>
        <p>Image</p>
        <input type="text" value={inputs.image} onChange={handleChange} name='image' />
        <p>Name</p>
        <input type="text" value={inputs.name} onChange={handleChange} name='name' />
        <p>Price</p>
        <input type="text" value={inputs.price} onChange={handleChange} name='price' />
        <input type="submit" value="Update Products"/>
    </form>
    </div>
    </div>
  )
}

export default UpdateProduct
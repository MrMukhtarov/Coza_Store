import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown'
import './AddSlider.css'

const AddSlider = () => {

    const history=useNavigate()

    const [inputs,setInputs]=useState({
        title: '',
        description:'',
        image:''
    }) 
    const sendRequest=async()=>{
        await axios.post('http://localhost:3002/slider',{
            title: String(inputs.title),
            description: String(inputs.description),
            image: String(inputs.image)
        }).then(res=>res.data)
    }
    
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/admin'));
    }
    
  return (
    <div className='row justify-content-center'>
    <div className='col-lg-2'>
    <SideBarDropDown/>
    </div>
<div className="col-lg-4 addslider container mt-5">
<form onSubmit={handleSubmit}>
    <h1 className="heading">Add Slider</h1>
    <p>Title</p>
    <input value={inputs.title} onChange={handleChange} name='title' type='text'/>
    <p>Description</p>
    <input value={inputs.description} onChange={handleChange} name='description' type='text'/>
    <p>Image</p>
    <input type="text" value={inputs.image} onChange={handleChange} name='image' />
    <input type="submit" value="Add Slider"/>
</form>
</div>
</div>
  )
}

export default AddSlider
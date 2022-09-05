import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './AddPhotos.css'

const AddPhotos = () => {

    const history = useNavigate();

    const [inputs,setInputs] = useState({
        image:''
    }) 

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/photo', {
            image : String(inputs.image)
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
<div className="col-lg-4 addphoto container mt-5">
<form onSubmit={handleSubmit}>
    <h1 className="heading">Add Photo</h1>
    <p>Image</p>
    <input type="text" value={inputs.image} onChange={handleChange} name='image' />
    <input type="submit" value="Add Photo"/>
</form>
</div>
</div>
  )
}

export default AddPhotos
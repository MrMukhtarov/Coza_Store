import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './UpdateSlider.css'

const UpdateSlider = () => {

    const history = useNavigate();

    const [inputs,setInputs] = useState({ })

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/slider/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.sliders))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/slider/${id}`, {
            title : String(inputs.title),
            description : String(inputs.description),
            image : String(inputs.image)
        }).then(res => res.data.sliders)
        
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
<div className="col-lg-4 updateslider container mb-5">
<form onSubmit={handleSubmit}>
    <h1 className="heading">Update Slider</h1>
    <p>Title</p>
    <input type="text" value={inputs.title} onChange={handleChange} name='title' />
    <p>Description</p>
    <input type="text" value={inputs.description} onChange={handleChange} name='description' />
    <p>Image</p>
    <input type="text" value={inputs.image} onChange={handleChange} name='image' />
    <input type="submit" value="Update Cards"/>
</form>
</div>
</div>
  )
}

export default UpdateSlider
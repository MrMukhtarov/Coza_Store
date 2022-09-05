import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './UpdateInstagram.css'

const UpdateInstagram = () => {

    const history = useNavigate();

    const [inputs,setInputs] = useState({ })

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/instagram/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.instagram))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/instagram/${id}`, {
            image : String(inputs.image),
            message : String(inputs.message),
            user : String(inputs.user)
        }).then(res => res.data.instagram)
        
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
<div className="col-lg-4 updateinstagram container mt-5 mb-5">
<form onSubmit={handleSubmit}>
    <h1 className="heading">Update Post</h1>
    <p>Image</p>
    <input type="text" value={inputs.image} onChange={handleChange} name='image' />
    <p>Message</p>
    <input type="text" value={inputs.message} onChange={handleChange} name='message' />
    <p>User</p>
    <input type="text" value={inputs.user} onChange={handleChange} name='user' />
    <input type="submit" value="Update Cards"/>
</form>
</div>
</div>
)
}

export default UpdateInstagram
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './AddInstagram.css'

const AddInstagram = () => {

    useEffect(() => {
        document.title = 'Admin | Add Instagram';
      });

    const history = useNavigate();

    const [inputs,setInputs] = useState({
        image:'',
        message: '',
        user : ''
    }) 

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/instagram', {
            image : String(inputs.image),
            message : String(inputs.message),
            user : String(inputs.user)
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
    <div className='row col-lg-12 justify-content-center'>
        <div className='col-lg-2'>
        <SideBarDropDown/>
        </div>
    <div className="col-lg-4 addinstagram container mt-5">
    <form onSubmit={handleSubmit}>
        <h1 className="heading">Add Posts</h1>
        <p>Image</p>
        <input value={inputs.image} onChange={handleChange} name='image' type='text'/>
        <p>Message</p>
        <input value={inputs.message} onChange={handleChange} name='message' type='text'/>
        <p>User</p>
        <input type="text" value={inputs.user} onChange={handleChange} name='user' />
        <input type="submit" value="Add Posts"/>
    </form>
    </div>
    </div>
  )
}

export default AddInstagram
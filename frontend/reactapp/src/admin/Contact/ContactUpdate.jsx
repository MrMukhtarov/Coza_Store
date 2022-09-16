import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './ContactUpdate.css'

const ContactUpdate = () => {

    const history = useNavigate();

    const [inputs,setInputs] = useState({ })

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/contact/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.contact))
        }
            fetchHandler();
    }, [id])


    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/contact/${id}`, {
            adress : String(inputs.adress),
            phone : String(inputs.phone),
            mail : String(inputs.mail)
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
<div className="col-lg-4 updatecontact container mt-5 mb-5">
<form onSubmit={handleSubmit}>
    <h1 className="heading">Update Contact</h1>
    <p>Adress</p>
    <input type="text" value={inputs.adress} onChange={handleChange} name='adress' />
    <p>Phone</p>
    <input type="text" value={inputs.phone} onChange={handleChange} name='phone' />
    <p>Mail</p>
    <input type="text" value={inputs.mail} onChange={handleChange} name='mail' />
    <input type="submit" value="Update"/>
</form>
</div>
</div>
  )
}

export default ContactUpdate
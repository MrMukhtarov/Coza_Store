import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './FAQsUpdate.css'

const FAQsUpdate = () => {

    useEffect(() => {
        document.title = 'Admin | FAQs Update';
      });

    const history = useNavigate();

    const [inputs,setInputs] = useState({ })

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/faq/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.faq))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/faq/${id}`, {
            subject : String(inputs.subject),
            answer : String(inputs.answer),
            id : Number(inputs.id)
        }).then(res => res.data.faq)
        
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
<div className="col-lg-4 updatefaq container mt-5 mb-5">
<form onSubmit={handleSubmit}>
    <h1 className="heading">Update FAQs</h1>
    <p>Subject</p>
    <input type="text" value={inputs.subject} onChange={handleChange} name='subject' />
    <p>Answer</p>
    <input type="text" value={inputs.answer} onChange={handleChange} name='answer' />
    <p>Id</p>
    <input type="text" value={inputs.id} onChange={handleChange} name='id' />
    <input type="submit" value="Update Cards"/>
</form>
</div>
</div>
)
}

export default FAQsUpdate
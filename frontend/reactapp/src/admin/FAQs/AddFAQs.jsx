import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './AddFAQs.css'

const AddFAQs = () => {

    useEffect(() => {
        document.title = 'Admin | Add FAQs';
      });


    const [inputs,setInputs] = useState({
        subject:'',
        answer: '',
        id : ''
    }) 

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/faq', {
            subject : String(inputs.subject),
            answer : String(inputs.answer),
            id : Number(inputs.id)
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
        sendRequest();
        window.location.reload();
    }

  return (
    <div className='row col-lg-12 justify-content-center'>
    <div className='col-lg-2'>
    <SideBarDropDown/>
    </div>
<div className="col-lg-4 addfaq container mt-5">
<form onSubmit={handleSubmit}>
    <h1 className="heading">Add FAQs</h1>
    <p>Subject</p>
    <input value={inputs.subject} onChange={handleChange} name='subject' type='text'/>
    <p>Answer</p>
    <input value={inputs.answer} onChange={handleChange} name='answer' type='text'/>
    <p>Id</p>
    <input type="text" value={inputs.id} onChange={handleChange} name='id' />
    <input type="submit" value="Add FAQs"/>
</form>
</div>
</div>
  )
}

export default AddFAQs
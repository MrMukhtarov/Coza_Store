import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './SettingsUpdate.css'

const SettingsUpdate = () => {

    useEffect(() => {
        document.title = 'Admin | Update Setting';
      });

    const history = useNavigate();

    const [inputs,setInputs] = useState({ })

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/setting/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.settings))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/setting/${id}`, {
            icon1 : String(inputs.icon1),
            icon2 : String(inputs.icon2),
            icon3 : String(inputs.icon3),
            phone : String(inputs.phone),
        }).then(res => res.data.settings)
        
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
        <div className="col-lg-4 updatesetting container mt-5 mb-5">
        <form onSubmit={handleSubmit}>
            <h1 className="heading">Update Settings</h1>
            <p>Icon1</p>
            <input type="text" value={inputs.icon1} onChange={handleChange} name='icon1' />
            <p>Icon2</p>
            <input type="text" value={inputs.icon2} onChange={handleChange} name='icon2' />
            <p>Icon3</p>
            <input type="text" value={inputs.icon3} onChange={handleChange} name='icon3' />
            <p>Phone</p>
            <input type="text" value={inputs.phone} onChange={handleChange} name='phone' />
            <input type="submit" value="Update Settings"/>
        </form>
        </div>
</div>
  )
}

export default SettingsUpdate
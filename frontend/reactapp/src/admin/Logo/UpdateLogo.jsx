import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown'
import './UpdateLogo.css'

const UpdateLogo = () => {

    useEffect(() => {
        document.title = 'Admin | Update Logo';
      });

    const history = useNavigate()

    const [inputs,setInputs] = useState([])

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/logo/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.logos))
        }
            fetchHandler();
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/logo/${id}`, {
            logo : String(inputs.logo)
        }).then(res => res.data)
        
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
    <div className="col-lg-4 updatelogo container mt-5 mb-5">
    <form onSubmit={handleSubmit}>
        <h1 className="heading">Update Logo</h1>
        <p>Logo</p>
        <input type="text" value={inputs.logo} onChange={handleChange} name='logo' />
        <input type="submit" value="Update Logo"/>
    </form>
    </div>
    </div>

    )
}

export default UpdateLogo
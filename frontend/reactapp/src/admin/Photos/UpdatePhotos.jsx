import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown'
import './UpdatePhotos.css'

const UpdatePhotos = () => {

    const history = useNavigate()

    const [inputs,setInputs] = useState({ })

    const id = useParams().id

    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`http://localhost:3002/photo/${id}`)
            .then(res => res.data)
            .then(data => setInputs(data.photos))
        }
            fetchHandler();
    }, [id])

    console.log(inputs);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest();
        sendRequest().then(() => history('/admin'));
    }

    const sendRequest = async () => {
        await axios.put(`http://localhost:3002/photo/${id}`, {
            image : String(inputs.image)
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
    <div className="col-lg-5 updatephoto container mt-5 mb-5">
    <form onSubmit={handleSubmit}>
        <h1 className="heading">Update Photo</h1>
        <p>Image</p>
        <input type="text" value={inputs.image} onChange={handleChange} name='image' />
        <input type="submit" value="Update Photo"/>
    </form>
    </div>
    </div>
  )
}

export default UpdatePhotos
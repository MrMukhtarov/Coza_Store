import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './DetailInstagram.css'

const DetailInstagram = () => {

    const history = useNavigate();

    const [instagram , setInstagram] = useState([])

   const instagram_arr = instagram && instagram.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:3002/instagram')
      .then(res => setInstagram(res.data.instagram)) 
      .catch(error => console.log(error))
  } , [])


  return (
    <div className='instagramdetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <table className="table table-image me-5">
    {instagram&&instagram.map((instagrams,_id)=>(
        <tbody>
          <tr key={instagrams._id}>
            <td className="w-25">
                <img src={instagrams.image} className="img-fluid img-thumbnail" alt=""/>
            </td>
            <td><p className='td'>{(instagrams.message).slice(0,50)}...</p></td>
            <td><p className='td'>{instagrams.user}</p></td>
             <td>
             <NavLink to={`/updatepost/${instagram_arr[_id]}`} onClick={async() => {
                await axios.put(`http://localhost:3002/instagram/${instagram_arr[_id]}`)
                .then(res => res.data)
             }} className='ms-5 btn  btn1 btndel'>Update</NavLink>
             <NavLink to={`/deletepost/${instagram_arr[_id]}`} onClick={async() => {
              await axios.delete(`http://localhost:3002/instagram/${instagram_arr[_id]}`)
                .then(() => history('/instagramdetail'))
             }} className='btn btn2 ms-2 btndel'> Delete</NavLink>
             </td>
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
  )
}

export default DetailInstagram

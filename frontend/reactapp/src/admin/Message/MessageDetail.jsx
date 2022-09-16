import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown'
import './MessageDetail.css'

const MessageDetail = () => {

    const history = useNavigate();


    const [message , setMessage] = useState([])

    const message_arr = message && message.map(item => {
     return item._id
    })
    useEffect(() => {
     axios.get('http://localhost:3002/message')
       .then(res => setMessage(res.data.mesagess)) 
       .catch(error => console.log(error))
   } , [])
 

  return (
    <div className='messagedetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <table className="table table-image me-5">
    {message&&message.map((messagesss,_id)=>(
        <tbody>
          <tr key={messagesss._id}>
          <td><textarea name="" id="" cols="15" rows="4" disabled>{messagesss.message}</textarea></td>
            <td><p className='td text-center'>{messagesss.email}</p></td>
             <td>
             <NavLink to={`/deletemessage/${message_arr[_id]}`} onClick={async() => {
              await axios.delete(`http://localhost:3002/message/${message_arr[_id]}`)
                .then(() => history('/messagedetail'))
             }} className='btn btn2 ms-2 btndel'> Delete</NavLink>
             </td>
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
  )
}

export default MessageDetail
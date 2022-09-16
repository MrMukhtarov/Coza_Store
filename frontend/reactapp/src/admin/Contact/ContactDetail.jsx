import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './ContactDetail.css'

const ContactDetail = () => {

    const [contact , setContact] = useState([])

   const contact_arr = contact && contact.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:3002/contact')
      .then(res => setContact(res.data.contact)) 
      .catch(error => console.log(error))
  } , [])


  return (
    <div className='contactdetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <table className="table table-image me-5">
    {contact&&contact.map((contacts,_id)=>(
        <tbody>
          <tr key={contacts._id}>
            <td><p className='td'>{contacts.adress}</p></td>
            <td><p className='td'>{contacts.phone}</p></td>
            <td><p className='td'>{contacts.mail} AZN</p></td>
             <td>
             <NavLink to={`/contactupdate/${contact_arr[_id]}`} onClick={async() => {
                await axios.put(`http://localhost:3002/contact/${contact_arr[_id]}`)
                .then(res => res.data)
             }} className='ms-5 btn  btn1 btndel'>Update</NavLink>
             </td>
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
  )
}

export default ContactDetail
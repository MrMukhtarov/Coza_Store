import React, { useEffect } from 'react'
import '../admin/Admin.css'
import png from  '../assets/das4.png'
import SideBarDropDown from '../components/SidebarDropdown/SideBarDropDown'

const Admin = () => {

  useEffect(() => {
    document.title = 'Admin';
  });

  return (
    <div className='admin'>
      <div className="col-lg-2">
        <SideBarDropDown/>
      </div>
      <div className="col-lg-10 text-end">
        <img className='png img-fluid' src={png} alt="admin" />
      </div>
        
    </div>
  )
}

export default Admin
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './SettingDetail.css'

const SettingsDetail = () => {

    const [setting , setSetting] = useState([])

   const setting_arr = setting && setting.map(item => {
    return item._id
   })
   console.log(setting_arr)

   useEffect(() => {
    axios.get('http://localhost:3002/setting')
      .then(res => setSetting(res.data.settings)) 
      .catch(error => console.log(error))
  } , [])

  return (
    <div>
        <div className='settingdetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <table className="table table-image me-5 ">
    {setting&&setting.map((settingss,_id)=>(
        <tbody>
          <tr key={settingss._id}>
          <td><p>{settingss.phone}</p></td>
            <td><i className={settingss.icon1}></i></td>
            <td><i className={settingss.icon2}></i></td>
            <td><i className={settingss.icon3}></i></td>
             <td>
             <NavLink to={`/updatesetting/${setting_arr[_id]}`} onClick={async() => {
                await axios.put(`http://localhost:3002/setting/${setting_arr[_id]}`)
                .then(res => res.data)
             }} className='ms-5 btn  btn1 btndel'>Update</NavLink>
             </td>
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
    </div>
    )
}

export default SettingsDetail
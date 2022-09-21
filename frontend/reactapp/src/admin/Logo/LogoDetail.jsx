import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './LogoDetail.css'

const LogoDetail = () => {

  useEffect(() => {
    document.title = 'Admin | Logo Detail';
  });

    const [logo , setLogo] = useState([])

    const logo_arr = logo && logo.map(item => {
        return item._id
       })

       useEffect(() => {
        axios.get('http://localhost:3002/logo')
          .then(res => setLogo(res.data.logo)) 
          .catch(error => console.log(error))
      } , [])


  return (
    <div className='logodetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <div className='w-100'>
        <table className="table table-image">
    {logo&&logo.map((logos,_id)=>(
        <tbody>
          <tr key={logos._id}>
            <td className="w-100 row justify-content-between">
            <div className="imgg col-lg-3">
                    <img src={logos.logo} className="img-fluid imgg img-thumbnail" alt=""/>
            </div>
            <div className="btns col-lg-7 text-end">
                <NavLink to={`/updatelogo/${logo_arr[_id]}`} onClick={async() => {
                    await axios.put(`http://localhost:3002/logo/${logo_arr[_id]}`)
                    .then(res => res.data)
                }} className='me-1 btn btn1'>Update</NavLink>
            </div>
            </td>
             
          </tr>
        </tbody>
    ))}
      </table>   
        </div>
  </div>
  )
}

export default LogoDetail
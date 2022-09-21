import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './PhotosDetail.css'

const PhotosDetail = () => {

  useEffect(() => {
    document.title = 'Admin | Photo Detail';
  });

    const history = useNavigate();

    const [photos , setPhotos] = useState([])

    const photos_arr = photos && photos.map(item => {
        return item._id
       })

       console.log(photos_arr)

       useEffect(() => {
        axios.get('http://localhost:3002/photo')
          .then(res => setPhotos(res.data.photos)) 
          .catch(error => console.log(error))
      } , [])

  return (
    <div className='photodetail'>
      <div className='photodetail'>
      <div className="col-lg-3">
       <SideBarDropDown/>
      </div>
      	<table className="table table-image">
      {photos&&photos.map((photoss,_id)=>(
		  <tbody>
		    <tr key={photoss._id}>
		      <td className="w-100 row justify-content-between">
              <div className="imgg col-lg-3">
			          <img src={photoss.image} className="img-fluid imgg img-thumbnail" alt=""/>
              </div>
              <div className="btns col-lg-7 text-end">
                  <NavLink to={`/updatephotos/${photos_arr[_id]}`} onClick={async() => {
                      await axios.put(`http://localhost:3002/photo/${photos_arr[_id]}`)
                      .then(res => res.data)
                  }} className='me-1 btn  btn1 btndel'>Update</NavLink>
                  <NavLink to={`/deletephoto/${photos_arr[_id]}`} onClick={async() => {
                    await axios.delete(`http://localhost:3002/photo/${photos_arr[_id]}`)
                      .then(() => history('/photodetail'))
                  }} className='btn btn2 ms-3 btndel'> Delete</NavLink>
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

export default PhotosDetail
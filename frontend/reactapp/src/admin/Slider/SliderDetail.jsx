import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './SliderDetail.css'

const SliderDetail = () => {

  useEffect(() => {
    document.title = 'Admin | Slider Detail';
  });

    const history = useNavigate();

    const [slider , setSlider] = useState([])

   const slider_arr = slider && slider.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:3002/slider')
      .then(res => setSlider(res.data.sliders)) 
      .catch(error => console.log(error))
  } , [])

  return (
    <div className='sliderdetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <div className='row align-items-center sliderdetail'>
        <table className="table table-image me-5  align-items-center">
    {slider&&slider.map((slideer,_id)=>(
        <tbody>
          <tr key={slideer._id}>
            <td className="w-25">
                <img src={slideer.image} className="img-thumbnail" alt=""/>
            </td>
            <td><p className='td'>{slideer.title}</p></td>
            <td><p className='td'>{slideer.description}</p></td>
             <td>
             <NavLink to={`/updateslider/${slider_arr[_id]}`} onClick={async() => {
                await axios.put(`http://localhost:3002/slider/${slider_arr[_id]}`)
                .then(res => res.data)
             }} className='ms-5 btn  btn1 btndel'>Update</NavLink>
             <NavLink to={`/deleteslider/${slider_arr[_id]}`} onClick={async() => {
              await axios.delete(`http://localhost:3002/slider/${slider_arr[_id]}`)
                .then(() => history('/sliderdetail'))
             }} className='btn btn2 ms-2 btndel'> Delete</NavLink>
             </td>
          </tr>
        </tbody>
    ))}
      </table>   
        </div>
  </div>
  )
}

export default SliderDetail
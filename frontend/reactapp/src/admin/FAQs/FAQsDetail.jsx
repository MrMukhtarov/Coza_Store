import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarDropDown from '../../components/SidebarDropdown/SideBarDropDown';
import './FAQsDetail.css'

const FAQsDetail = () => {

  useEffect(() => {
    document.title = 'Admin | FAQs Detail';
  });

    const history = useNavigate();

    const [faq , setFAQ] = useState([])

   const faq_arr = faq && faq.map(item => {
    return item._id
   })

   useEffect(() => {
    axios.get('http://localhost:3002/faq')
      .then(res => setFAQ(res.data.faq)) 
      .catch(error => console.log(error))
  } , [])


  return (
    <div className='faqdetail'>
    <div className="col-lg-3">
     <SideBarDropDown/>
    </div>
        <table className="table table-image me-5">
    {faq&&faq.map((faqss,_id)=>(
        <tbody>
          <tr key={faqss._id}>
            <td className='w-25 text-center'><p className='td'>{faqss.subject}</p></td>
            <td className='w-25 text-center'><p className='td'>{(faqss.answer).slice(0,50)}...</p></td>
            <td className='w-25 text-center'><p className='td'>{faqss.id}</p></td>
             <td>
             <NavLink to={`/updatefaq/${faq_arr[_id]}`} onClick={async() => {
                await axios.put(`http://localhost:3002/faq/${faq_arr[_id]}`)
                .then(res => res.data)
             }} className='ms-5 btn  btn1 btndel'>Update</NavLink>
             <NavLink to={`/deletefaq/${faq_arr[_id]}`} onClick={async() => {
              await axios.delete(`http://localhost:3002/faq/${faq_arr[_id]}`)
                .then(() => history('/faqdetail'))
             }} className='btn btn2 ms-2 btndel'> Delete</NavLink>
             </td>
          </tr>
        </tbody>
    ))}
      </table>   
  </div>
  )
}

export default FAQsDetail
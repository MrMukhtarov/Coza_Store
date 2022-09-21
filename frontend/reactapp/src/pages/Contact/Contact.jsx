import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'
import Iframe from 'react-iframe'

const Contact = () => {

    const history = useNavigate()

    const [inputs,setInputs] = useState({
        email: '',
        message:'',
    }) 

    const sendRequest = async () => {
        await axios.post('http://localhost:3002/message', {
            email : String(inputs.email),
            message : String(inputs.message),
        }).then(res => res.data)
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/contact'))
        window.location.reload();
    }

  const [adres , setAdress] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/contact')
      .then(res => setAdress(res.data.contact)) 
      .catch(error => console.log(error))
  } , [])


  return (
     <div id='contact'>
        <section className="contact-top">
            <h1 className='text-center title'>Contact</h1>
        </section>
        <section className="contact-body mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 left">
                        <form onSubmit={handleSubmit}>
                            <h4>Send Us A Message</h4>
                            <div className="email">
                                <input type="email" placeholder='Your Email Adress' required value={inputs.email} onChange={handleChange} name='email' />
                            </div>
                            <textarea name="message" id="" cols="30" rows="8" placeholder='How Can We Help' value={inputs.message} onChange={handleChange}></textarea>
                            <div className='btns'>
                                <input className='btn' type="submit" value={'SUBMIT'}/>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 m-auto right">
                        {adres && adres.map((adresss) => (
                            <div>
                                <div className="adress">
                        <i class="fa-regular fa-map"></i>
                        <div>
                            <span>Address</span>
                            <p>{adresss.adress}</p>
                        </div>
                        </div>
                        <div className="phone">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                           <div>
                                <span>Lets Talk</span>
                                <p><a href={`tel:${adresss.phone}`}>{adresss.phone}</a></p>
                           </div>
                        </div>
                        <div className="mail">
                            <i class="fa-regular fa-envelope"></i>
                            <div>
                                <span>Sale Support</span>
                                <p><a href={`mailto:${adresss.mail}`}>{adresss.mail}</a></p>
                            </div>
                        </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <section className='map'>
            <Iframe src="https://www.google.com/maps/d/u/0/embed?mid=1iITZr1LsK5EL5WUSon3ZwAJ5VO3vTOc&ehbc=2E312F" width="100%" height="500"></Iframe>
        </section>
    </div>
  )
}

export default Contact
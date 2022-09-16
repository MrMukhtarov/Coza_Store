import React from 'react'
import timer from '../../assets/new33.jpg'
import './Timer.css'
import UseCountDown from '../../components/CountDown/UseCountDown'

const Timer = () => {

    const endTime=new Date().getTime()+60000*200;
    const [timeLeft]=UseCountDown(endTime);

    const days = Math.floor(timeLeft / 864000) % 60
    const hours = Math.floor(timeLeft / 3600000) % 60
    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;

  return (
    <div className='timers'>
       <div className="container">
            <div className="row justify-content-between all">
                <div className="left col-lg-5 sm-12">
                    <img className='img-fluid img1' src={timer} alt="" />
                </div>
                <div className="right col-lg-6 text-end bg-light">
                    <section className='coming-soon'>
                        <div>
                            <h2>We are opening up soon!</h2>
                            <div className="countdown col-12 ">
                                <div title='timer' className='time col-12'>
                                    <span className='timer'>{`${days} : `}</span>
                                    <span className='timer'>{`0${hours} :  `}</span>
                                    <span className='timer'>{`${minutes} : `}</span>
                                    <span className='timer'>{`${seconds}`}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Timer
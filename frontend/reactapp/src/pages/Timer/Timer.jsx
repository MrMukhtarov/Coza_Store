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
         <div className="row align-items-center justify-content-between">
             <div className="left col-lg-6">
                 <img className='img-fluid img1' src={timer} alt="" />
             </div>
             <div className='right'>
                        <div className="coming-soon col-lg-12 text-center">
                        <div className="hll">
                           <p className='h5'>We are opening up soon!</p>
                           <p className='h5t'>We are opening up soon!</p>
                           </div>
                         <div className="allcount">
                         <div className="countdown row">
                            <div className='time'>
                                <span title='days' className='timer'>{`${days} : `}</span>
                                <span title='hours' className='timer'>{`0${hours} :  `}</span>
                                <span title='minutes' className='timer'>{`${minutes} : `}</span>
                                <span title='seconds' className='timer'>{`${seconds}`}</span>
                            </div>
                         </div>
                         <div>
                         <div className='timename'>
                            <span className='dys' >DAYS  </span>
                            <span className='hrs' > HOURS  </span>
                            <span className='mnt'> MINUTES  </span>
                            <span className='scd'> SECONDS  </span>
                            </div>
                         </div>
                         </div>
                 </div>
             </div>
         </div>
    </div>
 </div>
  )
}

export default Timer
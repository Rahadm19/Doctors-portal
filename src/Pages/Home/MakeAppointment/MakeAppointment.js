import React from 'react';
import './makeAppointment.css'
import doctor from '../../../assets/images/doctor-small.png'
import bacground from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='mt-20'
            style={{
                background: `url(${bacground})`
            }}>
            <div className="hero makeappointment-bg">
                <div className="hero-content lg:flex-row flex-col">
                    <img src={doctor} className="-mt-32 lg:w-1/2 hidden lg:block rounded-lg shadow-2xl" />
                    <div className='lg:w-1/3 text-white rounded-md'>
                        <h3 className='text-primary text-3xl'>Appointment</h3>
                        <h1 className="text-5xl font-bold">Make an Appoinment Today</h1>
                        <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Appoinment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
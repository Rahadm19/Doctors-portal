import React from 'react';
import './contact.css';
import contactBg from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section>
            <div className="hero p-10 contactbg">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-2 text-2xl font-bold text-primary">Contact Us</h1>
                        <h1 className="mb-2 text-4xl font-bold text-white">Stay Connected with us</h1>
                        <input type='email' placeholder='Your Email' className='pb-5 mb-5 w-60 lg:w-96 rounded'></input> <br></br>
                        <input type='text' placeholder='Your Subject' className='pb-5 mb-5 w-60 lg:w-96 rounded'></input><br></br>
                        <textarea className="textarea textarea-bordered pb-5 mb-5 w-60 lg:w-96" placeholder="Your Massege"></textarea><br></br>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
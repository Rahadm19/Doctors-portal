import React from 'react';
import './serviceBanner.css';
import tretment from '../../../assets/images/treatment.png'

const ServiceBanner = () => {
    return (
        <div className="hero">
            <div className="hero-content hero-contant-service lg:flex-row flex-col">
                <img src={tretment} className="max-w-sm:17rem rounded-lg shadow-2xl lg:w-1/3 sm:w-200" />
                <div className='lg:w-1/3'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;
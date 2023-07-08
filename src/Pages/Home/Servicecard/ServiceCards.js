import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
import ServiceBanner from '../ServiceBanner/ServiceBanner';

const ServiceCards = () => {
    const serViceCardData = [
        {
            id: 4,
            name: 'Fluoride Treatment',
            description: 'Provident cupiditate voluptatem et in',
            icon: fluoride
        },
        {
            id: 5,
            name: 'Carvity Filling',
            description: 'Provident cupiditate voluptatem et in',
            icon: cavity
        },
        {
            id: 6,
            name: 'Teeth Whitening',
            description: 'Provident cupiditate voluptatem et in',
            icon: teeth
        }
    ]
    return (

        <div>
            <div className='text-center py-6'>
                <h3 className='text-teal-500 font-bold' >Our Services</h3>
                <h1 className='text-4xl'>Service We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {
                    serViceCardData.map(scard => <ServiceCard
                        key={scard.id}
                        scard={scard}
                    ></ServiceCard>)
                }
            </div>

            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default ServiceCards;
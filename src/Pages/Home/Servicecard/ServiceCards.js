import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
    const serViceCardData = [
        {
            id: 4,
            name: 'Fluoride Treatment',
            description: 'lorem5',
            icon: fluoride
        },
        {
            id: 5,
            name: 'Fluoride Treatment',
            description: 'lorem5',
            icon: cavity
        },
        {
            id: 6,
            name: 'Fluoride Treatment',
            description: 'lorem5',
            icon: teeth
        }
    ]
    return (

        <div>
            <div className='text-center'>
                <h3 className='text-teal-500 font-bold' >Our Services</h3>
                <h1>Service We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>

                {
                    serViceCardData.map(scard => <ServiceCard
                        key={scard.id}
                        scard={scard}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceCards;
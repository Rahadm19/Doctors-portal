import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import Icard from './Icard';

const Infocards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to  5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Dhaka',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: '01703363009',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
        }
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <Icard
                    key={card.id}
                    card={card}
                ></Icard>)
            }
        </div>
    );
};

export default Infocards;
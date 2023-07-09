import React from 'react';
import './testimornial.css';
import quate from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimornial from './Testimornial';

const Testimornials = () => {
    const testimornialData = [
        {
            id: 7,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            name: ' Rahad',
            location: 'California'

        },
        {
            id: 9,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            name: 'Moreom',
            location: 'New Work'

        },
        {
            id: 10,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            name: 'Henry Albert',
            location: 'Baijing'

        }
    ]
    return (
        <section className='my-10'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary text-2xl'>Testemornial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='lg:w-48 w-24' src={quate} />
                </figure>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {
                    testimornialData.map(tData => <Testimornial
                        key={tData.id}
                        tData={tData}
                    ></Testimornial>)
                }
            </div>
        </section>
    );
};

export default Testimornials;
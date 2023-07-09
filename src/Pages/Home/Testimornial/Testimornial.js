import React from 'react';

const Testimornial = ({ tData }) => {
    const { description, img, name, location } = tData;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="card-actions justify-around py-5">
                    <img className='rounded' src={img} />
                    <div>
                        <h4 className='text-2xl font-semibold'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimornial;
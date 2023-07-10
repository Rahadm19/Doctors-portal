import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-secondary text-2xl font-samibold">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled={slots.length === 0}
                            htmlFor='appointment-modal'
                            className='btn btn-primary text-white font-bold'
                            onClick={() => setTreatment(option)}
                        >Appointment Book</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
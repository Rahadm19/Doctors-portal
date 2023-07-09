import { format } from 'date-fns';
import React from 'react';

const AvailabelAppointment = ({ selectedDate }) => {
    return (
        <div>
            <p className='text-center text-primary font-bold'>Availabel apointements: <span className='text-emerald-600'>{format(selectedDate, 'PP')}</span></p>
        </div>
    );
};

export default AvailabelAppointment;
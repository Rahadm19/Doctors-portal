import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import AppointmentModal from '../AppointmentModa/AppointmentModal';

const AvailabelAppointment = ({ selectedDate }) => {
    const [appointmentOption, setappointmentOption] = useState([])
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setappointmentOption(data))
    }, [])
    return (
        <section className='py-5 mt-5'>
            <p className='text-center text-secondary font-bold text-3xl'>Availabel apointements: <span className='text-emerald-600'>{format(selectedDate, 'PP')}</span></p>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option.id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <AppointmentModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                ></AppointmentModal>
            }
        </section>
    );
};

export default AvailabelAppointment;
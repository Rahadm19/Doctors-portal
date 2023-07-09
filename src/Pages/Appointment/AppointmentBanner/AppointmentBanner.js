import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <section>
            <div className="hero bg-image">
                <div className="hero-content flex-col lg:flex-row-reverse lg:py-20 sm:py-0">
                    <img src={chair} className="lg:w-1/2 b-img rounded-lg shadow-2xl basis-1/2" />

                    <div className="basis-1/2">
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;
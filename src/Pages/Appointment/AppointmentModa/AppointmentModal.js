import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment; // tretment is appointment just different
    const date = format(selectedDate, "PP");

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slots.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }
        setTreatment(null)
        console.log(booking);

    }
    return (
        <section>
            <input type='checkbox' id='appointment-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box relative'>
                    <div className='flex justify-between'>
                        <h3 className='text-lg font-bold'>{name}</h3>
                        <div><label htmlFor='appointment-modal' className='btn btn-sm btn-circle absulate'>X</label></div>
                    </div>
                    <form onSubmit={handleBooking} className='text-center'>
                        <input name='text' type="text" disabled value={date} className="input input-bordered w-full max-w-xs mt-3 font-600" />
                        <select name='slots' className="select select-bordered w-full max-w-xs mt-3">
                            <option>Select Your Time</option>
                            {
                                slots.map((slots, i) => <option
                                    value={slots}
                                    key={i}
                                >{slots}</option>)
                            }
                        </select>
                        <input name='name' required type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mt-3" />
                        <input name='email' required type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs mt-3" />
                        <input name='phone' required type="text" placeholder="Your Phone" className="input input-bordered w-full max-w-xs mt-3" />
                        <br />
                        <input className='btn btn-accent w-full max-w-xs font-samibold mt-5' type='Submit' value="Submit" />
                    </form>


                </div>
            </div>
        </section>
    );
};

export default AppointmentModal;
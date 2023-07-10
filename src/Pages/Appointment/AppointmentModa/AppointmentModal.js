import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment; // tretment is appointment just different
    const date = format(selectedDate, "PP");
    return (
        <section>
            <input type='checkbox' id='appointment-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box relative'>
                    <div className='flex justify-between'>
                        <h3 className='text-lg font-bold'>{name}</h3>
                        <div><label htmlFor='appointment-modal' className='btn btn-sm btn-circle absulate'>X</label></div>
                    </div>
                    <form className='text-center'>
                        <input type="text" disabled value={date} className="input input-bordered w-full max-w-xs mt-3 font-600" />
                        <select className="select select-bordered w-full max-w-xs mt-3">
                            <option disabled>Select Your Time</option>
                            {
                                slots.map(slots => <option value={slots}>{slots}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs mt-3" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-3" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-3" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-3" />
                        <br />
                        <input className='btn btn-accent w-full max-w-xs font-samibold mt-5' type='submit' value="Submit" />
                    </form>


                </div>
            </div>
        </section>
    );
};

export default AppointmentModal;
import React from 'react';

const Footerprops = ({ fData }) => {
    const { name, description, description1, description2, description3 } = fData;
    return (
        <div className='p-5'>
            <h4 className="text-2xl font-bold">{name}</h4>
            <ul className="text-xl font-semibold py-3">
                <ui>{description}</ui> <br />
                <ui>{description1}</ui> <br />
                <ui>{description2}</ui> <br />
                <ui>{description3}</ui>

            </ul>
        </div>
    );
};

export default Footerprops;
import React from 'react';

const Icard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`p-5 text-white font-medium card card-side shadow-xl ${bgClass}`}>
            <figure><img src={icon} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Icard;
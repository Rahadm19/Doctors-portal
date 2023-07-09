import React from "react";
import './footer.css'
import footerBg from '../../../assets/images/footer.png'
import Footerprops from "./Footerprops";

const Footer = () => {
  const footerData = [
    {
      id: 10,
      name: 'Services',
      description: 'Emargenciy backup',
      description1: 'Monthly Checkup',
      description2: 'Weekly Checkup',
      description3: 'Deeply Checkup'
    },
    {
      id: 20,
      name: 'Oral Health',
      description: 'Fluride Treatment',
      description1: 'Monthly Checkup',
      description2: 'Weekly Checkup',
    },
    {
      id: 30,
      name: 'Our Address',
      description: '61/Rampura, Dhaka Bangladesh'
    }
  ]
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 fGrid">
        {
          footerData.map(fData => <Footerprops
            key={fData.id}
            fData={fData}
          ></Footerprops>)
        }
      </div>
      <small className="flex justify-around text-xl p-5"> @ Copyright All right Reserve By Rahad</small>
    </div>
  );
};

export default Footer;

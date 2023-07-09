import React from "react";
import Banner from "../Banner/Banner";
import Infocards from "../InfoCard/Infocards";
import ServiceCards from "../Servicecard/ServiceCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimornials from "../Testimornial/Testimornials";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Infocards></Infocards>
      <ServiceCards></ServiceCards>
      <br></br>
      <MakeAppointment></MakeAppointment>
      <Testimornials></Testimornials>
      <Contact></Contact>
    </div>
  );
};

export default Home;

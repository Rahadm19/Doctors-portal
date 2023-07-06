import React from "react";
import Banner from "../Banner/Banner";
import Infocards from "../InfoCard/Infocards";
import ServiceCards from "../Servicecard/ServiceCards";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Infocards></Infocards>
      <ServiceCards></ServiceCards>
    </div>
  );
};

export default Home;

import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;

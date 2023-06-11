import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import PopularCourses from "./PopularCourses/PopularCourses";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <PopularCourses></PopularCourses>
    </div>
  );
};

export default Home;

import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Feedback from "./Feedback/Feedback";
import PopularCourses from "./PopularCourses/PopularCourses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <PopularCourses></PopularCourses>
      <Feedback></Feedback>
      <PopularInstructors></PopularInstructors>
    </div>
  );
};

export default Home;

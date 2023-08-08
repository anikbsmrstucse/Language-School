import React from "react";
import { Helmet } from "react-helmet-async";
import '../Home/Home.css';
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Feedback from "./Feedback/Feedback";
import HomeTItle from "./HomeTitle/HomeTItle";
import INterest from "./Interest/INterest";
import PopularCourses from "./PopularCourses/PopularCourses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import WebInfo from "./WebInfo/WebInfo";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <HomeTItle></HomeTItle>
      <PopularCourses></PopularCourses>
      <Feedback></Feedback>
      <WebInfo></WebInfo>
      <PopularInstructors></PopularInstructors>
      <INterest></INterest>
    </div>
  );
};

export default Home;

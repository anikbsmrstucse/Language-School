import React from "react";
import { Helmet } from "react-helmet-async";
import DarkModeToggle from "../../ToggleDark";
import '../Home/Home.css';
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Feedback from "./Feedback/Feedback";
import INterest from "./Interest/INterest";
import PopularCourses from "./PopularCourses/PopularCourses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <DarkModeToggle/>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <PopularCourses></PopularCourses>
      <Feedback></Feedback>
      <PopularInstructors></PopularInstructors>
      <INterest></INterest>
    </div>
  );
};

export default Home;

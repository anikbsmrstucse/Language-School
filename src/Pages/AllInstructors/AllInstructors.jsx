import React from "react";
import useInstructor from "../../Hooks/useInstructor";
import img from '../../assets/Course_banner/course-banner.jpg';

const AllInstructors = () => {
    const [instructors,refetch] = useInstructor();
  return (
    <div className="py-10">
      <h1 className="text-3xl md:text-5xl">Instructor's</h1>
      <p>Join our global community of 90 million learners</p>
      <div className="py-8">
        <img src={img} className="w-3/4 h-[300px] mx-auto" alt="" />
      </div>
    </div>
  );
};

export default AllInstructors;

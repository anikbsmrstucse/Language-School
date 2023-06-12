import React from "react";
import useInstructor from "../../Hooks/useInstructor";
import img from '../../assets/Course_banner/course-banner.jpg';
import SIngleInstructors from "./SIngleInstructors";

const AllInstructors = () => {
    const [instructors,refetch] = useInstructor();
    refetch();
  return (
    <section className="py-10">
      <h1 className="text-3xl md:text-5xl font-bold">Instructor's</h1>
      <p>Join our global community of 90 million learners</p>
      <div className="py-8">
        <img src={img} className="w-3/4 h-[300px] mx-auto" alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold py-8 text-center">Meet Our Instructor's</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                instructors.map((instructor)=><SIngleInstructors key={instructor._id} instructor={instructor}></SIngleInstructors>)
            }
        </div>
      </div>
    </section>
  );
};

export default AllInstructors;

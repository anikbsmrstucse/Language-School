import React from "react";
import useClasses from "../../../Hooks/useClasses";
import SingleClass from "./SingleClass";

const ManageClasses = () => {
  const [courses, refetch] = useClasses();
  
  return (
    <div>
      <div className="flex">
        <h1 className="text-xl md:text-3xl font-bold pb-10 flex-grow">All Classes</h1>
        <h1 className="text-xl md:text-3xl font-bold pb-10">Total Class: {courses.length}</h1>
      </div>
      <span className="divider"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {courses.map((course) => (
          <SingleClass key={course._id} course={course} refetch={refetch}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;

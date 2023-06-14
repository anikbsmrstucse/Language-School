import React from "react";
import { Helmet } from "react-helmet-async";
import useTeacherClass from "../../../Hooks/useTeacherClass";
import ClassCard from "./ClassCard";

const TeacherClass = () => {
  const [teacherClass] = useTeacherClass();
  const updateClass = (course)=>{
    console.log(course);
  }
  console.log(teacherClass);
  return (
    <div>
      <Helmet>
        <title>Instructor Class</title>
      </Helmet>
      <div className="flex">
        <h1 className="text-xl md:text-3xl font-bold flex-grow">
          Instructor Class
        </h1>
        <h1 className="text-xl md:text-3xl font-bold">Total Class:</h1>
      </div>
      <span className="divider"></span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
            teacherClass?.map(sclass => <ClassCard updateClass={updateClass} key={sclass?._id} sclass={sclass}></ClassCard>)
        }
    
      </div>
    </div>
  );
};

export default TeacherClass;

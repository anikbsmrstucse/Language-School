import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Component/SectionTitle';
import useClasses from '../../../Hooks/useClasses';
import '../PopularCourses/PopularCourse.css';
import ClassesCard from './ClassesCard';

const PopularCourses = () => {
    const [courses,refetch]  = useClasses();
    const approvedClass = courses.filter(item => item.status === "approved");
    refetch();
    const popularClass = approvedClass.sort((a,b)=>b.enrollment - a.enrollment);
    const popularSixData = popularClass.slice(0,6);
    
    return (
        <div className='bg-img bg-[#F4F6FC]'>
            <SectionTitle title={'Our Popular Classes'}></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-5 px-5'>
                {
                    popularSixData.map((course) => <ClassesCard key={course._id} course={course}></ClassesCard>) 
                }
            </div>
            <div className='py-10 text-center'>
               <Link to="/classes"><button className='btn btn-outline btn-primary'>See All Classes</button></Link>
            </div>
        </div>
    );
};

export default PopularCourses;
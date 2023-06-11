import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Component/SectionTitle';
import '../PopularCourses/PopularCourse.css';
import ClassesCard from './ClassesCard';

const PopularCourses = () => {
    
    const [classes,setClasses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            const approvedClass = data.filter(dclasses => dclasses.status === "approved");
            setClasses(approvedClass);
        })
    },[])
    const popularClass = classes.sort((a,b)=>b.enrollment - a.enrollment);
    const popularSixData = popularClass.slice(0,6);
    return (
        <div className='bg-img bg-[#F4F6FC]'>
            <SectionTitle title={'Popular Classes'}></SectionTitle>
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
import React from 'react';
import SectionCover from '../../Component/SectionCover';
import useClasses from '../../Hooks/useClasses';
import img1 from '../../assets/Course_banner/course-banner.jpg';
import SingleCard from './SingleCard';

const AllClasses = () => {
    const [courses,refetch] = useClasses();
    const approvedClass = courses.filter(item => item.status === "approved");
    refetch();
    return (
        <div>
            <SectionCover image={img1} title={'Find Your Course'} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}></SectionCover>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-10'>
                {
                    approvedClass.map(course => <SingleCard key={course._id} course={course} refetch={refetch}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;
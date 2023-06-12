import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Component/SectionTitle';
import useInstructor from '../../../Hooks/useInstructor';
import InstructorsCard from './InstructorsCard';

const PopularInstructors = () => {
    const [instructors,refetch] = useInstructor();
    const sixInstructors = instructors.slice(0,6);
    console.log(sixInstructors);
    return (
        <div>
           <SectionTitle title={'Our Popular Instructors'}></SectionTitle>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                sixInstructors.map((instructor)=><InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>)
            }
           </div>
           <div className='py-10 text-center'>
               <Link to="/instructors"><button className='btn btn-outline btn-primary'>See All Classes</button></Link>
            </div>
        </div>
    );
};

export default PopularInstructors;
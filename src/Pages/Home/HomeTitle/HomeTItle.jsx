import React from 'react';
import { Link } from 'react-router-dom';

const HomeTItle = () => {
    return (
        <div className='pt-10 pb-10 my-20 text-center'>
            <h1 className='text-3xl px-20 font-semibold text-[#263344]'>High intensity course for those who need to improve their language quickly. <span className='underline text-blue-600'>In just 3 months</span>, we guarantee you will speak confidently in your chosen language.</h1>
            <Link to='/classes'><button className="btn btn-wide btn-primary btn-outline mt-10">Start Learning Online</button></Link> 
        </div>
    );
};

export default HomeTItle;
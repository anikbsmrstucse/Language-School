import React from 'react';


const SectionCover = ({image,title,subtitle}) => {
    return (
        <div className='py-10 relative mb-20'>
            <img className='md:h-[400px] w-full md:w-4/5 mx-auto' src={image} alt="" />
            <div className='absolute opacity-80 md:opacity-100  top-[200px] md:top-[310px] md:right-[128px] rounded card shadow-lg p-10 md:w-2/4 w-full text-black bg-white space-y-5'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default SectionCover;
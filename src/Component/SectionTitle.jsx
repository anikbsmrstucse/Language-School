import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div>
            <h1 className='text-3xl md:text-5xl text-center font-semibold py-20'>{title}</h1>
        </div>
    );
};

export default SectionTitle;
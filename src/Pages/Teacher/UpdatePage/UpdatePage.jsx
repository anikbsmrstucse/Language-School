import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdatePage = ({}) => {
    const loader = useLoaderData();
    console.log('loader data',loader);
    return (
        <div>
            
        </div>
    );
};

export default UpdatePage;
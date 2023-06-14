import React from 'react';
import { Helmet } from 'react-helmet-async';
import useEnrolled from '../../Hooks/useEnrolled';

const Myenrolled = () => {
    const [enroll,refetch] = useEnrolled();
    return (
    <div>
        <Helmet><title>My Enroll Class</title></Helmet>
      <h1 className="text-xl md:text-3xl font-bold pb-10">My Enroll Class</h1>
      <div className="overflow-x-auto">
        <table className="table md:w-full px-0 mx-0">
          {/* head */}
          <thead>
            <tr className="bg-slate-300">
              <th>Index</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {   
                enroll.map((senroll,index) =>  <tr key={senroll._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={senroll.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>
                  {senroll.name}
                </td>
                <td>{senroll.price}</td>
                
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Myenrolled;
import React from "react";
import { Helmet } from "react-helmet-async";
import useEnrolled from "../../Hooks/useEnrolled";

const PaymentHistory = () => {
    const [enroll,refetch] = useEnrolled();
    refetch();
  return (
    <div>
      <Helmet>
        <title>My Enroll Class</title>
      </Helmet>
      <h1 className="text-xl md:text-3xl font-bold pb-10">My Enroll Class</h1>
      <div className="overflow-x-auto">
        <table className="table md:w-full px-0 mx-0">
          {/* head */}
          <thead>
            <tr className="bg-slate-300">
              <th>Index</th>
              <th>Transaction Id</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enroll.map((payhistory, index) => (
              <tr key={payhistory._id}>
                <th>{index + 1}</th>
                <td>{payhistory.paymentId}</td>
                <td>{payhistory.name}</td>
                <td>{payhistory.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;

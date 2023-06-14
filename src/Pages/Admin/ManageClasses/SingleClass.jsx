import React, { useState } from "react";
import { FaCheck, FaClock, FaTimesCircle, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SingleClass = ({ course, refetch }) => {
  const {
    image,
    name,
    enrollment,
    instructor,
    available_seats,
    price,
    total_seats,
    status,
    _id,
    email,
  } = course;

  const [feedback, setFeedback] = useState({});
  const [axiosSecure] = useAxiosSecure();

  const handleApprove = (course) => {
    console.log(course);
    axiosSecure.patch(`/classes/${_id}`)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire("Updated!", "Your user role is updated.", "success");
        }
      });
  };
  const handleDeny = (course) => {
    fetch(`https://language-school-assignment-12-server-anikbsmrstucse.vercel.app/classes/deny/${course._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Updated!", "Your user role is updated.", "success");
        }
      });
  };

  const handleFeedback = (course) => {
    if (status === "denied") {
      const feedback = {
        feedback:'your course is not to the up to the mark.please improve itself'
      }
      setFeedback(feedback);
    }
    fetch(`https://language-school-assignment-12-server-anikbsmrstucse.vercel.app/feedback/${course._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Updated!", "Your feedback is updated.", "success");
        }
      });
  };

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px] w-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
            <div>
              <p className="font-bold flex items-center mb-2">
                <FaUserTie className="w-[20px] h-[20px] text-green-500"></FaUserTie>{" "}
                <span className="ml-2 -mb-1">{instructor}</span>
              </p>
              <div className="flex gap-2 items-center">
                <span>
                  {status === "pending" ? (
                    <FaClock className="w-[20px] h-[20px] text-yellow-500"></FaClock>
                  ) : (
                    ""
                  )}
                </span>
                <span className="-ml-2">
                  {status === "approved" ? (
                    <FaCheck className="w-[20px] h-[20px] text-green-500"></FaCheck>
                  ) : (
                    ""
                  )}
                </span>
                <span className="">
                  {status === "denied" ? (
                    <FaTimesCircle className="w-[20px] h-[20px] text-red-500 -ml-2"></FaTimesCircle>
                  ) : (
                    ""
                  )}
                </span>{" "}
                <p className="capitalize">{status}</p>
              </div>
            </div>
            <div className="text-right">
              <p>{email ? email : "No mail"}</p>
              <p>Available Seat: {available_seats}</p>
            </div>
          </div>
          <div className="text-center mb-5 text-white ">
            <span className="bg-primary px-5 py-2 rounded-lg">
              Price: ${price}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between space-y-5 md:space-y-0">
            <button
              onClick={() => handleApprove(course)}
              className="btn btn-outline btn-success"
              disabled={status === "pending" ? false : true}
            >
              Approve
            </button>
            <button
              onClick={() => handleDeny(course)}
              className="btn btn-outline btn-error"
              disabled={status === "pending" ? false : true}
            >
              Deny
            </button>
            <button
              disabled={status === "approved" ? true : false}
              onClick={() => handleFeedback(course)}
              className="btn btn-outline btn-info"
            >
              FeedBack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleClass;

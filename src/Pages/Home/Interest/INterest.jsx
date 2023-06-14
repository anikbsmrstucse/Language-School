import React from "react";
import SectionTitle from "../../../Component/SectionTitle";

const INterest = () => {
  return (
    <div >
      <SectionTitle title={'Are You Ready?'}></SectionTitle>
      <form action="#" className="w-4/6 mx-auto bg-gray-100 px-10 py-10 shadow-lg mb-5">
        <div className="md:flex gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        </div>
        <div className="md:flex gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        </div>
        <div className="md:flex gap-5">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Write Your Interest</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Feedback</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full ml-1"
          />
        </div>
        </div>
        <button className="btn btn-primary mt-5">Enquire</button>
      </form>
    </div>
  );
};

export default INterest;

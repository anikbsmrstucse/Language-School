import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Add Class</title>
      </Helmet>
      <div className="flex">
        <h1 className="text-xl md:text-3xl font-bold  flex-grow">
          Add A Class
        </h1>
        <h1 className="text-xl md:text-3xl font-bold">
          Welcome {user.displayName}
        </h1>
      </div>
      <div className="divider"></div>
      <div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default AddClass;

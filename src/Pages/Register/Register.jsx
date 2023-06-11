import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [type,setType] = useState(true);
    const showPassword = () => {
        setType(false);
    }
  return (
    <div className="py-5">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card w-1/2 mx-auto shadow-lg bg-base-100">
        <h3 className="text-center text-2xl font-semibold mt-5">Register</h3>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <FaEye
              onClick={showPassword}
              className="absolute right-0 mt-10 top-3 mr-5"
            ></FaEye>
            <input
              type={type ? "password" : "text"}
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <FaEye
              onClick={showPassword}
              className="absolute right-0 mt-10 top-3 mr-5"
            ></FaEye>
            <input
              type={type ? "password" : "text"}
              placeholder="confirm password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
          <p>
            Already Have an account?{" "}
            <Link className="text-primary underline" to='/login'>
              Login
            </Link>
          </p>
        </form>
        <div className="divider w-11/12 mx-auto">OR</div>
        <div className="text-center mb-5">
          <button className="btn btn-outline btn-circle text-lg">G</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

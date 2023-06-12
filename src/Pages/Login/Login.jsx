import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Login = () => {
    const [type,setType] = useState(true);
    const showPassword = () => {
        setType(false);
    }

  return (
    <div className="py-5">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card w-full md:w-1/2 mx-auto shadow-lg bg-base-100">
        <h3 className="text-center text-2xl font-semibold mt-5">Login</h3>
        <form className="card-body">
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
            <FaEye onClick={showPassword} className="absolute right-0 mt-10 top-3 mr-5"></FaEye>
            <input
              type={type ? 'password' : 'text'}
              placeholder="password"
              className="input input-bordered"
              />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
          <p>
            Don't Have an account?{" "}
            <Link className="text-primary underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      <SocialSignIn></SocialSignIn>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const [type,setType] = useState(true);
    const showPassword = () => {
        setType(false);
    }

    const {googleSignIn} = useContext(AuthContext);

    const handleGoole = () => {
      googleSignIn()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error =>{
        console.log(error);
      })
    }

    const { register, formState: { errors }, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
      console.log(data);
      const {name,email,password,confirmPassword,photourl,teacher} = data;
      if(password !== confirmPassword){
        alert('password is not matched');
        return;
      }
      //reset();
    }

  return (
    <div className="py-5">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card w-full md:w-1/2 mx-auto shadow-lg bg-base-100">
        <h3 className="text-center text-2xl font-semibold mt-5">Register</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name", { required: true })} 
            />
            {errors.name?.type === 'required' && <p className="text-error">Name is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
              />
              {errors.email?.type === 'required' && <p className="text-error">Email is required</p>}
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
              {...register("password", { required: true, minLength:6})}
            />
            {errors.password?.type === 'minLength' && <p className="text-error">password must be six character</p>}
            {errors.password?.type === 'required' && <p className="text-error">password must be required</p>}
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
              {...register("confirmPassword", { required: true })} 
            />
            {errors.confirmPassword?.type === 'minLength' && <p className="text-error">password must be six character</p>}
            {errors.confirmPassword?.type === 'required' && <p className="text-error">password must be required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photourl", { required: true })}
              />
              {errors.photourl?.type === 'required' && <p className="text-error"> photo url is required</p>}
          </div>
          <div>
            <input type="checkbox" name="teacher" id="" placeholder="Yes?" {...register("teacher")} />
            <label className="ml-3" htmlFor="">
              Are You Teacher?
            </label>
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
        <div  className="divider w-11/12 mx-auto">OR</div>
        <div className="text-center mb-5">
          <button onClick={handleGoole} className="btn btn-outline btn-circle text-lg">G</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

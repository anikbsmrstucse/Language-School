import Lottie from "lottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import errorPage2 from "/public/new_error.json";
const ErrorPage = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(-1);
  };
  return (
    <div className="md:w-4/6 w-full mx-auto px-2">
      <Lottie
        className="flex items-center h-[86vh]"
        animationData={errorPage2}
        loop={true}
      ></Lottie>
      <div className="text-center mt-2">
        <button className="btn btn-outline" onClick={goHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

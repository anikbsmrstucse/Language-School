import React from "react";
import SectionTitle from "../../../Component/SectionTitle";
import img1 from "../../../assets/icon/icon6.png";
import img2 from "../../../assets/icon/icon7.png";
import img3 from "../../../assets/icon/icon8.png";
import img4 from "../../../assets/icon/icon9.png";

const ChooseUs = () => {
  return (
    <div>
      <SectionTitle title={"Why choose us?"}></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
        <div className="card lg:card-side bg-base-100 shadow-xl p-5">
          <figure>
            <img src={img1} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title hover:text-primary duration-200 ease-in">Personalized learning</h2>
            <p>
              Exercises are tailored to help you learn
            </p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl p-5">
          <figure>
            <img src={img2} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title hover:text-primary duration-200 ease-in">Speak like a local</h2>
            <p>Exercises are tailored to help you learn</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl p-5">
          <figure>
            <img src={img3} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title hover:text-primary duration-200 ease-in">Flexiable Schedule</h2>
            <p>Exercises are tailored to help you learn.</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl p-5">
          <figure>
            <img src={img4} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title hover:text-primary duration-200 ease-in">60 minute classes</h2>
            <p>Exercises are tailored to help you learn.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;

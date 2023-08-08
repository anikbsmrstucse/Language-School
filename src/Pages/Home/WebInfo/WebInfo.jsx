import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import videoBanner from "../../../assets/webinfo/course-video-banner.png";
import img1 from "../../../assets/webinfo/learn-smart-way.jpg";
import vidoIcon from "../../../assets/webinfo/video-icon.png";
import "./WebInfo.css";

const WebInfo = () => {
  return (
    <div className="parallex py-10 px-10  md:p-10 w-full">
      <div className="flex flex-col w-full md:items-center md:gap-10 md:flex-row space-y-5 pt-10">
        <div className="md:w-1/2">
          <img src={img1} alt="" />
        </div>
        <div className="md:w-1/2 space-y-5 md:space-y-10">
          <h3 className="text-4xl font-bold text-[#263345]">
            Learn the smart way
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac
            auctor augue mauris augue. Quisque egestas diam in arcu cursus
            euismod quis viverra nibh. Sit amet justo donec enim diam vulputate.
            Nisi quis eleifend quam adipiscing vitae. In fermentum posuere urna
            nec tincidunt praesent semper feugiat nibh.
          </p>
          <Link to="/classes">
            <button className="flex flex-row items-center hover:text-black text-purple-600 uppercase tracking-[0.3rem] duration-1000 font-semibold mt-10">
              Class Schedule <FaArrowRight className="ml-2"></FaArrowRight>{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse w-full md:items-center md:gap-10 md:flex-row-reverse space-y-5 mt-10 pb-10 pt-10">
        <div className="md:w-1/2 relative mt-10">
          <img src={videoBanner} alt="" />

          {/* Open the modal using ID.showModal() method */}
          <button
            className="absolute position"
            onClick={() => window.my_modal_1.showModal()}
          >
            <img src={vidoIcon} alt="" />
          </button>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box" width="500px">
              <iframe
                width='100%'
                height="300"
                src="https://www.youtube.com/embed/by1QAoRcc-U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="modal-action">
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
        <div className="md:w-1/2 space-y-5 md:space-y-10">
          <h3 className="text-4xl font-bold text-[#263345]">
            Get feedback from native speakers
          </h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/classes">
            <button className="flex flex-row items-center hover:text-black text-purple-600 uppercase tracking-[0.3rem] duration-1000 font-semibold mt-10">
              Start Learning Online{" "}
              <FaArrowRight className="ml-2"></FaArrowRight>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebInfo;

import React from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaLinkedin,
    FaPhone,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const NavComponent = () => {
  return (
    <div className="md:h-[40px] h-[70px] w-full md:gap-0 gap-1 bg-[#3b3b3b] flex md:flex-row flex-col items-center px-5 flex-wrap md:pt-0 pt-2">
      <div className="text-[#acaaaa] flex md:gap-3 gap-1 flex-row md:flex-grow md:mt-0 mt-5">
        <FaFacebook />
        <FaYoutube /> <FaLinkedin /> <FaTwitter />
      </div>
      <div className="text-[#acaaaa] flex md:gap-3 flex-col md:flex-row items-center text-sm md:mr-7">
        {" "}
        <div className="flex md:gap-2 items-center">
          <FaPhone></FaPhone>+228 872 4444
        </div>{" "}
        <div className="flex gap-2 items-center">
          <FaPhone />
          +775 872 4444
        </div>{" "}
        <div className="flex gap-2 items-center">
          <FaEnvelope />
          contact@email.com
        </div>
      </div>
      <div>
        <select className="select select-bordered-0 rounded-none border-0   select-sm w-[90px] bg-[#3b3b3b] max-w-xs text-[#acaaaa] md:mt-0 mt-4">
          <option defaultValue={'white'} className="text-sm">
            White
          </option>
          <option className="text-sm">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default NavComponent;

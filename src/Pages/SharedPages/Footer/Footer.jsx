import React from "react";
import logo from "../../../assets/Website_logo/logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer p-20 bg-[#263344] text-white">
        <div>
          <img src={logo} alt="" />
          <p>
            Language School.
            <br />
            Providing reliable teach since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#263344] text-white">
        <div>
          <p>Copyright © {currentYear} - All right reserved by Language School</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border py-10">
        {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         */}
        {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="container mx-auto flex flex-wrap justify-around gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Campus Clubs</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/linuxcampusclub/"
                  className="text-gray-400 hover:text-white"
                >
                  Linux Campus Club
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/csi_jssstu/"
                  className="text-gray-400 hover:text-white"
                >
                  Computer Society Of India
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ieee_sjce/"
                  className="text-gray-400 hover:text-white"
                >
                  IEEE
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dscjssstu/"
                  className="text-gray-400 hover:text-white"
                >
                  GDSC
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sahassjceadventure/"
                  className="text-gray-400 hover:text-white"
                >
                  Sahas
                </a>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">
              College and University
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://jssstuniv.in/#/"
                  className="text-gray-400 hover:text-white"
                >
                  JSSSTU
                </a>
              </li>
              <li>
                <a
                  href="https://sjce.ac.in/"
                  className="text-gray-400 hover:text-white"
                >
                  SJCE
                </a>
              </li>
            </ul>
          </div>

          {/* <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Comparison</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Lcc vs CSI
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  IEEE Vs LCC
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  CSI vs IEEE
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  CSI vs GDSC
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  GDSC vs LCC
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  IEEE vs GDSC
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  IEEE vs SAHAS
                </a>
              </li>
            </ul>
          </div> */}
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">University</h2>
            <ul className="space-y-2">
              <li>
                {/* <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a> */}
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                {/* <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a> */}
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="https://jssstuniv.in/#/"
                  className="text-gray-400 hover:text-white"
                >
                  &copy;JSSSTU
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
        {/* <div className="text-xl font-semibold hidden md:flex">
          CAMPUS<span className="text-blue-500 font-bold">BUZZ</span>
        </div> */}
        <div className="font-semibold text-xl">
          <span className="text-orange-500">JSSSTU'S</span> CAMPUS
          <span className="text-blue-500">BUZZ</span>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>&copy; JSS science And technology university</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://github.com/prakhar8113">
            <FaGithub className="h-6" />
          </a>
          <a href="https://www.youtube.com/">
            <BsYoutube className="h-6" />
          </a>

          <a href="https://www.linkedin.com/in/prakhar-gupta-b5573a229/">
            <FaLinkedin className="h-6" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

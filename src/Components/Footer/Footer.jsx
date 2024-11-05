import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  const [seeMoreAboutUs, setSeeMoreAboutUs] = useState(false);
  const [seeMoreInternational, setSeeMoreInternational] = useState(false);
  const [seeMoreDomestic, setSeeMoreDomestic] = useState(false);
  const [seeMoreHiddenGems, setSeeMoreHiddenGems] = useState(false);

  const handleSeeMore = (section) => {
    setSeeMoreAboutUs(section === "aboutUs" ? !seeMoreAboutUs : false);
    setSeeMoreInternational(
      section === "international" ? !seeMoreInternational : false
    );
    setSeeMoreDomestic(section === "domestic" ? !seeMoreDomestic : false);
    setSeeMoreHiddenGems(section === "hiddenGems" ? !seeMoreHiddenGems : false);
  };

  return (
    <>
      <div className="bg-slate-800 h-fit w-full text-gray-300 flex-col font-oswald justify-center  flex overflow-x-hidden">
        <div className="md:max-w-8xl w-full md:mx-40 md:flex-row flex-col h-full mt-2 ">
          {/* Contact Center Section */}
          <div className="flex flex-col items-start mb-4 w-fit md:border-r-2 border-gray-400 p-2">
            <h1 className="text-xl">Contact Centralized Call Center</h1>
            <h2 className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-red-600 text-3xl" />
              220-336-6645{" "}
              <span className="text-gray-200">(Toll Free Number)</span>
            </h2>
          </div>
        </div>
        {/* Main Sections */}
        <div className="md:max-w-8xl w-full md:px-40 flex  md:flex-row flex-col h-full mt-1">
          {/* About Us Section */}
          <div className="flex flex-col md:w-56   h-auto">
            <div className="flex items-center md:gap-28 border-gray-400 border-t-2 border-b-2 md:border-l-0 md:border-r-2  p-2">
              <p>ABOUT US</p>
              <span
                className="ml-2 cursor-pointer text-gray-300 text-2xl"
                onClick={() => handleSeeMore("aboutUs")}
              >
                {seeMoreAboutUs ? "-" : "+"}
              </span>
            </div>
            {seeMoreAboutUs && (
              <div className="flex flex-col mt-2 ml-4 font-extralight">
                <Link to="/contact">
                  <p>CONTACT US</p>
                </Link>
                <Link to="/All_Cards">
                  <p>PACKAGES</p>
                </Link>
                <Link to="/about">
                  <p>INFO</p>
                </Link>
                <Link to="/contact">
                  <p>WEBSITE</p>
                </Link>
                <Link to="/contact">
                  <p>ADDRESS</p>
                </Link>
                <Link to="/privacy">
                  <p>PRIVACY POLICY</p>
                </Link>
                <Link to="/Booking_Form">
                  <p>BOOK NOW</p>
                </Link>
              </div>
            )}
          </div>

          {/* International Section */}
          <div className="flex flex-col md:w-66 h-auto">
            <div className="flex items-center md:gap-20 border-gray-400  border-b-2 md:border-l-0 md:border-r-2 md:border-t-2 p-2">
              <p>INTERNATIONAL DESTINATIONS</p>
              <span
                className="ml-2 cursor-pointer text-gray-300 text-2xl"
                onClick={() => handleSeeMore("international")}
              >
                {seeMoreInternational ? "-" : "+"}
              </span>
            </div>
            {seeMoreInternational && (
              <div className="flex flex-col flex-wrap mt-2 ml-4 font-extralight">
                <Link to="/Europe_Packages">
                  <p>EUROPIAN PACKAGES</p>
                </Link>
                <Link to="/Bali_Packages">
                  <p>BALI PACKAGES</p>
                </Link>
                <Link to="/Singapore_Packages">
                  {" "}
                  <p>SINGAPORE PACAKGES</p>
                </Link>
                <Link to="/SriLanka_Packages">
                  <p>SRILANKA PACKAGES</p>
                </Link>
                <Link to="/Paris_Packages">
                  <p>PARIS PACKAGES</p>
                </Link>
                <Link to="/Maldives_Packages">
                  {" "}
                  <p>MALDIVES PACKAGES</p>
                </Link>
                <Link to="/Dubai_Packages">
                  {" "}
                  <p>DUBAI PACKAGES</p>
                </Link>
                <Link to="/Tokyo_Packages">
                  {" "}
                  <p>TOKYO PACKAGES</p>
                </Link>
              </div>
            )}
          </div>

          {/* Domestic Section */}
          <div className="flex flex-col  md:w-66  h-auto">
            <div className="flex items-center md:gap-20 border-gray-400 border-b-2 md:border-l-0 md:border-r-2 md:border-t-2 p-2">
              <p>DOMESTIC DESTINATIONS</p>
              <span
                className="ml-2 cursor-pointer text-gray-300 text-2xl"
                onClick={() => handleSeeMore("domestic")}
              >
                {seeMoreDomestic ? "-" : "+"}
              </span>
            </div>
            {seeMoreDomestic && (
              <div className="flex flex-col mt-2 ml-4 font-extralight">
                <Link to="/Agra_Packages">
                  <p>AGRA PACKAGES</p>
                </Link>
                <Link to="/Goa_Packages">
                  {" "}
                  <p>GOA PACKAGES</p>
                </Link>
                <Link to="/Jaipur_Packages">
                  <p>JAIPUR PACKAGES</p>
                </Link>
                <Link to="/Kerala_Packages">
                  <p>KERALA PACKAGES</p>
                </Link>
              </div>
            )}
          </div>

          {/* Hidden Gems Section */}
          <div className="flex flex-col md:w-72   h-auto">
            <div className="flex items-center md:gap-20 border-gray-400  border-b-2 md:border-l-0 md:border-t-2 md:border-r-0 p-2">
              <p>HIDDEN GEMS OF HIMACHAL</p>
              <span
                className="ml-2 cursor-pointer text-gray-300 text-2xl"
                onClick={() => handleSeeMore("hiddenGems")}
              >
                {seeMoreHiddenGems ? "-" : "+"}
              </span>
            </div>
            {seeMoreHiddenGems && (
              <div className="flex flex-col mt-2 ml-4 font-extralight">
                <Link to="/Himachal_Packages">
                  <p>HIMACHAL PACKAGES</p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 p-4 flex gap-4 justify-center items-center">
          <p className="mb-2 text-xl">FOLLOW US</p>
          <div className="flex gap-4">
            <FaFacebookF className="cursor-pointer hover:text-blue-500 border-2 rounded-full w-8 h-8 p-1" />
            <FaInstagram className="cursor-pointer hover:text-red-500 border-2 rounded-full w-8 h-8 p-1" />
            <FaTwitter className="cursor-pointer hover:text-blue-500 border-2 rounded-full w-8 h-8 p-1" />
            <FaYoutube className="cursor-pointer hover:text-red-500 border-2 rounded-full w-8 h-8 p-1" />
            <FaPinterest className="cursor-pointer hover:text-pink-500 border-2 rounded-full w-8 h-8 p-1" />
          </div>
        </div>
      </div>
      <h1 className="text-center">copyright &copy; 2023 @xyz.com</h1>
    </>
  );
}

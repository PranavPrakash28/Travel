import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faGlobe,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import LOGO from "../Image/LOGO.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-2 lg:p-4 font-oswald">
      <div className="mb-4">
        <nav className="flex flex-col md:flex-row justify-center">
          <ul className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl">
            <li className="flex items-center mb-2 md:mb-0">
              <div className="mr-2 flex justify-center items-center relative w-20 h-20 bg-transparent rounded-full">
                <span className="text-white text-xl lg:text-2xl absolute">
                  <img src={LOGO} alt="Logo" className="rounded-full" />{" "}
                </span>
              </div>
            </li>
            <li className="max-w-xs text-center md:text-justify mb-2 md:mb-0">
              <h1 className="text-xs lg:text-sm">V</h1>
            </li>
            <li className="text-center md:text-right">
              <FontAwesomeIcon
                icon={faCircleChevronDown}
                className="text-2xl lg:text-3xl cursor-pointer hover:text-gray-400"
              />
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row justify-between flex-wrap text-white max-w-4xl mx-auto">
        {/* Phone and Email Section */}
        <nav className="flex-1 mb-2 lg:mb-4 p-1 lg:p-2">
          <ul className="space-y-1 text-center md:text-justify">
            <li className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-lg" />
              <h1 className="font-bold text-md lg:text-lg">PHONE NUMBER</h1>
            </li>
            <li>
              <p className="text-xs lg:text-sm">+91-</p>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-lg" />
              <h1 className="font-bold text-md lg:text-lg">E-MAIL</h1>
            </li>
            <li>
              <p className="text-xs lg:text-sm">travel@travel.com</p>
            </li>
          </ul>
        </nav>

        {/* Contact Us Links Section */}
        <nav className="flex-1 mb-2 lg:mb-4 p-1 lg:p-2">
          <ul className="space-y-1 text-center md:text-justify">
            <li>
              <h1 className="font-bold text-md lg:text-lg">CONTACT US</h1>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xs lg:text-sm hover:underline"
              >
                Info
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xs lg:text-sm hover:underline"
              >
                F.A.Q
              </Link>
            </li>
          </ul>
        </nav>

        {/* Address Section */}
        <nav className="flex-1 mb-2 lg:mb-4 p-1 lg:p-2">
          <ul className="space-y-1 text-center md:text-justify">
            <li className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg" />
              <h1 className="font-bold text-md lg:text-lg">ADDRESS</h1>
            </li>
            <li>
              <p className="text-xs lg:text-sm">B, Dharamshala,</p>
            </li>
            <li>
              <p className="text-xs lg:text-sm">
                Distt. Kangra, Himachal Pradesh - 176215
              </p>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon icon={faGlobe} className="mr-2 text-lg" />
              <p className="font-bold text-md lg:text-lg">WEBSITE</p>
            </li>
            <li>
              <p className="text-xs lg:text-sm">www.xyz.com</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer/Footer";


export default function ContactUs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full bg-gray-900 text-white py-24 lg:py-32 xl:py-40 px-4 md:px-8 lg:px-10 xl:px-12 font-oswald">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-10 xl:gap-12">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-400 mb-4 lg:mb-5 xl:mb-6">
              Get In Touch
            </h3>
            <div className="flex flex-col space-y-4 lg:space-y-5 xl:space-y-6">
              {/* Address */}
              <div className="flex items-center">
                <span className="bg-blue-600 p-2 lg:p-2.5 xl:p-3 rounded-full text-white mr-3 lg:mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-300">
                  123 Travel Lane, City, Country
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <span className="bg-blue-600 p-2 lg:p-2.5 xl:p-3 rounded-full text-white mr-3 lg:mr-4">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-300">
                  +123 456 789
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <span className="bg-blue-600 p-2 lg:p-2.5 xl:p-3 rounded-full text-white mr-3 lg:mr-4">
                  <i className="fas fa-envelope"></i>
                </span>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-300">
                  info@travelwebsite.com
                </p>
              </div>

              {/* About Us Link */}
              <div className="flex items-center">
                <span className="bg-blue-600 p-2 lg:p-2.5 xl:p-3 rounded-full text-white mr-3 lg:mr-4">
                  <i className="fas fa-info-circle"></i>
                </span>
                <Link to="/about" className="text-lg lg:text-xl xl:text-2xl underline text-gray-300">
                  About Us
                </Link>
              </div>

              {/* Privacy Policy Link */}
              <div className="flex items-center">
                <span className="bg-blue-600 p-2 lg:p-2.5 xl:p-3 rounded-full text-white mr-3 lg:mr-4">
                  <i className="fas fa-shield-alt"></i>
                </span>
                <Link to="/privacy" className="text-lg lg:text-xl xl:text-2xl underline text-gray-300">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-400 mb-4 lg:mb-5 xl:mb-6 text-center">
              Find Us Here
            </h3>
            <div className="w-full h-48 lg:h-64 xl:h-72 bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.622135775271!2d77.17192971460264!3d31.734859281297396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904cc9ec49729c3%3A0x9db80e5df2e0b03a!2sManali%2C%20Himachal%20Pradesh%20175031!5e0!3m2!1sen!2sin!4v1635672385468!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Domestic and International Offices */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-10 xl:gap-12 mt-12">
          {/* Domestic Offices */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-blue-400 mb-4 lg:mb-5">
              Domestic Offices
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="bg-blue-600 p-2 rounded-full text-white mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="flex flex-col ">
                <p>Office 1:</p>
                <p> Random Street, Delhi, India</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 p-2 rounded-full text-white mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="flex flex-col ">
                <p>Office 2: </p>
                <p>Random Street, Mumbai, India</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 p-2 rounded-full text-white mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="flex  flex-col">
                <p>Office 3: </p>
                <p>Random Street, Bangalore, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* International Offices */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-blue-400 mb-4 lg:mb-5">
              International Offices
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="bg-blue-600 p-2 rounded-full text-white mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="flex flex-col">
                <p>Office 1: </p>
                <p>Random Street, New York, USA</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 p-2 rounded-full text-white mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="flex flex-col">
                <p>Office 2: </p>
                <p>Random Street, London, UK</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 p-2 rounded-full text-white mr-3">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
               <div className="flex  flex-col">
               <p>Office 3: </p>
               <p>Random Street, Sydney, Australia</p>
               </div>

              </li>
            </ul>
          </div>
        </div>
      </div>
      
    

      <Footer />
    </>
  );
}

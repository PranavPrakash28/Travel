import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Advertisment() {
  return (
    <div className="max-w-7xl mx-auto p-4 border-t-4 border-black">
        <p className="text-3xl font-bold text-center">WHY CHOOSE US</p>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* First Column */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center rounded-full  p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">Great Deals</p>
            <p className="text-sm text-gray-600">Thanks to our strong partnerships, we offer unbeatable prices on flights, hotels, and packages.Get the best value for your money and make your dream trip affordable and amazing.</p>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center rounded-full  p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">One Stop Shop</p>
            <p className="text-sm text-gray-600">We handle all your travel needs! From choosing the best flights and hotels to transportation and excursions, we’ve got you covered.Sit back, relax, and let us take care of everything.</p>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center rounded-full  p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">24x7 Support</p>
            <p className="text-sm text-gray-600">Worried about communication issues? Our friendly customer support team is available around the clock. If plans change or issues arise, we’re here to help anytime, anywhere.</p>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center rounded-full  p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">Safety First</p>
            <p className="text-sm text-gray-600">Your safety is our top priority. We provide comprehensive travel insurance options and keep you well informed about the latest travel advisories and health guidelines...</p>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Advertisment;

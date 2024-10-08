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
            <p className="text-lg font-semibold">Text One</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-sm text-gray-600">Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center rounded-full  p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">Text Two</p>
            <p className="text-sm text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p className="text-sm text-gray-600">Duis aute irure dolor in reprehenderit in voluptate.</p>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center rounded-full  p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">Text Three</p>
            <p className="text-sm text-gray-600">Excepteur sint occaecat cupidatat non proident.</p>
            <p className="text-sm text-gray-600">Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center rounded-full  p-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-3xl" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-lg font-semibold">Text Four</p>
            <p className="text-sm text-gray-600">Curabitur pretium tincidunt lacus. Nulla gravida orci.</p>
            <p className="text-sm text-gray-600">Aenean placerat. Integer vitae libero ac risus egestas placerat.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Advertisment;

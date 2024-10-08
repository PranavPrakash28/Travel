import Fishing from '../Image/Fishing.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Review() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-0 w-full lg:h-[700px] pt-16 lg:pt-36 px-4">
        
        {/* First Review Card */}
        <div className="relative bg-white shadow-2xl w-full sm:w-72 lg:w-[18rem] h-[25rem] lg:h-[28rem] flex flex-col">
          <img src={Fishing} alt="image" className="w-full h-48 object-cover" />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <p className="text-xs lg:text-sm font-oswald font-bold text-black">WORLD-CLASS FLY</p>
              <p className="text-lg lg:text-2xl font-oswald font-bold text-blue-600">REVIEW</p>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="mt-auto flex justify-center">
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#1540cb" }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Review Card (Slightly taller) */}
        <div className="relative bg-white shadow-2xl lg:-translate-y-8 z-20 w-full sm:w-72 lg:w-[18rem] h-[28rem] lg:h-[32rem] flex flex-col">
          <img src={Fishing} alt="image" className="w-full h-48 object-cover" />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <p className="text-xs lg:text-sm font-oswald font-bold text-black">WORLD-CLASS FLY</p>
              <p className="text-lg lg:text-2xl text-blue-600 font-oswald font-bold">REVIEW</p>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="mt-auto flex justify-center">
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#1540cb" }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third Review Card */}
        <div className="relative bg-white shadow-2xl w-full sm:w-72 lg:w-[18rem] h-[25rem] lg:h-[28rem] flex flex-col">
          <img src={Fishing} alt="image" className="w-full h-48 object-cover" />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <p className="text-xs lg:text-sm font-oswald font-bold text-black">WORLD-CLASS FLY</p>
              <p className="text-lg lg:text-2xl font-oswald font-bold text-blue-600">REVIEW</p>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="mt-auto flex justify-center">
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} style={{ color: "#1540cb" }} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Review;

import Hitesh from "../Image/fishing.jpg";
import Ankush from "../Image/fishing.jpg";
import Ajay from "../Image/fishing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Review() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-0 w-full lg:h-[700px] pt-16 lg:pt-36 px-4">
        {/* First Review Card */}
        <div className="relative bg-white shadow-2xl w-full sm:w-72 lg:w-[18rem] h-[25rem] lg:h-[30rem] flex flex-col">
          <img src={Hitesh} alt="image" className="w-full h-60 object-cover" />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <h1 className="text-xs lg:text-sm font-oswald font-bold text-black">
                rev1
              </h1>
              <p className="text-lg lg:text-2xl font-oswald font-bold text-blue-600">
                REVIEW
              </p>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mb-4 text-center">
              rev1
            </p>
            <div className="mt-auto flex justify-center">
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: "#1540cb" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Second Review Card (Slightly taller) */}
        <div className="relative bg-white shadow-2xl lg:-translate-y-8 z-20 w-full sm:w-72 lg:w-[18rem] h-[28rem] lg:h-[34rem] flex flex-col">
          <img src={Ankush} alt="image" className="w-full h-60 object-cover" />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <h1 className="text-xs lg:text-sm font-oswald font-bold text-black">
                rev2
              </h1>
              <p className="text-lg lg:text-2xl text-blue-600 font-oswald font-bold">
                REVIEW
              </p>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mb-4 text-center">
              rev2
            </p>
            <div className="mt-auto flex justify-center">
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: "#1540cb" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Third Review Card */}
        <div className="relative bg-white shadow-2xl w-full sm:w-72 lg:w-[18rem] h-[25rem] lg:h-[30rem] flex flex-col">
          <img src={Ajay} alt="image" className="w-full h-60 object-cover" />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <h1 className="text-xs lg:text-sm font-oswald font-bold text-black">
                rev3
              </h1>
              <p className="text-lg lg:text-2xl font-oswald font-bold text-blue-600">
                REVIEW
              </p>
            </div>
            <p className="text-sm lg:text-base text-gray-700 mb-4 text-center">
              rev3
            </p>
            <div className="mt-auto flex justify-center">
              <div className="flex text-blue-600">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: "#1540cb" }}
                  />
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

import { Link } from "react-router-dom";
import Himanchal from "../Image/about4.jpg";
import Bali01 from "../Image/Bali-01.jpg";
import Singapore01 from "../Image/Singapore.jpg";

function Card() {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card for Bali */}
      <Link to="/Bali_Packages">
        <div className="relative mb-20 bg-white border-t-blue-600 border-t-8 shadow-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:-translate-y-10 hover:z-20 w-72 h-[30rem] md:w-[18rem] md:h-[30rem] flex flex-col">
          <img
            src={Bali01}
            alt="Bali"
            className="w-full h-56 md:h-60 lg:h-56 object-cover"
          />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <h1 className="text-xs md:text-sm lg:text-xs font-oswald font-bold text-black">
                TROPICAL
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-2xl font-oswald font-bold text-blue-600">
                BALI
              </h2>
            </div>
            <p className="text-xs md:text-sm lg:text-xs text-gray-700 mb-2 text-center">
              From the serene rice terraces of Ubud to the lively nightlife of
              Seminyak, Bali offers something for everyone. Whether you&apos;re
              planning a romantic getaway, a family vacation, or a solo retreat,
              Bali promises unforgettable experiences. Let us guide you to the
              best of Bali, where your dream getaway awaits!
            </p>
            <div className="mt-auto flex justify-center">
              <Link to="/Bali_Packages">
                <button className="px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-blue-600 font-oswald text-white font-bold border-none">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>

      {/* Card for Singapore */}
      <Link to="/Singapore_Packages">
        <div className="relative md:-translate-y-10 bg-white border-t-blue-600 border-t-8 shadow-2xl overflow-hidden transform transition-transform duration-500 ease-in-out md:hover:-translate-y-28 hover:-translate-y-10 hover:z-20 w-72 h-[30rem] md:w-[18rem] md:h-[30rem] flex flex-col">
          <img
            src={Singapore01}
            alt="Thailand"
            className="w-full h-56 md:h-60 lg:h-56 object-cover"
          />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <h1 className="text-xs md:text-sm lg:text-xs font-oswald font-bold text-black">
                MESMERIZING
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-2xl text-blue-600 font-oswald font-bold">
                Singapore
              </h2>
            </div>
            <p className="text-xs md:text-sm lg:text-xs text-gray-700 mb-2 text-center">
              Discover Singapore, a dazzling city-state blending modernity and
              tradition. From iconic landmarks like Marina Bay Sands to vibrant
              neighborhoods and mouthwatering cuisine, Singapore offers a unique
              experience for every traveler. Let us craft your perfect adventure
              in this dynamic destination!
            </p>
            <div className="mt-auto flex justify-center">
              <Link to="/Singapore_Packages">
                <button className="px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 font-oswald bg-blue-600 text-white font-bold border-none">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>

      {/* Card for Hidden gems Himachal */}
      <Link to="/Himachal_Packages">
        <div className="relative bg-white border-t-blue-600 border-t-8 shadow-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:-translate-y-10 hover:z-20 w-72 h-[30rem] md:w-[18rem] md:h-[30rem]  flex flex-col">
          <img
            src={Himanchal}
            alt="Kerala"
            className="w-full h-56 md:h-60 lg:h-56 object-cover"
          />
          <div className="flex flex-col flex-1 p-4">
            <div className="text-center">
              <h1 className="text-xs md:text-sm lg:text-xs font-oswald font-bold text-black">
                TIMELESS
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-2xl font-oswald font-bold text-blue-600">
                HIDDEN GEMS OF HIMACHAL
              </h2>
            </div>
            <p className="text-xs md:text-sm lg:text-xs text-gray-700 mb-2 mt-1 text-center">
              Uncover Himachal&apos;s hidden gems, from serene villages to
              breathtaking landscapes. Explore off-the-beaten-path destinations,
              vibrant local culture, and stunning nature. Let us guide you to
              discover the enchanting beauty of Himachal Pradesh for an
              unforgettable adventure!
            </p>
            <div className="mt-auto flex justify-center">
              <Link to="/Himachal_Packages">
                <button className="px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 font-oswald bg-blue-600 text-white font-bold border-none">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>

      {/* See more button */}
      <div className="w-full flex justify-center items-start ">
        <Link to="/All_Cards">
          <button className="bg-white rounded-full text-black border-4 underline border-black px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 font-oswald font-bold">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;

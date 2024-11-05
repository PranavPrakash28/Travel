import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import EuropeBG5 from "../Image/EuropeBG5.jpg";
import SriLanka from "../Image/SriLanka.jpg";
import Manali from "../Image/Manali.jpg";
import Bali from "../Image/Bali-01.jpg";
import Agra from "../Image/Agra.jpg";

function All_Cards() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Destinations</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="h-[300px] overflow-x-hidden">
        <img
          src={SriLanka}
          alt="/"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      <div className="mt-8 px-4 w-full overflow-x-hidden">
        <div className=" mx-auto flex  justify-between gap-4">
          {" "}
          {/* Added gap-8 */}
          {/* Card 1 */}
          <div className="relative mb-8 bg-white shadow-2xl transform duration-500 ease-in-out hover:z-20 flex flex-col w-full sm:w-1/2 lg:w-1/4">
            <img
              src={EuropeBG5}
              alt="Europe"
              className="w-full h-64 object-cover"
            />
            <div className="flex flex-col flex-1 p-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-oswald font-bold text-blue-600">
                  Europe
                </h2>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 text-center">
                Europe: A Continent of Endless Discovery
              </h3>
              <div className="mt-auto flex justify-center">
                <Link to="/Europe_Packages">
                  <button className="px-4 py-2 bg-blue-600 font-oswald text-white font-bold border-none">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative mb-8 bg-white shadow-2xl transform duration-500 ease-in-out hover:z-20 flex flex-col w-full sm:w-1/2 lg:w-1/4">
            <img
              src={Bali}
              alt="International"
              className="w-full h-64 object-cover"
            />
            <div className="flex flex-col flex-1 p-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-oswald font-bold text-blue-600">
                  International
                </h2>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 text-center">
                Global Destinations: A World of Endless Exploration
              </h3>
              <div className="mt-auto flex justify-center">
                <Link to="/international">
                  <button className="px-4 py-2 bg-blue-600 font-oswald text-white font-bold border-none">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative mb-8 bg-white shadow-2xl transform duration-500 ease-in-out hover:z-20 flex flex-col w-full sm:w-1/2 lg:w-1/4">
            <img src={Manali} alt="Asia" className="w-full h-64 object-cover" />
            <div className="flex flex-col flex-1 p-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-oswald font-bold text-blue-600">
                  Himachal
                </h2>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 text-center">
                Discovering Hidden Gems of Himachal
              </h3>
              <div className="mt-auto flex justify-center">
                <Link to="/Himachal_packages">
                  <button className="px-4 py-2 bg-blue-600 font-oswald text-white font-bold border-none">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative mb-8 bg-white shadow-2xl transform duration-500 ease-in-out hover:z-20 flex flex-col w-full sm:w-1/2 lg:w-1/4">
            <img src={Agra} alt="India" className="w-full h-64 object-cover" />
            <div className="flex flex-col flex-1 p-6">
              <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-oswald font-bold text-blue-600">
                  India
                </h2>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 text-center">
                India: A Land of Timeless Wonders
              </h3>
              <div className="mt-auto flex justify-center">
                <Link to="/domestic">
                  <button className="px-4 py-2 bg-blue-600 font-oswald text-white font-bold border-none">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default All_Cards;

import { Link } from 'react-router-dom';
import Bali from '../Image/Bali.webp';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

function All_Cards() {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Destinations</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='bg-orange-200 h-[300px] overflow-x-hidden'>
      </div>

      {/* <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald overflow-x-hidden">
        <div className="max-w-7xl w-full rounded-3xl mt-10 shadow-xl shadow-black p-8 md:py-10 bg-fuchsia-950 text-white flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col text-yellow-300 font-bold text-4xl md:text-6xl">
            <p style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}>&quot;WANDERLUST</p>
            <p style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}>JOURNEYS&quot;</p>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <p className="text-xl md:text-4xl  text-white flex">
            Discover the world's most breathtaking destinations and start your next adventure today!
            </p>
            <Link to="/Booking_Form">
              <button
                className="text-lg md:text-2xl font-bold mt-8 md:mt-5 text-yellow-300 rounded-lg py-2 px-4"
                style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      
      <div className="mt-8 px-4 w-full overflow-x-hidden ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="relative mb-8 bg-white shadow-2xl transform duration-500 ease-in-out hover:z-20 flex flex-col"
            >
              <img src={Bali} alt="Bali" className="w-full h-64 object-cover" />
              <div className="flex flex-col flex-1 p-6">
                <div className="text-center">
                  <p className="text-sm font-oswald font-bold text-black">WORLD-CLASS FLY</p>
                  <p className="text-2xl md:text-4xl font-oswald font-bold text-blue-600">BALI</p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <div className="mt-auto flex justify-center">
                  <Link to="/Europe_Packages">
                    <button className="px-4 py-2 bg-blue-600 font-oswald text-white font-bold border-none">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default All_Cards;

import { Link } from 'react-router-dom';
import Bali from '../Image/Bali.webp';
import Thailand from '../Image/Thailand.jpg';
import Himanchal from '../Image/about4.jpg';

function Card() {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card for Bali */}
      <Link to = '/Loc_Bali'>
      <div className="relative mb-20 bg-white border-t-blue-600 border-t-8 shadow-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:-translate-y-10 hover:z-20 w-72 h-[24rem] md:w-[18rem] md:h-[26rem] lg:w-[18rem] lg:h-[28rem] flex flex-col">
        <img src={Bali} alt="Bali" className="w-full h-56 md:h-60 lg:h-56 object-cover" />
        <div className="flex flex-col flex-1 p-4">
          <div className="text-center">
            <p className="text-xs md:text-sm lg:text-xs font-oswald font-bold text-black">WORLD-CLASS FLY</p>
            <p className="text-3xl md:text-4xl lg:text-2xl font-oswald font-bold text-blue-600">BALI</p>
          </div>
          <p className="text-xs md:text-sm lg:text-xs text-gray-700 mb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="mt-auto flex justify-center">
            <Link to="/Loc_Bali">
              <button className="px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 bg-blue-600 font-oswald text-white font-bold border-none">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>

      {/* Card for Thailand */}
      <Link to= '/Loc_Thailand'>
      <div className="relative -translate-y-10 bg-white border-t-blue-600 border-t-8 shadow-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:-translate-y-28 hover:z-20 w-72 h-[24rem] md:w-[18rem] md:h-[26rem] lg:w-[18rem] lg:h-[28rem] flex flex-col">
        <img src={Thailand} alt="Thailand" className="w-full h-56 md:h-60 lg:h-56 object-cover" />
        <div className="flex flex-col flex-1 p-4">
          <div className="text-center">
            <p className="text-xs md:text-sm lg:text-xs font-oswald font-bold text-black">WORLD-CLASS FLY</p>
            <p className="text-3xl md:text-4xl lg:text-2xl text-blue-600 font-oswald font-bold">THAILAND</p>
          </div>
          <p className="text-xs md:text-sm lg:text-xs text-gray-700 mb-2 text-center">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="mt-auto flex justify-center">
            <Link to="/Loc_Thailand">
              <button className="px-3 py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 font-oswald bg-blue-600 text-white font-bold border-none">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>

      {/* Card for Hidden gems Himachal */}
      <Link to= '/Loc_Himachal'>
      <div className="relative bg-white border-t-blue-600 border-t-8 shadow-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:-translate-y-10 hover:z-20 w-72 h-[24rem] md:w-[18rem] md:h-[26rem] lg:w-[18rem] lg:h-[28rem] flex flex-col">
        <img src={Himanchal} alt="Kerala" className="w-full h-56 md:h-60 lg:h-56 object-cover" />
        <div className="flex flex-col flex-1 p-4">
          <div className="text-center">
            <p className="text-xs md:text-sm lg:text-xs font-oswald font-bold text-black">Discovering</p>
            <p className="text-3xl md:text-4xl lg:text-2xl font-oswald font-bold text-blue-600">HIDDEN GEMS OF HIMACHAL</p>
          </div>
          <p className="text-xs md:text-sm lg:text-xs text-gray-700 mb-2 mt-1 text-center">
            25 Offbeat Destinations In Himachal Pradesh: Discovering Hidden Gems.
          </p>
          <div className="mt-auto flex justify-center">
            <Link to="/Loc_Himachal">
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

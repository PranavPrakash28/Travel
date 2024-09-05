import Fishing from '../Image/Fishing.jpg';

function Card() {
  return (
    <div className="flex justify-center gap-6">
      <div className="relative bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-10 w-80 h-96">
        <img src={Fishing} alt="image" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
          <button className="self-center px-4 py-2 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-700">
            Read more
          </button>
        </div>
      </div>

      <div className="relative bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-10 w-80 h-96">
        <img src={Fishing} alt="image" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
          <button className="self-center px-4 py-2 bg-blue-900 text-white font-bold rounded-md border-2 border-black hover:bg-blue-800">
            Read more
          </button>
        </div>
      </div>

      <div className="relative bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:z-10 w-80 h-96">
        <img src={Fishing} alt="image" className="w-full h-56 object-cover" />
        <div className="p-4 flex flex-col justify-between h-full">
          <p className="text-sm text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
          <button className="self-center px-4 py-2 bg-blue-800 text-white font-bold rounded-md hover:bg-blue-700">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

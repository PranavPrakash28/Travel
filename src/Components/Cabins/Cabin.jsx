const Cabin = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-black">
        <div className="text-white font-oswald flex gap-40 justify-center items-center">
          
          
          <nav>
            <ul className="p-20 pl-36">
              <li><p>ENJOY</p></li>
              <li className="text-6xl">
                <p>
                  COZY AND PRIVATE <br />
                  ACCOMODATIONS IN <br />
                  THE HEART OF THE <br />
                  KENAI PENINSULA.
                </p>
              </li>
              <li className="bg-blue-600 text-center pt-3 text-md mt-10 h-12 w-36">
                <button>EXPLORE CABINS</button>
              </li>
            </ul>
          </nav>

          
          <nav>
            <ul className="text-4xl pb-14 flex flex-col gap-8">
              <li className="relative">
                INDIVIDUAL CABINS
                <div className="absolute bottom-[-20px] -left-14 w-96 h-px bg-white"></div>
              </li>
              <li className="relative">
                PRIVATE BATHROOM
                <div className="absolute bottom-[-20px] -left-14 w-96 h-px bg-white"></div>
              </li>
              <li className="relative">
                PRIVATE DECK
                <div className="absolute bottom-[-20px] -left-14 w-96 h-px bg-white"></div>
              </li>
              <li className="relative">
                FULLY FURNISHED
                <div className="absolute bottom-[-20px] -left-14 w-96 h-px bg-white"></div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Cabin;

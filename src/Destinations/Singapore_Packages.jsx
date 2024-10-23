import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faPassport, faPlane, faBed, faCamera, faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Singapore from '../Components/Image/singapore.jpg';
import Singapore01 from '../Components/Image/Singapore.jpg';
import Singapore02 from '../Components/Image/Singapore-02.jpg';
import Singapore03 from '../Components/Image/Singapore-03.jpg';
import Singapore04 from '../Components/Image/Singapore-04.jpg';
import Singapore05 from '../Components/Image/Singapore-05.jpg';
import Singapore06 from '../Components/Image/Singapore-06.jpg';
import Singapore07 from '../Components/Image/Singapore-07.jpg';
import Footer from '../Components/Footer/Footer';
import { Helmet } from 'react-helmet';


const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5">
      <div
        className="cursor-pointer flex justify-between bg-gray-100 p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-xl  font-bold">{question}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && <p className="mt-2 p-4 text-xl bg-gray-50 text-black">{answer}</p>}
    </div>
  );
};

  const Destination = () => {
    const [seeMore, setSeeMore] = useState(false);
    const [isHiddenSectionVisible, setIsHiddenSectionVisible] = useState(false);
    const [expandedContent, setExpandedContent] = useState(null); 
  
    const handleAboutClick = (content) => {
      setIsHiddenSectionVisible(true); 
      setExpandedContent(expandedContent === content ? null : content); 
      setSeeMore(true)
      scrollToDiv();
    };
     
    const targetDivRef = useRef(null);

    const scrollToDiv = () => {
      if(targetDivRef.current){
        targetDivRef.current.scrollIntoView({behavior: 'smooth'});
      }
    }

    useEffect(() => {
      if (isHiddenSectionVisible) {
        scrollToDiv();
      }
    }, [isHiddenSectionVisible]);

  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Singapore</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="w-full font-oswald">
        <div className="w-full h-80 md:h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${Singapore})` }}>
          {/* image */}
        </div>

        <div className="flex flex-col md:flex-row  rounded-2xl  mt-10 md:max-w-7xl mx-auto px-4 text-md md:h-96"> 
          <div className="md:w-3/4 p-5 border-r-2 border-gray-600 md:h-auto">
            <p className="text-xl md:text-4xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba (0,0,0,0)' }}>Singapore</p> 
            <p className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
            Though small in size, Singapore packs a punch with its vibrant culture, stunning skyline, and a wide variety of activities that cater to every type of traveller. A true melting pot, this island nation is a dazzling mix of towering skyscrapers, heritage-rich neighbourhoods, and lush green spaces. Whether you’re a solo traveller, a family on vacation, or a couple on a romantic getaway, Singapore has something for everyone.

              {seeMore && (
                <span>
                  Be it the stunning vibrant nightlife, thrilling adventure activities, or the mouth-watering delicacies, Singapore will definitely leave you craving for more! Visiting Singapore isn't just a vacation, it's an experience of a lifetime. 
                </span>
              )}
              <span
                className="ml-2 cursor-pointer  text-sm text-red-600" 
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'read less' : 'read more'}
              </span>
            </p>
          </div>

          <div className="md:w-1/4 text-sm h-auto md:h-auto md:text-sm bg-white text-black p-5 md:block"> 
            <p className="text-xl md:text-3xl font-extrabold">About Singapore</p> 
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('exclusive')}>The Extravagant Food Scene of Singapore: Must Visit Restaurants 
            </p>
            <p className="pt-1 cursor-pointer" onClick={() => handleAboutClick('restaurants')}>GSK World Travels: Wide Range of Packages for Every Traveller
            </p>
            <p className="pt-1 cursor-pointer" onClick={() => handleAboutClick('places')}>Singapore’s Thriving Nightlife
            </p>
            <p className="pt-1 cursor-pointer" onClick={() => handleAboutClick('nightlife')}>Endless Possibilities of the Things to Do in Singapore</p>
            <p className="pt-1 cursor-pointer" onClick={() => handleAboutClick('adventureActivities')}>Adventure Activities: #StrictlytheThrillSeekersZone
            </p>
            <p className="pt-1 cursor-pointer" onClick={() => handleAboutClick('beaches')}>Foods to Try : A little something for your Tastebuds to Devour
            </p>
            <p className='pt-1 cursor-pointer' onClick={() => handleAboutClick('passport')}>Things to Know About Singapore: Practical Tips
            </p>
            <p className="pt-1 cursor-pointer" onClick={() => handleAboutClick('facts')}>Cruising through Singapore
            </p>
            <p className="pt-1 cursor-pointer" onClick={() => handleAboutClick('inclusive')}>All Facts About Singapore: Did You Know?
            </p>
            <Link to='/contact'><p className="  text-lg text-red-600 cursor-pointer underline">Ask from Experts</p></Link>
          </div>
        </div>
       

      <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '> 
        {/* PACKAGE 1 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Singapore01} className="w-full h-full object-cover" alt="Singapore" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Glimpse of Singapore Package</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Night Safari, Universal Studios, Sentosa Islands</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> 
              </div>
            </div>
          </div>

          <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
            <Link to="/Booking_Form">
              <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md"> 
                BOOK ONLINE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> 
                INQUIRY
              </button>
            </Link>
          </div>
        </div>
        {/* PACKAGE 2 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Singapore02} className="w-full h-full object-cover" alt="Singapore" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">A Thrilling Singapore Escapade</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Night Safari, Universal Studios, Sentosa Islands, Gardens by the bay, Marina Bay Sands</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> 
              </div>
            </div>
          </div>

          <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
            <Link to="/Booking_Form">
              <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md"> 
                BOOK ONLINE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> 
                INQUIRY
              </button>
            </Link>
          </div>
        </div>
        {/* PACKAGE 3 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Singapore03} className="w-full h-full object-cover" alt="Singapore" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Singapore Honeymoon Package
</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Night Safari, Universal Studios, Sentosa Islands, Gardens by the bay, Marina Bay Sands, Singapore Zoo</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> 
              </div>
            </div>
          </div>

          <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
            <Link to="/Booking_Form">
              <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md"> 
                BOOK ONLINE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> 
                INQUIRY
              </button>
            </Link>
          </div>
        </div>

        {/* PACKAGE 4 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Singapore04} className="w-full h-full object-cover" alt="Singapore" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Singapore Cruise Package - Genting Dream</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Night Safari, Universal Studios, Sentosa Islands, Genting Dream Cruise</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> 
              </div>
            </div>
          </div>

          <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
            <Link to="/Booking_Form">
              <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md"> 
                BOOK ONLINE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> 
                INQUIRY
              </button>
            </Link>
          </div>
        </div>

        {/* PACKAGE 5 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Singapore05} className="w-full h-full object-cover" alt="Singapore" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Singapore Cruise Package - Royal Caribbean</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Night Safari, Universal Studios, Sentosa Islands, Royal Caribbean Cruise</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> 
              </div>
            </div>
          </div>

          <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
            <Link to="/Booking_Form">
              <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md"> 
                BOOK ONLINE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> 
                INQUIRY
              </button>
            </Link>
          </div>
        </div>

        {/* PACKAGE 6 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Singapore06} className="w-full h-full object-cover" alt="Singapore" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Singapore Sparks and Bali Breeze
</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Night Safari, Universal Studios, Sentosa Islands, Royal Caribbean Cruise</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> 
              </div>
            </div>
          </div>

          <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
            <Link to="/Booking_Form">
              <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md"> 
                BOOK ONLINE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> 
                INQUIRY
              </button>
            </Link>
          </div>
        </div>

        {/* PACKAGE 7 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Singapore07} className="w-full h-full object-cover" alt="Singapore" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Splendid Southeast: Singapore Malaysia Package</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Night Safari, Universal Studios, Sentosa Islands, Gardens by the bay, Marina Bay Sands, Singapore Zoo, Kuala Lumpur, Genting Highlands, etc.</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> 
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> 
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> 
              </div>
            </div>
          </div>

          <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
            <Link to="/Booking_Form">
              <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md"> 
                BOOK ONLINE
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> 
                INQUIRY
              </button>
            </Link>
          </div>
        </div>
      </div> 

      {isHiddenSectionVisible && (
          <div className="md:max-w-7xl md:mx-auto text-xl md:text-3xl  rounded-3xl  p-5 md:block " ref={targetDivRef}>
            <p className="text-3xl md:text-4xl font-bold pt-10 text-center">More About Singapore</p>


            <p className="pt-5 cursor-pointer" onClick={() => handleAboutClick('exclusive')}
                style={{ color: expandedContent === 'exclusive' ? 'gray' : 'black' }}>
                The Extravagant Food Scene of Singapore: Must Visit Restaurants 
            </p>
            {expandedContent === 'exclusive' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Every nook and cranny of Singapore offers a luxurious experience for your palate. From high-end gourmet restaurants to local street food, you'll find it all OH-SO-CHIC! For an authentic Singaporean meal, visit Lau Pa Sat, a bustling hawker centre offering everything from Hainanese chicken rice to satay skewers and laksa. If you're in the mood for seafood, Singapore’s signature dish, chilli crab, is a must-try. Head to Jumbo Seafood or Long Beach Seafood for the best version of this spicy, sweet, and savoury delight.</p>
                <p>For those seeking a refined dining experience, Odette, a Michelin-starred French restaurant, is the pinnacle of sophistication. Or, you can savour innovative dishes at Burnt Ends, where modern barbecue meets Singaporean flair.
                </p>
                
              </div>
            )}
            
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('restaurants')}
              style={{ color: expandedContent === 'restaurants' ? 'gray' : 'black' }}>GSK World Travels: Wide Range of Packages for Every Traveller
             </p>
            {expandedContent === 'restaurants' && (
              <div className="pt-2 md:text-xl font-light">
                <p>
                Your journey begins with GSK World Travels, which offers a wide range of all-inclusive packages tailored to your needs. Whether you're a family looking to create memorable moments, a group of friends seeking adventure, or a couple on a romantic honeymoon, GSK World Travels has the perfect holiday package for you.
                </p>
                <p>For families, Singapore offers exciting options like Sentosa Island, home to Universal Studios Singapore, the interactive S.E.A. Aquarium, and the fun-filled Adventure Cove Waterpark. With GSK's family-friendly packages, all these and more can be seamlessly woven into your itinerary.</p>
                <p>If you're an adventure-loving bachelor or part of a group, you’ll love the adrenaline-pumping activities like indoor skydiving at iFly, the thrilling AJ Hackett Sentosa Bungy Jump, or jet-skiing across the Singapore waters. Those seeking romance can opt for a sunset cruise along Marina Bay or a candlelit dinner at one of the city's rooftop restaurants.</p>
                <p>With GSK World Travels, you can expect hassle-free planning with carefully designed packages that cover accommodations, meals, and guided tours. Whether it’s luxury or budget travel, GSK ensures every detail is taken care of so you can focus on enjoying Singapore.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('places')}
              style={{ color: expandedContent === 'places' ? 'gray' : 'black' }}>Singapore’s Thriving Nightlife
            </p>
            {expandedContent === 'places' && (
              <div className="pt-2 md:text-xl font-light">
                <p>When the sun sets, Singapore howls into a playground for night owls. From rooftop bars with panoramic city views to bustling night markets and pulsating nightclubs, the nightlife here is second to none. Clarke Quay is the heart of the action, where you can dance the night away at spots like Zouk or sip cocktails at the iconic CÉ LA VI atop the Marina Bay Sands.</p>
                <p>For those who prefer a more laid-back evening filled with lighthearted walks, night markets like Chinatown Street Market offer a blend of shopping, food, and culture under twinkling lights. If you're looking for something unique, do not miss out on a night safari at the Singapore Zoo, where you can see nocturnal animals in their natural habitat.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('nightlife')}
              style={{ color: expandedContent === 'nightlife' ? 'gray' : 'black' }}>Endless Possibilities of the Things to Do in Singapore
            </p>
            {expandedContent === 'nightlife' && (
              <div className="pt-2 md:text-xl font-light">
                
                <p>Singapore offers a wide variety of activities that are enjoyed by all types of travellers. Begin your journey at Marina Bay Sands, one of Singapore’s most iconic structures, where you can enjoy panoramic views from the SkyPark Observation Deck or take a dip in the world-famous infinity pool.</p>
                <p>Explore the futuristic gardens at Gardens by the Bay, with its towering Supertree Grove, indoor waterfalls, and biodomes filled with exotic plants from around the globe. At night, the Supertrees come alive with a stunning light show, creating an unforgettable visual experience.</p>
                <p>For history and culture buffs, Chinatown and Little India offer a glimpse into Singapore’s diverse heritage. Both neighbourhoods are brimming with temples, bustling markets, and delicious street food. In Chinatown, visit the Buddha Tooth Relic Temple, a grand structure housing one of the Buddha’s teeth.</p>
                <p>Families can explore the world-renowned Singapore Zoo and its famous Night Safari, where nocturnal animals roam in naturalistic habitats. The Jurong Bird Park and River Wonders also offer family-friendly, wildlife-themed adventures.
               </p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('adventureActivities')}
              style={{ color: expandedContent === 'nightlife' ? 'gray' : 'black' }}>Adventure Activities: #StrictlytheThrillSeekersZone
            </p>
            {expandedContent === 'nightlife' && (
              <div className="pt-2 md:text-xl font-light">
                <p>A trip without the chills and thrills is way too elegant to be true right? Well you're in for a treat! Singapore has no shortage of these adrenaline-pumping activities. Sentosa Island is a go-to destination for thrill-seekers, offering activities like zip-lining at Mega Adventure Park and the heart-stopping Bungy Jump at AJ Hackett Sentosa. </p>
                <p>Water sports enthusiasts can enjoy the splashes while jet-skiing, wakeboarding, and kayaking at Singapore’s beaches. The island’s coastline is a bedrock for water-based activities that will quench your thirst for adventure.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('beaches')}
              style={{ color: expandedContent === 'beaches' ? 'gray' : 'black' }}>Foods to Try : A little something for your Tastebuds to Devour
            year</p>
            {expandedContent === 'beaches' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Singapore’s culinary offerings are as diverse as its people. From the humble hawker centers to award-winning fine dining, there's something for everyone. Don’t miss iconic Singaporean dishes like Hainanese chicken rice, a simple yet flavorful meal beloved by locals and tourists alike. Another must-try is laksa, a spicy noodle soup that’s bursting with coconut and seafood flavours.
</p>
                <p>For dessert, cool off with ice kachang, a mountain of shaved ice topped with sweet syrups, or dive into the rich and creamy kaya toast, a breakfast staple served with soft-boiled eggs. If you're a seafood lover, make sure to sample Singapore’s famous chilli crab and black pepper crab.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('passport')}
              style={{ color: expandedContent === 'passport' ? 'gray' : 'black' }}>Things to Know About Singapore: Practical Tips
</p>
            {expandedContent === 'passport' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Before you set off on your Singaporean adventure, there are a few essential things to know. First, the local currency is the Singapore dollar (SGD), so make sure to exchange your money ahead of time or withdraw from ATMs available across the city. Singapore’s weather is tropical and warm year-round, with average temperatures between 25°C to 31°C (77°F to 88°F). While the city is generally dry, it experiences short, heavy rain showers so be sure to pack an umbrella.</p>
                <p>Time-wise, Singapore follows the GMT+8 time zone, which is important to note when planning your flights or meetings.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('facts')}
              style={{ color: expandedContent === 'facts' ? 'gray' : 'black' }}>Cruising through Singapore
</p>
            {expandedContent === 'facts' && (
              <div className="pt-2 md:text-xl font-light">
                <p>One of the most luxurious ways to experience Singapore and the surrounding islands is by embarking on a cruise. Whether it's a short getaway to Malaysia or a longer journey around Southeast Asia, the cruise experience offers world-class facilities, delectable dining, and mesmerising ocean views. Popular cruise lines like Royal Caribbean and Genting Dream Cruises offer routes departing from Singapore, making it a top choice for travellers seeking both adventure and relaxation.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('inclusive')}
              style={{ color: expandedContent === 'inclusive' ? 'gray' : 'black' }}>Facts About Singapore: Did You Know?
</p>
            {expandedContent === 'inclusive' && (
              <div className="pt-2 md:text-xl font-light">
                <ul>
                <li>-Singapore is famous for its cleanliness and strict laws, which help keep the city spotless.

                </li>
                <li>-The Merlion, a mythical creature with the head of a lion and the body of a fish, is the national symbol of Singapore.</li>
                <li>-Singapore is one of the greenest cities in the world, with nearly 50% of its land covered by greenery.</li>
                <li>The city is home to the world’s largest rooftop infinity pool at Marina Bay Sands.</li>
                </ul>
              </div>
            )}


          </div>
        )}

      <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '>
          <div className="w-full md:w-full  mt-12">
          <h2 className="text-xl font-bold mb-5">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="flex flex-col md:flex-row md:w-full md:gap-10 ">
          <div className="w-full md:w-1/2 text-2xl pr-2">
          <FAQItem 
            question="What is the best time to visit Singapore?"
            answer="The best time to visit Singapore is during the dry season, from April to October. This is when the weather is most pleasant, making it ideal for outdoor activities and beach trips."
          />
          <FAQItem
            question="Do I need a visa to visit Singapore?"
            answer="Yes, a visa is required for many travelers, though citizens from several countries can get a visa on arrival. It's best to check with your local consulate for the most up-to-date information."
          />
          <FAQItem
            question="What are the top places to visit in Singapore?"
            answer="Some must-see places in SIngapore , known for its art and culture, Beach for surfing and sunsets, Temples for breathtaking views."
          />
          <FAQItem
            question="Is Singapore family-friendly?"
            answer="Absolutely! Singapore has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
          />
          <FAQItem
            question="Is Singapore family-friendly?"
            answer="Absolutely! Singapore has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
          />
        </div>
        <div className="w-full md:w-1/2 pl-2">
          
          <FAQItem
            question="How is the internet connectivity in Singapore?"
            answer="Internet connectivity in Singapore is generally good in urban areas and tourist hotspots. Many hotels, cafes, and restaurants offer free Wi-Fi, though speeds can vary in rural locations."
          />
          <FAQItem
            question="Is Singapore safe for solo travelers?"
            answer="Yes, Singapore is considered a safe destination for solo travelers. As with any travel destination, it's important to stay aware of your surroundings, avoid isolated areas at night, and keep your valuables secure."
          />
          <FAQItem
            question="What are the common modes of transportation in Singapore?"
            answer="Popular transportation options in Singapore include taxis, scooter rentals, and ride-sharing services like Grab. For short distances, walking is also convenient in many areas."
          />
          <FAQItem
            question="Can I use my credit card in Singapore?"
            answer="Yes, credit cards are widely accepted in hotels, restaurants, and larger stores. However, it’s a good idea to carry some cash for smaller businesses or local markets that may not accept cards."
          />
          <FAQItem
            question="What local customs should I be aware of in Singapore?"
            answer="Visitors should dress modestly when visiting temples, remove shoes before entering homes, and avoid touching people's heads, as it is considered disrespectful. Always show respect for culture and traditions."
          />
          </div>
          </div>
          </div>
      </div>
        <Footer />
      </div>
    </>
  );
};

export default Destination;
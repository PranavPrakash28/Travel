import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faPassport, faPlane, faBed, faCamera, faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bali2 from '../Components/Image/Bali2.webp';
// import Bali from '../Components/Image/Bali.webp';
import Bali01 from '../Components/Image/Bali-01.jpg';
import Bali02 from '../Components/Image/Bali-02.jpg';
import Bali03 from '../Components/Image/Bali-03.jpg';
import Bali04 from '../Components/Image/Bali-04.jpg';
import Bali05 from '../Components/Image/Bali-05.jpg';
import Bali06 from '../Components/Image/Bali-06.jpg';
import Bali07 from '../Components/Image/Bali-07.jpg';

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
                <title>Bali</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="w-full font-oswald">
        <div className="w-full h-80 md:h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${Bali2})` }}>
          {/* image */}
        </div>

        <div className="flex flex-col md:flex-row rounded-2xl  mt-10 md:max-w-7xl mx-auto px-4 text-md md:h-96"> 
          <div className="md:w-3/4 p-5 border-r-2 border-gray-600 md:h-auto">
            <p className="text-xl md:text-4xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0)' }}>Bali a serene Beauty</p> 
            <p className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
            Known as the Island of the Gods, Bali captivates travelers with its stunning landscapes, ranging from volcanic mountains to terraced rice paddies that radiate solitude and peace. Renowned for its surf-friendly beaches and vibrant culture, Bali is a haven for adventurers and those seeking relaxation alike. The island’s charm lies not only in its natural beauty but also in its rich cultural heritage, dramatic dances, colorful ceremonies, and impressive temple architecture that dot every corner of the island. <br/>
              {seeMore && (
                <span>
                  Whether you&apos;re after a spiritual experience, exciting nightlife, or simply basking in Bali’s enchanting atmosphere, there’s something here for everyone
                </span>
              )}
              <span
                className="ml-2 cursor-pointer  text-lg  text-red-600 "
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'read less' : 'read more'}
              </span>
            </p>
          </div>

          <div className="md:w-1/4 text-sm h-auto md:text-sm bg-white text-black p-5 md:block"> 
            <p className="text-xl md:text-3xl font-extrabold">About Bali</p> 
            <p className="pt-5 cursor-pointer" onClick={() => handleAboutClick('exclusive')}>GSK World Travels: Exclusive Bali Packages for All Travelers
            </p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('restaurants')}>Must-Visit Restaurants: Savor the Flavors of Bali</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('places')}>Things to Do in Bali: A Land of Adventure 
            </p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('nightlife')}>Bali’s Nightlife: From Laid-Back to Lively</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('adventureActivities')}>Adventure Activities: Thrills in Every Corner</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('beaches')}>Beaches, Sunsets, and Relaxation</p>
            <p className='pt-2 cursor-pointer' onClick={() => handleAboutClick('passport')}>Passport Requirements: Important Information</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('facts')}>Facts About Bali
            </p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('inclusive')}>Spectacular All-Inclusive by GSK World Travels
            </p>
            <Link to='/contact'><p className=" pt-2 text-lg text-red-600 cursor-pointer underline">Ask from Experts</p></Link>
          </div>
        </div>
       

      <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '> 
        {/* PACKAGE 1 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Bali01} className="w-full h-full object-cover" alt="Bali" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Bali: A Tropical Escape for 4Nights/ 5Days</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Nusa Penida, South Bali</p>
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
            <img src={Bali02} className="w-full h-full object-cover" alt="Bali" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Exclusive Bali Getaway Package for 5Nights/6Days</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Nusa Penida, North Bali, Kuta, Ubud, Kintamani</p>
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
            <img src={Bali03} className="w-full h-full object-cover" alt="Bali" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Bali: A Radiance Retreat Package</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Nusa Penida, North Bali, Ubud, Kintamani tour</p>
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
            <img src={Bali04} className="w-full h-full object-cover" alt="Bali" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Bali: A Week of Wonders In Paradise Package</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Nusa Penida, South Bali, Gili Island, Ubud</p>
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
            <img src={Bali05} className="w-full h-full object-cover" alt="Bali" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Bali Kaleidoscope: A 9-Day Journey Package</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Nusa Penida, Kuta, Gili Island, Ubud</p>
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
            <img src={Bali06} className="w-full h-full object-cover" alt="Bali" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Bali Adventure: 10 days of Bliss and Discovery Package            </p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Nusa Penida, South Bali, Gili Island, Ubud</p>
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
            <img src={Bali07} className="w-full h-full object-cover" alt="Bali" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">Singapore Sparks and Bali Breeze</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Universal Studios, Sentosa Islands, Night Safari, Nusa Penida, South Bali, Gili Island, Ubud</p>
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
          <div className="md:max-w-7xl md:mx-auto text-xl md:text-3xl p-5 md:block " ref={targetDivRef}>
            <p className="text-3xl md:text-4xl font-bold pt-10 text-center">More About Bali</p>


            <p className="pt-5 cursor-pointer" onClick={() => handleAboutClick('exclusive')}
                style={{ color: expandedContent === 'exclusive' ? 'gray' : 'black' }}>GSK World Travels: Exclusive Bali Packages for All Travelers
                </p>
            {expandedContent === 'exclusive' && (
              <div className="pt-2 md:text-xl font-light">
                <p>With GSK World Travels, every Bali experience is tailored to your needs. From a short 4 Nights/5 Days getaway to an extended 11 Nights/12 Days vacation, GSK World Travels ensures that every traveler whether solo, a family, or a couple gets the perfect Bali experience. Families can enjoy customized itineraries that include treks through Bali’s lush green forests, temple visits, and fun-filled activities like surfing and water sports. .</p>
                <p>For couples seeking romance, nothing beats an intimate floating breakfast at a luxury villa or watching the breathtaking sunset at Tanah Lot. Adventure lovers will find joy in trekking Mount Batur, experiencing the Bali Swing, or diving into the clear blue waters at one of Bali’s many beaches.</p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            )}
            
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('restaurants')}
              style={{ color: expandedContent === 'restaurants' ? 'gray' : 'black' }}>Must-Visit Restaurants: Savor the Flavors of Bali
</p>
            {expandedContent === 'restaurants' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Bali's culinary scene is a fusion of traditional Indonesian fare and global influences, offering a dining experience that will leave you wanting more. You can find local favorites at charming warungs or enjoy gourmet dining at beachfront cafes and high-end restaurants. For an authentic taste of Bali, visit Warung Murni in Ubud for dishes like Nasi Goreng or Babi Guling. If seafood is your passion, head to Jimbaran Beach for freshly grilled fish and prawns served at one of the many beachside shacks.</p>
                <p>For a refined dining experience, try Sardine in Seminyak, which serves fresh seafood with a view of lush rice paddies, or the sophisticated Locavore, which focuses on farm-to-table dishes with a modern twist. Bali also caters to vegetarians and vegans, with cafes like The Seeds of Life offering innovative plant-based cuisine.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('places')}
              style={{ color: expandedContent === 'places' ? 'gray' : 'black' }}>Things to Do in Bali: A Land of Adventure 
</p>
            {expandedContent === 'places' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Bali is a land of diverse experiences, offering something for every kind of traveler. Start your day with an exhilarating sunrise trek up Mount Batur, one of Bali’s active volcanoes, or take a spiritual journey through the Sacred Monkey Forest in Ubud, where ancient temples and mischievous monkeys coexist.</p>
                <p>For adventure seekers, Bali offers world-class surfing, scuba diving, and paragliding opportunities. Head to the beaches of Kuta, Canggu, or Padang Padang for some of the best surfing spots in the world. If you're looking for something more laid-back, try the Bali Swing—a thrilling ride that offers breathtaking views of the jungle and rice terraces below.</p>
                <p>Exploring Bali’s temples is a must. Tanah Lot, a temple perched on a rock in the sea, is famous for its dramatic sunsets, while Besakih Temple, known as the Mother Temple, offers a serene spiritual experience on the slopes of Mount Agung.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('nightlife')}
              style={{ color: expandedContent === 'nightlife' ? 'gray' : 'black' }}>Bali’s Nightlife: From Laid-Back to Lively
</p>
            {expandedContent === 'nightlife' && (
              <div className="pt-2 md:text-xl font-light">
                <p>When the sun goes down, Bali’s nightlife comes alive, offering a mix of laid-back beach vibes and exciting parties. In Seminyak and Kuta, you’ll find beach clubs like Potato Head and Finns Beach Club, where you can sip cocktails while watching the sunset before dancing the night away. For a more relaxed evening, enjoy a beachfront dinner at one of the cozy cafes or stroll through the Ubud Night Market for delicious street food and local crafts.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('adventureActivities')}
              style={{ color: expandedContent === 'nightlife' ? 'gray' : 'black' }}>Adventure Activities: Thrills in Every Corner
</p>
            {expandedContent === 'nightlife' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Bali is a paradise for adrenaline junkies. Whether it’s surfing, paragliding, or scuba diving, the island offers endless opportunities for adventure. Ride the waves at Bingin Beach or dive into the clear waters of Nusa Penida to explore vibrant coral reefs. For something truly unique, try white-water rafting on the Ayung River, surrounded by lush jungle and waterfalls.</p>
                <p>If hiking is your thing, take a trek through Bali’s rice terraces or climb Mount Batur for a sunrise view that will leave you breathless. And don’t miss out on the iconic Bali Swing, where you can soar high above the jungle and capture some of the most Instagram-worthy moments.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('beaches')}
              style={{ color: expandedContent === 'beaches' ? 'gray' : 'black' }}>Beaches, Sunsets, and Relaxation</p>
            {expandedContent === 'beaches' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Bali’s beaches are world-renowned, offering both excitement and relaxation. The calm, clear blue waters of Nusa Dua are perfect for swimming and snorkeling, while the vibrant beaches of Seminyak and Legian are ideal for lounging and enjoying the island’s laid-back vibe. For those in search of serenity, the beaches at Amed and Lovina offer a peaceful escape from the crowds, with crystal-clear waters and beautiful coral reefs to explore.</p>
                <p>Don’t miss out on Bali’s mesmerizing sunsets, especially at Uluwatu Temple or Echo Beach, where the sun sinks into the horizon in a spectacular display of colors. </p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('passport')}
              style={{ color: expandedContent === 'passport' ? 'gray' : 'black' }}>Passport Requirements: Important Information</p>
            {expandedContent === 'passport' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Before you pack your bags for Bali, make sure your passport is valid for at least six months from your date of entry. Travelers from most countries can enter Bali with a Visa on Arrival, valid for 30 days, which can be extended once for an additional 30 days.
                </p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('facts')}
              style={{ color: expandedContent === 'facts' ? 'gray' : 'black' }}>Facts About Bali
</p>
            {expandedContent === 'facts' && (
              <div className="pt-2 md:text-xl font-light">
                <ul>
                  <li>-Bali is home to over 20,000 temples, including the iconic Pura Ulun Danu Bratan, located on the shores of Lake Bratan.
                  </li>
                  <li>-A visit to the Sacred Monkey Forest in Ubud is a must for animal lovers and those interested in Balinese culture.
                  </li>
                  <li>-Bali is famous for its beaches, surfing culture, rice terraces, and vibrant arts and crafts scene.</li>
                </ul>
                <p></p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('inclusive')}
              style={{ color: expandedContent === 'inclusive' ? 'gray' : 'black' }}>Spectacular All-Inclusive Holidays by GSK World Travels
</p>
            {expandedContent === 'inclusive' && (
              <div className="pt-2 md:text-xl font-light">
                <p>With GSK World Travels, your Bali experience is elevated to new heights. Our spectacular all-inclusive holiday packages cover everything from luxurious accommodations and dining to guided tours and adventure activities. Whether you’re looking to trek the volcanic mountains, explore hidden temples, or simply relax on pristine beaches, GSK World Travels has the perfect Bali vacation waiting for you.</p>
                <p>Join us for Bali is a destination that has it all! Natural beauty, rich culture, adventure, and relaxation. From the bustling streets of Seminyak to the tranquil rice fields of Ubud, make sure to enjoy your perfect Bali vacation exclusively by GSK World Travels! With love. </p>
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
            question="What is the best time to visit Bali?"
            answer="The best time to visit Bali is during the dry season, from April to October. This is when the weather is most pleasant, making it ideal for outdoor activities and beach trips."
          />
          <FAQItem
            question="Do I need a visa to visit Bali?"
            answer="Yes, a visa is required for many travelers, though citizens from several countries can get a visa on arrival. It's best to check with your local Indonesian consulate for the most up-to-date information."
          />
          <FAQItem
            question="What are the top places to visit in Bali?"
            answer="Some must-see places in Bali include Ubud, known for its art and culture, Kuta Beach for surfing and sunsets, Tanah Lot Temple for breathtaking views, and the rice terraces of Tegallalang."
          />
          <FAQItem
            question="Is Bali family-friendly?"
            answer="Absolutely! Bali has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
          />
          <FAQItem
            question="Is Bali family-friendly?"
            answer="Absolutely! Bali has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
          />
        </div>
        <div className="w-full md:w-1/2 pl-2">
          
          <FAQItem
            question="How is the internet connectivity in Bali?"
            answer="Internet connectivity in Bali is generally good in urban areas and tourist hotspots. Many hotels, cafes, and restaurants offer free Wi-Fi, though speeds can vary in rural locations."
          />
          <FAQItem
            question="Is Bali safe for solo travelers?"
            answer="Yes, Bali is considered a safe destination for solo travelers. As with any travel destination, it's important to stay aware of your surroundings, avoid isolated areas at night, and keep your valuables secure."
          />
          <FAQItem
            question="What are the common modes of transportation in Bali?"
            answer="Popular transportation options in Bali include taxis, scooter rentals, and ride-sharing services like Grab. For short distances, walking is also convenient in many areas."
          />
          <FAQItem
            question="Can I use my credit card in Bali?"
            answer="Yes, credit cards are widely accepted in hotels, restaurants, and larger stores. However, it’s a good idea to carry some cash for smaller businesses or local markets that may not accept cards."
          />
          <FAQItem
            question="What local customs should I be aware of in Bali?"
            answer="Visitors should dress modestly when visiting temples, remove shoes before entering homes, and avoid touching people's heads, as it is considered disrespectful. Always show respect for Balinese culture and traditions."
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
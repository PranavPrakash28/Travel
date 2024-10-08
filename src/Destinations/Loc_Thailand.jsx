import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faPassport, faPlane, faBed, faCamera, faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Thailand from '../Components/Image/Thailand.jpg';
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
                <title>Thailand</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="w-full font-oswald">
        <div className="w-full h-80 md:h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${Thailand})` }}>
          {/* image */}
        </div>

        <div className="flex flex-col md:flex-row shadow-lg rounded-2xl shadow-black mt-10 md:max-w-7xl mx-auto px-4 text-md md:h-96"> 
          <div className="md:w-3/4 p-5 border-r-2 border-gray-600 md:h-auto">
            <p className="text-xl md:text-4xl font-bold"
              style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 0.5)' }}>Thailand a serene Beauty</p> 
            <p className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
              Thailand, often referred to as the “Island of the Gods,” is a tropical paradise in Indonesia, attracting millions of tourists each year. Known for its stunning beaches, vibrant culture, and lush green landscapes, Thailand offers a perfect mix of relaxation, adventure, and cultural immersion.
              {seeMore && (
                <span>
                  Thailand’s unique blend of natural beauty and rich culture creates an unparalleled experience for visitors. The island is renowned for its world-class yoga retreats, spa experiences, and vibrant nightlife, especially in areas like Seminyak and Kuta. Adventure seekers can enjoy water sports, jungle treks, and exploring hidden waterfalls.
                </span>
              )}
              <span
                className="ml-2 cursor-pointer  text-sm underline" 
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </span>
            </p>
          </div>

          <div className="md:w-1/4 text-sm h-auto md:text-sm bg-white text-black p-5 md:block"> 
            <p className="text-xl md:text-3xl font-extrabold">About Thailand</p> 
            <p className="pt-5 cursor-pointer" onClick={() => handleAboutClick('exclusive')}>Exclusive Thailand Packages</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('restaurants')}>Must Visit Restaurants</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('places')}>Things to do in Thailand</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('nightlife')}>Night life in Thailand</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('adventureActivities')}>Adventure Activities</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('beaches')}>Beaches</p>
            <p className='pt-2 cursor-pointer' onClick={() => handleAboutClick('passport')}>Passport</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('facts')}>Facts</p>
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('inclusive')}>All Inclusive</p>
            <Link to='/contact'><p className=" pt-2 text-lg text-red-600 cursor-pointer underline">Ask from Experts</p></Link>
          </div>
        </div>
       

      <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '> 
        {/* PACKAGE 1 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl mx-auto">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Thailand} className="w-full h-full object-cover" alt="Thailand" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM Thailand INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
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
            <img src={Thailand} className="w-full h-full object-cover" alt="Thailand" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM Thailand INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
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
            <img src={Thailand} className="w-full h-full object-cover" alt="Thailand" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM Thailand INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
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
            <img src={Thailand} className="w-full h-full object-cover" alt="Thailand" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM Thailand INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
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
            <img src={Thailand} className="w-full h-full object-cover" alt="Thailand" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM Thailand INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
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
            <img src={Thailand} className="w-full h-full object-cover" alt="Thailand" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM Thailand INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
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
            <img src={Thailand} className="w-full h-full object-cover" alt="Thailand" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM Thailand INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
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
          <div className="md:max-w-7xl md:mx-auto text-xl md:text-3xl  rounded-3xl shadow-black shadow-2xl p-5 md:block " ref={targetDivRef}>
            <p className="text-3xl md:text-4xl font-bold pt-10 text-center">More About Thailand</p>


            <p className="pt-5 cursor-pointer" onClick={() => handleAboutClick('exclusive')}
                style={{ color: expandedContent === 'exclusive' ? 'gray' : 'black' }}>Hidden Gems</p>
            {expandedContent === 'exclusive' && (
              <div className="pt-2 md:text-xl font-light">
                <p>1. Nusa Penida Island: Just a short boat ride from Thailand, this island offers pristine beaches, dramatic cliffs, and world-class snorkeling and diving spots.</p>
                <p>2. Sekumpul Waterfall: One of Thailand’s most picturesque waterfalls, nestled in the northern part of the island and surrounded by lush rainforest.</p>
                <p>3. Tirta Gangga: A beautiful water palace with stunning fountains, gardens, and stone sculptures.</p>
                <p>4. Jatiluwih Rice Terraces: A UNESCO World Heritage site, these terraces are more remote than the Tegallalang, offering tranquility and stunning natural beauty.</p>
                <p>5. Mount Batur: An active volcano that offers a breathtaking sunrise trek for adventure enthusiasts.</p>
              </div>
            )}
            
            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('restaurants')}
              style={{ color: expandedContent === 'restaurants' ? 'gray' : 'black' }}>Culinary Delights</p>
            {expandedContent === 'restaurants' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Thailand is known for its diverse culinary scene, from traditional Thailandnese dishes to international cuisine. Must-try local dishes include:</p>
                <ul>
                  <li>- Nasi Goreng: Indonesia’s classic fried rice, often served with a fried egg on top.</li>
                  <li>- Babi Guling: Roasted suckling pig, a traditional Thailandnese delicacy.</li>
                  <li>- Lawar: A mix of vegetables, coconut, and minced meat with rich spices.</li>
                </ul>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('places')}
              style={{ color: expandedContent === 'places' ? 'gray' : 'black' }}>Places to visit</p>
            {expandedContent === 'places' && (
              <div className="pt-2 md:text-xl font-light">
                <p>Top Attractions:</p>
                <ul>
                  <li>1. Uluwatu Temple: Perched on a cliff overlooking the Indian Ocean, this temple is not only a religious site but also a prime spot for witnessing stunning sunsets.</li>
                  <li>2. Tegallalang Rice Terraces: Located near Ubud, these iconic terraces offer scenic views of lush green rice paddies and are ideal for photography and exploration.</li>
                  <li>3. Mount Batur: An active volcano that offers a breathtaking sunrise trek for adventure enthusiasts.</li>
                  <li>4. Seminyak Beach: Perfect for beach lovers, this spot is known for its upscale resorts, beach bars, and vibrant nightlife.</li>
                  <li>5. Sacred Monkey Forest Sanctuary: In the heart of Ubud, this forest is home to hundreds of playful monkeys and ancient temples.</li>
                </ul>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('nightlife')}
              style={{ color: expandedContent === 'nightlife' ? 'gray' : 'black' }}>Best time to visit</p>
            {expandedContent === 'nightlife' && (
              <div className="pt-2 md:text-xl font-light">
                <p>The ideal time to visit Thailand is during the dry season, from April to October, when the weather is sunny and pleasant, making it perfect for outdoor activities, beach visits, and exploring temples.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('adventureActivities')}
              style={{ color: expandedContent === 'nightlife' ? 'gray' : 'black' }}>Adventure Activities</p>
            {expandedContent === 'nightlife' && (
              <div className="pt-2 md:text-xl font-light">
                <p>The ideal time to visit Thailand is during the dry season, from April to October, when the weather is sunny and pleasant, making it perfect for outdoor activities, beach visits, and exploring temples.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('beaches')}
              style={{ color: expandedContent === 'beaches' ? 'gray' : 'black' }}>Beaches</p>
            {expandedContent === 'beaches' && (
              <div className="pt-2 md:text-xl font-light">
                <p>The ideal time to visit Thailand is during the dry season, from April to October, when the weather is sunny and pleasant, making it perfect for outdoor activities, beach visits, and exploring temples.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('passport')}
              style={{ color: expandedContent === 'passport' ? 'gray' : 'black' }}>Passport</p>
            {expandedContent === 'passport' && (
              <div className="pt-2 md:text-xl font-light">
                <p>The ideal time to visit Thailand is during the dry season, from April to October, when the weather is sunny and pleasant, making it perfect for outdoor activities, beach visits, and exploring temples.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('facts')}
              style={{ color: expandedContent === 'facts' ? 'gray' : 'black' }}>Facts</p>
            {expandedContent === 'facts' && (
              <div className="pt-2 md:text-xl font-light">
                <p>The ideal time to visit Thailand is during the dry season, from April to October, when the weather is sunny and pleasant, making it perfect for outdoor activities, beach visits, and exploring temples.</p>
              </div>
            )}

            <p className="pt-2 cursor-pointer" onClick={() => handleAboutClick('inclusive')}
              style={{ color: expandedContent === 'inclusive' ? 'gray' : 'black' }}>All Inclusive</p>
            {expandedContent === 'inclusive' && (
              <div className="pt-2 md:text-xl font-light">
                <p>The ideal time to visit Thailand is during the dry season, from April to October, when the weather is sunny and pleasant, making it perfect for outdoor activities, beach visits, and exploring temples.</p>
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
            question="What is the best time to visit Thailand?"
            answer="The best time to visit Thailand is during the dry season, from April to October. This is when the weather is most pleasant, making it ideal for outdoor activities and beach trips."
          />
          <FAQItem
            question="Do I need a visa to visit Thailand?"
            answer="Yes, a visa is required for many travelers, though citizens from several countries can get a visa on arrival. It's best to check with your local Indonesian consulate for the most up-to-date information."
          />
          <FAQItem
            question="What are the top places to visit in Thailand?"
            answer="Some must-see places in Thailand include Ubud, known for its art and culture, Kuta Beach for surfing and sunsets, Tanah Lot Temple for breathtaking views, and the rice terraces of Tegallalang."
          />
          <FAQItem
            question="Is Thailand family-friendly?"
            answer="Absolutely! Thailand has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
          />
          <FAQItem
            question="Is Thailand family-friendly?"
            answer="Absolutely! Thailand has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
          />
        </div>
        <div className="w-full md:w-1/2 pl-2">
          
          <FAQItem
            question="How is the internet connectivity in Thailand?"
            answer="Internet connectivity in Thailand is generally good in urban areas and tourist hotspots. Many hotels, cafes, and restaurants offer free Wi-Fi, though speeds can vary in rural locations."
          />
          <FAQItem
            question="Is Thailand safe for solo travelers?"
            answer="Yes, Thailand is considered a safe destination for solo travelers. As with any travel destination, it's important to stay aware of your surroundings, avoid isolated areas at night, and keep your valuables secure."
          />
          <FAQItem
            question="What are the common modes of transportation in Thailand?"
            answer="Popular transportation options in Thailand include taxis, scooter rentals, and ride-sharing services like Grab. For short distances, walking is also convenient in many areas."
          />
          <FAQItem
            question="Can I use my credit card in Thailand?"
            answer="Yes, credit cards are widely accepted in hotels, restaurants, and larger stores. However, it’s a good idea to carry some cash for smaller businesses or local markets that may not accept cards."
          />
          <FAQItem
            question="What local customs should I be aware of in Thailand?"
            answer="Visitors should dress modestly when visiting temples, remove shoes before entering homes, and avoid touching people's heads, as it is considered disrespectful. Always show respect for Thailandnese culture and traditions."
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
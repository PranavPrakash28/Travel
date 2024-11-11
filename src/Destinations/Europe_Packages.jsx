import { useState, useEffect } from "react";
import EuropeBG5 from "../Components/Image/EuropeBG5.jpg";
import EuropeBG6 from "../Components/Image/EuropeBG6.jpg";
import Paris from "../Components/Image/Paris.jpg";
import Rome from "../Components/Image/Rome.jpg";
import Barcelona from "../Components/Image/Barcelona.jpg";
import London from "../Components/Image/London.jpg";
import Amsterdam from "../Components/Image/Amsterdam.jpg";
import Zurich from "../Components/Image/Zurich.jpg";
import Prague from "../Components/Image/Prague.jpg";
import Vienna from "../Components/Image/Vienna.jpg";
// import Berlin from '../Components/Image/Berlin.jpg';
// import Athens from '../Components/Image/Athens.jpg';
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";

const slides = [
  {
    img: EuropeBG5,
  },
  {
    img: EuropeBG6,
  },
];

// const BestDeals = [
//   {
//     img: Paris,
//     duration: '5 Days & 4 Nights',
//     text: 'Paris, France | Eiffel Tower and Museums',
//     price: 'EUR 1500'
//   },
//   {
//     img: Rome,
//     duration: '6 Days & 5 Nights',
//     text: 'Rome, Italy | Colosseum and Vatican City',
//     price: 'EUR 1800'
//   },
//   {
//     img: Barcelona,
//     duration: '7 Days & 6 Nights',
//     text: 'Barcelona, Spain | Architecture and Beaches',
//     price: 'EUR 1400'
//   },
//   {
//     img: London,
//     duration: '4 Days & 3 Nights',
//     text: 'London, UK | Historical Landmarks and Culture',
//     price: 'EUR 2000'
//   },
//   {
//     img: Amsterdam,
//     duration: '5 Days & 4 Nights',
//     text: 'Amsterdam, Netherlands | Canals and Museums',
//     price: 'EUR 1600'
//   },
//   {
//     img: Zurich,
//     duration: '6 Days & 5 Nights',
//     text: 'Zurich, Switzerland | Mountains and Lakes',
//     price: 'EUR 2500'
//   },
//   {
//     img: Prague,
//     duration: '4 Days & 3 Nights',
//     text: 'Prague, Czech Republic | Castles and Old Town',
//     price: 'EUR 1300'
//   },
//   {
//     img: Vienna,
//     duration: '5 Days & 4 Nights',
//     text: 'Vienna, Austria | Palaces and Opera',
//     price: 'EUR 1700'
//   },
//   {
//     img: Berlin,
//     duration: '6 Days & 5 Nights',
//     text: 'Berlin, Germany | Historical Sites and Museums',
//     price: 'EUR 1900'
//   },
//   {
//     img: Athens,
//     duration: '7 Days & 6 Nights',
//     text: 'Athens, Greece | Ancient Ruins and Culture',
//     price: 'EUR 2100'
//   }
// ];

// Custom Next Arrow
// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-orange-600 text-black rounded-full p-2 md:p-4"
//       onClick={onClick}
//     >
//       <i className="fas fa-chevron-right text-lg md:text-2xl"></i>
//     </div>
//   );
// };

// // Custom Prev Arrow
// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-orange-600 text-white rounded-full p-2 md:p-4"
//       onClick={onClick}
//     >
//       <i className="fas fa-chevron-left text-lg md:text-2xl"></i>
//     </div>
//   );
// };

function Loc_Europe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [seeMore, setSeeMore] = useState(false);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(handleNext, 3000);
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   centerMode: true,
  //   centerPadding: '60px',
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerPadding: '40px',
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerPadding: '20px',
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Europe</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src={slides[currentSlide].img}
          alt="/"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald">
        <div className="max-w-7xl rounded-3xl mt-10 shadow-xl shadow-black p-8 md:py-10 bg-orange-600 text-white flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col text-yellow-300 font-bold text-4xl md:text-6xl">
            <p style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}>&quot;EUROPEAN</p>
            <p style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}>ESCAPE&quot;</p>
          </div>
          <div className="flex flex-col text-center  md:text-left">
            <p className="text-xl md:text-4xl flex">
            Explore the timeless charm of Europe, book your dream getaway now!
            </p>
            <Link to="/Booking_Form">
              <button
                className="text-lg md:text-2xl font-bold mt-8 md:mt-5 text-yellow-300   py-2 px-4"
                style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}
              >
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald">
        <div className="max-w-7xl rounded-3xl   flex flex-col md:flex justify-between items-center gap-10">
          <p
            className="text-xl md:text-5xl mt-8 font-bold md:text-start"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0)" }}
          >
            Europe: A Continent of Endless Discovery
          </p>
          <p className=" text-md md:text-xl leading-6 md:leading-1">
            Europe offers a captivating array of destinations, each with its own
            unique allure and experiences for travelers. From the breathtaking
            fjords of Norway to the charming canals of Venice, Europe presents a
            rich blend of history, culture, and natural beauty.
            {seeMore && (
              <span>
                Europe offers a captivating array of destinations, each with its
                own unique allure and experiences for travelers. From the
                breathtaking fjords of Norway to the charming canals of Venice,
                Europe presents a rich blend of history, culture, and natural
                beauty. The continent is renowned for its iconic landmarks, such
                as the Eiffel Tower in Paris, the Acropolis in Athens, and the
                medieval castles scattered across Germany. For art lovers,
                cities like Florence and Amsterdam house world-class museums,
                while culinary enthusiasts can savor gourmet delights in France
                and Italy. Adventure seekers can explore the Swiss Alps, sail
                along the Mediterranean, or discover the Northern Lights in
                Iceland. Europe’s diverse regions promise endless exploration
                and unforgettable memories.
              </span>
            )}
            <span
              className="ml-2 cursor-pointer  text-lg text-red-600"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "read less" : "read more"}
            </span>
          </p>
        </div>
      </div>

      {/* <div className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-2xl md:text-4xl font-bold text-start font-oswald mb-10">BEST DEALS</p>
          
          <div className="relative">
            <Slider {...sliderSettings}>
              {BestDeals.map((deal, index) => (
                <div key={index} className="p-4">
                  <div className="h-[450px] md:h-[600px] bg-gray-100  flex flex-col justify-center items-center">
                    <img
                      src={deal.img}
                      alt="/"
                      className="h-64 md:h-96 w-full object-cover rounded-t-lg"
                    />
                    <div className="flex flex-col items-start font-oswald bg-white p-4 w-full rounded-b-lg">
                      <p className="text-xs text-gray-600">{deal.duration}</p> 
                      <p className="text-sm font-semibold">{deal.text}</p> 
                      <p className="text-base text-orange-600">{deal.price}</p> 
                      <button className="mt-2 bg-orange-600 text-white py-1 px-3 rounded-md text-xs"> 
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> */}

      {/* Cards Section */}
      <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10 mt-20 ">
        {/* 1st card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72   rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Paris} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>PARIS</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 2nd card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Rome} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>ROME</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 3rd card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Barcelona} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>BARCELONA</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 4th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={London} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>LONDON</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10  ">
        {/* 5th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Amsterdam} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>AMSTERDAM</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 6th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Zurich} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>ZURICH</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 7th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Prague} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>PRAGUE</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 8th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Vienna} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>VIENNA</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10 mt-20 ">
        {/* 1st card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Paris} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>PARIS</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 2nd card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Rome} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>ROME</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 3rd card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Barcelona} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>BARCELONA</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 4th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={London} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>LONDON</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10  ">
        {/* 5th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Amsterdam} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>AMSTERDAM</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 6th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Zurich} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>ZURICH</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 7th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Prague} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>PRAGUE</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        {/* 8th card */}
        <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72    rounded-md font-oswald mx-auto overflow-hidden">
          <img src={Vienna} alt="/" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-2 left-2 text-white">
            <div className="text-2xl font-normal">
              <p>VIENNA</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
            <p className="mt-2 text-sm">
              Creating unforgettable adventures, one group trip at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 m-2">
            <Link to="/Booking_Form">
              <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Loc_Europe;

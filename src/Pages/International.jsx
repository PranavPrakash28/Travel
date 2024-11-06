import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
// import Domestic2 from '../Components/Image/Domestic2.jpg';
// import Domestic4 from '../Components/Image/Domestic4.jpg';
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Singapore from "../Components/Image/Singapore-04.jpg";
// import Bali from '../Components/Image/Bali.webp';
import Paris from "../Components/Image/Paris.jpg";
import Tokyo from "../Components/Image/Tokyo.jpg";
import Dubai from "../Components/Image/Dubai.jpg";
import Maldives from "../Components/Image/Maldives.jpg";
import Switzerland from "../Components/Image/Switzerland.jpg";
import Australia from "../Components/Image/Australia.jpg";
import NewZealand from "../Components/Image/Newzealand.jpg";
// import Thailand from '../Components/Image/Thailand.jpg';
import Vietnam from "../Components/Image/Vietnam.jpg";
import Greece from "../Components/Image/Greece.jpg";
import Armenia from "../Components/Image/Armenia.jpg";
import Mauritius from "../Components/Image/Mauritius.jpg";
import Georgia from "../Components/Image/Georgia.jpg";
import Malaysia from "../Components/Image/Malaysia.jpg";
import Azerbaijan from "../Components/Image/Azerbaijan.jpg";
import SriLanka from "../Components/Image/SriLanka.jpg";
import Seychelles from "../Components/Image/Seychelles.jpg";
import Turkey from "../Components/Image/Turkey.jpg";

const slides = [
  {
    img: Greece,
  },
  {
    img: Australia,
  },
];

// const BestDeals = [
//   {
//     img: Bali,
//     duration: '7 Days & 6 Nights',
//     text: 'Bali, Indonesia | Beaches and Culture',
//     price: 'INR 60000'
//   },
//   {
//     img: Paris,
//     duration: '5 Days & 4 Nights',
//     text: 'Paris, France | Eiffel Tower and Museums',
//     price: 'INR 90000'
//   },
//   {
//     img: Tokyo,
//     duration: '6 Days & 5 Nights',
//     text: 'Tokyo, Japan | Modern City and Tradition',
//     price: 'INR 80000'
//   },
//   {
//     img: Dubai,
//     duration: '5 Days & 4 Nights',
//     text: 'Dubai, UAE | Skyscrapers and Shopping',
//     price: 'INR 70000'
//   },
//   {
//     img: Maldives,
//     duration: '7 Days & 6 Nights',
//     text: 'Maldives | Luxury Resorts and Coral Reefs',
//     price: 'INR 100000'
//   },
//   {
//     img: Switzerland,
//     duration: '6 Days & 5 Nights',
//     text: 'Switzerland | Alps and Lakes',
//     price: 'INR 120000'
//   },
//   {
//     img: Australia,
//     duration: '10 Days & 9 Nights',
//     text: 'Australia | Sydney and Great Barrier Reef',
//     price: 'INR 150000'
//   },
//   {
//     img: NewZealand,
//     duration: '8 Days & 7 Nights',
//     text: 'New Zealand | Mountains and Adventure Sports',
//     price: 'INR 140000'
//   },
//   {
//     img: Thailand,
//     duration: '5 Days & 4 Nights',
//     text: 'Thailand | Beaches and Nightlife',
//     price: 'INR 45000'
//   },
//   {
//     img: Greece,
//     duration: '7 Days & 6 Nights',
//     text: 'Greece | Ancient History and Islands',
//     price: 'INR 110000'
//   }
// ];

// Custom Next Arrow
// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-500 text-black rounded-full p-2 md:p-4"
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
//       className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-500 text-white rounded-full p-2 md:p-4"
//       onClick={onClick}
//     >
//       <i className="fas fa-chevron-left text-lg md:text-2xl"></i>
//     </div>
//   );
// };

function Domestic() {
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
  //   prevArrow: <h1revArrow />,
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
        <title>International</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="relative w-full h-[300px] md:h-[500px]">
        <img
          src={slides[currentSlide].img}
          alt="/"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald">
        {/* <div className="max-w-7xl rounded-3xl mt-10 shadow-xl shadow-black p-8 md:py-10 bg-gray-500 text-white flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col text-yellow-300 font-bold text-4xl md:text-6xl">
            <h1 style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}>&quot;EPIC</h1>
            <h1 style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}>ADVENTURE&quot;</h1>
          </div>
          <div className="flex flex-col text-center  md:text-left">
            <h1 className="text-xl md:text-4xl flex">
            Embark on unforgettable journeys across borders, where adventure and culture await at every turn.
            </h1>
            <Link to="/Booking_Form">
              <button
                className="text-lg md:text-2xl font-bold mt-8 md:mt-5 text-yellow-300 rounded-lg  py-2 px-4"
                style={{ textShadow: '2px 2px 4px rgba(1, 0, 0.5, 2)' }}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
        </div> */}
      </div>
      {/* International section */}
      <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald">
        <div className="max-w-7xl rounded-3xl  text-black flex flex-col md:flex justify-between items-center gap-10">
          <h1
            className="text-xl md:text-5xl pt-5 font-bold md:text-start"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0)" }}
          >
            Global Destinations: A World of Endless Exploration
          </h1>
          <h1 className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
            The world offers an incredible array of destinations, each with its
            own unique charm and experiences for travelers. From the stunning
            fjords of Norway to the bustling streets of Tokyo, international
            tourism presents a rich tapestry of cultures, landscapes, and
            adventures.
            {seeMore && (
              <span>
                The world offers an incredible array of destinations, each with
                its own unique charm and experiences for travelers. From the
                stunning fjords of Norway to the bustling streets of Tokyo,
                international tourism presents a rich tapestry of cultures,
                landscapes, and adventures. Europe is celebrated for its
                historical landmarks, such as the Eiffel Tower in Paris and the
                Colosseum in Rome, while Asia is renowned for its spiritual
                journeys, from the temples of Thailand to the Great Wall of
                China. For thrill-seekers, destinations like New Zealand offer
                bungee jumping and skydiving, while the pristine beaches of the
                Maldives and the Seychelles promise tranquility and luxury.
              </span>
            )}
            <span
              className="ml-2 cursor-pointer  text-lg text-red-600"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "read less" : "read more"}
            </span>
          </h1>
        </div>
      </div>

      <div className="w-full bg-white py-10 font-oswald">
        {/* <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-start mb-10">BEST DEALS</h1>
          
          <div className="relative">
            <Slider {...sliderSettings}>
              {BestDeals.map((deal, index) => (
                <div key={index} className="p-4">
                  <div className="h-[450px] md:h-[600px] bg-gray-100 rounded-lg flex flex-col justify-center items-center">
                    <img
                      src={deal.img}
                      alt="/"
                      className="h-64 md:h-96 w-full object-cover rounded-t-lg"
                    />
                    <div className="flex flex-col items-start bg-white p-4 w-full rounded-b-lg">
                      <h1 className="text-xs text-gray-600">{deal.duration}</h1> 
                      <h1 className="text-sm font-semibold">{deal.text}</h1> 
                      <h1 className="text-base text-gray-600">{deal.price}</h1> 
                      <Link to='/Booking_Form'><button className="mt-2 bg-gray-600 text-white py-1 px-3 rounded-md text-xs">
                        BOOK NOW
                      </button></Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div> */}

        {/* Cards Section */}
        <div className="w-full md:max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 mb-10 ">
          {/* 1st card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Tokyo} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>TOKYO</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Tokyo_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 2nd card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Paris} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>PARIS</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Paris_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 3rd card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Dubai} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>DUBAI</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Dubai_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 4th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Maldives}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>MALDIVES</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Maldives_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 mb-10 ">
          {/* 5th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Switzerland}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>SWITZERLAND</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
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
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Australia}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>AUSTRALIA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
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
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={NewZealand}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>NEW ZEALAND</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
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
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Greece} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>GREECE</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
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

        <div className="w-full md:max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 mb-10 ">
          {/* 9th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Vietnam} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>VIETNAM</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Booking_Form">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 10th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Malaysia}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>MALAYSIA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Booking_Form">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 11th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Georgia} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>GEORGIA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Booking_Form">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 12th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Maldives}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>MALDIVES</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
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
        <div className="w-full md:max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 mb-10 ">
          {/* 13th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Seychelles}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>SEYCHELLES</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Booking_Form">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 14th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Mauritius}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>MAURITIUS</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Booking_Form">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 15th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Turkey} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>TURKEY</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Booking_Form">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 16th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Armenia} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>ARMENIA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
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
        <div className="w-full md:max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 mb-10 ">
          {/* 17th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Singapore}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>SINGAPORE</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Singapore_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 18ht card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={Azerbaijan}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>AZERBAIJAN</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Booking_Form">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 19th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img
              src={SriLanka}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>SRI LANKA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-light text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
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
      </div>

      <Footer />
    </>
  );
}

export default Domestic;

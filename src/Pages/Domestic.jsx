import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Jaipur from "../Components/Image/Jaipur2.jpg";
import Domestic2 from "../Components/Image/Domestic2.jpg";
import Domestic4 from "../Components/Image/Domestic4.jpg";
import Kerala from "../Components/Image/Kerala.jpg";
import Goa from "../Components/Image/Goa.jpg";
import Agra from "../Components/Image/Agra.jpg";
import Ladakh from "../Components/Image/Ladakh.jpg";
import Varanasi from "../Components/Image/Varanasi.jpg";
import Ranthambore from "../Components/Image/Ranthambore.jpg";
// import Andaman from '../Components/Image/Andaman.jpg';
import Mysore from "../Components/Image/Mysore.jpg";
// import Sikkim from '../Components/Image/Sikkim.jpg';
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    img: Domestic2,
  },
  {
    img: Domestic4,
  },
];

// const BestDeals = [
//   {
//     img: Jaipur,
//     duration: '5 Days & 4 Nights',
//     text: 'Jaipur, Rajasthan | Palaces and Forts',
//     price: 'INR 30000'
//   },
//   {
//     img: Kerala,
//     duration: '6 Days & 5 Nights',
//     text: 'Kerala | Backwaters and Hill Stations',
//     price: 'INR 35000'
//   },
//   {
//     img: Goa,
//     duration: '7 Days & 6 Nights',
//     text: 'Goa | Beaches and Nightlife',
//     price: 'INR 25000'
//   },
//   {
//     img: Agra,
//     duration: '4 Days & 3 Nights',
//     text: 'Agra, Uttar Pradesh | Taj Mahal and Historical Sites',
//     price: 'INR 18000'
//   },
//   {
//     img: Ladakh,
//     duration: '8 Days & 7 Nights',
//     text: 'Ladakh | Mountains and Monasteries',
//     price: 'INR 45000'
//   },
//   {
//     img: Varanasi,
//     duration: '5 Days & 4 Nights',
//     text: 'Varanasi, Uttar Pradesh | Spiritual Experience and Ghats',
//     price: 'INR 20000'
//   },
//   {
//     img: Ranthambore,
//     duration: '6 Days & 5 Nights',
//     text: 'Ranthambore, Rajasthan | Wildlife Safari',
//     price: 'INR 38000'
//   },
//   {
//     img: Andaman,
//     duration: '7 Days & 6 Nights',
//     text: 'Andaman Islands | Beaches and Water Sports',
//     price: 'INR 55000'
//   },
//   {
//     img: Mysore,
//     duration: '5 Days & 4 Nights',
//     text: 'Mysore, Karnataka | Palaces and Gardens',
//     price: 'INR 22000'
//   },
//   {
//     img: Sikkim,
//     duration: '6 Days & 5 Nights',
//     text: 'Sikkim | Scenic Mountains and Culture',
//     price: 'INR 40000'
//   }
// ];

// // Custom Next Arrow
// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-red-800 text-black rounded-full p-2 md:p-4"
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
//       className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-red-800 text-white rounded-full p-2 md:p-4"
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
        <title>Domestic</title>
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

      {/* Vibrant Bharat Section */}
      <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald"></div>
      {/* India section */}
      <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald">
        <div className="max-w-7xl rounded-3xl   text-black flex flex-col md:flex justify-between items-center gap-10">
          <h1
            className="text-xl md:text-5xl pt-5 font-bold md:text-start"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0)" }}
          >
            India: A Land of Timeless Wonders
          </h1>
          <h1 className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
            India&apos;s diverse landscape and rich cultural heritage offer an
            extraordinary experience for travelers. From the majestic Himalayas
            in the north to the serene backwaters of Kerala in the south, India
            is a land of contrasts.
            {seeMore && (
              <span>
                India&apos;s diverse landscape and rich cultural heritage offer
                an extraordinary experience for travelers. From the majestic
                Himalayas in the north to the serene backwaters of Kerala in the
                south, India is a land of contrasts. It is renowned for its
                spiritual retreats, Ayurvedic treatments, and bustling cities
                like Delhi and Mumbai, known for their vibrant nightlife.
                Adventure enthusiasts can indulge in trekking in Ladakh, rafting
                in Rishikesh, and exploring the ancient temples and wildlife
                sanctuaries spread across the country.
              </span>
            )}
            <span
              className="ml-2 cursor-pointer text-red-600 text-lg"
              onClick={() => setSeeMore(!seeMore)}
            >
              {seeMore ? "read less" : "read more"}
            </span>
          </h1>
        </div>
      </div>

      {/* Best Deals Section */}
      <div className="w-full bg-white py-10">
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
                    <div className="flex flex-col   items-start bg-white p-4 w-full rounded-b-lg">
                      <h1 className="text-xs text-gray-600">{deal.duration}</h1> 
                      <h1 className="text-sm font-semibold">{deal.text}</h1> 
                      <h1 className="text-base text-red-800">{deal.price}</h1> 
                      <Link to="/Booking_Form"><button className="mt-2 text-center bg-red-800 text-white py-1 px-3 rounded-md text-xs"> 
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
        <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10 ">
          {/* 1st card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72 rounded-lg font-oswald mx-auto overflow-hidden">
            <img src={Jaipur} alt="/" className="h-full w-full object-cover" />

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>JAIPUR</h1>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>

            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Jaipur_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 2nd card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Kerala} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>KERALA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 font-light transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Kerala_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 3rd card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Goa} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>GOA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 font-light transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Goa_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 4th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Agra} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>AGRA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 font-light -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Agra_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10 ">
          {/* 5th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Ladakh} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>LADAKH</h1>
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
              src={Varanasi}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>VARANASI</h1>
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
              src={Ranthambore}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>RANTHAMBORE</h1>
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
            <img src={Mysore} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>MYSORE</h1>
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

        <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10 ">
          {/* 1st card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Jaipur} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl  font-normal hover:text-black">
                <h1>JAIPUR</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  font-light -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Jaipur_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex  justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 2nd card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Kerala} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>KERALA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 font-light transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Kerala_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 3rd card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Goa} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>GOA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 font-light transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Goa_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 4th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Agra} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>AGRA</h1>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 font-light -translate-y-1/2 text-center text-white">
              <h1 className="mt-2 text-sm">
                Creating unforgettable adventures, one group trip at a time.
              </h1>
            </div>
            <div className="absolute bottom-0 left-0 m-2">
              <Link to="/Agra_Packages">
                <button className="w-24 h-8 border border-white text-white font-bold rounded-md flex justify-center items-center hover:bg-white hover:text-black">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap md:max-w-7xl mx-auto px-4 justify-center gap-6 mb-10 ">
          {/* 5th card */}
          <div className="relative w-full sm:w-64 lg:w-64 h-auto sm:h-48 lg:h-72  rounded-lg  rounded-md font-oswald mx-auto overflow-hidden">
            <img src={Ladakh} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal  hover:text-black">
                <h1>LADAKH</h1>
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
              src={Varanasi}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal   hover:text-black">
                <h1>VARANASI</h1>
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
              src={Ranthambore}
              alt="/"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>RANTHAMBORE</h1>
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
            <img src={Mysore} alt="/" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-2 left-2 text-white">
              <div className="text-2xl font-normal hover:text-black">
                <h1>MYSORE</h1>
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

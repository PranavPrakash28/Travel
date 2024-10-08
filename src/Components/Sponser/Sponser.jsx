import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../Image/logo1.jpg";
import logo2 from "../Image/logo2.png";
import logo3 from "../Image/logo3.png";
import logo4 from "../Image/logo4.png";
import logo5 from "../Image/logo5.jpg";
import logo6 from "../Image/logo6.png";
import logo7 from "../Image/logo7.png";
import logo8 from "../Image/logo8.jpg";

function Sponser() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto py-6 border-t-4 border-black px-4">
      <p className="text-3xl font-bold mb-6 text-center">WE ARE RECOGNISED BY</p>
      <Slider {...settings}>
        <div className="p-4">
          <img src={logo1} alt="Logo 1" className="w-full h-24 object-contain mx-auto" />
        </div>
        <div className="p-4">
          <img src={logo2} alt="Logo 2" className="w-full h-24 object-contain mx-auto" />
        </div>
        <div className="p-4">
          <img src={logo3} alt="Logo 3" className="w-full h-24 object-contain mx-auto" />
        </div>
        <div className="p-4">
          <img src={logo4} alt="Logo 4" className="w-full h-24 object-contain mx-auto" />
        </div>
        <div className="p-4">
          <img src={logo5} alt="Logo 5" className="w-full h-24 object-contain mx-auto" />
        </div>
        <div className="p-4">
          <img src={logo6} alt="Logo 6" className="w-full h-24 object-contain mx-auto" />
        </div>
        <div className="p-4">
          <img src={logo7} alt="Logo 7" className="w-full h-24 object-contain mx-auto" />
        </div>
        <div className="p-4">
          <img src={logo8} alt="Logo 8" className="w-full h-24 object-contain mx-auto" />
        </div>
      </Slider>
    </div>
  );
}

export default Sponser;

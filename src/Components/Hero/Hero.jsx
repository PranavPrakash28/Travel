import { useState, useEffect } from 'react';
import React from 'react';
import discover from '../Image/discover.jpg';
import Bali from '../Image/Bali.webp';
import HeroBG from '../Image/HeroBG.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    img: discover,
    title: 'INTERNATIONAL TOUR',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut amet, dolorum tempora dicta qui vero temporibus! Ut possimus cum aperiam perferendis cupiditate quaerat.',
  },
  {
    img: Bali,
    title: 'DOMESTIC BEAUTIES',
    text: 'Explore new horizons with our exclusive deals. Whether you are seeking relaxation or adventure, we have something for everyone. Discover the beauty and excitement of new locations.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

 
  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

 
  useEffect(() => {
    const slideInterval = setInterval(handleNext, 3000); 

    
    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="w-full h-[1000px]  flex justify-center items-center" style={{ backgroundImage: `url(${HeroBG})` }}>
      <div className="w-full md:w-[65%]  md:mt-40 md:mb-5 md:h-[500px] flex bg-white shadow-lg flex-col md:flex-row">
        
        <div className="w-full md:w-3/4 h-[50%] md:h-full overflow-hidden">
          <img src={slides[currentSlide].img} alt="Discover" className="w-full h-full object-cover" />
        </div>

        
        <div className="w-full md:w-1/4 h-[50%] md:h-full flex flex-col font-oswald justify-center p-4 md:p-6 overflow-hidden">
          <p className="text-black text-xs md:text-3xl text-left font-medium mb-2 md:mb-4">EXPLORE</p>
          <p className="text-xl md:text-2xl lg:text-2xl font-medium mb-2 md:mb-4 text-blue-600 text-left overflow-visible">
            {slides[currentSlide].title.split('<br />').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <p className="text-black-600 text-left text-xs md:text-2xl overflow-visible">
            {slides[currentSlide].text}
          </p>
          <div className='flex justify-between items-center mt-4 md:mt-8'>
            <FontAwesomeIcon icon={faLessThan} className='cursor-pointer' onClick={handlePrevious} />
            <FontAwesomeIcon icon={faGreaterThan} className='cursor-pointer' onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
}

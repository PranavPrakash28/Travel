/* eslint-disable react/prop-types */
import Footer from '../Components/Footer/Footer';
import discover from '../Components/Image/discover.jpg';
import Himachal from '../Components/Image/about7.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import Sikkim from '../Components/Image/Sikkim.jpg';

// eslint-disable-next-line react-refresh/only-export-components
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-5">
      <div
        className="cursor-pointer flex justify-between bg-gray-100 p-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-bold">{question}</p>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && <p className="mt-2 p-4 bg-gray-50 text-gray-700">{answer}</p>}
    </div>
  );
};

function Loc_Himachal() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Himanchal</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src={Himachal}
          alt="/Himachal"
          className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      </div>

      <div className="font-oswald">
        <div className='w-full h-auto flex justify-center px-4 md:px-0 font-oswald'>
          <div className="max-w-7xl rounded-3xl mt-10 shadow-lg shadow-black p-8 md:py-10 text-black flex flex-col md:flex justify-between items-center gap-10 bg-white border">
            <p className="text-xl md:text-5xl font-bold text-center"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Discovering Hidden Gems of Himachal:
            </p>
            <p className="mt-2 text-md md:text-2xl leading-6 text-justify">
              Himachal Pradesh, nestled in the lap of the snow-capped Himalayas, is a destination cherished by travelers worldwide. The serene beauty of its landscapes, rich culture, and peaceful vibes call to every wanderer.
              {seeMore && (
                <span>
                  From picturesque lakes to offbeat hill stations, Himachal has a lot to offer. Plan your next adventure to explore hidden gems and make unforgettable memories.
                </span>
              )}
              <span
                className="ml-2 cursor-pointer text-blue-600 text-lg underline"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </span>
            </p>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="w-full h-auto flex-col justify-center px-4 md:px-32 font-oswald mt-8">
          {/* Destination 1 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">1. Malana</p>
            <div className="flex justify-start gap-10">
              <img src={discover} alt="Malana" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
                Malana is one of the most beautiful and mysterious villages in India, nestled in the Parvati Valley. Known for its legends and distinct cultural identity, this place offers breathtaking views and an experience unlike any other.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt assumenda enim pariatur sequi doloribus sunt tempora ullam, quas veritatis maxime deleniti rem modi hic, quaerat consectetur perspiciatis laboriosam similique?
                {seeMore && (
                  <span>
                    Malana is also home to descendants of Alexander the Great, who follow their unique laws and customs. The village is one of Himachal’s hidden gems, offering an escape into a world untouched by modern influences.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis facere ipsam. Nostrum inventore tempora soluta, culpa suscipit delectus ex beatae. Ab sint iste dolor! Ea optio fuga quaerat pariatur.
                  </span>
                )}
              </p>
              <span
                className="ml-2 cursor-pointer text-blue-600 text-lg underline"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </span>
              </div>
            </div>
            <div className="py-6 md:text-2xl text-lg text-justify">
              
              <p className="pb-1">
                <span className="font-bold">Location:</span> Northeast of the Kullu Valley
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> The Rashol Pass trek will take around 10 hours from Manikaran, or you can opt for the 2-day Chanderkhani Pass trek.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Chalal Trekking Trail, Jamula Devta Temple
              </p>
            </div>
            <div className="flex justify-center gap-4 mb-5">
              <Link to="/Booking_Form">
                <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg transition-transform duration-300 hover:scale-105">
                  BOOK ONLINE
                </button>
              </Link>
              <button className="px-4 py-2 text-red-600 border-2 border-red-600 font-bold rounded-lg transition-transform duration-300 hover:scale-105">
                CALL US FOR DETAILS
              </button>
            </div>
          </div>

          {/* Destination 2 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">2. Spiti Valley</p>
            <div className="flex justify-start gap-10">
              <img src={Himachal} alt="Spitit Valley" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
                Malana is one of the most beautiful and mysterious villages in India, nestled in the Parvati Valley. Known for its legends and distinct cultural identity, this place offers breathtaking views and an experience unlike any other.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt assumenda enim pariatur sequi doloribus sunt tempora ullam, quas veritatis maxime deleniti rem modi hic, quaerat consectetur perspiciatis laboriosam similique?
                {seeMore && (
                  <span>
                    Malana is also home to descendants of Alexander the Great, who follow their unique laws and customs. The village is one of Himachal’s hidden gems, offering an escape into a world untouched by modern influences.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis facere ipsam. Nostrum inventore tempora soluta, culpa suscipit delectus ex beatae. Ab sint iste dolor! Ea optio fuga quaerat pariatur.
                  </span>
                )}
              </p>
              <span
                className="ml-2 cursor-pointer text-blue-600 text-lg underline"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </span>
              </div>
            </div>
            <div className="py-6 md:text-2xl text-lg text-justify">
              
              <p className="pb-1">
                <span className="font-bold">Location:</span> Northeast of the Kullu Valley
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> The Rashol Pass trek will take around 10 hours from Manikaran, or you can opt for the 2-day Chanderkhani Pass trek.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Chalal Trekking Trail, Jamula Devta Temple
              </p>
            </div>
            <div className="flex justify-center gap-4 mb-5">
              <Link to="/Booking_Form">
                <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg transition-transform duration-300 hover:scale-105">
                  BOOK ONLINE
                </button>
              </Link>
              <button className="px-4 py-2 text-red-600 border-2 border-red-600 font-bold rounded-lg transition-transform duration-300 hover:scale-105">
                CALL US FOR DETAILS
              </button>
            </div>
          </div>


          {/* Destination 3 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">3. Kalpa</p>
            <div className="flex justify-start gap-10">
              <img src={Sikkim} alt="Kalpa" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
                Malana is one of the most beautiful and mysterious villages in India, nestled in the Parvati Valley. Known for its legends and distinct cultural identity, this place offers breathtaking views and an experience unlike any other.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae deserunt assumenda enim pariatur sequi doloribus sunt tempora ullam, quas veritatis maxime deleniti rem modi hic, quaerat consectetur perspiciatis laboriosam similique?
                {seeMore && (
                  <span>
                    Malana is also home to descendants of Alexander the Great, who follow their unique laws and customs. The village is one of Himachal’s hidden gems, offering an escape into a world untouched by modern influences.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corporis facere ipsam. Nostrum inventore tempora soluta, culpa suscipit delectus ex beatae. Ab sint iste dolor! Ea optio fuga quaerat pariatur.
                  </span>
                )}
              </p>
              <span
                className="ml-2 cursor-pointer text-blue-600 text-lg underline"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </span>
              </div>
            </div>
            <div className="py-6 md:text-2xl text-lg text-justify">
              
              <p className="pb-1">
                <span className="font-bold">Location:</span> Northeast of the Kullu Valley
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> The Rashol Pass trek will take around 10 hours from Manikaran, or you can opt for the 2-day Chanderkhani Pass trek.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Chalal Trekking Trail, Jamula Devta Temple
              </p>
            </div>
            <div className="flex justify-center gap-4 mb-5">
              <Link to="/Booking_Form">
                <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg transition-transform duration-300 hover:scale-105">
                  BOOK ONLINE
                </button>
              </Link>
              <button className="px-4 py-2 text-red-600 border-2 border-red-600 font-bold rounded-lg transition-transform duration-300 hover:scale-105">
                CALL US FOR DETAILS
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='w-full h-auto flex-col justify-center px-4 md:px-32 font-oswald'>
          <div className="w-full md:w-full mt-12">
            <p className="font-extrabold text-3xl py-5 text-center">Frequently Asked Questions (FAQs)</p>
            <FAQItem
              question="What is the best time to visit Himachal Pradesh?"
              answer="The best time to visit is between March and June or September to December. During these periods, the weather is ideal for sightseeing and outdoor activities."
            />
            <FAQItem
              question="How do I reach Malana?"
              answer="Malana can be reached by trekking from Manali, with the Rashol Pass taking about 10 hours and the Chanderkhani Pass trek taking 2 days."
            />
            <FAQItem
              question="What are the key attractions in Himachal Pradesh?"
              answer="Key attractions include Shimla, Manali, Dharamshala, Kullu Valley, and more, offering a mix of scenic beauty and cultural richness."
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Loc_Himachal;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faPassport, faPlane, faBed, faCamera, faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import Kerala from '../Components/Image/Kerala.jpg';
import Kerala_Packages from '../Components/Image/Kerala2.jpg';
import { Link } from 'react-router-dom';
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
    // const [isHiddenSectionVisible, setIsHiddenSectionVisible] = useState(false);
    // const [expandedContent, setExpandedContent] = useState(null); 
  
    // const handleAboutClick = (content) => {
    //   setIsHiddenSectionVisible(true); 
    //   setExpandedContent(expandedContent === content ? null : content); 
    //   setSeeMore(true)
    //   scrollToDiv();
    // };
     
    // const targetDivRef = useRef(null);

    // const scrollToDiv = () => {
    //   if(targetDivRef.current){
    //     targetDivRef.current.scrollIntoView({behavior: 'smooth'});
    //   }
    // }

    // useEffect(() => {
    //   if (isHiddenSectionVisible) {
    //     scrollToDiv();
    //   }
    // }, [isHiddenSectionVisible]);

  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kerala</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="w-full font-oswald">
        <div className="w-full h-80 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Kerala})` }}>
          {/* image */}
        </div>

        <div className='w-full h-auto flex justify-center px-4 md:px-0 font-oswald '>
        <div className="flex flex-col shadow-lg shadow-black rounded-lg mt-5 md:flex-row text-black text-md md:h-auto max-w-7xl"> 
          <div className="md:w-full p-5  md:h-auto">
            <p className="text-xl md:text-3xl font-bold text-center text-black"
            style={{textShadow: '2px 2px 4px rgba(0.5,0,0.5,0.5)'}}>Kerala: A Symphony of Nature and Tradition</p> 
            <p className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
            Kerala, often referred to as “God’s Own Country,” is a land where lush green landscapes and serene backwaters blend with rich cultural traditions, offering travelers a magical experience. Known for its tranquil beauty, Kerala’s tropical charm is seen in its rolling hills, pristine beaches, and sprawling tea plantations. A visit to the serene backwaters of Alleppey allows visitors to experience life in houseboats, drifting along palm-fringed canals that have been a part of Kerala’s culture for centuries.
                The state is equally renowned for its historic temples, churches, and traditions. From the sacred Sabarimala Temple to the age-old Jewish Synagogue in Kochi, Kerala’s diverse cultural heritage offers something for everyone. The state’s famed Kathakali dance performances, with their intricate costumes and expressive storytelling, allow visitors to step into the world of classical art, while the traditional Ayurvedic spas provide healing and relaxation like nowhere else.
                Shopping and Markets
                Kerala is home to vibrant markets where traditional spices, handloom sarees, and artisanal crafts can be found. The bustling streets of Kochi and Trivandrum blend modern boutiques with traditional handicraft stores, where you can find everything from intricate jewelry to handmade coir products, reflecting the state’s dedication to preserving its cultural roots while embracing modern trends.
                Culinary Experience.
              {seeMore && (
                <span>
                
                Food lovers will delight in Kerala’s world-famous culinary offerings, particularly its seafood delicacies like fish moilee and prawn curry. From feasting on a traditional Sadhya meal served on banana leaves to savoring crispy dosas in street-side cafes, Kerala’s cuisine is an irresistible blend of flavors. Don’t miss trying the local favorite, Kerala’s own toddy, made from coconut sap.
                Nature and Adventure
                Beyond its cultural heritage, Kerala is known for its natural wonders. The misty hill stations of Munnar and Wayanad, with their endless tea gardens and wildlife sanctuaries, are perfect for trekking and nature walks. The Periyar Wildlife Sanctuary offers a glimpse into the state’s rich biodiversity, while Kerala’s beaches like Varkala and Kovalam invite visitors to relax and enjoy water sports like surfing and parasailing.
                Modern Development
                Kerala’s cities are steadily modernizing, with new infrastructure, shopping malls, and entertainment hubs emerging in places like Kochi and Trivandrum. However, the state’s development doesn’t overshadow its dedication to eco-tourism and sustainable practices, ensuring that the natural beauty remains preserved for future generations.
                Nightlife and Festivals
                As night falls, Kerala’s cities offer a peaceful yet lively atmosphere. Enjoy an evening at one of Kochi’s rooftop cafes or watch a sunset over Varkala Beach, while cultural enthusiasts can attend temple festivals and traditional dances, which are celebrated with grandeur throughout the year. The famous Onam festival, with its vibrant processions, flower decorations, and boat races, captures the true spirit of Kerala’s deep-rooted traditions.
                From its tranquil backwaters to its vibrant cities, Kerala offers a perfect fusion of nature, tradition, and modernity. Whether you’re exploring its spice-scented markets or relaxing in a mountain retreat, Kerala promises an experience that is both rejuvenating and culturally enriching.
            </span>
              )}
              <span
                className="ml-2 cursor-pointer text-black text-lg underline" 
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </span>
            </p>
          </div>
        </div>
        </div>

        <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '>

            {/* PACKAGE 1 */}
            <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8  border-2 rounded-lg border-gray-600 w-full md:max-w-7xl">
              <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
                <img src={Kerala_Packages} className="w-full h-full object-cover" alt="Kerala" />
              </div>

              <div className="ml-6 md:ml-8">
                <p className="text-lg md:text-2xl font-bold">PREMIUM KERALA DOMESTIC TRIP 10 NIGHTS 11 DAYS</p> 
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
            <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl">
              <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
                <img src={Kerala_Packages} className="w-full h-full object-cover" alt="Kerala" />
              </div>

              <div className="ml-6 md:ml-8">
                <p className="text-lg md:text-2xl font-bold">PREMIUM KERALA DOMESTIC TRIP 10 NIGHTS 11 DAYS</p> 
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
       
   <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '>
      <div className="w-full md:max-w-7xl  mt-12">
      <h2 className="text-xl font-bold mb-4">
        Frequently Asked Questions (FAQs)
       </h2>
      <div className="flex flex-col md:flex-row md:w-full md:gap-10  text-sm">
      <div className="w-full md:w-1/2  pr-2">
      <FAQItem 
        question="What is the best time to visit Kerala?"
        answer="The best time to visit Kerala is during the dry season, from April to October. This is when the weather is most pleasant, making it ideal for outdoor activities and beach trips."
      />
      <FAQItem
        question="Do I need a visa to visit Kerala?"
        answer="Yes, a visa is required for many travelers, though citizens from several countries can get a visa on arrival. It's best to check with your local Indonesian consulate for the most up-to-date information."
      />
      <FAQItem
        question="What are the top places to visit in Kerala?"
        answer="Some must-see places in Kerala include Ubud, known for its art and culture, Kuta Beach for surfing and sunsets, Tanah Lot Temple for breathtaking views, and the rice terraces of Tegallalang."
      />
      <FAQItem
        question="Is Kerala family-friendly?"
        answer="Absolutely! Kerala has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
      />
      <FAQItem
        question="Is Kerala family-friendly?"
        answer="Absolutely! Kerala has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
      />
    </div>
    <div className="w-full md:w-1/2 pl-2 ">
      
      <FAQItem
        question="How is the internet connectivity in Kerala?"
        answer="Internet connectivity in Kerala is generally good in urban areas and tourist hotspots. Many hotels, cafes, and restaurants offer free Wi-Fi, though speeds can vary in rural locations."
      />
      <FAQItem
        question="Is Kerala safe for solo travelers?"
        answer="Yes, Kerala is considered a safe destination for solo travelers. As with any travel destination, it's important to stay aware of your surroundings, avoid isolated areas at night, and keep your valuables secure."
      />
      <FAQItem
        question="What are the common modes of transportation in Kerala?"
        answer="Popular transportation options in Kerala include taxis, scooter rentals, and ride-sharing services like Grab. For short distances, walking is also convenient in many areas."
      />
      <FAQItem
        question="Can I use my credit card in Kerala?"
        answer="Yes, credit cards are widely accepted in hotels, restaurants, and larger stores. However, it’s a good idea to carry some cash for smaller businesses or local markets that may not accept cards."
      />
      <FAQItem
        question="What local customs should I be aware of in Kerala?"
        answer="Visitors should dress modestly when visiting temples, remove shoes before entering homes, and avoid touching people's heads, as it is considered disrespectful. Always show respect for Keralanese culture and traditions."
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
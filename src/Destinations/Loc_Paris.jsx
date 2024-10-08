import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faPassport, faPlane, faBed, faCamera, faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paris from '../Components/Image/Paris.jpg';
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
                <title>TOKYO</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="w-full font-oswald">
        <div className="w-full h-80 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Paris})` }}>
          {/* image */}
        </div>

        <div className='w-full h-auto flex justify-center px-4 md:px-0 font-oswald '>
        <div className="flex flex-col shadow-lg shadow-black rounded-lg mt-5 md:flex-row text-md md:h-auto max-w-7xl"> 
          <div className="md:w-full p-5  md:h-auto">
            <p className="text-xl md:text-3xl font-bold text-center"
            style= {{textShadow:'2px 2px 4px rgba(0.5,0,0.5,0.5)'}}>
            Paris: A Timeless Blend of Elegance and Innovation</p>
            <p className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
            Paris, the City of Light, is a place where timeless elegance and cutting-edge modernity come together, offering an unparalleled experience for travelers. Renowned for its world-class art, historic monuments, and vibrant culture, Paris effortlessly blends its centuries-old charm with a thriving contemporary scene. The iconic Eiffel Tower, standing tall over the city's skyline, is a testament to both its architectural brilliance and modern advancements, while the magnificent Notre-Dame Cathedral and the grandeur of the Louvre transport visitors back through history.

Art and Culture
Paris is a mecca for art lovers, with the Louvre, home to the Mona Lisa, and the Musée d'Orsay showcasing works from legendary artists like Van Gogh and Monet. Strolling through the charming Montmartre neighborhood, where artists like Picasso once lived, is like stepping into a painting. The city’s cultural heartbeat, however, isn’t confined to its past—Paris is also a hub for contemporary art, with galleries like the Centre Pompidou pushing the boundaries of modern expression.

Fashion and Shopping
Synonymous with style, Paris is renowned as the fashion capital of the world. High-end shopping districts like the Champs-Élysées and Rue Saint-Honoré are home to luxury brands such as Chanel, Louis Vuitton, and Dior, while areas like Le Marais and Saint-Germain-des-Prés offer a mix of chic boutiques and vintage stores. Paris Fashion Week is a major highlight, attracting the world’s top designers and fashion enthusiasts.
              {seeMore && (
                <span>
                  Paris, the City of Light, is a place where timeless elegance and cutting-edge modernity come together, offering an unparalleled experience for travelers. Renowned for its world-class art, historic monuments, and vibrant culture, Paris effortlessly blends its centuries-old charm with a thriving contemporary scene. The iconic Eiffel Tower, standing tall over the city's skyline, is a testament to both its architectural brilliance and modern advancements, while the magnificent Notre-Dame Cathedral and the grandeur of the Louvre transport visitors back through history.
                  Art and Culture
                  Paris is a mecca for art lovers, with the Louvre, home to the Mona Lisa, and the Musée d'Orsay showcasing works from legendary artists like Van Gogh and Monet. Strolling through the charming Montmartre neighborhood, where artists like Picasso once lived, is like stepping into a painting. The city’s cultural heartbeat, however, isn’t confined to its past—Paris is also a hub for contemporary art, with galleries like the Centre Pompidou pushing the boundaries of modern expression.
                  Fashion and Shopping
                  Synonymous with style, Paris is renowned as the fashion capital of the world. High-end shopping districts like the Champs-Élysées and Rue Saint-Honoré are home to luxury brands such as Chanel, Louis Vuitton, and Dior, while areas like Le Marais and Saint-Germain-des-Prés offer a mix of chic boutiques and vintage stores. Paris Fashion Week is a major highlight, attracting the world’s top designers and fashion enthusiasts.
                  Culinary Excellence
                  Paris’s culinary scene is a feast for the senses. From freshly baked croissants at a corner café to fine dining at Michelin-starred restaurants, the city is a paradise for food lovers. Try classic French dishes like escargot, duck confit, and coq au vin, or indulge in the city's famous patisseries, where macarons and éclairs are crafted to perfection. Wine enthusiasts will delight in the vast selection of French wines available at local bistros, while outdoor markets like Marché d'Aligre offer fresh produce and artisanal cheeses.
                  Modern Landmarks
                  While Paris is steeped in history, it also embraces modernity with open arms. The futuristic La Défense district, with its towering skyscrapers, stands in stark contrast to the city's historic architecture, representing Paris’s role as a global economic center. The Seine River, which meanders through the city, is now home to the sleek, contemporary Louis Vuitton Foundation, an architectural masterpiece that houses modern art collections.
                  Parks and Gardens
                  For those seeking tranquility, Paris offers beautiful green spaces like the Luxembourg Gardens and Tuileries Garden, where you can relax amidst carefully manicured lawns and sculptures. The city’s parks provide a serene escape from the bustling streets, offering visitors a chance to enjoy nature in the heart of an urban landscape.
                  Nightlife and Entertainment
                  As night falls, Paris transforms into a dazzling spectacle of lights and music. The city's nightlife is as diverse as it is vibrant, offering everything from laid-back jazz clubs in the Latin Quarter to high-energy nightclubs in Pigalle. For an unforgettable experience, catch a cabaret show at the legendary Moulin Rouge, or enjoy a glass of wine on a rooftop terrace with panoramic views of the illuminated Eiffel Tower.
                  Festivals and Events
                  Throughout the year, Paris hosts a variety of festivals that celebrate its rich culture and artistic legacy. Events like Fête de la Musique, Paris Plages, and Nuit Blanche offer free performances and exhibitions, reflecting the city’s commitment to making art and culture accessible to all.
                  Whether you’re exploring its grand boulevards, dining in a cozy café, or marveling at its historic landmarks, Paris offers a unique fusion of the old and the new. From timeless romance to avant-garde creativity, the city invites you to experience its enduring allure and vibrant innovation in every corner.
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
        </div>
        </div>


      <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '>
        {/* PACKAGE 1 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Paris} className="w-full h-full object-cover" alt="Paris" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM PARIS INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> {/* Changed text size */}
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
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> {/* Changed text size */}
                INQUIRY
              </button>
            </Link>
          </div>
        </div>
        {/* PACKAGE 2 */}
        <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full md:max-w-7xl">
          <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
            <img src={Paris} className="w-full h-full object-cover" alt="Paris" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM PARIS INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
            <p className='text-sm md:text-lg font-light max-w-[30rem]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi fugiat aliquam autem quas, alias incidunt reiciendis velit aspernatur blanditiis facilis.</p>
            <div className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPlane} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">FLIGHTS</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faPassport} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">VISA</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBed} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">HOTELS</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faCamera} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">SIGHTSEEING</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faBowlFood} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">MEALS</p> {/* Changed text size */}
              </div>
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                  <FontAwesomeIcon icon={faUser} className="text-md" /> {/* Changed text size */}
                </p>
                <p className="text-sm hidden md:block cursor-pointer underline">TOUR MANAGER</p> {/* Changed text size */}
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
              <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200"> {/* Changed text size */}
                INQUIRY
              </button>
            </Link>
          </div>
        </div>
      </div>
       
        <div className='w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald '>
         <div className="w-full md:w-full  mt-12">
      <h2 className="text-xl font-bold">
        Frequently Asked Questions (FAQs)
       </h2>
      <div className="flex flex-col md:flex-row md:w-full md:gap-10 ">
      <div className="w-full md:w-1/2 text-2xl pr-2">
      <FAQItem 
        question="What is the best time to visit Jaipur?"
        answer="The best time to visit Jaipur is during the dry season, from April to October. This is when the weather is most pleasant, making it ideal for outdoor activities and beach trips."
      />
      <FAQItem
        question="Do I need a visa to visit Jaipur?"
        answer="Yes, a visa is required for many travelers, though citizens from several countries can get a visa on arrival. It's best to check with your local Indonesian consulate for the most up-to-date information."
      />
      <FAQItem
        question="What are the top places to visit in Jaipur?"
        answer="Some must-see places in Jaipur include Ubud, known for its art and culture, Kuta Beach for surfing and sunsets, Tanah Lot Temple for breathtaking views, and the rice terraces of Tegallalang."
      />
      <FAQItem
        question="Is Jaipur family-friendly?"
        answer="Absolutely! Jaipur has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
      />
      <FAQItem
        question="Is Jaipur family-friendly?"
        answer="Absolutely! Jaipur has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
      />
    </div>
    <div className="w-full md:w-1/2 pl-2">
      
      <FAQItem
        question="How is the internet connectivity in Jaipur?"
        answer="Internet connectivity in Jaipur is generally good in urban areas and tourist hotspots. Many hotels, cafes, and restaurants offer free Wi-Fi, though speeds can vary in rural locations."
      />
      <FAQItem
        question="Is Jaipur safe for solo travelers?"
        answer="Yes, Jaipur is considered a safe destination for solo travelers. As with any travel destination, it's important to stay aware of your surroundings, avoid isolated areas at night, and keep your valuables secure."
      />
      <FAQItem
        question="What are the common modes of transportation in Jaipur?"
        answer="Popular transportation options in Jaipur include taxis, scooter rentals, and ride-sharing services like Grab. For short distances, walking is also convenient in many areas."
      />
      <FAQItem
        question="Can I use my credit card in Jaipur?"
        answer="Yes, credit cards are widely accepted in hotels, restaurants, and larger stores. However, it’s a good idea to carry some cash for smaller businesses or local markets that may not accept cards."
      />
      <FAQItem
        question="What local customs should I be aware of in Jaipur?"
        answer="Visitors should dress modestly when visiting temples, remove shoes before entering homes, and avoid touching people's heads, as it is considered disrespectful. Always show respect for Jaipurnese culture and traditions."
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
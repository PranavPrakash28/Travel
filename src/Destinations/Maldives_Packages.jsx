import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faPassport,
  faPlane,
  faBed,
  faCamera,
  faUser,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Maldives from "../Components/Image/Maldives.jpg";
import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet";

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
      {isOpen && (
        <p className="mt-2 p-4 text-xl bg-gray-50 text-black">{answer}</p>
      )}
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
        <title>MALDIVES</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full font-oswald">
        <div
          className="w-full h-80 md:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${Maldives})` }}
        >
          {/* image */}
        </div>

        <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald ">
          <div className="flex flex-col shadow-lg shadow-black rounded-lg mt-5 md:flex-row text-black text-md md:h-auto max-w-7xl">
            <div className="md:w-full p-5 md:h-auto">
              <p
                className="text-xl md:text-3xl font-bold  text-center"
                style={{ textShadow: "2px 2px 4px rgba(0.5,0,0.5,0.5)" }}
              >
                Maldives: A Tropical Paradise of Serenity and Luxury
              </p>
              <p className="mt-2 text-md md:text-xl pt-8 leading-6 md:leading-1">
                The Maldives, a breathtaking archipelago in the Indian Ocean, is
                synonymous with pristine white-sand beaches, turquoise waters,
                and an unparalleled sense of tranquility. Known for its
                luxurious overwater villas and crystal-clear lagoons, the
                Maldives offers a tropical getaway where nature's beauty meets
                the pinnacle of relaxation and indulgence. This island paradise
                is made up of over 1,000 coral islands, each boasting its own
                unique charm and allure. Beaches and Natural Beauty The Maldives
                is renowned for its idyllic beaches, where powdery white sands
                meet warm, azure waters. Popular islands like Maafushi,
                Hulhumale, and the exclusive private resorts offer visitors a
                chance to unwind in pure paradise. Snorkeling and diving in the
                Maldives are world-class experiences, with vibrant coral reefs
                and an abundance of marine life, including colorful fish, manta
                rays, and sea turtles, just waiting to be explored. Luxury and
                Overwater Villas The Maldives is known for its luxurious
                resorts, each situated on its own private island. These resorts
                offer world-class hospitality, with overwater bungalows that
                allow guests to wake up to stunning views of the Indian Ocean.
                From private plunge pools to underwater restaurants, the
                Maldives sets the standard for luxury. Whether you’re seeking a
                romantic honeymoon getaway or a relaxing family vacation, the
                Maldives’ resorts offer experiences tailored to every traveler’s
                desires. Adventure and Water Sports Beyond its beauty, the
                Maldives is a hub for water-based adventures. The calm, clear
                waters are perfect for snorkeling, scuba diving, and kayaking,
                while more adventurous visitors can indulge in jet skiing,
                windsurfing, or parasailing. The Maldives is home to some of the
                world’s most renowned dive sites, like Banana Reef and Manta
                Point, where you can swim alongside exotic marine life and
                explore stunning coral gardens. Cultural Experiences.
                {seeMore && (
                  <span>
                    Though the Maldives is best known for its natural beauty, it
                    also has a rich cultural heritage influenced by its South
                    Asian, African, and Arab history. Visitors can explore the
                    capital city, Malé, which offers a glimpse into Maldivian
                    culture with its bustling fish markets, local mosques, and
                    historical landmarks like the 17th-century Hukuru Miskiy
                    (Friday Mosque). The Maldives’ National Museum provides
                    insight into the nation’s history, from ancient Buddhist
                    relics to artifacts from the Islamic era. Cuisine Maldivian
                    cuisine is a delicious fusion of flavors, with influences
                    from India, Sri Lanka, and the Middle East. Fresh seafood,
                    particularly tuna, is a staple, and dishes like garudhiya
                    (fish soup), mas huni (tuna and coconut), and bajiya
                    (samosa-like pastries) are must-tries. Many resorts offer a
                    mix of international and local cuisine, allowing guests to
                    experience gourmet dining while also savoring the authentic
                    tastes of the islands. For a unique dining experience, some
                    resorts feature underwater restaurants where you can enjoy a
                    meal while surrounded by marine life. Relaxation and
                    Wellness The Maldives is the epitome of relaxation, with
                    many resorts offering world-class spa facilities. Guests can
                    indulge in rejuvenating massages, facials, and wellness
                    treatments, often performed in open-air pavilions
                    overlooking the ocean. Yoga and meditation classes are also
                    available, providing the perfect way to unwind and harmonize
                    with the peaceful surroundings. Marine Conservation and
                    Eco-Tourism Many Maldivian resorts are committed to
                    sustainability and marine conservation efforts, making
                    eco-tourism an important part of the Maldives experience.
                    Guests can participate in coral restoration projects, sea
                    turtle rehabilitation programs, and guided eco-tours to
                    learn more about the local environment. The Maldives’
                    commitment to preserving its natural beauty ensures that
                    future generations will continue to enjoy its wonders.
                    Nightlife and Events Though the Maldives is often associated
                    with serenity, it also offers lively entertainment,
                    particularly within resort islands. Some resorts host beach
                    parties, live music, and cultural shows, featuring
                    traditional Maldivian music and dance performances. The
                    calm, tropical evenings are also perfect for stargazing,
                    sunset cruises, and romantic dinners on the beach, creating
                    unforgettable memories. With its stunning natural beauty,
                    luxurious accommodations, and wealth of activities, the
                    Maldives is a dream destination for travelers seeking a
                    tropical escape. Whether you’re looking to relax on the
                    beach, explore vibrant coral reefs, or indulge in the finest
                    luxuries, the Maldives promises an experience of pure
                    paradise.
                  </span>
                )}
                <span
                  className="ml-2 cursor-pointer  text-sm underline"
                  onClick={() => setSeeMore(!seeMore)}
                >
                  {seeMore ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald ">
          {/* PACKAGE 1 */}
          <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600 w-full h-auto md:max-w-7xl">
            <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
              <img
                src={Maldives}
                className="w-full h-full object-cover"
                alt="Maldives"
              />
            </div>

            <div className="ml-6 md:ml-8">
              <p className="text-lg md:text-2xl font-bold">
                PREMIUM MALDIVES INTERNATIONAL TRIP 10 NIGHTS 11 DAYS
              </p>
              <p className="text-sm md:text-lg font-light max-w-[30rem]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                fugiat aliquam autem quas, alias incidunt reiciendis velit
                aspernatur blanditiis facilis.
              </p>
              <div
                className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5"
              >
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faPlane} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    FLIGHTS
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faPassport} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    VISA
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBed} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    HOTELS
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    SIGHTSEEING
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBowlFood} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    MEALS
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faUser} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    TOUR MANAGER
                  </p>
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
              <img
                src={Maldives}
                className="w-full h-full object-cover"
                alt="Maldives"
              />
            </div>

            <div className="ml-6 md:ml-8">
              <p className="text-lg md:text-2xl font-bold">
                PREMIUM MALDIVES INTERNATIONAL TRIP 10 NIGHTS 11 DAYS
              </p>
              <p className="text-sm md:text-lg font-light max-w-[30rem]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                fugiat aliquam autem quas, alias incidunt reiciendis velit
                aspernatur blanditiis facilis.
              </p>
              <div
                className="flex flex-wrap md:flex-row pt-6 md:pt-12 justify-center md:justify-between
             md:gap-5"
              >
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faPlane} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    FLIGHTS
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faPassport} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    VISA
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBed} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    HOTELS
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    SIGHTSEEING
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBowlFood} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    MEALS
                  </p>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faUser} className="text-md" />
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    TOUR MANAGER
                  </p>
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

        <div className="w-full h-auto flex-col  justify-center  px-4 md:px-32 font-oswald ">
          <div className="w-full md:w-full  mt-12">
            <h2 className="text-xl font-bold">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="flex flex-col md:flex-row md:w-full md:gap-10 ">
              <div className="w-full md:w-1/2 text-2xl pr-2">
                <FAQItem
                  question="What is the best time to visit Maldives?"
                  answer="The best time to visit Maldives is during the dry season, from April to October. This is when the weather is most pleasant, making it ideal for outdoor activities and beach trips."
                />
                <FAQItem
                  question="Do I need a visa to visit Maldives?"
                  answer="Yes, a visa is required for many travelers, though citizens from several countries can get a visa on arrival. It's best to check with your local Indonesian consulate for the most up-to-date information."
                />
                <FAQItem
                  question="What are the top places to visit in Maldives?"
                  answer="Some must-see places in Maldives include Ubud, known for its art and culture, Kuta Beach for surfing and sunsets, Tanah Lot Temple for breathtaking views, and the rice terraces of Tegallalang."
                />
                <FAQItem
                  question="Is Maldives family-friendly?"
                  answer="Absolutely! Maldives has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
                />
                <FAQItem
                  question="Is Maldives family-friendly?"
                  answer="Absolutely! Maldives has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <FAQItem
                  question="How is the internet connectivity in Maldives?"
                  answer="Internet connectivity in Maldives is generally good in urban areas and tourist hotspots. Many hotels, cafes, and restaurants offer free Wi-Fi, though speeds can vary in rural locations."
                />
                <FAQItem
                  question="Is Maldives safe for solo travelers?"
                  answer="Yes, Maldives is considered a safe destination for solo travelers. As with any travel destination, it's important to stay aware of your surroundings, avoid isolated areas at night, and keep your valuables secure."
                />
                <FAQItem
                  question="What are the common modes of transportation in Maldives?"
                  answer="Popular transportation options in Maldives include taxis, scooter rentals, and ride-sharing services like Grab. For short distances, walking is also convenient in many areas."
                />
                <FAQItem
                  question="Can I use my credit card in Maldives?"
                  answer="Yes, credit cards are widely accepted in hotels, restaurants, and larger stores. However, it’s a good idea to carry some cash for smaller businesses or local markets that may not accept cards."
                />
                <FAQItem
                  question="What local customs should I be aware of in Maldives?"
                  answer="Visitors should dress modestly when visiting temples, remove shoes before entering homes, and avoid touching people's heads, as it is considered disrespectful. Always show respect for Maldivesnese culture and traditions."
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

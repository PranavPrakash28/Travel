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
import { useState } from "react";
import { Link } from "react-router-dom";
// import Jaipur2 from '../Components/Image/Jaipur.jpg';
import Jaipur from "../Components/Image/Jaipur2.jpg";
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
        <title>JAIPUR</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full font-oswald">
        <div
          className="w-full h-80 md:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${Jaipur})` }}
        >
          {/* image */}
        </div>

        <div className="w-full h-auto flex justify-center px-4 md:px-0 font-oswald ">
          <div className="flex flex-col md:flex-row max-w-7xl  rounded-lg text-black text-md md:h-auto">
            {" "}
            {/* Adjusted text size */}
            <div className="md:w-full p-5 md:h-auto">
              <p
                className="text-xl md:text-3xl font-bold text-center "
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0)" }}
              >
                Jaipur: The Enchanting Pink City of Royal Heritage
              </p>{" "}
              {/* Adjusted text size */}
              <p className="mt-2 text-md md:text-xl pt-8 leading-6 md:leading-1">
                Jaipur, often referred to as the Pink City, offers a captivating
                blend of rich history, stunning architecture, and vibrant
                culture, making it a must-visit destination for travelers. The
                city is famous for its magnificent palaces and forts, such as
                the iconic Hawa Mahal, known for its intricate latticework and
                stunning facade, and the majestic Amber Fort, which showcases a
                fusion of Hindu and Mughal architecture. Visitors can immerse
                themselves in the colorful bazaars of Jaipur, where traditional
                handicrafts, textiles, and jewelry can be found, making for
                perfect souvenirs. The local cuisine is a culinary adventure of
                its own, featuring mouthwatering dishes like Dal Baati Churma
                and Gatte ki Sabzi, often enjoyed in authentic Rajasthani
                thali-style dining.
                {seeMore && (
                  <span>
                    Jaipur, often referred to as the Pink City, offers a
                    captivating blend of rich history, stunning architecture,
                    and vibrant culture, making it a must-visit destination for
                    travelers. The city is famous for its magnificent palaces
                    and forts, such as the iconic Hawa Mahal, known for its
                    intricate latticework and stunning facade, and the majestic
                    Amber Fort, which showcases a fusion of Hindu and Mughal
                    architecture. Visitors can immerse themselves in the
                    colorful bazaars of Jaipur, where traditional handicrafts,
                    textiles, and jewelry can be found, making for perfect
                    souvenirs. The local cuisine is a culinary adventure of its
                    own, featuring mouthwatering dishes like Dal Baati Churma
                    and Gatte ki Sabzi, often enjoyed in authentic Rajasthani
                    thali-style dining. For those seeking unique experiences,
                    Jaipur offers opportunities for hot air balloon rides over
                    the Aravalli hills, providing a breathtaking aerial view of
                    the city’s stunning landscapes. Adventure enthusiasts can
                    explore the rugged terrain of the surrounding areas on camel
                    or elephant safaris. As the sun sets, Jaipur transforms into
                    a magical city with vibrant nightlife, featuring cultural
                    performances, music, and dance that celebrate its rich
                    heritage. Whether you’re exploring ancient forts, indulging
                    in delectable local cuisine, or experiencing the warm
                    hospitality of the locals, Jaipur promises an unforgettable
                    journey through time and tradition.
                  </span>
                )}
                <span
                  className="ml-2 cursor-pointer  text-lg underline"
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
          <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600  md:max-w-7xl">
            <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
              <img
                src={Jaipur}
                className="w-full h-full object-cover"
                alt="Jaipur"
              />
            </div>

            <div className="ml-6 md:ml-8">
              <p className="text-lg md:text-2xl font-bold">
                PREMIUM JAIPUR DOMESTIC TRIP 10 NIGHTS 11 DAYS
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
                    <FontAwesomeIcon icon={faPlane} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    FLIGHTS
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faPassport} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    VISA
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBed} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    HOTELS
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    SIGHTSEEING
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBowlFood} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    MEALS
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faUser} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    TOUR MANAGER
                  </p>{" "}
                  {/* Changed text size */}
                </div>
              </div>
            </div>

            <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
              <Link to="/Booking_Form">
                <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md">
                  {" "}
                  {/* Adjusted text size */}
                  BOOK ONLINE
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200">
                  {" "}
                  {/* Changed text size */}
                  INQUIRY
                </button>
              </Link>
            </div>
          </div>
          {/* PACKAGE 2 */}
          <div className="flex flex-wrap md:flex-row p-8 mt-8 mb-8 border-2 rounded-lg border-gray-600  md:max-w-7xl">
            <div className="w-full md:w-44 md:h-44   h-60 flex items-center justify-center">
              <img
                src={Jaipur}
                className="w-full h-full object-cover"
                alt="Jaipur"
              />
            </div>

            <div className="ml-6 md:ml-8">
              <p className="text-lg md:text-2xl font-bold">
                PREMIUM JAIPUR DOMESTIC TRIP 10 NIGHTS 11 DAYS
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
                    <FontAwesomeIcon icon={faPlane} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    FLIGHTS
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faPassport} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    VISA
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBed} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    HOTELS
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faCamera} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    SIGHTSEEING
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faBowlFood} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    MEALS
                  </p>{" "}
                  {/* Changed text size */}
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                  <p className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
                    <FontAwesomeIcon icon={faUser} className="text-md" />{" "}
                    {/* Changed text size */}
                  </p>
                  <p className="text-sm hidden md:block cursor-pointer underline">
                    TOUR MANAGER
                  </p>{" "}
                  {/* Changed text size */}
                </div>
              </div>
            </div>

            <div className="h-full ml-0 md:ml-20 mt-6 md:gap-6 md:mt-10  flex flex-col md:flex-row md:items-center justify-center">
              <Link to="/Booking_Form">
                <button className="px-4 py-2 md:mt-6 font-oswald w-fit bg-blue-600 text-white font-bold border-none text-md">
                  {" "}
                  {/* Adjusted text size */}
                  BOOK ONLINE
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-4 py-2 mt-6 font-oswald text-sm text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-200">
                  {" "}
                  {/* Changed text size */}
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

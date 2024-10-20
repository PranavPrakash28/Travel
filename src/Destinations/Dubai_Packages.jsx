import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faPassport, faPlane, faBed, faCamera, faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dubai from '../Components/Image/Dubai.jpg';
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
        <div className="w-full h-80 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Dubai})` }}>
          {/* image */}
        </div>

        <div className='w-full h-auto flex justify-center px-4 md:px-0 font-oswald '>
        <div className="flex flex-col shadow-lg shadow-black rounded-lg mt-5 md:flex-row text-black text-md md:h-auto max-w-7xl"> 
          <div className="md:w-full p-5  md:h-auto">
            <p className="text-xl md:text-3xl font-bold text-center">Dubai: A Dazzling Fusion of Tradition and Futurism</p>
            <p className="mt-2 text-md md:text-2xl pt-8 leading-6 md:leading-1">
            Dubai, a glittering metropolis in the heart of the UAE, is where ancient traditions meet cutting-edge modernity, offering a one-of-a-kind experience to travelers. Known for its record-breaking skyline dominated by the world-famous Burj Khalifa, Dubai also preserves its rich Arabian heritage through souks, historic districts, and cultural festivals. Visitors can explore the bustling Dubai Creek area, where traditional abras (boats) ferry passengers across the water, and step into the past at the Al Fahidi Historical Neighborhood.
            Architecture and Modern Marvels
            The city is synonymous with futuristic architecture and innovation. The Burj Khalifa, the tallest building in the world, provides breathtaking views of the city, while the iconic Burj Al Arab stands as a symbol of luxury and opulence. Dubai is also home to the Palm Jumeirah, a man-made island shaped like a palm tree, which hosts luxury resorts, fine dining, and stunning beachfront views. For those seeking a glimpse into the future, the Museum of the Future showcases cutting-edge technology and visions of tomorrow.
            Shopping and Retail Therapy
            Dubai is a global shopping destination, with the Dubai Mall being one of the largest shopping centers in the world. Here, visitors can find luxury brands, high-end fashion, electronics, and traditional crafts, all under one roof. The mall also features attractions like the Dubai Aquarium and an indoor ice rink. For a more traditional shopping experience, the Gold Souk and Spice Souk in Deira offer a glimpse into the city’s Arabian roots, with stalls brimming with jewelry, spices, and textiles.
            Culinary Delights
            Food lovers will find Dubai a culinary paradise. The city's vibrant food scene ranges from street food like shawarma and falafel to gourmet dining experiences at Michelin-starred restaurants. Visitors can indulge in traditional Emirati dishes such as machboos (spiced rice with meat) and luqaimat (sweet dumplings), or explore international cuisines that reflect Dubai’s multicultural population. Beachside cafés, rooftop lounges, and world-class eateries ensure that every meal is a memorable experience.
              {seeMore && (
                <span>
                  Adventure and Leisure
                  Dubai offers a wide range of leisure activities and adventure sports. For thrill-seekers, the desert is a playground for dune bashing, sandboarding, and camel rides, while the city’s coastline offers water sports like jet skiing and parasailing. Indoor attractions like Ski Dubai, the world’s largest indoor ski resort, provide unique experiences amidst the desert heat. For nature lovers, a visit to the Dubai Miracle Garden, with its stunning floral displays, is a must-see.
                  Cultural Heritage
                  While Dubai is a city of modern wonders, it also treasures its cultural heritage. The Sheikh Mohammed Centre for Cultural Understanding offers insight into Emirati traditions, including tours of local mosques and traditional meals. Visitors can also experience the grandeur of Arabian hospitality at desert resorts, where they can enjoy Bedouin-style dining and entertainment under the stars.
                  Nightlife and Entertainment
                  When the sun sets, Dubai’s nightlife comes alive with a variety of options. From beach clubs to rooftop lounges with views of the city’s illuminated skyline, the nightlife in Dubai is as dynamic as its daytime attractions. The city is home to world-renowned nightclubs and live entertainment venues where international DJs perform. Visitors can also enjoy a magical evening on a dhow cruise along Dubai Creek or the Marina, with dinner and traditional music onboard.
                  Festivals and Events
                  Dubai’s event calendar is filled with international festivals, including the Dubai Shopping Festival and Dubai Food Festival, which celebrate the city’s love for shopping and gastronomy. Cultural events like the Dubai International Film Festival and Art Dubai highlight the city’s growing reputation as a global cultural hub, while sporting events like the Dubai World Cup (horse racing) and the Dubai Tennis Championships attract top athletes from around the world.
                  From its shimmering skyscrapers to its vast desert landscapes, Dubai offers an extraordinary blend of luxury, tradition, and adventure. Whether you’re marveling at its architectural wonders, indulging in world-class cuisine, or exploring its cultural heritage, Dubai promises a truly unforgettable experience.
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
            <img src={Dubai} className="w-full h-full object-cover" alt="Dubai" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM DUBAI INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
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
            <img src={Dubai} className="w-full h-full object-cover" alt="Dubai" />
          </div>

          <div className="ml-6 md:ml-8">
            <p className="text-lg md:text-2xl font-bold">PREMIUM DUBAI INTERNATIONAL TRIP 10 NIGHTS 11 DAYS</p> 
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
        question="What is the best time to visit ?"
        answer="The best time to visit  is during the dry season, from April to October. This is when the weather is most pleasant, making it ideal for outdoor activities and beach trips."
      />
      <FAQItem
        question="Do I need a visa to visit ?"
        answer="Yes, a visa is required for many travelers, though citizens from several countries can get a visa on arrival. It's best to check with your local Indonesian consulate for the most up-to-date information."
      />
      <FAQItem
        question="What are the top places to visit in ?"
        answer="Some must-see places in  include Ubud, known for its art and culture, Kuta Beach for surfing and sunsets, Tanah Lot Temple for breathtaking views, and the rice terraces of Tegallalang."
      />
      <FAQItem
        question="Is  family-friendly?"
        answer="Absolutely!  has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
      />
      <FAQItem
        question="Is  family-friendly?"
        answer="Absolutely!  has a range of family-friendly accommodations, activities, and attractions, including water parks, zoos, and cultural performances that kids will love."
      />
    </div>
    <div className="w-full md:w-1/2 pl-2">
      
      <FAQItem
        question="How is the internet connectivity in ?"
        answer="Internet connectivity in  is generally good in urban areas and tourist hotspots. Many hotels, cafes, and restaurants offer free Wi-Fi, though speeds can vary in rural locations."
      />
      <FAQItem
        question="Is  safe for solo travelers?"
        answer="Yes,  is considered a safe destination for solo travelers. As with any travel destination, it's important to stay aware of your surroundings, avoid isolated areas at night, and keep your valuables secure."
      />
      <FAQItem
        question="What are the common modes of transportation in ?"
        answer="Popular transportation options in  include taxis, scooter rentals, and ride-sharing services like Grab. For short distances, walking is also convenient in many areas."
      />
      <FAQItem
        question="Can I use my credit card in ?"
        answer="Yes, credit cards are widely accepted in hotels, restaurants, and larger stores. However, it’s a good idea to carry some cash for smaller businesses or local markets that may not accept cards."
      />
      <FAQItem
        question="What local customs should I be aware of in ?"
        answer="Visitors should dress modestly when visiting temples, remove shoes before entering homes, and avoid touching people's heads, as it is considered disrespectful. Always show respect for nese culture and traditions."
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
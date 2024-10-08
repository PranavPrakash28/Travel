import { Helmet } from "react-helmet";
import {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Jaipur from '../Image/Jaipur2.jpg';
import Kerala from '../Image/Kerala.jpg';
import Goa from '../Image/Goa.jpg';
import Agra from '../Image/Agra.jpg';
import Ladakh from '../Image/Ladakh.jpg';
import Varanasi from '../Image/Varanasi.jpg';
import Ranthambore from '../Image/Ranthambore.jpg';
import Andaman from '../Image/Andaman.jpg';
import Mysore from '../Image/Mysore.jpg';
import Sikkim from '../Image/Sikkim.jpg';
import { Link } from "react-router-dom";
import Popup from "../Popup-modal/Popup";

const Domestic_Deals = [
  { 
    img: Jaipur, 
    duration: '5 Days & 4 Nights',
    text: 'Jaipur, Rajasthan | Palaces and Forts',
    price: 'INR 30000',
    link: '/Loc_Jaipur'
  },
  {
    img: Kerala,
    duration: '6 Days & 5 Nights', 
    text: 'Kerala | Backwaters and Hill Stations', 
    price: 'INR 35000',
    link: '/Loc_Kerala' 
  },
  { 
    img: Goa, 
    duration: '7 Days & 6 Nights', 
    text: 'Goa | Beaches and Nightlife', 
    price: 'INR 25000',
    link: '/Loc_Goa' 
  },
  {
    img: Agra, 
    duration: '4 Days & 3 Nights', 
    text: 'Agra, Uttar Pradesh | Taj Mahal and Historical Sites', 
    price: 'INR 18000',
    link: '/Loc_Agra' 
  },
  { 
    img: Ladakh, 
    duration: '8 Days & 7 Nights', 
    text: 'Ladakh | Mountains and Monasteries', 
    price: 'INR 45000',
    link: '/Loc_Ladakh' 
  },
  {
    img: Varanasi, 
    duration: '5 Days & 4 Nights', 
    text: 'Varanasi, Uttar Pradesh | Spiritual Experience and Ghats', 
    price: 'INR 20000',
    link: '/Loc_Varanasi' 
  },
  {
    img: Ranthambore, 
    duration: '6 Days & 5 Nights', 
    text: 'Ranthambore, Rajasthan | Wildlife Safari', 
    price: 'INR 38000' ,
    link: '/Loc_Ranthambore'
  },
  { 
    img: Andaman, 
    duration: '7 Days & 6 Nights', 
    text: 'Andaman Islands | Beaches and Water Sports', 
    price: 'INR 55000',
    link: '/Loc_Andaman' 
  },
  { 
    img: Mysore, 
    duration: '5 Days & 4 Nights', 
    text: 'Mysore, Karnataka | Palaces and Gardens', 
    price: 'INR 22000',
    link: '/Loc_Mysore' 
  },
  { 
    img: Sikkim, 
    duration: '6 Days & 5 Nights', 
    text: 'Sikkim | Scenic Mountains and Culture', 
    price: 'INR 40000',
    link: '/Loc_Sikkim' 
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const DealsSlider = () => {
  const [seeMore,setSeeMore] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="max-w-7xl mx-auto py-10 px-4 font-oswald">
        <Link to= '/domestic'><p className="text-3xl font-bold mb-7">DOMESTIC</p></Link>
        <Slider {...settings}>
          {Domestic_Deals.map((deal, index) => (
            <div key={index} className="px-2">
              <div className="relative h-80 w-full">
                <img
                  src={deal.img}
                  alt={deal.text}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="bg-black bg-opacity-40 absolute inset-0 rounded-lg">
                  <div className="p-4">
                    <p className="text-white text-lg font-semibold">{deal.text}</p>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white">{deal.duration}</p>
                    {/* <p className="text-white font-bold">{deal.price}</p> */}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Link to={deal.link}>
                      <button className="text-white border-2 border-white rounded-lg px-4 py-2">EXPLORE NOW</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="md:max-w-7xl md:mx-auto shadow-lg shadow-black mt-10 p-4 rounded-lg font-oswald">
        <p className="mt-2 text-md md:text-lg pt-8 leading-6 md:leading-1">
        <span className="text-xl text-bold"> Discover India’s Incredible  <Link to='/domestic' className="text-red-600 hover:cursor-pointer hover:underline">Domestic</Link> Travel Destinations<br/></span>
                  India is a country of breathtaking contrasts, where every corner offers a new experience. Whether you’re craving serenity, adventure, or cultural immersion, India’s domestic travel scene has it all. Let’s dive into some of the most spectacular destinations you must explore:<br/>
                  {/* Uttarakhand<br/>
                  Nestled in the Himalayas, Uttarakhand is a spiritual and nature lover's paradise. Home to the famous Char Dham Yatra (Badrinath, Kedarnath, Gangotri, and Yamunotri), this state offers spiritual renewal in its sacred temples and a close encounter with raw natural beauty. Don’t miss the adventure capital Rishikesh, known for river rafting and yoga, and Mussoorie, the "Queen of Hills," offering enchanting views of the Himalayas.<br/>
                  Himachal Pradesh<br/>
                  From the valleys of Kullu and Manali to the serene, spiritual retreat of Dharamshala, Himachal is an ideal mix of adventure and tranquility. Explore the isolated charm of the Spiti Valley, known for its rugged terrain and Buddhist monasteries, or experience the beauty of Shimla, a colonial hill station full of charm. Trekking, paragliding, and skiing are popular activities here for adventure seekers.<br/>
                  Andaman & Nicobar Islands<br/>
                  If pristine beaches and crystal-clear waters are what you're after, the Andaman Islands are the perfect escape. Visit Radhanagar Beach, one of the best in Asia, or indulge in water sports like snorkeling and scuba diving in Havelock Island. The rich marine life and untouched coral reefs make it a must-visit for nature lovers.<br/>
                  Kerala<br/>
                  Kerala, aptly named "God's Own Country," is known for its serene backwaters, lush tea gardens, and vibrant culture. Take a houseboat ride in Alleppey, relax on the beaches of Kovalam, or experience the wildlife of Thekkady. Kerala’s lush hills in Munnar offer an aromatic journey through tea plantations, making it a scenic retreat.<br/> */}
              {seeMore && (
                <span>
                  {/* Discover India’s Incredible Domestic Travel Destinations<br/>
                  India is a country of breathtaking contrasts, where every corner offers a new experience. Whether you’re craving serenity, adventure, or cultural immersion, India’s domestic travel scene has it all. Let’s dive into some of the most spectacular destinations you must explore:<br/> */}
                  <br/>
                  Uttarakhand<br/>
                  Nestled in the Himalayas, Uttarakhand is a spiritual and nature lover's paradise. Home to the famous Char Dham Yatra (Badrinath, Kedarnath, Gangotri, and Yamunotri), this state offers spiritual renewal in its sacred temples and a close encounter with raw natural beauty. Don’t miss the adventure capital Rishikesh, known for river rafting and yoga, and Mussoorie, the "Queen of Hills," offering enchanting views of the Himalayas.<br/>
                  Himachal Pradesh<br/>
                  From the valleys of Kullu and Manali to the serene, spiritual retreat of Dharamshala, Himachal is an ideal mix of adventure and tranquility. Explore the isolated charm of the Spiti Valley, known for its rugged terrain and Buddhist monasteries, or experience the beauty of Shimla, a colonial hill station full of charm. Trekking, paragliding, and skiing are popular activities here for adventure seekers.<br/>
                  Andaman & Nicobar Islands<br/>
                  If pristine beaches and crystal-clear waters are what you're after, the Andaman Islands are the perfect escape. Visit Radhanagar Beach, one of the best in Asia, or indulge in water sports like snorkeling and scuba diving in Havelock Island. The rich marine life and untouched coral reefs make it a must-visit for nature lovers.<br/>
                  <Link to='/Loc_Kerala' className="text-red-600 hover:cursor-pointer hover:underline">Kerala</Link><br/>
                  <Link to='/Loc_Kerala' className="text-red-600 hover:cursor-pointer hover:underline">Kerala</Link>, aptly named "God's Own Country," is known for its serene backwaters, lush tea gardens, and vibrant culture. Take a houseboat ride in Alleppey, relax on the beaches of Kovalam, or experience the wildlife of Thekkady. Kerala’s lush hills in Munnar offer an aromatic journey through tea plantations, making it a scenic retreat.<br/>
                  Karnataka<br/>
                  Karnataka is a treasure trove of cultural and natural wonders. Explore the mist-covered hills of Coorg, often referred to as the "Scotland of India," or witness the ancient ruins of Hampi, a UNESCO World Heritage Site. The bustling city of Bangalore is known for its tech hubs and vibrant nightlife, while Mysore enchants with its palatial architecture and grand history.<br/>
                  <Link to='/Loc_Goa' className="text-red-600 hover:cursor-pointer hover:underline">Goa</Link><br/>
                  Known for its golden beaches, vibrant nightlife, and Portuguese heritage, <Link to='/Loc_Goa' className="text-red-600 hover:cursor-pointer hover:underline">Goa</Link>is the ultimate destination for a laid-back yet energetic escape. Whether you’re soaking in the sun at Anjuna Beach, exploring the historic Basilica of Bom Jesus, or enjoying water sports in Palolem, Goa offers a perfect mix of fun and relaxation.<br/>
                  Meghalaya<br/>
                  In the heart of the Northeast, Meghalaya is home to lush landscapes and the mystical Living Root Bridges. Visit Cherrapunji, one of the wettest places on earth, and marvel at the cascading waterfalls and green valleys. The capital city, Shillong, often called the "Scotland of the East," is a great place to enjoy cool weather, serene lakes, and a vibrant music scene.<br/>
                  Sikkim<br/>
                  Nestled in the Himalayas, Sikkim is a gem for trekkers and nature enthusiasts. The capital Gangtok offers stunning views of Mount Kanchenjunga, and nearby Tsomgo Lake is a breathtaking sight in both summer and winter. Sikkim is also famous for its monasteries, such as the revered Rumtek Monastery, adding a peaceful spiritual vibe to the journey.<br/>
                  Gujarat<br/>
                  From the white salt flats of the Rann of Kutch to the historical grandeur of Somnath Temple and the wildlife haven of Gir National Park, Gujarat has something for everyone. This western state is also home to the Statue of Unity, the world’s tallest statue, and the vibrant Navratri festival, where you can experience the best of Indian culture.<br/>
                  Rajasthan<br/>
                  Step into the royal world of Rajasthan, where opulent palaces and majestic forts transport you back in time. Visit  <Link to='/Loc_Jaipur' className="text-red-600 hover:cursor-pointer hover:underline">Jaipur</Link>, the Pink City, known for Hawa Mahal and Amber Fort; explore the golden sands of Jaisalmer and stay in desert camps; or immerse yourself in the romance of Udaipur, with its tranquil lakes and grand palaces.<br/>
                  Jammu & Kashmir<br/>
                  Kashmir, the "Paradise on Earth," is a region that captivates with its snow-capped mountains, picturesque valleys, and serene lakes. Srinagar’s Dal Lake is famous for its houseboats and shikara rides, while Gulmarg offers world-class skiing opportunities. The nearby region of Leh-Ladakh is an adventurer's haven with high-altitude treks, monasteries, and motorbiking routes that offer unparalleled beauty.<br/>
                  Leh-Ladakh<br/>
                  Known for its stark, dramatic landscapes and Buddhist monasteries, Leh-Ladakh is a destination like no other. The famous Pangong Lake, seen in movies, changes its colors throughout the day, and the high-altitude passes like Khardung La offer incredible scenic routes for adventure lovers.<br/>
                  Spiti Valley<br/>
                  For those seeking solitude and offbeat travel, Spiti Valley in Himachal Pradesh is an explorer’s dream. Rugged landscapes, ancient monasteries like Key Monastery, and crystal-clear rivers define this region, which is cut off from the rest of the world during winter, adding to its mystique.<br/>
                  Char Dham <br/>
                  The sacred Char Dham Yatra—Badrinath, Kedarnath, Gangotri, and Yamunotri—is one of the holiest pilgrimages for Hindus. Each of these destinations offers not only spiritual awakening but also awe-inspiring natural beauty, surrounded by towering Himalayan peaks and flowing rivers.
                  No matter which destination calls to you, India’s rich diversity ensures there’s always something new to discover. Whether you're planning a relaxing beach holiday, an adventurous trek, or a cultural deep dive, each state offers its unique experiences that leave you yearning for more.<br/>
                  Check Out Our <Link to='/international' className="text-red-600 hover:cursor-pointer hover:underline">International</Link> Hidden Gems
                  Don’t stop with domestic travel! Check our other pages for International Hidden Gems and Other Destinations that will inspire your next adventure abroad. We specialize in crafting unforgettable travel experiences, both  <Link to='/domestic' className="text-red-600 hover:cursor-pointer hover:underline">locally</Link> and internationally. <br/>
                  <Link to='/contact' className="hover:underline text-red-600 hover:cursor-pointer">Contact Us</Link> & <Link to='/Booking_Form'className="hover:underline text-red-600 hover:cursor-pointer">Book Now</Link>for an Instant Discount
                  Choose our website for your next trip! Contact us today to plan your dream getaway, and don’t forget to Book Now to avail exclusive discounts on flights, hotels, and tour packages. Let us make your journey hassle-free and unforgettable! 
                  
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
    </>
  );
};

export default DealsSlider;

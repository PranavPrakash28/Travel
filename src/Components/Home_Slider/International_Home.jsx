import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bali from "../Image/Bali.webp";
import Paris from "../Image/Paris.jpg";
import Tokyo from "../Image/Tokyo.jpg";
import Dubai from "../Image/Dubai.jpg";
import Maldives from "../Image/Maldives.jpg";
import Switzerland from "../Image/Switzerland.jpg";
import Australia from "../Image/Australia.jpg";
import NewZealand from "../Image/Newzealand.jpg";
import Thailand from "../Image/Thailand.jpg";
import Greece from "../Image/Greece.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const International_Deals = [
  {
    img: Bali,
    duration: "7 Days & 6 Nights",
    text: "Bali, Indonesia | Beaches and Culture",
    price: "INR 60000",
    Link: "/Bali_Packages",
  },
  {
    img: Paris,
    duration: "5 Days & 4 Nights",
    text: "Paris, France | Eiffel Tower and Museums",
    price: "INR 90000",
    Link: "/Paris_Packages",
  },
  {
    img: Tokyo,
    duration: "6 Days & 5 Nights",
    text: "Tokyo, Japan | Modern City and Tradition",
    price: "INR 80000",
    Link: "/Tokyo_Packages",
  },
  {
    img: Dubai,
    duration: "5 Days & 4 Nights",
    text: "Dubai, UAE | Skyscrapers and Shopping",
    price: "INR 70000",
    Link: "/Dubai_Packages",
  },
  {
    img: Maldives,
    duration: "7 Days & 6 Nights",
    text: "Maldives | Luxury Resorts and Coral Reefs",
    price: "INR 100000",
    Link: "/Maldives_Packages",
  },
  {
    img: Switzerland,
    duration: "6 Days & 5 Nights",
    text: "Switzerland | Alps and Lakes",
    price: "INR 120000",
    // Link: '/Switzerland_Packages'
  },
  {
    img: Australia,
    duration: "10 Days & 9 Nights",
    text: "Australia | Sydney and Great Barrier Reef",
    price: "INR 150000",
    // Link: '/Australia_Packages'
  },
  {
    img: NewZealand,
    duration: "8 Days & 7 Nights",
    text: "New Zealand | Mountains and Adventure Sports",
    price: "INR 140000",
    // Link: '/NewZealand_Packages'
  },
  {
    img: Thailand,
    duration: "5 Days & 4 Nights",
    text: "Thailand | Beaches and Nightlife",
    price: "INR 45000",
    Link: "/Thailand_Packages",
  },
  {
    img: Greece,
    duration: "7 Days & 6 Nights",
    text: "Greece | Ancient History and Islands",
    price: "INR 110000",
    // Link: '/Greece_Packages'
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  autoplay: true,
  autoplaySpeed: 1500,
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
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="max-w-7xl mx-auto py-10 px-4 font-oswald">
        <Link to="/international">
          {" "}
          <h1 className="text-3xl font-bold ">INTERNATIONAL</h1>
        </Link>
        <h1 className="mt-2 text-md md:text-xl pt-8 leading-6 md:leading-1 mb-7 ">
          <span className="text-md md:text-2xl  font-semibold ">
            {" "}
            Discover the World’s Most Incredible{" "}
            <Link
              to="/international"
              className="text-red-600 hover:cursor-pointer hover:underline"
            >
              International
            </Link>{" "}
            Travel Destinations
          </span>
          <br />
          Ready to venture beyond borders and explore some of the most stunning{" "}
          <Link
            to="/international"
            className="text-red-600 hover:cursor-pointer hover:underline"
          >
            international
          </Link>{" "}
          locations? From tropical paradises to culturally rich destinations,
          the world is full of breathtaking experiences waiting to be
          discovered. Let’s take a journey through some of the top international
          destinations you should add to your travel bucket list:
          {seeMore && (
            <span>
              <br />
              Vietnam
              <br />
              A land of striking natural beauty and cultural diversity, Vietnam
              offers something for every traveler. From the emerald waters of Ha
              Long Bay to the ancient town of Hoi An, Vietnam is a blend of
              scenic wonders and historical charm. Don’t miss Hanoi, where old
              meets new, or the bustling city of Ho Chi Minh with its vibrant
              nightlife and rich history.
              <br />
              <Link
                to="/Bali"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Bali
              </Link>
              , Indonesia
              <br />
              <Link
                to="/Bali"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Bali
              </Link>{" "}
              is a paradise known for its serene beaches, lush rice terraces,
              and spiritual atmosphere. The island offers stunning temples like
              Uluwatu and Tanah Lot, the terraced rice fields of Ubud, and
              world-class surf spots. Whether you’re looking for adventure,
              relaxation, or a spiritual retreat,{" "}
              <Link
                to="/Bali"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Bali
              </Link>{" "}
              has it all.
              <br />
              Maldives
              <br />
              Imagine pristine white-sand beaches, overwater villas, and
              crystal-clear lagoons – welcome to the Maldives. Famous for its
              luxurious resorts, the Maldives offers an unparalleled escape into
              a tropical paradise. Whether you’re snorkeling with manta rays or
              enjoying a romantic dinner under the stars, the Maldives is the
              ultimate destination for a peaceful retreat.
              <br />
              <Link
                to="/Dubai"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Dubai
              </Link>
              , UAE
              <br />A city that epitomizes luxury and innovation,{" "}
              <Link
                to="/Dubai"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Dubai
              </Link>
              is a playground for those who love glamour and adventure. From the
              iconic Burj Khalifa, the tallest building in the world, to the
              indoor ski resort at Mall of the Emirates,{" "}
              <Link
                to="/Dubai"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Dubai
              </Link>{" "}
              is a fusion of futuristic skyscrapers, desert safaris, and
              traditional souks. It’s perfect for both luxury travelers and
              adventure enthusiasts.
              <br />
              Malaysia
              <br />
              Malaysia is a vibrant mix of cultures, with stunning islands,
              rainforests, and modern cities. Visit the bustling metropolis of
              Kuala Lumpur, home to the Petronas Twin Towers, or explore the
              idyllic islands of Langkawi and Penang. The wildlife in Borneo,
              the colonial charm of Malacca, and the beaches of Tioman Island
              make Malaysia a diverse travel destination.
              <br />
              Mauritius
              <br />
              This island nation in the Indian Ocean is famous for its
              crystal-clear waters, coral reefs, and luxury resorts. Mauritius
              is a haven for beach lovers, offering activities like snorkeling,
              diving, and dolphin watching. The island is also rich in cultural
              influences, and a visit to Port Louis, the capital, or the
              Chamarel Seven Colored Earth is a must.
              <br />
              Seychelles
              <br />
              Another jewel in the Indian Ocean, Seychelles is known for its
              pristine beaches, nature reserves, and unique flora and fauna.
              Mahé, Praslin, and La Digue are popular islands to explore, each
              offering a blend of luxury and untouched nature. Whether it’s
              lounging on Anse Lazio Beach or hiking through the Vallée de Mai,
              Seychelles is the ultimate tropical escape.
              <br />
              Armenia
              <br />
              A land of ancient history, stunning monasteries, and rugged
              landscapes, Armenia is a hidden gem in the Caucasus region. Visit
              the ancient monastery of Geghard, a UNESCO World Heritage site, or
              explore Yerevan, the capital, where you’ll find a mix of modern
              culture and Soviet architecture. Lake Sevan and the scenic Dilijan
              National Park are perfect for nature lovers.
              <br />
              Georgia
              <br />
              Georgia is a country that offers breathtaking landscapes, ancient
              traditions, and world-renowned wines. From the historic streets of
              Tbilisi to the stunning mountain ranges of Kazbegi, Georgia is
              perfect for both cultural exploration and outdoor adventures.
              Don’t miss the Svaneti region, known for its medieval watchtowers
              and untamed beauty.
              <br />
              Singapore
              <br />
              A futuristic city-state, Singapore is a melting pot of cultures
              with incredible architecture, gardens, and attractions. Visit the
              iconic Gardens by the Bay, take a stroll along Marina Bay Sands,
              or shop in the bustling streets of Orchard Road. Singapore is a
              dynamic blend of modernity, nature, and rich cultural heritage.
              <br />
              Thailand
              <br />
              From the bustling streets of Bangkok to the serene islands of
              Phuket and Koh Samui, Thailand offers an unforgettable travel
              experience. Known for its temples, like Wat Pho and Wat Arun,
              stunning beaches, and rich culture, Thailand is the perfect
              destination for both adventurers and those seeking relaxation. The
              food, vibrant nightlife, and friendly locals make it a must-visit.
              <br />
              Japan
              <br />
              Japan is a fascinating blend of ancient traditions and
              cutting-edge modernity. From the bustling city of Tokyo with its
              neon lights and skyscrapers to the peaceful temples and gardens of
              Kyoto, Japan offers a unique travel experience. Don’t miss the
              stunning views of Mount Fuji, the cultural wonders of Nara, and
              the hot springs of Hakone.
              <br />
              Turkey
              <br />
              Turkey is a destination where East meets West, offering a rich
              history, diverse landscapes, and vibrant culture. Istanbul is a
              must-visit with its stunning Hagia Sophia, Blue Mosque, and Grand
              Bazaar. Explore the otherworldly landscapes of Cappadocia with its
              hot air balloon rides or relax on the beaches of Antalya and
              Bodrum.
              <br />
              Azerbaijan
              <br />
              Known as the &qout;Land of Fire,&qout; Azerbaijan offers a unique
              mix of modern architecture and ancient traditions. Visit Baku, the
              capital, with its futuristic skyline and old-world charm, or
              explore the ancient city of Sheki. The country’s diverse
              landscapes range from the Caspian Sea coastline to the Caucasus
              Mountains, making it a great destination for explorers.
              <br />
              Sri Lanka
              <br />
              Sri Lanka is a tropical paradise with golden beaches, lush tea
              plantations, and ancient ruins. Whether you’re exploring the
              ancient city of Anuradhapura, hiking through the tea plantations
              in Nuwara Eliya, or enjoying a safari in Yala National Park, Sri
              Lanka offers an immersive travel experience.
              <br />
              <Link
                to="/Europe"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                Europe
              </Link>
              <br />
              From the romantic streets of Paris to the historic ruins of Rome,{" "}
              <Link
                to="/Europe"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                Europe
              </Link>{" "}
              is a continent rich in culture, history, and natural beauty.
              Whether you’re exploring the medieval castles of Scotland,
              cruising along the canals of Amsterdam, or skiing in the Swiss
              Alps, Europe offers endless possibilities. Visit Spain for its
              vibrant culture, Germany for its history and beer festivals, or
              Greece for its ancient ruins and stunning beaches.
              <br />
              Check Out Our Other Pages for{" "}
              <Link
                to="/domestic"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                Domestic
              </Link>{" "}
              Hidden Gems
              <br />
              While these destinations are some of the world’s best, don’t miss
              out on exploring our other pages for Domestic Hidden Gems and
              Other Destinations that are equally spectacular. We specialize in
              creating memorable trips to unique and unexplored places around
              the globe.
              <br />
              <Link
                to="/contact"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                Contact Us
              </Link>{" "}
              &{" "}
              <Link
                to="/Booking_Form"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                Book Now
              </Link>{" "}
              for an Instant Discount
              <br />
              Ready to explore the world? Contact us today to start planning
              your next big adventure. Book Now for exclusive discounts on
              flights, hotels, and personalized tour packages. Let us handle the
              details while you get ready for the trip of a lifetime!
            </span>
          )}
          <span
            className="ml-2 cursor-pointer text-red-600 text-lg underline"
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "read less" : "read more"}
          </span>
        </h1>
        <Slider {...settings}>
          {International_Deals.map((deal, index) => (
            <div key={index} className="px-2">
              <div className="relative h-80 w-full">
                <img
                  src={deal.img}
                  alt={deal.text}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="bg-black bg-opacity-40 absolute inset-0 rounded-lg">
                  <div className="p-4">
                    <h1 className="text-white text-lg font-semibold">
                      {deal.text}
                    </h1>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-white text-sm">{deal.duration}</h2>
                    {/* <p className="text-white font-bold">{deal.price}</p> */}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Link to={deal.link}>
                      <button className="text-white border-2 text-sm border-white rounded-lg px-2 py-1 hover:bg-white hover:text-black">
                        EXPLORE NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className="md:max-w-7xl md:mx-auto shadow-lg shadow-black mt-10 p-4 rounded-lg font-oswald">
        <p className="mt-2 text-md md:text-lg pt-8 leading-6 md:leading-1">
       <span className="text-xl text-bold"> Discover the World’s Most Incredible  <Link to='/international' className="text-red-600 hover:cursor-pointer hover:underline">International</Link> Travel Destinations</span>
                  <br/>
               Ready to venture beyond borders and explore some of the most stunning  <Link to='/international' className="text-red-600 hover:cursor-pointer hover:underline">international</Link> locations? From tropical paradises to culturally rich destinations, the world is full of breathtaking experiences waiting to be discovered. Let’s take a journey through some of the top international destinations you should add to your travel bucket list:
              {seeMore && (
                <span>
                  <br/>
                  Vietnam<br/>
                  A land of striking natural beauty and cultural diversity, Vietnam offers something for every traveler. From the emerald waters of Ha Long Bay to the ancient town of Hoi An, Vietnam is a blend of scenic wonders and historical charm. Don’t miss Hanoi, where old meets new, or the bustling city of Ho Chi Minh with its vibrant nightlife and rich history.
                  <br/>
                  <Link to='/Bali' className="text-red-600 hover:underline cursor-pointer">Bali</Link>, Indonesia<br/>
                  <Link to='/Bali' className="text-red-600 hover:underline cursor-pointer">Bali</Link> is a paradise known for its serene beaches, lush rice terraces, and spiritual atmosphere. The island offers stunning temples like Uluwatu and Tanah Lot, the terraced rice fields of Ubud, and world-class surf spots. Whether you’re looking for adventure, relaxation, or a spiritual retreat, <Link to='/Bali' className="text-red-600 hover:underline cursor-pointer">Bali</Link> has it all.
                  <br/>
                  Maldives<br/>
                  Imagine pristine white-sand beaches, overwater villas, and crystal-clear lagoons – welcome to the Maldives. Famous for its luxurious resorts, the Maldives offers an unparalleled escape into a tropical paradise. Whether you’re snorkeling with manta rays or enjoying a romantic dinner under the stars, the Maldives is the ultimate destination for a peaceful retreat.
                  <br/>
                  <Link to='/Dubai' className="text-red-600 hover:underline cursor-pointer">Dubai</Link>, UAE<br/>
                  A city that epitomizes luxury and innovation, <Link to='/Dubai' className="text-red-600 hover:underline cursor-pointer">Dubai</Link>is a playground for those who love glamour and adventure. From the iconic Burj Khalifa, the tallest building in the world, to the indoor ski resort at Mall of the Emirates, <Link to='/Dubai' className="text-red-600 hover:underline cursor-pointer">Dubai</Link> is a fusion of futuristic skyscrapers, desert safaris, and traditional souks. It’s perfect for both luxury travelers and adventure enthusiasts.
                  <br/>
                  Malaysia<br/>
                  Malaysia is a vibrant mix of cultures, with stunning islands, rainforests, and modern cities. Visit the bustling metropolis of Kuala Lumpur, home to the Petronas Twin Towers, or explore the idyllic islands of Langkawi and Penang. The wildlife in Borneo, the colonial charm of Malacca, and the beaches of Tioman Island make Malaysia a diverse travel destination.
                  <br/>
                  Mauritius<br/>
                  This island nation in the Indian Ocean is famous for its crystal-clear waters, coral reefs, and luxury resorts. Mauritius is a haven for beach lovers, offering activities like snorkeling, diving, and dolphin watching. The island is also rich in cultural influences, and a visit to Port Louis, the capital, or the Chamarel Seven Colored Earth is a must.
                  <br/>
                  Seychelles<br/>
                  Another jewel in the Indian Ocean, Seychelles is known for its pristine beaches, nature reserves, and unique flora and fauna. Mahé, Praslin, and La Digue are popular islands to explore, each offering a blend of luxury and untouched nature. Whether it’s lounging on Anse Lazio Beach or hiking through the Vallée de Mai, Seychelles is the ultimate tropical escape.
                  <br/>
                  Armenia<br/>
                  A land of ancient history, stunning monasteries, and rugged landscapes, Armenia is a hidden gem in the Caucasus region. Visit the ancient monastery of Geghard, a UNESCO World Heritage site, or explore Yerevan, the capital, where you’ll find a mix of modern culture and Soviet architecture. Lake Sevan and the scenic Dilijan National Park are perfect for nature lovers.
                  <br/>
                  Georgia<br/>
                  Georgia is a country that offers breathtaking landscapes, ancient traditions, and world-renowned wines. From the historic streets of Tbilisi to the stunning mountain ranges of Kazbegi, Georgia is perfect for both cultural exploration and outdoor adventures. Don’t miss the Svaneti region, known for its medieval watchtowers and untamed beauty.
                  <br/>
                  Singapore<br/>
                  A futuristic city-state, Singapore is a melting pot of cultures with incredible architecture, gardens, and attractions. Visit the iconic Gardens by the Bay, take a stroll along Marina Bay Sands, or shop in the bustling streets of Orchard Road. Singapore is a dynamic blend of modernity, nature, and rich cultural heritage.
                  <br/>
                  Thailand<br/>
                  From the bustling streets of Bangkok to the serene islands of Phuket and Koh Samui, Thailand offers an unforgettable travel experience. Known for its temples, like Wat Pho and Wat Arun, stunning beaches, and rich culture, Thailand is the perfect destination for both adventurers and those seeking relaxation. The food, vibrant nightlife, and friendly locals make it a must-visit.
                  <br/>
                  Japan<br/>
                  Japan is a fascinating blend of ancient traditions and cutting-edge modernity. From the bustling city of Tokyo with its neon lights and skyscrapers to the peaceful temples and gardens of Kyoto, Japan offers a unique travel experience. Don’t miss the stunning views of Mount Fuji, the cultural wonders of Nara, and the hot springs of Hakone.
                  <br/>
                  Turkey<br/>
                  Turkey is a destination where East meets West, offering a rich history, diverse landscapes, and vibrant culture. Istanbul is a must-visit with its stunning Hagia Sophia, Blue Mosque, and Grand Bazaar. Explore the otherworldly landscapes of Cappadocia with its hot air balloon rides or relax on the beaches of Antalya and Bodrum.
                  <br/>
                  Azerbaijan<br/>
                  Known as the "Land of Fire," Azerbaijan offers a unique mix of modern architecture and ancient traditions. Visit Baku, the capital, with its futuristic skyline and old-world charm, or explore the ancient city of Sheki. The country’s diverse landscapes range from the Caspian Sea coastline to the Caucasus Mountains, making it a great destination for explorers.
                  <br/>
                  Sri Lanka<br/>
                  Sri Lanka is a tropical paradise with golden beaches, lush tea plantations, and ancient ruins. Whether you’re exploring the ancient city of Anuradhapura, hiking through the tea plantations in Nuwara Eliya, or enjoying a safari in Yala National Park, Sri Lanka offers an immersive travel experience.
                  <br/>
                  <Link to='/Europe' className="text-red-600 hover:cursor-pointer hover:underline">Europe</Link><br/>
                  From the romantic streets of Paris to the historic ruins of Rome, <Link to='/Europe' className="text-red-600 hover:cursor-pointer hover:underline">Europe</Link> is a continent rich in culture, history, and natural beauty. Whether you’re exploring the medieval castles of Scotland, cruising along the canals of Amsterdam, or skiing in the Swiss Alps, Europe offers endless possibilities. Visit Spain for its vibrant culture, Germany for its history and beer festivals, or Greece for its ancient ruins and stunning beaches.
                  <br/>
                  Check Out Our Other Pages for <Link to= '/domestic' className="text-red-600 hover:cursor-pointer hover:underline">Domestic</Link> Hidden Gems<br/>
                  While these destinations are some of the world’s best, don’t miss out on exploring our other pages for Domestic Hidden Gems and Other Destinations that are equally spectacular. We specialize in creating memorable trips to unique and unexplored places around the globe.
                  <br/>
                 <Link to='/contact' className="text-red-600 hover:cursor-pointer hover:underline">Contact Us</Link> & <Link to="/Booking_Form" className="text-red-600 hover:cursor-pointer hover:underline">Book Now</Link>  for an Instant Discount<br/>
                  Ready to explore the world? Contact us today to start planning your next big adventure. Book Now for exclusive discounts on flights, hotels, and personalized tour packages. Let us handle the details while you get ready for the trip of a lifetime!
                </span>
              )}
              <span
                className="ml-2 cursor-pointer text-black text-lg underline" 
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'See Less' : 'See More'}
              </span>
        </p>

        </div> */}
      </div>
    </>
  );
};

export default DealsSlider;

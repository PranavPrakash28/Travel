import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rome from "../Image/Rome.jpg";
import Paris from "../Image/Paris.jpg";
import Barcelona from "../Image/Barcelona.jpg";
import London from "../Image/London.jpg";
import Amsterdam from "../Image/Amsterdam.jpg";
import Zurich from "../Image/Zurich.jpg";
import Prague from "../Image/Prague.jpg";
import Vienna from "../Image/Vienna.jpg";
import Berlin from "../Image/Berlin.jpg";
import Athens from "../Image/Athens.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const European_Deals = [
  {
    img: Paris,
    duration: "5 Days & 4 Nights",
    text: "Paris, France | Eiffel Tower and Museums",
    price: "EUR 1500",
    link: "/Paris_Packages",
  },
  {
    img: Rome,
    duration: "6 Days & 5 Nights",
    text: "Rome, Italy | Colosseum and Vatican City",
    price: "EUR 1800",
    link: "/Rome_Packages",
  },
  {
    img: Barcelona,
    duration: "7 Days & 6 Nights",
    text: "Barcelona, Spain | Architecture and Beaches",
    price: "EUR 1400",
    link: "/Barcelona_Packages",
  },
  {
    img: London,
    duration: "4 Days & 3 Nights",
    text: "London, UK | Historical Landmarks and Culture",
    price: "EUR 2000",
    link: "/London_Packages",
  },
  {
    img: Amsterdam,
    duration: "5 Days & 4 Nights",
    text: "Amsterdam, Netherlands | Canals and Museums",
    price: "EUR 1600",
    link: "/Amsterdam_Packages",
  },
  {
    img: Zurich,
    duration: "6 Days & 5 Nights",
    text: "Zurich, Switzerland | Mountains and Lakes",
    price: "EUR 2500",
    link: "/Zurich_Packages",
  },
  {
    img: Prague,
    duration: "4 Days & 3 Nights",
    text: "Prague, Czech Republic | Castles and Old Town",
    price: "EUR 1300",
    link: "/Prague_Packages",
  },
  {
    img: Vienna,
    duration: "5 Days & 4 Nights",
    text: "Vienna, Austria | Palaces and Opera",
    price: "EUR 1700",
    link: "/Vienna_Packages",
  },
  {
    img: Berlin,
    duration: "6 Days & 5 Nights",
    text: "Berlin, Germany | Historical Sites and Museums",
    price: "EUR 1900",
    link: "/Berlin_Packages",
  },
  {
    img: Athens,
    duration: "7 Days & 6 Nights",
    text: "Athens, Greece | Ancient Ruins and Culture",
    price: "EUR 2100",
    link: "/Athens_Packages",
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
        slidesToShow: 3,
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
        <Link to="/Loc_Europe">
          <h1 className="text-3xl font-bold mb-7">EUROPE</h1>
        </Link>
        <h1 className="mt-2 text-md md:text-xl pt-8 leading-6 md:leading-1 mb-7">
          <span className="text-md md:text-2xl font-semibold">
            Unveiling{" "}
            <Link
              to="/Loc_Europe"
              className="text-red-600 hover:underline cursor-pointer"
            >
              Europe&apos;s
            </Link>{" "}
            Timeless Beauty <br />
          </span>
          Europe is more than just a continent; it is an ever-evolving
          masterpiece where history, culture, art, and natural beauty come
          together to offer an experience unlike any other. From the vibrant
          streets of major cities to the serene countryside and coastal towns,
          Europe brims with endless opportunities for discovery. Each country,
          each city, each corner has its own story, rooted in centuries of
          transformation. Whether you&apos;re wandering through the winding
          alleyways of a medieval city or basking in the glory of iconic
          landmarks, Europe never ceases to amaze travelers from around the
          globe. Beyond its architectural grandeur and historical significance,
          Europe is also a hub of creativity, innovation, and tradition. The
          art, music, fashion, and culinary delights that thrive across the
          continent create an atmosphere where the past and future coexist in
          perfect harmony. As you embark on this journey, prepare to indulge in
          a sensory feast that brings together timeless culture and cutting-edge
          modernity.
          {seeMore && (
            <span>
              <Link
                to="/Loc_Paris"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Paris
              </Link>
              , France – The City of Lights and Love <br />
              <Link
                to="/Loc_Paris"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Paris
              </Link>
              , perhaps the most iconic of European cities, embodies romance,
              sophistication, and artistic expression. As you step into the
              French capital, the sight of the Eiffel Tower soaring above the
              city skyline instantly captures your heart. Paris isn’t just about
              landmarks, it’s about moments—taking leisurely walks along the
              Seine River, enjoying the quaint cafés that line the streets, or
              marveling at the world-class art collections in the Louvre Museum.
              Don&apos;t miss the chance to explore the enchanting gardens of
              the Palace of Versailles or experience the bohemian vibe of
              Montmartre. Whether you’re a lover of art, fashion, cuisine, or
              history, Paris offers something for everyone, wrapped in a
              timeless elegance that defines the very spirit of Europe.
              <br />
              <br />
              Rome, Italy – The Eternal City of Glory
              <br />
              In Rome, every step you take seems to transport you back to the
              height of the Roman Empire. As you wander through ancient ruins,
              you’re reminded of the glory of a civilization that shaped the
              world. The Colosseum, one of Rome’s greatest architectural feats,
              stands as a testament to the city’s grandeur, while the Pantheon
              still echoes with the achievements of ancient Rome. And let’s not
              forget Vatican City, home to the magnificent St. Peter’s Basilica
              and the Sistine Chapel, where Michelangelo’s masterpieces adorn
              the ceilings. But Rome isn’t all about history; it’s about the
              Italian way of life. From the vibrant piazzas, where locals gather
              for their daily espresso, to the bustling markets and trattorias,
              Rome offers an immersive experience filled with warmth and
              hospitality.
              <br />
              <br />
              Barcelona, Spain – A Fusion of Art, Architecture, and Sea
              <br />
              Barcelona is where history, art, and vibrant culture meet under
              the warm Mediterranean sun. The Catalonian capital is an
              architectural marvel, with Antoni Gaudí’s imaginative creations
              like the Sagrada Familia and Park Güell showcasing a blend of
              surrealism and gothic revival. Beyond its awe-inspiring
              architecture, Barcelona’s coastal beauty invites visitors to
              unwind on its golden beaches, making it an ideal mix of city and
              seaside retreat. The vibrant street life, lively markets like La
              Boqueria, and the rich culinary scene, from tapas to seafood
              paella, all come together to create a city that thrives on its
              unique energy. Wander down the famous La Rambla boulevard or
              explore the Gothic Quarter’s narrow alleyways to witness the
              city’s charm and creativity in every corner.
              <br />
              <br />
              London, United Kingdom – A Blend of Majesty and Modernity
              <br />
              London is a city that seamlessly blends its rich royal heritage
              with its status as one of the world’s most dynamic modern
              metropolises. Here, the past comes alive in landmarks like the
              Tower of London, Buckingham Palace, and Westminster Abbey. Wander
              through historic streets lined with centuries-old pubs, or explore
              the modern landmarks like the Shard, which offer panoramic views
              of this sprawling city. London is a melting pot of cultures,
              reflected in its art galleries, museums, theaters, and world-class
              shopping districts. From the historical Tower Bridge to the
              contemporary Tate Modern museum, London offers visitors an
              eclectic array of experiences, all wrapped in the vibrant energy
              of a global city.
              <br />
              Amsterdam, Netherlands – The Charm of Canals and Culture
              <br />
              With its picturesque canals, cobbled streets, and centuries-old
              houses, Amsterdam feels like stepping into a painting. But this
              Dutch city isn’t just about beauty; it’s a cultural hub that has
              something for everyone. The art scene in Amsterdam is second to
              none, with the Van Gogh Museum and Rijksmuseum housing some of the
              greatest works of European art. Beyond its museums, Amsterdam’s
              canals invite visitors to take leisurely boat rides, offering a
              unique perspective on the city’s charm. As you explore the flower
              markets, coffee shops, and lively squares, you’ll find that
              Amsterdam’s laid-back atmosphere is both welcoming and
              captivating. From cycling through the city to discovering the
              infamous Anne Frank House, Amsterdam offers a blend of history,
              culture, and relaxation.
              <br />
              <br />
              Zurich, Switzerland – A Serene Retreat Amidst Mountains and Lakes
              <br />
              Zurich, Switzerland’s largest city, is a peaceful retreat where
              urban sophistication meets natural beauty. Nestled between the
              Alps and Lake Zurich, the city offers breathtaking views and a
              tranquil atmosphere. Known for its pristine environment and high
              standard of living, Zurich is an ideal destination for those
              looking to enjoy both cultural experiences and outdoor adventures.
              Stroll along the charming Old Town (Altstadt), explore world-class
              museums like the Kunsthaus Zurich, or simply enjoy the tranquility
              of the lakefront promenades. Whether you’re interested in hiking
              in the nearby mountains, indulging in Swiss chocolate, or
              exploring the city’s art galleries, Zurich offers a balanced mix
              of relaxation and exploration.
              <br />
              Prague, Czech Republic – A Fairy-Tale City Frozen in Time
              <br />
              Prague’s magical atmosphere makes it feel like a city straight out
              of a fairy tale. With its stunning Gothic architecture, medieval
              castles, and enchanting cobblestone streets, Prague is a dream
              come true for travelers seeking a historical journey. Explore the
              iconic Charles Bridge, which spans the Vltava River, or visit the
              Prague Castle, one of the largest and most impressive castle
              complexes in the world. Wander through the Old Town Square, where
              the famous Astronomical Clock has been marking time for over 600
              years. Prague’s unique charm is in its preservation of history,
              where every corner tells a story of kings, emperors, and empires
              long past.
              <br />
              Vienna, Austria – The Imperial City of Elegance and Art
              <br />
              Vienna, the capital of Austria, is a city of imperial elegance,
              music, and art. It’s where the echoes of Mozart, Beethoven, and
              Strauss still linger in the grand concert halls, and the
              architectural splendor of the Habsburg dynasty remains a testament
              to Vienna’s royal past. Stroll through the magnificent Schönbrunn
              Palace, visit the Kunsthistorisches Museum, or take in a
              performance at the world-famous Vienna State Opera. Vienna’s café
              culture is equally renowned, with historic coffee houses offering
              the perfect place to relax with a slice of Sachertorte and a
              Viennese coffee. The city’s baroque beauty and intellectual
              heritage make it a must-visit destination for art lovers and
              history buffs alike.
              <br />
              Berlin, Germany – A City of History, Art, and Innovation
              <br />
              Berlin is a city that wears its history on its sleeve. From the
              remnants of the Berlin Wall to the grandeur of the Brandenburg
              Gate, Berlin is a living testament to resilience and
              reunification. The city’s complex past is complemented by its
              vibrant modern culture, making Berlin a fascinating destination
              for history enthusiasts and contemporary art lovers alike. Explore
              Museum Island, where world-class museums house artifacts from
              ancient civilizations, or dive into the city’s legendary
              nightlife, where creativity and innovation abound. Berlin’s unique
              mix of history, art, and cutting-edge culture makes it one of
              Europe’s most dynamic cities.
              <br />
              Athens, Greece – The Cradle of Western Civilization
              <br />
              Athens is a city where ancient history comes to life. As the
              birthplace of democracy, philosophy, and some of the world’s
              greatest architectural achievements, Athens offers a rich tapestry
              of culture and history. Explore the Acropolis, where the Parthenon
              stands as a symbol of ancient Greece’s power and ingenuity. Wander
              through the bustling Plaka neighborhood, where modern-day shops
              and cafes sit beside ancient ruins. Athens’ blend of history and
              modernity, combined with its rich Mediterranean culture, makes it
              a city that leaves a lasting impression.
              <br />
              <Link
                to="/contact"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Contact
              </Link>{" "}
              & Explore More
              <br />
              Are you ready to embark on a journey through Europe’s most
              fascinating destinations?{" "}
              <Link
                to="/contact"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Contact us
              </Link>{" "}
              today to start planning your trip{" "}
              <Link
                to="/Booking_Form"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Book Now.
              </Link>{" "}
              From historic landmarks to hidden gems, Europe has something for
              every traveler. Don&apos;t forget to explore our{" "}
              <Link
                to="/international"
                className="text-red-600 hover:underline cursor-pointer"
              >
                International
              </Link>
              ,{" "}
              <Link
                to="/domestic"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Domestic
              </Link>
              ,{" "}
              <Link
                to="/international"
                className="text-red-600 hover:underline cursor-pointer"
              >
                International
              </Link>
              , and Hidden Gems travel packages for more incredible offers
              tailored to your dream vacation. Whether you&apos;re seeking
              adventure, relaxation, or a deep dive into history, we have the
              perfect package for you!
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
          {European_Deals.map((deal, index) => (
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
                      Unveiling <Link to='/Loc_Europe'className="text-red-600 hover:underline cursor-pointer">Europe&apos;s</Link> Timeless Beauty <br/>
                    Europe is more than just a continent; it is an ever-evolving masterpiece where history, culture, art, and natural beauty come together to offer an experience unlike any other. From the vibrant streets of major cities to the serene countryside and coastal towns, Europe brims with endless opportunities for discovery. Each country, each city, each corner has its own story, rooted in centuries of transformation. Whether you're wandering through the winding alleyways of a medieval city or basking in the glory of iconic landmarks, Europe never ceases to amaze travelers from around the globe.
                    Beyond its architectural grandeur and historical significance, Europe is also a hub of creativity, innovation, and tradition. The art, music, fashion, and culinary delights that thrive across the continent create an atmosphere where the past and future coexist in perfect harmony. As you embark on this journey, prepare to indulge in a sensory feast that brings together timeless culture and cutting-edge modernity. <br/>
                                  {seeMore && (
                                    <span>
                    <Link to='/Loc_Paris'className="text-red-600 hover:underline cursor-pointer">Paris</Link>, France – The City of Lights and Love <br/>
                    <Link to='/Loc_Paris'className="text-red-600 hover:underline cursor-pointer">Paris</Link>, perhaps the most iconic of European cities, embodies romance, sophistication, and artistic expression. As you step into the French capital, the sight of the Eiffel Tower soaring above the city skyline instantly captures your heart. Paris isn’t just about landmarks, it’s about moments—taking leisurely walks along the Seine River, enjoying the quaint cafés that line the streets, or marveling at the world-class art collections in the Louvre Museum. Don't miss the chance to explore the enchanting gardens of the Palace of Versailles or experience the bohemian vibe of Montmartre. Whether you’re a lover of art, fashion, cuisine, or history, Paris offers something for everyone, wrapped in a timeless elegance that defines the very spirit of Europe.<br/>
                    <br/>
                    Rome, Italy – The Eternal City of Glory<br/>
                    In Rome, every step you take seems to transport you back to the height of the Roman Empire. As you wander through ancient ruins, you’re reminded of the glory of a civilization that shaped the world. The Colosseum, one of Rome’s greatest architectural feats, stands as a testament to the city’s grandeur, while the Pantheon still echoes with the achievements of ancient Rome. And let’s not forget Vatican City, home to the magnificent St. Peter’s Basilica and the Sistine Chapel, where Michelangelo’s masterpieces adorn the ceilings. But Rome isn’t all about history; it’s about the Italian way of life. From the vibrant piazzas, where locals gather for their daily espresso, to the bustling markets and trattorias, Rome offers an immersive experience filled with warmth and hospitality.<br/>
                    <br/>
                    Barcelona, Spain – A Fusion of Art, Architecture, and Sea<br/>
                    Barcelona is where history, art, and vibrant culture meet under the warm Mediterranean sun. The Catalonian capital is an architectural marvel, with Antoni Gaudí’s imaginative creations like the Sagrada Familia and Park Güell showcasing a blend of surrealism and gothic revival. Beyond its awe-inspiring architecture, Barcelona’s coastal beauty invites visitors to unwind on its golden beaches, making it an ideal mix of city and seaside retreat. The vibrant street life, lively markets like La Boqueria, and the rich culinary scene, from tapas to seafood paella, all come together to create a city that thrives on its unique energy. Wander down the famous La Rambla boulevard or explore the Gothic Quarter’s narrow alleyways to witness the city’s charm and creativity in every corner.<br/>
                    <br/>
                    London, United Kingdom – A Blend of Majesty and Modernity<br/>
                    London is a city that seamlessly blends its rich royal heritage with its status as one of the world’s most dynamic modern metropolises. Here, the past comes alive in landmarks like the Tower of London, Buckingham Palace, and Westminster Abbey. Wander through historic streets lined with centuries-old pubs, or explore the modern landmarks like the Shard, which offer panoramic views of this sprawling city. London is a melting pot of cultures, reflected in its art galleries, museums, theaters, and world-class shopping districts. From the historical Tower Bridge to the contemporary Tate Modern museum, London offers visitors an eclectic array of experiences, all wrapped in the vibrant energy of a global city.<br/>

                    Amsterdam, Netherlands – The Charm of Canals and Culture<br/>
                    With its picturesque canals, cobbled streets, and centuries-old houses, Amsterdam feels like stepping into a painting. But this Dutch city isn’t just about beauty; it’s a cultural hub that has something for everyone. The art scene in Amsterdam is second to none, with the Van Gogh Museum and Rijksmuseum housing some of the greatest works of European art. Beyond its museums, Amsterdam’s canals invite visitors to take leisurely boat rides, offering a unique perspective on the city’s charm. As you explore the flower markets, coffee shops, and lively squares, you’ll find that Amsterdam’s laid-back atmosphere is both welcoming and captivating. From cycling through the city to discovering the infamous Anne Frank House, Amsterdam offers a blend of history, culture, and relaxation.<br/>
                    <br/>
                    Zurich, Switzerland – A Serene Retreat Amidst Mountains and Lakes<br/>
                    Zurich, Switzerland’s largest city, is a peaceful retreat where urban sophistication meets natural beauty. Nestled between the Alps and Lake Zurich, the city offers breathtaking views and a tranquil atmosphere. Known for its pristine environment and high standard of living, Zurich is an ideal destination for those looking to enjoy both cultural experiences and outdoor adventures. Stroll along the charming Old Town (Altstadt), explore world-class museums like the Kunsthaus Zurich, or simply enjoy the tranquility of the lakefront promenades. Whether you’re interested in hiking in the nearby mountains, indulging in Swiss chocolate, or exploring the city’s art galleries, Zurich offers a balanced mix of relaxation and exploration.<br/>

                    Prague, Czech Republic – A Fairy-Tale City Frozen in Time<br/>
                    Prague’s magical atmosphere makes it feel like a city straight out of a fairy tale. With its stunning Gothic architecture, medieval castles, and enchanting cobblestone streets, Prague is a dream come true for travelers seeking a historical journey. Explore the iconic Charles Bridge, which spans the Vltava River, or visit the Prague Castle, one of the largest and most impressive castle complexes in the world. Wander through the Old Town Square, where the famous Astronomical Clock has been marking time for over 600 years. Prague’s unique charm is in its preservation of history, where every corner tells a story of kings, emperors, and empires long past.
                    <br/>
                    Vienna, Austria – The Imperial City of Elegance and Art<br/>
                    Vienna, the capital of Austria, is a city of imperial elegance, music, and art. It’s where the echoes of Mozart, Beethoven, and Strauss still linger in the grand concert halls, and the architectural splendor of the Habsburg dynasty remains a testament to Vienna’s royal past. Stroll through the magnificent Schönbrunn Palace, visit the Kunsthistorisches Museum, or take in a performance at the world-famous Vienna State Opera. Vienna’s café culture is equally renowned, with historic coffee houses offering the perfect place to relax with a slice of Sachertorte and a Viennese coffee. The city’s baroque beauty and intellectual heritage make it a must-visit destination for art lovers and history buffs alike.
                    <br/>
                    Berlin, Germany – A City of History, Art, and Innovation<br/>
                    Berlin is a city that wears its history on its sleeve. From the remnants of the Berlin Wall to the grandeur of the Brandenburg Gate, Berlin is a living testament to resilience and reunification. The city’s complex past is complemented by its vibrant modern culture, making Berlin a fascinating destination for history enthusiasts and contemporary art lovers alike. Explore Museum Island, where world-class museums house artifacts from ancient civilizations, or dive into the city’s legendary nightlife, where creativity and innovation abound. Berlin’s unique mix of history, art, and cutting-edge culture makes it one of Europe’s most dynamic cities.
                    <br/>
                    Athens, Greece – The Cradle of Western Civilization<br/>
                    Athens is a city where ancient history comes to life. As the birthplace of democracy, philosophy, and some of the world’s greatest architectural achievements, Athens offers a rich tapestry of culture and history. Explore the Acropolis, where the Parthenon stands as a symbol of ancient Greece’s power and ingenuity. Wander through the bustling Plaka neighborhood, where modern-day shops and cafes sit beside ancient ruins. Athens’ blend of history and modernity, combined with its rich Mediterranean culture, makes it a city that leaves a lasting impression.
                    <br/>
                    <Link to='/contact' className="text-red-600 hover:underline cursor-pointer" >Contact</Link> & Explore More<br/>
                    Are you ready to embark on a journey through Europe’s most fascinating destinations? <Link to= '/contact'className="text-red-600 hover:underline cursor-pointer">Contact us</Link> today to start planning your trip <Link to ='/Booking_Form' className="text-red-600 hover:underline cursor-pointer">Book Now.</Link> From historic landmarks to hidden gems, Europe has something for every traveler. Don't forget to explore our <Link to ='/international' className="text-red-600 hover:underline cursor-pointer">International</Link>, <Link to ='/domestic' className="text-red-600 hover:underline cursor-pointer">Domestic</Link>, <Link to ='/international' className="text-red-600 hover:underline cursor-pointer">International</Link>, and Hidden Gems travel packages for more incredible offers tailored to your dream vacation. Whether you're seeking adventure, relaxation, or a deep dive into history, we have the perfect package for you!
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

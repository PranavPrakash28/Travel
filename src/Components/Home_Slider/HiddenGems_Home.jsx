import { Helmet } from "react-helmet";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TirthanValley from "../Image/Jaipur2.jpg";
import SpitiValley from "../Image/Kerala.jpg";
import Chitkul from "../Image/Goa.jpg";
import Shoja from "../Image/Agra.jpg";
import BarotValley from "../Image/Ladakh.jpg";
import Jibhi from "../Image/Varanasi.jpg";
import Kalpa from "../Image/Ranthambore.jpg";
import ParvatiValley from "../Image/Andaman.jpg";
import Narkanda from "../Image/Mysore.jpg";
import BirBilling from "../Image/Sikkim.jpg";
import { Link } from "react-router-dom";

const Himachal_Hidden_Gems = [
  {
    img: TirthanValley,
    duration: "5 Days & 4 Nights",
    text: "Tirthan Valley | Serene Valleys and Trout Fishing",
    price: "INR 28000",
  },
  {
    img: SpitiValley,
    duration: "7 Days & 6 Nights",
    text: "Spiti Valley | Remote Deserts and Monasteries",
    price: "INR 45000",
  },
  {
    img: Chitkul,
    duration: "4 Days & 3 Nights",
    text: "Chitkul | India’s Last Village and Scenic Beauty",
    price: "INR 24000",
  },
  {
    img: Shoja,
    duration: "5 Days & 4 Nights",
    text: "Shoja | Tranquil Villages and Meadows",
    price: "INR 26000",
  },
  {
    img: BarotValley,
    duration: "6 Days & 5 Nights",
    text: "Barot Valley | Fishing, Trekking and Nature Retreat",
    price: "INR 32000",
  },
  {
    img: Jibhi,
    duration: "5 Days & 4 Nights",
    text: "Jibhi | Hidden Paradise and Waterfalls",
    price: "INR 25000",
  },
  {
    img: Kalpa,
    duration: "6 Days & 5 Nights",
    text: "Kalpa | Apple Orchards and Views of Kinnaur Kailash",
    price: "INR 30000",
  },
  {
    img: ParvatiValley,
    duration: "5 Days & 4 Nights",
    text: "Parvati Valley | Enchanting Valleys and Spiritual Vibes",
    price: "INR 27000",
  },
  {
    img: Narkanda,
    duration: "4 Days & 3 Nights",
    text: "Narkanda | Snow-Capped Peaks and Apple Orchards",
    price: "INR 22000",
  },
  {
    img: BirBilling,
    duration: "6 Days & 5 Nights",
    text: "Bir Billing | Paragliding Capital and Monasteries",
    price: "INR 35000",
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
        <Link to="/Loc_Himachal">
          <h1 className="text-3xl font-bold mb-7">HIMANCHAL HIDDEN GEMS</h1>
        </Link>
        <h1 className="mt-2 text-md md:text-xl pt-8 leading-6 md:leading-1 mb-7 ">
          <span className="text-md  md:text-2xl font-semibold ">
            Hidden gems in Himachal Pradesh, perfect for travelers seeking
            offbeat experiences:
          </span>
          <br />
          Tirthan Valley | Serene Valleys and Trout Fishing
          <br />
          Nestled in the Kullu district, Tirthan Valley is a tranquil paradise
          offering breathtaking landscapes and an escape from the bustling city
          life. Known for its pristine river flowing through lush green valleys,
          it’s a perfect spot for trout fishing and nature walks. Explore the
          Great Himalayan National Park or take a serene walk through the
          charming villages to soak in the beauty of this untouched gem.
          {seeMore && (
            <span>
              <br />
              Spiti Valley | Remote Deserts and Monasteries
              <br />
              For those seeking adventure, Spiti Valley offers one of the most
              isolated yet captivating experiences in Himachal Pradesh. With its
              high-altitude desert landscape, centuries-old monasteries, and
              starry night skies, Spiti is ideal for trekkers and spiritual
              seekers alike. Visit ancient monasteries like Key and Dhankar, or
              explore the serene Chandratal Lake. Book your trip now and avail
              special offers for this mystical valley that promises a blend of
              adventure and tranquility.
              <br />
              Chitkul | India’s Last Village and Scenic Beauty
              <br />
              Chitkul, the last inhabited village near the Indo-Tibet border, is
              a quaint destination surrounded by snow-clad mountains, gurgling
              rivers, and a unique cultural experience. This hidden gem offers a
              peaceful environment with mesmerizing views, perfect for those
              looking for solitude and a connection with nature. Wander through
              apple orchards, trek to nearby Kinnaur, and experience the rustic
              charm of this remote village. Contact us today to get special
              packages for exploring Chitkul’s serene beauty.
              <br />
              Shoja | Tranquil Villages and Meadows
              <br />
              A picturesque village located in the Seraj Valley, Shoja is a
              perfect retreat for those in search of peace and tranquility.
              Surrounded by thick forests and rolling meadows, this hidden gem
              offers breathtaking views of the snow-clad mountains and lush
              greenery. Visit Jalori Pass for stunning views, and hike to the
              nearby Serolsar Lake for an unforgettable experience. Secure your
              booking now to explore this hidden haven and enjoy discounted
              rates!
              <br />
              Barot Valley | Fishing, Trekking, and Nature Retreat
              <br />
              A lesser-known treasure in Himachal, Barot Valley offers an ideal
              blend of adventure and serenity. Whether it’s fishing in the Uhl
              River, trekking through dense forests, or camping under the stars,
              Barot has something for every nature lover. The valley’s unspoiled
              beauty and tranquil ambiance make it a favorite among those
              looking for an offbeat travel experience. Don&apos;t miss our
              exclusive deals—book now to immerse yourself in Barot&apos;s
              natural charm.
              <br />
              Jibhi | Hidden Paradise and Waterfalls
              <br />
              Jibhi, a small hamlet in Himachal Pradesh, is known for its lush
              green surroundings, wooden houses, and hidden waterfalls. It’s a
              perfect destination for nature lovers and peace seekers, offering
              an escape from the typical touristy spots. Take a walk through the
              forested trails, discover hidden waterfalls, and unwind in this
              serene environment. Plan your next trip with us and get discounts
              on your booking for Jibhi, your next hidden gem escape.
              <br />
              Kalpa | Apple Orchards and Views of Kinnaur Kailash
              <br />
              Kalpa, located in the Kinnaur district, is a serene village
              offering stunning views of the Kinnaur Kailash range. Famous for
              its apple orchards, Kalpa is an ideal destination for those
              seeking peace, quiet, and unparalleled views of snow-covered
              peaks. Wander through quaint villages, visit the local
              monasteries, and enjoy the fresh mountain air. Avail our special
              offers by booking today and experience Kalpa’s natural beauty.
              <br />
              Parvati Valley | Enchanting Valleys and Spiritual Vibes
              <br />
              Parvati Valley is famous for its enchanting landscape, spiritual
              retreats, and vibrant local culture. Home to destinations like
              Kasol and Manikaran, this valley is a haven for nature lovers and
              spiritual seekers. Whether you want to trek to Kheerganga or relax
              by the Parvati River, this hidden gem is full of experiences
              waiting to be explored. Contact us now for the best deals on your
              Parvati Valley adventure.
              <br />
              Narkanda | Snow-Capped Peaks and Apple Orchards
              <br />
              Located at an altitude of 2708 meters, Narkanda offers panoramic
              views of the snow-clad peaks of the Himalayas and lush apple
              orchards. It’s a perfect destination for winter sports
              enthusiasts, with options for skiing and snowboarding. During the
              warmer months, it’s an ideal spot for hiking and relaxing in
              nature’s lap. Book now for an adventurous trip to Narkanda and
              enjoy special offers.
              <br />
              Bir Billing | Paragliding Capital and Monasteries
              <br />
              Bir Billing is known as the paragliding capital of India,
              attracting adventure seekers from all over the world. Aside from
              thrilling paragliding experiences, Bir is also home to several
              Tibetan monasteries, offering a peaceful retreat amidst the
              mountains. Soar through the skies, enjoy breathtaking views, and
              visit the local monasteries to experience both adventure and
              serenity. Reach out to us for exclusive deals on Bir Billing
              trips!
              <br />
              Check Out Our{" "}
              <Link
                to="/international"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                International
              </Link>{" "}
              Hidden Gems Don’t stop with domestic travel! Check our other pages
              for International Hidden Gems and Other Destinations that will
              inspire your next adventure abroad. We specialize in crafting
              unforgettable travel experiences, both{" "}
              <Link
                to="/domestic"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                locally
              </Link>{" "}
              and{" "}
              <Link
                to="/international"
                className="text-red-600 hover:cursor-pointer hover:underline"
              >
                internationally
              </Link>
              . <br />
              <Link
                to="/contact"
                className="hover:underline text-red-600 hover:cursor-pointer"
              >
                Contact Us
              </Link>{" "}
              &{" "}
              <Link
                to="/Booking_Form"
                className="hover:underline text-red-600 hover:cursor-pointer"
              >
                Book Now
              </Link>{" "}
              for an Instant Discount Choose our website for your next trip!
              Contact us today to plan your dream getaway, and don’t forget to
              Book Now to avail exclusive discounts on flights, hotels, and tour
              packages. Let us make your journey hassle-free and unforgettable!
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
          {Himachal_Hidden_Gems.map((deal, index) => (
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
        <span className="text-xl text-bold">Hidden gems in Himachal Pradesh, perfect for travelers seeking offbeat experiences:</span><br/>

                  Tirthan Valley | Serene Valleys and Trout Fishing<br/>
                  Nestled in the Kullu district, Tirthan Valley is a tranquil paradise offering breathtaking landscapes and an escape from the bustling city life. Known for its pristine river flowing through lush green valleys, it’s a perfect spot for trout fishing and nature walks. Explore the Great Himalayan National Park or take a serene walk through the charming villages to soak in the beauty of this untouched gem. 
                  {seeMore && (
                  <span>           
                  <br/>
                  Spiti Valley | Remote Deserts and Monasteries<br/>
                  For those seeking adventure, Spiti Valley offers one of the most isolated yet captivating experiences in Himachal Pradesh. With its high-altitude desert landscape, centuries-old monasteries, and starry night skies, Spiti is ideal for trekkers and spiritual seekers alike. Visit ancient monasteries like Key and Dhankar, or explore the serene Chandratal Lake. Book your trip now and avail special offers for this mystical valley that promises a blend of adventure and tranquility.

                  <br/>
                  Chitkul | India’s Last Village and Scenic Beauty<br/>
                  Chitkul, the last inhabited village near the Indo-Tibet border, is a quaint destination surrounded by snow-clad mountains, gurgling rivers, and a unique cultural experience. This hidden gem offers a peaceful environment with mesmerizing views, perfect for those looking for solitude and a connection with nature. Wander through apple orchards, trek to nearby Kinnaur, and experience the rustic charm of this remote village. Contact us today to get special packages for exploring Chitkul’s serene beauty.

                  <br/>
                  Shoja | Tranquil Villages and Meadows<br/>
                  A picturesque village located in the Seraj Valley, Shoja is a perfect retreat for those in search of peace and tranquility. Surrounded by thick forests and rolling meadows, this hidden gem offers breathtaking views of the snow-clad mountains and lush greenery. Visit Jalori Pass for stunning views, and hike to the nearby Serolsar Lake for an unforgettable experience. Secure your booking now to explore this hidden haven and enjoy discounted rates!

                  <br/>
                  Barot Valley | Fishing, Trekking, and Nature Retreat<br/>
                  A lesser-known treasure in Himachal, Barot Valley offers an ideal blend of adventure and serenity. Whether it’s fishing in the Uhl River, trekking through dense forests, or camping under the stars, Barot has something for every nature lover. The valley’s unspoiled beauty and tranquil ambiance make it a favorite among those looking for an offbeat travel experience. Don't miss our exclusive deals—book now to immerse yourself in Barot's natural charm.

                  <br/>
                  Jibhi | Hidden Paradise and Waterfalls<br/>
                  Jibhi, a small hamlet in Himachal Pradesh, is known for its lush green surroundings, wooden houses, and hidden waterfalls. It’s a perfect destination for nature lovers and peace seekers, offering an escape from the typical touristy spots. Take a walk through the forested trails, discover hidden waterfalls, and unwind in this serene environment. Plan your next trip with us and get discounts on your booking for Jibhi, your next hidden gem escape.

                  <br/>
                  Kalpa | Apple Orchards and Views of Kinnaur Kailash<br/>
                  Kalpa, located in the Kinnaur district, is a serene village offering stunning views of the Kinnaur Kailash range. Famous for its apple orchards, Kalpa is an ideal destination for those seeking peace, quiet, and unparalleled views of snow-covered peaks. Wander through quaint villages, visit the local monasteries, and enjoy the fresh mountain air. Avail our special offers by booking today and experience Kalpa’s natural beauty.

                  <br/>
                  Parvati Valley | Enchanting Valleys and Spiritual Vibes<br/>
                  Parvati Valley is famous for its enchanting landscape, spiritual retreats, and vibrant local culture. Home to destinations like Kasol and Manikaran, this valley is a haven for nature lovers and spiritual seekers. Whether you want to trek to Kheerganga or relax by the Parvati River, this hidden gem is full of experiences waiting to be explored. Contact us now for the best deals on your Parvati Valley adventure.

                  <br/>
                  Narkanda | Snow-Capped Peaks and Apple Orchards<br/>
                  Located at an altitude of 2708 meters, Narkanda offers panoramic views of the snow-clad peaks of the Himalayas and lush apple orchards. It’s a perfect destination for winter sports enthusiasts, with options for skiing and snowboarding. During the warmer months, it’s an ideal spot for hiking and relaxing in nature’s lap. Book now for an adventurous trip to Narkanda and enjoy special offers.

                  <br/>
                  Bir Billing | Paragliding Capital and Monasteries<br/>
                  Bir Billing is known as the paragliding capital of India, attracting adventure seekers from all over the world. Aside from thrilling paragliding experiences, Bir is also home to several Tibetan monasteries, offering a peaceful retreat amidst the mountains. Soar through the skies, enjoy breathtaking views, and visit the local monasteries to experience both adventure and serenity. Reach out to us for exclusive deals on Bir Billing trips!

                  <br/>
                  Check Out Our <Link to='/international' className="text-red-600 hover:cursor-pointer hover:underline">International</Link> Hidden Gems
                  Don’t stop with domestic travel! Check our other pages for International Hidden Gems and Other Destinations that will inspire your next adventure abroad. We specialize in crafting unforgettable travel experiences, both  <Link to='/domestic' className="text-red-600 hover:cursor-pointer hover:underline">locally</Link> and  <Link to='/international' className="text-red-600 hover:cursor-pointer hover:underline">internationally</Link>. <br/>
                  <Link to='/contact' className="hover:underline text-red-600 hover:cursor-pointer">Contact Us</Link> & <Link to='/Booking_Form'className="hover:underline text-red-600 hover:cursor-pointer">Book Now</Link> for an Instant Discount
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

        </div> */}
      </div>
    </>
  );
};

export default DealsSlider;

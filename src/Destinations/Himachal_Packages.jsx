/* eslint-disable react/prop-types */
import Footer from '../Components/Footer/Footer';
import Himachal from '../Components/Image/about7.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Helmet } from "react-helmet";
import Bharmour from '../Components/Image/Bharmour.webp';
import Manali from '../Components/Image/Manali.jpg';
import Kangra from '../Components/Image/Kangra.jpg';
import Chamba from '../Components/Image/Chamba.jpg';
import Banjar from '../Components/Image/Banjar.png';
import Shimla from '../Components/Image/Shimla.jpg';
import Mandi from '../Components/Image/Mandi.jpg';
import Lahaul from '../Components/Image/Lahaul.jpg';
import Zanskar from '../Components/Image/Zanskar.jpg';

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
        <title>Himachal</title>
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
          <div className="max-w-7xl rounded-3xl mt-10  p-8 md:py-10 text-black flex flex-col md:flex justify-between items-center gap-10 ">
            <p className="text-xl md:text-5xl font-bold text-center"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0)' }}>
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
                className="ml-2 cursor-pointer text-red-600 text-lg"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? 'read less' : 'read more'}
              </span>
            </p>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="w-full h-auto flex-col justify-center px-4 md:px-32 font-oswald mt-8">
          {/* Destination 1 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">1. Bharmour: The Sacred Land of Mountains with a tinge of Thrill 
            </p>
            <div className="flex justify-start md:flex flex-col gap-10">
              <img src={Bharmour} alt="Malana" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Tucked away in the quiet folds of Himachal Pradesh, Bharmour is a destination that effortlessly blends spirituality, natural beauty, and untamed adventure. Known for its ancient temples, pristine landscapes, and captivating wildlife, Bharmour is where the call of the mountains meets the whispers of time. As you make your way into this tranquil town, you’ll feel a deep connection to nature and the divine, a place where every stone tells a story and every path leads to an extraordinary discovery.



                {seeMore && (
                  <span>
                    At the heart of Bharmour lies the mystical Chaurasi Temple Complex, an ensemble of 84 ancient temples that stand as a testament to centuries of devotion. The complex, steeped in history and spiritual energy, is a retreat for pilgrims and travelers alike. The revered Manimahesh Kailash, with its awe-inspiring peak, dominates the skyline, and the trek to its sacred waters is a journey like no other! One that promises not only physical challenges but also spiritual rewards. As you walk this ancient pilgrimage route, the sounds of bells, chants, and the cool mountain breeze create a symphony that calms the soul.
                    For nature lovers, Bharmour is much more than its spiritual side. The town is blessed with an abundance of natural beauty, most notably in the Kugti Wildlife Sanctuary. As you explore this sanctuary, the towering cedar and pine trees form a lush green canopy overhead, while below, streams of glacial water cut through the valleys. Here, the melody of nature plays on, with the occasional sighting of a Himalayan tahr or a bounding snow leopard. The sanctuary is a hiker’s paradise, with trails that take you deep into untouched wilderness, far from the noise of the world.

Bharmour is also known for its rich aquatic life, and trout fishing is one of the lesser-known pleasures of this region. The rivers that flow through Bharmour are home to this prized fish, and fishing enthusiasts can spend hours by the riverside, enjoying the raw beauty of the surroundings as they wait for a catch. The crystal-clear waters and the peaceful ambiance make it an experience of serene solitude.

If you are seeking to balance your adventure with moments of reflection, don’t miss a visit to the Bharmani Mata Temple, perched on a hill overlooking the valley. The views from the temple are nothing short of breathtaking! A panoramic sweep of verdant hills, snow-capped peaks, and the shimmering rivers below. It’s a place that offers solace, a quiet retreat where you can reflect and be at peace.

Bharmour is not just a place to visit, it’s a place to feel. Whether it’s the spiritual aura of the temples, the beauty of the Kugti sanctuary, or the simple joy of casting a line in a trout-filled river, Bharmour offers a unique blend of adventure and peacefulness that will leave you rejuvenated and enriched.

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
                <span className="font-bold">Location:</span> Southeast of Chamba.
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> One can easily get a bus and would take around 3 hours to reach from Chamba.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Chaurasi Temple, Manimahesh trek, Dharamraj Temple, Kugti Wildlife Santuary, etc. 
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
            <p className="font-extrabold text-3xl py-5 ">2. Kangra: The Mystical Land of Valleys and Temples</p>
            <div className="flex justify-start md:flex flex-col gap-10">
              <img src={Kangra} alt="Malana" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Found in the embrace of the mighty Dhauladhar Range, Kangra is a timeless destination, where history, spirituality, and nature come together in perfect harmony. Known for its panoramic landscapes, ancient temples, and serene lakes, Kangra offers a journey not only through its physical beauty but also through its rich cultural heritage. As you step into this beautiful valley, you are welcomed by the towering mountains, vibrant green fields, and the cool, refreshing mountain air that instantly soothes the senses.


                {seeMore && (
                  <span>
                    One of the most enchanting aspects of Kangra is the Dhauladhar Range itself, particularly the Seven Lakes Trek, which takes you on a path through some of the most pristine and untouched mountain scenery in the region. This trek is an adventure lover’s dream, with its shimmering glacial lakes, expansive meadows, and the towering peaks of the Dhauladhar in the backdrop. Whether you're an experienced trekker or someone seeking to connect with nature, this journey brought to you by GSK World Travels is one that fills you with awe at every turn.
No visit to Kangra is complete without a trip to its ancient rock-cut temples. The Masroor Rock Cut Temple is a marvel of architecture and history, standing tall as a testament to the artistry of a bygone era. Carved entirely out of sandstone, this temple complex, often compared to the famous Ellora Caves, is not just a place of worship but also a window into India’s rich architectural past. As you walk through the intricately carved chambers, you can’t help but feel the echoes of history that resonate within these walls.

Another gem of Kangra’s spiritual landscape is the Old Vidyavasni Temple near Palampur. This ancient temple, settled amidst the dense forests and overlooking the precious valley, offers more than just spiritual solace. It provides an escape into nature’s quiet beauty. The temple’s location, away from the bustling towns, makes it the perfect spot for reflection, meditation, and finding peace within.

Kangra’s landscape is dotted with numerous small, serene villages and towns that offer a glimpse into the traditional Himachali way of life. Palampur, with its rolling tea gardens and quaint cottages, is one such town where you can lose yourself in the quiet charm of the valley. Wander through the tea estates, visit a local tea factory, or simply sit by the riverside, watching life go by at a slow, peaceful pace.

For those seeking adventure, the Paragliding Capital of India, Bir-Billing, is located near Kangra, where the skies open up for an adrenaline-pumping experience. Soar high above the valleys, with the wind in your hair and the vast landscape spread out below! An experience that is sure to stay with you forever.

Kangra’s beauty is not just in its landscapes but in the way it allows you to slow down, to feel the pulse of the earth beneath your feet, and to experience a deeper connection with the natural world. Whether you’re trekking through the Seven Lakes, exploring the ancient temples, or simply unwinding in the peaceful villages, Kangra is a destination that nurtures both the spirit and the body.

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
                <span className="font-bold">Location:</span> Lies in Western Himalayas
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> One can easily get a direct flight from Delhi or Chandigarh, however the road is perfectly good with great views all way.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Dharamshala, Mcleodganj, Triund Trek, Palampur, etc.
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
            <p className="font-extrabold text-3xl py-5 ">3. Manali: The Enchanted Oasis of Thrills
            </p>
            <div className="flex justify-start flex-col md:flex gap-10">
              <img src={Manali} alt="Malana" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Perched high in the northern Himalayas, Manali is a captivating destination that enchants every traveler with its breathtaking landscapes and thrilling adventures. Known as the gateway to the snow-capped peaks of the Himalayas, Manali offers a perfect blend of serene valleys, lush forests, and exhilarating activities that cater to all types of explorers. Whether you seek peace amidst nature or crave adventure, Manali promises an unforgettable experience that resonates with the very essence of the mountains.
                {seeMore && (
                  <span>
                    As you wander through the charming streets of Manali, the crisp mountain air fills your lungs, awakening your senses to the beauty surrounding you. The town is enveloped by towering volcanic mountains and picturesque landscapes, making it an ideal starting point for countless adventures. One of the most popular attractions in the area is Rohtang Pass, a high mountain pass that offers a jaw-dropping panorama of the surrounding peaks and valleys. As you drive along the winding roads, each turn reveals another stunning vista, and once you reach the pass, you’ll find yourself in a winter wonderland, with snow-capped mountains stretching as far as the eye can see.

For thrill-seekers, Solang Valley is a must-visit. Known as the adventure capital of Manali, Solang offers a myriad of activities from paragliding to zorbing. The rush of soaring through the skies, with the lush green valleys beneath you, is an experience that will fill your heart with joy. If winter sports are your passion, then snow skiing in Solang Valley is an exhilarating option that will leave you craving for more. 

A short trek from Solang leads you to the stunning Jogini Waterfall. The sound of water cascading down the rocks accompanies you on the trail, creating an astounding atmosphere. Once you reach the waterfall, take a moment to absorb the beauty of nature’s artistry, with sparkling water flowing amidst lush greenery. It’s the perfect spot to relax, meditate, or simply enjoy a picnic surrounded by the serenity of the mountains.

As you explore the enchanting landscapes of Manali, don’t miss the opportunity to visit Soyal Village and Sissu, each offering their unique charm. Soyal, with its traditional wooden houses and warm hospitality, invites you to experience the rich culture of the region. Meanwhile, Sissu, situated along the banks of the river, presents a breathtaking view of the surrounding mountains, making it a photographer’s paradise. 

Hampta Village, another nearby gem, is perfect for trekking enthusiasts. The trek to Hampta Pass is an exhilarating journey that takes you through lush green valleys, vibrant flower-filled meadows, and towering cliffs. The dramatic landscapes, combined with the thrill of reaching the pass, create an experience that stays with you long after you’ve returned home.

In the evenings, as the sun dips below the horizon, Manali transforms into a magical realm. The mesmerizing sunsets paint the sky in hues of orange and pink, casting a warm glow over the mountains. Whether you choose to sip on a hot cup of chai at a cozy café or gaze at the stars twinkling in the clear night sky, the beauty of Manali envelops you, making every moment feel like a dream.

Manali is not just a destination; it’s a retreat for the soul, a place where nature whispers and adventure beckons. From thrilling activities to serene landscapes, this Himalayan gem captures the heart and ignites the spirit of adventure in every traveler.


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
                <span className="font-bold">Location:</span> Located in kullu district 
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> One can easily reach by air or by road as both the connectivity are fine.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Hidimba Devi temple, Solang valley, Vasisht, Kheerganga etc.
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


                    {/* Destination 4 */}
                    <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">4. Lahaul Valley: The Untamed Beauty of the Himalayas
            </p>
            <div className="flex justify-start flex-col md:flex gap-10">
              <img src={Lahaul} alt="Malana" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Lahaul Valley, a hidden gem in the heart of the Indian Himalayas, is a land of rugged beauty and breathtaking landscapes that enchant every traveler. Known for its dramatic scenery, ancient monasteries, and vibrant culture, Lahaul offers a unique experience for those who seek adventure and a sense of peace in a remote yet captivating environment. As you journey into this mystical valley, prepare to be mesmerized by its stark contrasts, where towering peaks meet serene valleys, and vibrant culture thrives amidst the raw wilderness.
                {seeMore && (
                  <span>
                    The adventure begins as you navigate the scenic roads that lead to Lahaul Valley. The journey itself is a thrilling experience, with every twist and turn revealing awe-inspiring vistas. The Sissu village, seen along the banks of the shimmering river, serves as a perfect introduction to the valley’s enchanting beauty. Here, you can witness the confluence of nature and culture, with charming homes, lush green fields, and the backdrop of towering mountains. Take a moment to stroll along the riverbank, allowing the cool breeze and gentle sound of flowing water to rejuvenate your spirit.

As you delve deeper into Lahaul, the village of Udaipur welcomes you with open arms. Known for its picturesque landscapes and serene atmosphere, Udaipur is home to the famous Mrikula Devi Temple, a site of great religious significance. The temple, dedicated to the goddess of the valley, showcases exquisite architecture and vibrant murals that narrate tales of devotion and culture. The surroundings create a perfect space for reflection and connection with the spiritual essence of the region.

For those seeking adventure, Jispa is the ideal base for exploration. This quaint village, situated along the banks of the Bhaga River, offers a range of activities for the intrepid traveler. The stunning landscapes around Jispa are perfect for trekking, camping, and river rafting. The trek to Zanskar Valley is a must for adventure enthusiasts, taking you through high mountain passes, breathtaking gorges, and valleys adorned with vibrant wildflowers. Each step on this trek is a step into the heart of nature, where you can lose yourself in the beauty of the world around you.

Lahaul Valley is also known for its clear blue waters and captivating waterfalls. The glacial lakes, such as Chandra Taal, are among the most breathtaking sights in the region. The tranquil waters reflect the towering peaks and the endless sky, creating a mesmerizing spectacle that draws travelers from far and wide. Camping by the shores of Chandra Taal under a blanket of stars is an experience that etches itself in memory, a moment where time seems to stand still.

As you explore the valley, don’t miss the opportunity to visit its ancient monasteries, such as the Keylong Monastery, which stands as a sign of spirituality amidst the rugged landscape. The monastery, perched high on a hill, offers stunning views of the valley and provides insight into the rich cultural heritage of Lahaul. Engage with the local monks, learn about their way of life, and lose yourself in the peaceful ambiance that envelops this sacred place.

Lahaul Valley is a destination that invites you to discover its secrets and embrace the beauty of simplicity. Whether you are trekking through its majestic landscapes, meditating by its serene lakes, or experiencing the warmth of its local culture, Lahaul offers an escape from the ordinary and a chance to connect with the extraordinary. Here, every moment is a celebration of nature, adventure, and the boundless spirit of exploration.

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
                <span className="font-bold">Location:</span> Just two hours away from manali.
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> One can take bus or just drive through from manali and it lies on the leh route.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Chandratal , Key Gomta Monastery, Tabo Monastery etc.
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


                    {/* Destination 5 */}
                    <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">5. Chamba: Where the Magical Embrace of Nature Resides</p>
            <div className="flex justify-start  flex-col md:flex gap-10">
              <img src={Chamba} alt="Malana" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              In the heart of Himachal Pradesh lies a hidden paradise. Chamba and its mesmerizing Churah Valley. Often overlooked by the average traveler, this region is a glimpse of Heaven for those in search of untamed landscapes, rich wildlife, and winding roads that stretch through some of the most breathtaking terrains. Churah Valley is not just a destination; it’s a journey into the soul of nature, where every bend in the road reveals something more magical than the last.


                {seeMore && (
                  <span>
                    
As you traverse the valley, you’ll find yourself among an expanse of rolling hills, dense forests, and rivers that sparkle in the daylight. The Kalatop Wildlife Sanctuary, hugged by the valley’s arms, offers the perfect balance of fun and adventure. Imagine wandering through deodar forests with a crisp mountain breeze guiding your steps, the scent of pine and wildflowers in the air. If you’re lucky, you might catch a glimpse of the elusive Himalayan black bear or the soaring flight of a pheasant in the sanctuary’s lush habitat.

For those craving more than just a peaceful retreat, Churah Valley’s winding roads call out to the adventurer within. The route connecting to Udhampur via Doda is a drive that promises both thrill and soothing vibes. The  beauty of the landscape, with towering cliffs on one side and plunging valleys on the other, creates a journey you won’t soon forget. For the truly daring, the road to Pangi Valley via Kishtwar is an experience like no other. A heart-pounding route that dances along narrow passes, daring you to explore further into the wilderness.
                   
Once you’ve had your fill of mountain roads and cliffs, the serene waters of Chamera Lake await. This lake, surrounded by the serenity of towering hills, mirrors the sky in a way that feels almost otherworldly. The stillness of the water, combined with the gentle rustle of leaves, provides the perfect place to sit back and soak in the beauty around you. If you’re in the mood for a bit more excitement, the lake offers a range of water sports from kayaking to boating, all while you drift across its glassy surface.

The Kugti Wildlife Sanctuary, tucked away in the higher reaches of the valley, is another must-see for nature lovers. Here, the landscape transforms, offering alpine meadows dotted with wildflowers, glacial streams, and the majestic snow-capped peaks in the distance. This sanctuary is not just home to diverse wildlife but also offers trekking routes that will take you deeper into the valley’s heart, where the only sounds are the songs of birds and the soft hum of the wind.

Chamba and Churah Valley aren’t just destinations to tick off a travel list, they are places that invite you to slow down, breathe deeply, and lose yourself in the vastness of nature. Whether you're navigating the adventurous roads, trekking through wildlife sanctuaries, or simply unwinding by the calm waters of Chamera Lake, you’ll leave with a piece of Churah Valley etched into your soul.

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
                <span className="font-bold">Location:</span> Junction of Ravi river and its tributary,the Sal river
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> One can easily reach there by bus as the road connectivity is perfecty good.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Churah Valley, Chamunda devi temple, Thala waterfall, Hadsar waterfall,etc.
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

          {/* Destination 6 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">6. Banjar: The Hidden Paradise of Himachal Pradesh
            </p>
            <div className="flex justify-start md:flex flex-col gap-10">
              <img src={Banjar} alt="Spitit Valley" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Settled amidst the lush greenery and majestic mountains of Himachal Pradesh, Banjar is a place that remains a well-kept secret among travelers. Known for its enchanting landscapes, charming villages, and the serene banks of the Tirthan River, Banjar is the perfect destination for those seeking an escape from the chaos of urban life. As you step into this hidden paradise, you will be enveloped by the beauty of nature and the warmth of local hospitality, creating an experience that is both rejuvenating and unforgettable.
                {seeMore && (
                  <span>
                   One of the highlights of Banjar is its stunning Jibhi village, a picturesque settlement that offers a unique blend of rustic charm and natural beauty. Surrounded by dense forests and glistening streams, Jibhi is an ideal spot for leisurely walks and photography. The quaint wooden houses, with their traditional architecture, invite you to explore and immerse yourself in the local way of life. Spend your mornings sipping tea on a sun-drenched terrace, listening to the gentle whispers of nature, and soaking in the tranquility of this idyllic setting.

Tandi, another gem of Banjar, is famous for its mesmerizing Seolsar Lake, a serene body of water that reflects the surrounding peaks like a mirror. The trek to Seolsar Lake is an adventure in itself, leading you through lush forests and vibrant meadows adorned with wildflowers. As you approach the lake, the serenity of the surroundings entice you, offering a perfect spot for picnicking, meditation, or simply basking in nature’s beauty. It’s a place where time seems to stand still, allowing you to reconnect with your inner self and the natural world.

The Tirthan Valley, which encompasses Banjar, is renowned for its adventure activities. Trout fishing is a popular pastime here, thanks to the crystal-clear waters that teem with fish. Grab a fishing rod and try your luck in the Tirthan River, where the thrill of the catch is matched only by the stunning backdrop of the mountains. For those seeking a more adrenaline-fueled experience, there are options for trekking, camping, and river rafting in the nearby rapids, making Banjar a perfect base for outdoor enthusiasts.

As the day winds down, the banquet of colors at sunset casts a golden hue over the valley, creating a magical atmosphere that lingers long after the sun has dipped below the horizon. It’s the perfect time to unwind by a bonfire, sharing stories with fellow travelers and enjoying the warmth of camaraderie under a starlit sky.

Banjar is also steeped in culture, with local festivals and traditions that offer a glimpse into the vibrant life of the Himachali people. Engage with the locals, sample traditional cuisine, and experience the warmth of their hospitality. The vibrant food culture of Banjar is reflected in its delicious local dishes, which are crafted with love and showcase the rich agricultural heritage of the region.

In essence, Banjar is a peaceful retreat that offers a harmonious blend of adventure, culture, and natural beauty. Whether you are seeking solitude, a thrilling escape, or a chance to connect with nature, Banjar welcomes you with open arms. Here, every moment is a reminder of life’s simple pleasures, and the enchanting landscapes promise to leave an indelible mark on your heart.


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
                <span className="font-bold">Location:</span> Part of Seraj region that extends from Jalori pass to Shikari Devi.
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> One can easily reach from kullu and roads are fine.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Jibhi, Serolsar lake, Bashleo Pass etc.
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


          {/* Destination 7 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">7. Shimla: The Quintessential Hill Station of India
            </p>
            <div className="flex justify-start flex-col md:flex gap-10">
              <img src={Shimla} alt="Kalpa" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Shimla, the summer capital of British India, is a charming hill station that exudes timeless elegance and breathtaking natural beauty. Nestled amidst the lofty peaks of the Himalayas, this picturesque town is renowned for its colonial architecture, lush greenery, and panoramic vistas. With its pleasant climate, vibrant culture, and a plethora of attractions, Shimla is a must-visit destination that captivates travelers from around the globe.
                {seeMore && (
                  <span>
                    As you approach Shimla, the scenic drive along winding roads sets the stage for the enchanting experience that awaits you. The town is embraced by shaily peaks and is famous for its lush landscapes and charming architecture. The moment you arrive, the cool mountain breeze and the aroma of pine trees invigorate your senses, making you feel alive and refreshed.

One of the highlights of Shimla is the Mall Road, a bustling promenade lined with shops, cafes, and historical buildings. Stroll along the Mall, soaking in the vibrant atmosphere as you encounter local vendors and enjoy street food delights. Don’t miss the chance to visit the Christ Church, one of the oldest churches in North India, with its stunning neo-Gothic architecture that stands as a symbol of the town’s colonial past. The church’s illuminated façade at night is a sight to behold, adding to Shimla’s charm.

For breathtaking panoramic views, head to Jakhoo Hill, the highest point in Shimla. The hike to the hill is an adventure in itself, and once you reach the top, you’ll be greeted by a majestic statue of Hanuman and stunning vistas of the surrounding valleys. The tranquility of the hill offers a perfect escape, making it an ideal spot for meditation or simply enjoying the serenity of nature.

If you’re seeking a more leisurely experience, venture to Naldehra, known for its lush golf course and charming scenery. The Naldehra Golf Club, one of the oldest golf courses in India, is surrounded by towering cedar trees and offers an opportunity to relax and unwind amidst nature. Spend your day picnicking on the verdant greens or simply soaking in the tranquil ambiance.

The enchanting Gilbert Trail, located near Shimla, offers a perfect blend of adventure and tranquility. This scenic walk takes you through dense forests and offers breathtaking views of the valley below. The trail is a favorite among nature lovers and photographers, providing numerous spots to capture the beauty of the landscape.

For the adventurous souls, Kasauli and Narkanda are nearby destinations that offer exciting trekking and camping opportunities. The lush trails and pristine nature ensure an unforgettable experience, allowing you to connect with the mountains in a profound way. The Kalli Tibba Temple near Junga, a hidden gem, offers stunning views and a peaceful atmosphere, making it a worthwhile visit.

As the sun sets over Shimla, the landscape transforms into a magical wonderland. The warm glow of the evening sky casts a spell over the hills, creating a perfect backdrop for a romantic dinner or a cozy gathering with friends. The local cuisine, influenced by Himachali traditions, offers a delightful culinary experience that is not to be missed. From steaming bowls of chana madra to delectable siddu, the flavors of Shimla tantalize the taste buds and warm the soul.

In essence, Shimla is more than just a hill station; it is a destination that beckons you to explore its beauty, immerse yourself in its culture, and rejuvenate your spirit. Whether you’re wandering through its charming streets, savoring local delicacies, or simply enjoying the breathtaking views, Shimla promises an enchanting escape that lingers in your heart long after you’ve left.

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
                <span className="font-bold">Location:</span> On the south-western ranges of Himalayas.
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> One can take a flight or easily reach from Chandigarh.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Ridge, Mall Road, Naldehra, Jakhu Temple,Kali Bhari Temple, etc.
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


          {/* Destination 7 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">8. Mandi: The Cultural Jewel of Himachal Pradesh
            </p>
            <div className="flex justify-start flex-col md:flex gap-10">
              <img src={Mandi} alt="Kalpa" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Nestled in the lush valley of Himachal Pradesh, Mandi is a hidden gem that beautifully showcases the rich cultural heritage and stunning natural beauty of the region. Known as the "Varanasi of Hills," Mandi is steeped in history and spirituality, with its ancient temples, vibrant festivals, and breathtaking landscapes. Whether you’re a history buff, a nature lover, or an adventure seeker, Mandi offers a unique experience that leaves an indelible mark on every traveler.
                {seeMore && (
                  <span>
                   As you approach Mandi, the scenic beauty unfolds before your eyes. Surrounded by volcanic mountains and verdant forests, this picturesque town is situated along the banks of the Beas River. The cool mountain breeze and the sound of flowing water create a serene atmosphere that instantly captivates your senses. Mandi’s unique blend of natural beauty and cultural richness invites you to explore its myriad attractions.

One of the highlights of Mandi is the Prashar Lake, a serene body of water situated about 50 kilometers from the town. Surrounded by majestic mountains and dense forests, Prashar Lake is an ideal spot for trekking, camping, and meditation. The serene environment, with its pristine waters reflecting the sky, offers a tranquil escape from the hustle and bustle of daily life. The ancient temple dedicated to the sage Prashar adds a spiritual touch to this enchanting locale, making it a must-visit for both nature enthusiasts and spiritual seekers.

For those interested in adventure, Mandi offers thrilling opportunities for trout fishing in its pristine rivers. The Beas River is known for its rich aquatic life, and fishing here can be an exhilarating experience. Whether you’re an experienced angler or a novice, the thrill of catching a trout against the stunning backdrop of the Himalayas is an experience you won’t soon forget.

Mandi is also famous for its historical temples, each telling tales of devotion and craftsmanship. The Bhutnath Temple, dedicated to Lord Shiva, is one of the oldest temples in the region and showcases exquisite architecture. The intricate carvings and the peaceful ambiance of the temple provide a perfect setting for reflection and spirituality. The Mahadev Temple is another significant site that attracts devotees and travelers alike, offering a glimpse into the rich cultural tapestry of Mandi.

One cannot explore Mandi without experiencing its vibrant festivals, which reflect the town's deep-rooted traditions. The Mandi Shivratri Fair, held annually, is a grand celebration that draws thousands of visitors. The fair features colorful processions, traditional dances, and local handicrafts, providing an opportunity to immerse yourself in the local culture and celebrate the spirit of community.

Mandi is not just a destination for sightseeing; it’s also a gateway to Bir and Rajgundha Valley, where the stunning landscapes and adventure await. The region offers thrilling trekking opportunities and breathtaking views of the surrounding mountains. The trails take you through lush forests and charming villages, allowing you to experience the true essence of Himachali culture.

As the sun sets over Mandi, the town transforms into a magical realm. The golden hues of the evening sky reflect on the Beas River, creating a mesmerizing spectacle. Enjoy a leisurely stroll along the riverside, where you can find small cafes offering delicious local cuisine. The warmth of the Himachali hospitality, combined with the flavors of traditional dishes, makes for a delightful dining experience.

In essence, Mandi is a destination that beautifully encapsulates the essence of Himachal Pradesh. With its rich cultural heritage, stunning landscapes, and vibrant traditions, Mandi invites you to explore its beauty, connect with its history, and create unforgettable memories. Whether you’re trekking through its pristine valleys, savoring local delicacies, or immersing yourself in its spiritual ambiance, Mandi promises an experience that resonates with every traveler’s heart.

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
                <span className="font-bold">Location:</span> Built on the banks of Beas River.
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span>One can reach via road from Chandigarh or Kangra or Shimla.
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Barot, Prashar lake, Shikari Devi Temple, Bada Dev-Kamrunag temple etc.
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


          {/* Destination 9 */}
          <div className="flex flex-col p-8 mt-8 mb-8 border rounded-lg border-gray-300 w-full md:max-w-7xl mx-auto bg-gray-50">
            <p className="font-extrabold text-3xl py-5 ">9. Zanskar Valley: The Enigmatic Land of High Mountains
            </p>
            <div className="flex justify-start flex-col md:flex gap-10">
              <img src={Zanskar} alt="Kalpa" className="md:h-[200px] h-[200px] md:w-[300px]   shadow-md shadow-blue-500 rounded-full" />
              <div className='flex flex-col '>
              <p className='text-2xl'>
              Zanskar Valley, often referred to as the ‘last frontier’ of India, is a mesmerizing region located in the northern part of the Himalayas in Ladakh. Renowned for its rugged terrain, dramatic landscapes, and rich cultural heritage, Zanskar offers a unique blend of adventure and serenity. This enchanting valley is a paradise for travelers seeking solace in nature and an escape from the ordinary, making it a must-visit destination for adventure enthusiasts and spiritual seekers alike.

                {seeMore && (
                  <span>
                    As you enter Zanskar Valley, you are greeted by the towering Kombak Mountains, which create a breathtaking backdrop for the adventures that lie ahead. The beauty of the landscape, characterized by rugged cliffs, sprawling meadows, and sparkling rivers, leaves visitors in awe. The journey to Zanskar itself is an adventure, with winding roads that snake through high mountain passes and picturesque villages, each revealing the rich tapestry of life in this remote region.

One of the most thrilling experiences in Zanskar is trekking through its unspoiled wilderness. The Shinkula Pass trek offers breathtaking views of snow-capped peaks and serene valleys, providing a true sense of adventure. The trek takes you through quaint villages where you can interact with the warm and welcoming locals, learning about their unique customs and traditions. The solitude of the trails, combined with the beauty of nature, makes every step a meditative experience.

For those seeking a more adventurous thrill, Zanskar is famous for its river rafting on the Zanskar River. The challenging rapids offer an adrenaline rush, while the stunning landscapes provide a breathtaking backdrop for this exhilarating activity. As you navigate the twists and turns of the river, you’ll feel the rush of adventure while surrounded by some of the most stunning scenery in the world.

One of the highlights of Zanskar Valley is the chance to witness its vibrant Buddhist culture. The valley is dotted with ancient monasteries, known as gompas, which are perched high on cliffs and provide panoramic views of the surroundings. The Karsha Monastery and Zangla Monastery are among the most significant, offering insight into the spiritual practices and rich history of the region. The serene ambiance of these monasteries provides a perfect setting for meditation and reflection, allowing you to connect with the spiritual essence of Zanskar.

The valley is also famous for its unique local festivals, which reflect the vibrant culture of the Zanskari people. The Zanskar Festival, celebrated annually, showcases traditional music, dance, and local handicrafts. Participating in these festivals allows travelers to immerse themselves in the local culture, celebrating the spirit of the community and the beauty of Zanskar’s traditions.

For those seeking a deeper connection with nature, the stunning landscapes of Zanskar offer a plethora of opportunities for exploration. The majestic Zanskar Valley is characterized by its awe-inspiring glaciers, pristine lakes, and mesmerizing landscapes. Whether you choose to trek to the Frozen River during winter or explore the stunning landscapes in summer, Zanskar offers an experience like no other.

As day turns to night, the tranquility of Zanskar Valley reveals itself. The vast expanse of the night sky, filled with twinkling stars, creates a mesmerizing spectacle that leaves travelers in awe. Sitting around a campfire, sharing stories with fellow adventurers, or simply soaking in the beauty of the night, Zanskar offers moments of reflection that resonate deeply within.

In essence, Zanskar Valley is a treasure trove of adventure, spirituality, and natural beauty. Whether you are trekking through its majestic landscapes, experiencing the warmth of its local culture, or simply finding solace in its serene environment, Zanskar promises an unforgettable journey that touches the soul. This enchanting valley invites you to explore its mysteries and embrace the spirit of adventure that lies within its breathtaking embrace.


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
                <span className="font-bold">Location:</span> Lies 250m south of Kargil town on NH301.
              </p>
              <p className="pb-1">
                <span className="font-bold">How to Reach:</span> Roughly around 230km and 8hours of drive from Kargil
              </p>
              <p className="pb-1">
                <span className="font-bold">Key Attractions:</span> Chadar trek, Suru valley, Parkachik Glacier, etc.
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

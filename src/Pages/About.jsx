import Footer from "../Components/Footer/Footer";
import { Helmet } from "react-helmet";
import Wood from "../Components/Image/Wood.png";
import about7 from "../Components/Image/about1.jpg";
import about2 from "../Components/Image/about2.jpg";
import about3 from "../Components/Image/about8.jpeg";
import about4 from "../Components/Image/about6.jpg";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="relative min-h-screen font-oswald bg-center bg-cover text-white pt-20 md:pt-24 lg:pt-32"
        style={{ backgroundImage: `url(${Wood})` }}
      >
        <div className="flex flex-col md:flex-row w-full h-full p-6 md:p-8 lg:p-12">
          {/* Main Content - Left Side with 4 Images */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-wrap justify-between rounded-lg bg-white p-2">
            {/* Top left corner image */}
            <div className="w-1/2 h-1/2 p-2">
              <img
                src={about2}
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Top right corner image */}
            <div className="w-1/2 h-1/2 p-2">
              <img
                src={about3}
                alt="Image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Bottom left corner image */}
            <div className="w-1/2 h-1/2 p-2">
              <img
                src={about4}
                alt="Image 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Bottom right corner image */}
            <div className="w-1/2 h-1/2 p-2">
              <img
                src={about7}
                alt="Image 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* About Us Div */}
          <div className="w-full md:w-1/2 h-full bg-white p-4 md:p-6 lg:p-8 flex flex-col justify-center rounded-lg text-gray-900 md:ml-6 md:mt-0 mt-4">
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-orange-700">
              About Us
            </h1>
            <h2 className="text-md md:text-2xl mb-4 text-orange-600">
              Spend your dream holidays here
            </h2>
            <h3 className="text-sm md:text-xl">
              Exploring the world&apos;s most breathtaking destinations with us.
              Whether you&apos;re seeking the serenity of a tropical beach, the
              excitement of a bustling city, or the awe-inspiring beauty of
              nature, we provide curated experiences to make your journey
              unforgettable. From custom itineraries to personalized
              recommendations, we ensure that every aspect of your trip reflects
              your passions and desires. Our team of travel experts is dedicated
              to making your vacation seamless, offering a wide range of
              packages, from adventurous getaways to relaxing escapes. Whether
              you&apos;re traveling solo, as a couple, or with family and
              friends, we handle every detail so you can focus on creating
              memories. Spend your holidays your way—where adventure meets
              relaxation!
            </h3>

            <div className="mt-6">
              <p className="text-md md:text-lg mb-4 text-orange-600">
                Wherever you want to go, we will help you get there.
              </p>
              <Link to="/All_Cards">
                <button className="mt-4 border-black border-2 h-10 px-4 text-md">
                  Plan Your Trip Now <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default About;

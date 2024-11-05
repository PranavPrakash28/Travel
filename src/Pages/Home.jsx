import { useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../Components/Cards/Card";
import discover from "../Components/Image/discover.jpg";
// import Hero from "../Components/Hero/Hero";
import Review from "../Components/Reveiw/Review";
import Footer from "../Components/Footer/Footer";
import Popup from "../Components/Popup-modal/Popup";
import Sponser from "../Components/Sponser/Sponser";
import Domestic_Home from "../Components/Home_Slider/Domestic_Home";
import Europe_Home from "../Components/Home_Slider/Europe_Home";
import International_Home from "../Components/Home_Slider/International_Home";
import HiddenGems_Home from "../Components/Home_Slider/HiddenGems_Home";
import Advertisment from "../Components/Advertise/Advertisment";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="bg-cover bg-center w-full h-[10vh] min-h-screen"
        style={{ backgroundImage: `url(${discover})` }}
      >
        {/* Card Section */}
        <div className="relative top-[60vh] z-10 ">
          <Card />
        </div>

        {/* Hero Section with responsive margin */}
        {/* <div className="bg-white mt-[30vh] md:mt-[60vh] relative">
          <Hero />
        </div> */}

        <div className="bg-white mt-[60vh] md:mt-[60vh] relative">
          <Domestic_Home />
        </div>
        <div className="bg-white mt-10 md:mt-10 relative">
          <International_Home />
        </div>
        <div className="bg-white mt-10 md:mt-10 relative">
          <HiddenGems_Home />
        </div>
        <div className="bg-white mt-10 md:mt-10 relative">
          <Europe_Home />
        </div>

        {/* Review Section */}
        <div className="bg-white relative md:mt-5">
          <Review />
        </div>
        <div className="bg-white relative md:mt-5">
          <Advertisment />
        </div>
        <div className="bg-white relative md:mt-5">
          <Sponser />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>

      {/* Popup Modal */}
      {isModalOpen && <Popup onClose={handleCloseModal} />}
    </div>
  );
}

export default Home;

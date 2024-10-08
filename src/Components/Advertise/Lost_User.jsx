import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Lost_User() {
  return (
    <>
    <div className="relative w-full bg-slate-500 h-[100px] md:h-[100px]">
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen pt-10 pb-10 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center">Oops! It looks like you lost your way.</h1>
      <p className="text-lg mb-8 text-center px-4">
        We're sorry, but the page you're looking for doesn't exist or has been moved. 
        But don't worry! Explore our amazing travel packages below and find your next great adventure!
      </p>

      <div className="flex flex-col space-y-6 px-4 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">European Packages</h3>
          <p className="text-gray-600 mb-4">Discover the timeless beauty and culture of Europe.</p>
          <Link 
            to="/Loc_Europe" 
            className="text-blue-600 hover:text-blue-800 font-semibold">
            Explore Europe
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Domestic Packages</h3>
          <p className="text-gray-600 mb-4">Find the hidden treasures in your own country!</p>
          <Link 
            to="/domestic" 
            className="text-blue-600 hover:text-blue-800 font-semibold">
            Explore Domestic
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">International Packages</h3>
          <p className="text-gray-600 mb-4">Travel beyond borders and explore new horizons.</p>
          <Link 
            to="/international" 
            className="text-blue-600 hover:text-blue-800 font-semibold">
            Explore International
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Hidden Gems</h3>
          <p className="text-gray-600 mb-4">Uncover the less-known yet stunning places around the world.</p>
          <Link 
            to="/Loc_Himachal" 
            className="text-blue-600 hover:text-blue-800 font-semibold">
            Explore Hidden Gems
          </Link>
        </div>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
}

export default Lost_User;

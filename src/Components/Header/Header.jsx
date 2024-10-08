import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 
import LOGO from '../Image/LOGO.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-cover bg-center w-full">
        <nav className={`fixed top-0 left-0 w-full py-3 z-50 ${isScrolled ? 'md:bg-black opacity-50' : 'bg-transparent'}`}>
          
          <div className="flex justify-between items-center px-4 md:px-8">
            <div className={`md:hidden flex justify-center items-center ${isScrolled ? 'w-16 h-16' : 'w-16 h-16'} bg-transparent border-4 rounded-full`}>
              <Link to= '/home'>
                <span className={`text-black text-bold transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-sm'}`}>
                  <img src={LOGO} alt="" className='rounded-full' />
                </span>
              </Link>
            </div>

            <div className="md:hidden text-black cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>

            <ul className={`hidden md:flex justify-center gap-x-20 w-full text-white font-oswald font-light transition-all duration-300 md:text-sm lg:text-md`}>

              <li className={`hover:font-bold hover:underline cursor-pointer transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-8'}`}>
                <Link to="/">HOME</Link>
              </li>
              <li className={`hover:font-bold hover:underline cursor-pointer transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-8'}`}>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li className={`hover:font-bold hover:underline cursor-pointer transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-8'}`}>
                <Link to="/domestic">DOMESTIC</Link>
              </li>

              <li className={`relative transition-all duration-300 ${isScrolled ? 'pt-0' : 'pt-1'}`}>
                <div className={`flex justify-center items-center relative ${isScrolled ? 'w-12 h-12' : 'w-20 h-20'} bg-transparent   rounded-full`}>
                  <Link to= "/home">
                    <span className={`text-white transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-lg'}`}>
                      <img src={LOGO} alt="" className='rounded-full' />
                    </span>
                  </Link>
                </div>
              </li>

              <li className={`hover:font-bold hover:underline cursor-pointer transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-8'}`}>
                <Link to="/international">INTERNATIONAL</Link>
              </li>
              <li className={`hover:font-bold hover:underline cursor-pointer transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-8'}`}>
                <Link to="/contact">CONTACT US</Link>
              </li>
              <li className={`hover:font-bold hover:underline cursor-pointer transition-all duration-300 ${isScrolled ? 'pt-3' : 'pt-8'}`}>
                <Link to="/Booking_Form">BOOK NOW</Link>
              </li>
            </ul>
          </div>

          {isMenuOpen && (
            <ul className="md:hidden flex flex-col items-center bg-black text-white font-oswald py-4 space-y-6">
              <li className="hover:font-bold hover:underline cursor-pointer">
                <Link to="/" onClick={toggleMenu}>HOME</Link>
              </li>
              <li className="hover:font-bold hover:underline cursor-pointer">
                <Link to="/about" onClick={toggleMenu}>ABOUT US</Link>
              </li>
              <li className="hover:font-bold hover:underline cursor-pointer">
                <Link to="/domestic" onClick={toggleMenu}>DOMESTIC</Link>
              </li>
              <li className="hover:font-bold hover:underline cursor-pointer">
                <Link to="/international" onClick={toggleMenu}>INTERNATIONAL</Link>
              </li>
              <li className="hover:font-bold hover:underline cursor-pointer">
                <Link to="/contact" onClick={toggleMenu}>CONTACT US</Link>
              </li>
              <li className="hover:font-bold hover:underline cursor-pointer">
                <Link to="/Booking_Form" onClick={toggleMenu}>BOOK NOW</Link>
              </li>
            </ul>
          )}

        </nav>
      </div>
    </>
  );
}

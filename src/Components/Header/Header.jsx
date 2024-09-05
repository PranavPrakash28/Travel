import { useState, useEffect } from 'react';
// import discover from '../Image/discover.jpg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    // style={{ backgroundImage: `url(${discover})` }}
    <div className="bg-cover bg-center h-screen w-full" >
      <nav className={`sticky top-0 py-5 z-50 ${isScrolled ? 'bg-black opacity-50' : 'bg-transparent'}`}>
        <ul className="flex justify-around w-full text-white text-lg font-semibold">
          <li className="hover:text-gray-300 hover:underline cursor-pointer">HOME</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">ABOUT US</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">CABINS</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">ALASKA</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">TO DO LIST</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">CONTACT US</li>
          <li className="hover:text-gray-300 hover:underline cursor-pointer">INFO</li>
        </ul>
      </nav>
    </div>
    
  );
}

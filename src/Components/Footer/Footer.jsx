import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-6">
      
      <div className="mb-8">
        <nav className="flex justify-center">
          <ul className="flex justify-between items-center w-full max-w-3xl">
            <li className="text-lg font-bold mr-4">LOGO</li>
            <li className="max-w-xs text-justify">
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </li>
            <li className="ml-20">
              <FontAwesomeIcon icon={faCircleChevronDown} className="text-2xl cursor-pointer hover:text-gray-400" />
            </li>
          </ul>
        </nav>
      </div>

     
      <div className="flex justify-between flex-wrap text-white max-w-3xl mx-auto">
        
       
        <nav className="flex-1 mr-4 mb-2 bg-gray-800 p-3">
          <ul className="space-y-1 text-justify">
            <li><p className="font-bold text-base">ADDRESS</p></li>
            <li><p className="text-sm">4215 Brendaway, Amsterdam, Norway</p></li>
            <li><p className="text-sm">Address line two</p></li>
          </ul>
        </nav>

       
        <nav className="flex-1 mr-4 mb-2 bg-gray-800 p-3">
          <ul className="space-y-1 text-justify">
            <li><p className="font-bold text-base">PHONE NUMBER</p></li>
            <li><p className="text-sm">56425458455</p></li>
            <li><p className="font-bold text-base">E-MAIL</p></li>
            <li><p className="text-sm">travel@gmail.com</p></li>
          </ul>
        </nav>

        
        <nav className="flex-1 mr-4 mb-2 bg-gray-800 p-3">
          <ul className="space-y-1 text-justify">
            <li><p className="font-bold text-base">NAVIGATION</p></li>
            <li><p className="text-sm">Home</p></li>
            <li><p className="text-sm">About Us</p></li>
            <li><p className="text-sm">Cabins</p></li>
            <li><p className="text-sm">To Do</p></li>
            <li><p className="text-sm">Info</p></li>
          </ul>
        </nav>

       
        <nav className="flex-1 mb-2 bg-gray-800 p-3">
          <ul className="space-y-1 text-justify">
            <li><p className="font-bold text-base">CONTACT US</p></li>
            <li><p className="text-sm">Info</p></li>
            <li><p className="text-sm">F.A.Q</p></li>
          </ul>
        </nav>

      </div>
    </div>
  );
}

export default Footer;

import discover from '../Image/discover.jpg';

export default function Header() {
  return (
    <div className="bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url(${discover})` }}>
      <nav className="h-full flex pt-5">
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

import { useState } from 'react';

function Popup({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = { name, email, mobile: phone }; // Adjusted key name to match backend schema

    try {
      const response = await fetch('http://localhost:5000/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message); // Success message
        onClose(); // Close popup on success
      } else {
        console.error(data.error); // Handle error
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-oswald" 
        onClick={onClose}
      >
        <div 
          className="relative bg-white p-6 lg:p-8 xl:p-10 rounded-lg w-full max-w-md lg:max-w-sm xl:max-w-xs sm:max-w-xs" // Adjusted width for mobile
          onClick={(e) => e.stopPropagation()} 
        >
          <button
            className="absolute top-2 right-2 text-black hover:text-red-700 font-extrabold"
            onClick={onClose}
          >
            X
          </button>

          <h2 className="text-lg lg:text-xl font-semibold text-center mb-4">Book Your Next Trip With Us</h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm lg:text-base font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base p-2"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm lg:text-base font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base p-2"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm lg:text-base font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-base p-2"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="flex justify-center items-center">
              <button type="submit" className="text-white py-2 px-4 bg-blue-600 rounded-md text-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Popup;

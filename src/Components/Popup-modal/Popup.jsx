import { useState } from 'react';
import emailjs from 'emailjs-com';

function Popup({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare template parameters for EmailJS
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
    };

    try {
      const result = await emailjs.send(
        'service_s3kmzy8',    // Replace with your EmailJS service ID
        'template_fyr73e8',  // Replace with your EmailJS template ID
        templateParams,
        'H6gRwzolMSSe7YkZz' // Add your EmailJS User ID here
      );

      console.log('Email sent successfully!', result.text);
      onClose(); // Close popup on success
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-oswald" 
      onClick={onClose}
    >
      <div 
        className="relative bg-white p-6 lg:p-8 xl:p-10 rounded-lg w-full max-w-md lg:max-w-sm xl:max-w-xs sm:max-w-xs" 
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
  );
}

export default Popup;

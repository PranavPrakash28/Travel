import React from 'react';
import Footer from '../Components/Footer/Footer';
import Wood from '../Components/Image/Wood.png';
import { Link } from 'react-router-dom';

function PolicyPrivacy() {
  return (
    <>
      <div
        className="min-h-screen font-oswald bg-center bg-cover text-white py-10 px-6 md:px-12 lg:px-20 pt-40 flex justify-center items-center"
        style={{ backgroundImage: `url(${Wood})` }}
      >
        {/* Centered Div */}
        <div className="bg-orange-200 rounded-lg text-black shadow-xl p-8 md:p-10 lg:p-12 max-w-3xl w-full h-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-lg md:text-xl mb-6">
            Your privacy is important to us. This privacy policy document outlines the types of personal information that is
            received and collected by our site and how it is used.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-6">Information Collection and Use</h2>
          <p className="text-lg md:text-xl mb-6">
            We collect personal information from you when you register on our site, subscribe to a newsletter, or fill out a
            form. The information we collect includes your name, email address, and any other details you provide.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-6">Cookies</h2>
          <p className="text-lg md:text-xl mb-6">
            We use cookies to enhance your experience on our site. Cookies are small files that a site or its service
            provider transfers to your computer through your web browser (if you allow) that enables the site to recognize
            your browser and capture certain information.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-6">Data Security</h2>
          <p className="text-lg md:text-xl mb-6">
            We implement various security measures to maintain the safety of your personal information when you enter, submit,
            or access your personal information.
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-10 mb-6">Changes to This Policy</h2>
          <p className="text-lg md:text-xl mb-6">
            We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page,
            and we encourage you to review the policy periodically.
          </p>

          <p className="text-lg md:text-xl mt-10">
            If you have any questions about this Privacy Policy, feel free to <Link to="/contact"><strong className='underline text-gray-800'>contact us</strong></Link>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default PolicyPrivacy;

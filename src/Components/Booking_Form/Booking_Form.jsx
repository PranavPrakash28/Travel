import { useState } from 'react';
import { useForm } from 'react-hook-form';
import discover from '../Image/discover.jpg';
import Footer from '../Footer/Footer';
import Privacy from '../Privacypopup/Privacy';
import { Helmet } from 'react-helmet';

const generateCaptcha = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
};

export default function Booking_Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const onSubmit = async (data) => {
    if (captchaInput !== captcha) {
      setCaptchaError('Invalid CAPTCHA. Please try again.');
      return;
    }

    setCaptchaError('');
    setCaptchaInput('');

    try {
      const response = await fetch('http://localhost:5000/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Success:', result);
        alert('Form submitted successfully!');
      } else {
        console.log('Error:', result);
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form. Please try again later.');
    }
  };

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
    setCaptchaError('');
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Booking Form</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="flex items-center justify-center bg-cover bg-center min-h-screen font-oswald" style={{ backgroundImage: `url(${discover})` }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md  p-10 md:max-w-xl md:max-h-max mb-10 mt-36 bg-white shadow-md rounded opacity-90 overflow-auto "
        >
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-center">Fill Your Details</h2>

          {/* Name */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              autoComplete="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            />
            {errors.name && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              autoComplete="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            />
            {errors.email && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.email.message}</p>}
          </div>

          {/* Mobile Number */}
          <div className="mb-6">
            <label htmlFor="mobile" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Mobile Number</label>
            <input
              id="mobile"
              type="tel"
              {...register('mobile', { required: 'Mobile number is required' })}
              autoComplete="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            />
            {errors.mobile && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.mobile.message}</p>}
          </div>
          {/* Holiday Type */}
          <div className="mb-6">
            <label htmlFor="holidayType" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Holiday Type</label>
            <select
              id="holidayType"
              {...register('holidayType', { required: 'Holiday Type is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            >
              <option value="">Select Holiday Type</option>
              <option value="beach">Beach</option>
              <option value="mountain">Mountain</option>
              <option value="adventure">Adventure</option>
            </select>
            {errors.holidayType && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.holidayType.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="numberOfPeople" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Number of People</label>
            <input
              id="numberOfPeople"
              type="number"
              {...register('numberOfPeople', { required: 'Number of People is required' })}
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            />
            {errors.numberOfPeople && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.numberOfPeople.message}</p>}
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label htmlFor="budget" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Budget</label>
            <input
              id="budget"
              type="text"
              {...register('budget', { required: 'Budget is required' })}
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            />
            {errors.budget && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.budget.message}</p>}
          </div>

          {/* Number of Days */}
          <div className="mb-6">
            <label htmlFor="numberOfDays" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Number of Days</label>
            <input
              id="numberOfDays"
              type="number"
              {...register('numberOfDays', { required: 'Number of Days is required' })}
              autoComplete="off"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            />
            {errors.numberOfDays && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.numberOfDays.message}</p>}
          </div>

          {/* Destination */}
          <div className="mb-6">
            <label htmlFor="destination" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Destination</label>
            <select
              id="destination"
              {...register('destination', { required: 'Destination is required' })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            >
              <option value="">Select Destination</option>
              <option value="bali">Bali</option>
              <option value="thailand">Thailand</option>
              <option value="kerala">Kerala</option>
            </select>
            {errors.destination && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.destination.message}</p>}
          </div>
          {/* Privacy Policy */}
          <div className="mb-6 flex items-center">
            <input
              id="privacyPolicy"
              type="checkbox"
              {...register('privacyPolicy', { required: 'You must accept the privacy policy' })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="privacyPolicy" className="ml-2 block text-sm lg:text-lg xl:text-xl text-gray-900">
              I accept the <span onClick={() => setShowPrivacy(true)} className='underline cursor-pointer text-red-600'>privacy policy</span>
              {showPrivacy && <Privacy onclose={() => setShowPrivacy(false)} />}
            </label>
            {errors.privacyPolicy && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{errors.privacyPolicy.message}</p>}
          </div>

          {/* CAPTCHA */}
          <div className="mb-6">
            <label htmlFor="captcha" className="block text-sm lg:text-lg xl:text-xl font-medium text-gray-700">Enter CAPTCHA</label>
            <div className="flex items-center">
              <span className="text-xl lg:text-3xl xl:text-4xl font-mono bg-gray-100 p-2 border border-gray-300 rounded">{captcha}</span>
              <button type="button" onClick={handleCaptchaRefresh} className="ml-2 text-blue-600 underline">Refresh</button>
            </div>
            <input
              id="captcha"
              type="text"
              value={captchaInput}
              onChange={handleCaptchaChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:text-lg xl:text-xl lg:px-6 xl:px-8"
            />
            {captchaError && <p className="text-red-500 text-xs lg:text-sm xl:text-base mt-1">{captchaError}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm lg:text-lg xl:text-xl lg:py-3">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

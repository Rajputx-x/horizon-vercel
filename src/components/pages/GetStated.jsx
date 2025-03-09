import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const GetStarted = () => {
  return (
    <div className="font-poppins bg-gradient-to-br from-blue-100">
      <Navbar />
      <div className="container mx-auto px-6 py-24"> {/* Increased padding-top to avoid overlap */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            How To Get Started
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Horizon Solutions' job is to provide the best loads in the market for every driver. Our expert team ensures that drivers from any region and state get high-quality and best-paying loads.
          </p>
        </div>

        {/* Steps Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                1
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-700">
                  Fill out the form or call us: (302) 425 92 99 <br /> +1(406) 405-4317
                </h2>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                2
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-700">
                  Upload your MC Authority, W9 Form, and Certificate of Insurance
                </h2>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                3
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-700">
                  Sign the Dispatch Agreement completed by our team
                </h2>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                4
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-700">
                  We are all set. Let’s get to work!
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-blue-500 mb-6">
            Contact us for free setup
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Full name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="+1 (___) ___-____"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
              />
              <label className="text-gray-700">
                I have read and agree to the Terms of Service
              </label>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500"
              />
              <label className="text-gray-700">
                I want to receive the most useful tips and news
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;
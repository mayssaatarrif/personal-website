import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image85 from '../images/image85.jpg';
import Image92 from '../images/image92.jpg';
import Image93 from '../images/image93.jpg';
import Image94 from '../images/image94.jpg';
import Image95 from '../images/image95.jpg';
import Image86 from '../images/image86.jpg';
import Image87 from '../images/image87.jpg';
import Image88 from '../images/image88.jpg';
import Image89 from '../images/image89.jpg';
import Image90 from '../images/image90.jpg';
import Image91 from '../images/image91.jpg';
import { Share2, Printer, Plus, Minus } from 'lucide-react';
import TopBar from '../components/atoms/Topbar';
import Navbar from  '../components/atoms/Navbar';
import Footer from '../components/atoms/Footer';
import Image19 from '../images/image19.jpg';

const InHisHighnessWords = () => {
  const wordsData = [
    {
      image: Image85,
      text: "Sultan Al Qasimi: The Arabic language encompasses all sciences and knowledge",
    },
    {
      image: Image92,
      text: "Sultan: Al Rafia Park.. Most beautiful park in Al Batayeh",
    },
    {
      image: Image93,
      text: "Dr. Sultan Al Qasimi Writes: Who is the Killer? (1)",
    },
    {
      image: Image94,
      text: "Sultan: Nature reserves are not parks or pastures",
    },
    {
      image: Image95,
      text: "Sultan announces the provision of jobs for Maritime Academy's graduates",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic image change effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [wordsData.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + wordsData.length) % wordsData.length);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gray-100 p-6 mb-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">In His Highness's Words</h2>
      <div className="mb-4">
        <img
          src={wordsData[currentIndex].image}
          alt="His Highness"
          className="w-full h-auto border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-1000 ease-in-out transform hover:scale-105"
        />
      </div>
      <p className="mb-4 text-gray-700 hover:text-[#bbbd4f] transition duration-200">{wordsData[currentIndex].text}</p>

      <div className="flex items-center justify-between mt-6">
        <button className="bg-[#bbbd4f] text-white px-4 py-2 hover:bg-[#a7a94a] transition duration-200">View All</button>

        {/* Manual navigation buttons */}
        <div className="flex space-x-2">
          <button
            className="text-[#bbbd4f] hover:text-gray-500 text-lg transition duration-200"
            onClick={handlePrev}
            aria-label="Previous Quote"
          >
            &#9664;
          </button>
          <button
            className="text-[#bbbd4f] hover:text-gray-500 text-lg transition duration-200"
            onClick={handleNext}
            aria-label="Next Quote"
          >
            &#9654;
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

// Tales in Pictures Component
const TalesInPictures = () => {
  const talesData = [Image86, Image87, Image88, Image89, Image90, Image91];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gray-100 p-6 shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Tales in Pictures</h2>
      <div className="grid grid-cols-2 gap-6">
        {talesData.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Tale ${index + 1}`}
            className="w-full border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-300 ease-in-out transform hover:scale-105"
          />
        ))}
      </div>
      <button className="bg-[#bbbd4f] text-white px-4 py-2 mt-4 hover:bg-[#a7a94a] transition duration-200">View All</button>
    </div>
    </div>
  );
};

const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="bg-gray-100 h-12 w-full absolute left-0 top-72">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-10">
                  <li><a href="" className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home/ </a></li>
                  <li><a href="" className="text-[#bbbd4f]">Guest Book</a></li>
                </div>
              </ul>
            </div>
            <div className="flex space-x-4 mr-3">
              <Share2 className="w-5 h-5 hover:text-gray-500 text-[#bbbd4f]" />
              <Printer className="w-5 h-5 hover:text-gray-500 text-[#bbbd4f]" />
              <Plus className="w-5 h-5 hover:text-gray-500 text-[#bbbd4f]" />
              <Minus className="w-5 h-5 hover:text-gray-500 text-[#bbbd4f]" />
            </div>
          </div>
        </nav>
        </div>
  );
};
const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    cityCode: '',
    phoneNumber: '',
    mobileNumber: '',
    subject: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
       
      <h2 className="text-2xl font-bold mb-4">Guest Book</h2>
      <p className="text-red-600 mb-2">Fields marked with ( * ) are mandatory.</p>
      <p className="mb-4">
        We would like to receive your comments and inquiries on the personal website of H.H. Sheikh Dr. Sultan bin
        Muhammad Al Qasimi through this page. We will reply to all your inquiries and get back to you soon.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            * Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            * Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
            * Telephone
          </label>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              id="countryCode"
              type="text"
              name="countryCode"
              placeholder="Country Co"
              required
              value={formData.countryCode}
              onChange={handleChange}
            />
            <input
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              id="cityCode"
              type="text"
              name="cityCode"
              placeholder="City Co"
              required
              value={formData.cityCode}
              onChange={handleChange}
            />
            <input
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
            * Mobile Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobileNumber"
            type="tel"
            name="mobileNumber"
            placeholder="009715XXXXXXXX"
            required
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            * Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

const GuestBook = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto p-4">
      <TopBar />
      <Navbar />
      <img src={Image19} alt="Banner" className="w-full h-auto mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="col-span-1">
          <Breadcrumb />
          {/* Adjusted layout for InHisHighnessWords, TalesInPictures, and Book */}
          <div className="grid grid-cols-1 gap-4">
            <div className="mt-8 relative">
              <InHisHighnessWords />
              <TalesInPictures />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Book />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default GuestBook;
import React, { useState, useEffect } from 'react';
import { ChevronRight, Minus, Plus, Printer, Share2 } from 'lucide-react';
import Navbar from '../../components/atoms/Navbar'; // Assuming you have a Navbar component
import Footer from '../../components/atoms/Footer'; // Assuming you have a Footer component
import TopBar from '../../components/atoms/Topbar'
import eventsPaginated from './eventsPaginated'
import Image85 from '../../images/image85.jpg';
import Image86 from '../../images/image86.jpg';
import Image87 from '../../images/image87.jpg';
import Image88 from '../../images/image88.jpg';
import Image89 from '../../images/image89.jpg';
import Image90 from '../../images/image90.jpg';
import Image91 from '../../images/image91.jpg';
import Image92 from '../../images/image92.jpg';
import Image93 from '../../images/image93.jpg';
import Image94 from '../../images/image94.jpg';
import Image95 from '../../images/image95.jpg';
import { useNavigate } from 'react-router-dom';
import Image19 from '../../images/image19.jpg';


const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-100 h-12 w-full absolute left-0 top-72">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-10">
                  <li><a href="" className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home/ Media/  </a></li>
                  <li><a href="" className="text-[#bbbd4f]">Events & Activities</a></li>
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
  );
};

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
  );
};

// Tales in Pictures Component
const TalesInPictures = () => {
  const talesData = [Image86, Image87, Image88, Image89, Image90, Image91];

  return (
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
  );
};
const Activity: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < 468) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentEvents = eventsPaginated.find((page) => page.page === currentPage)?.events || [];

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Navbar */}
      <Navbar />
      <img src={Image19} alt="" className="w-full h-auto" />
      <Breadcrumb />
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 bg-white shadow-lg">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-1/4 bg-gray-100 p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#bbbd4f]">Media</h2>
            <div className="bg-[#bbbd4f] text-white p-4 mb-2 rounded-lg">
              <ChevronRight className="inline" /> Events & Activities
            </div>
            <div className="text-[#bbbd4f] p-4 mb-2">
              <ChevronRight className="inline" /> His Highness in their Words
            </div>
            <div className="text-[#bbbd4f] p-4 mb-2">
              <ChevronRight className="inline" /> Videos Library
            </div>
            <div className="text-[#bbbd4f] p-4 mb-4">
              <ChevronRight className="inline" /> Photos Library
            </div>

            <div className="col-span-1">
          <InHisHighnessWords />
          <TalesInPictures />
        </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Events & Activities</h1>
            <hr className="border-t-2 border-[#bbbd4f] mb-6" />

            {/* Event Cards */}
            <div className="space-y-8">
              {currentEvents.map((event, index) => (
                <EventCard
                  key={index}
                  image={event.image}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={handlePrevPage}
                className={`bg-[#bbbd4f] text-white px-4 py-2 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <span className="text-gray-700">Page {currentPage} of 468</span>
              <button
                onClick={handleNextPage}
                className={`bg-[#bbbd4f] text-white px-4 py-2 rounded-md ${currentPage === 468 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === 468}
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>

    

      {/* Footer */}
      <Footer />
    </>
  );
};

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ image, title, date, description }) => {
  return (
    <div className="flex border-b pb-6 space-x-6">
      <img src={image} alt={title} className="w-1/3 object-cover rounded-md shadow-md" />
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-[#bbbd4f] mb-2">{date}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-[#bbbd4f] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#bbbd4f]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Activity;

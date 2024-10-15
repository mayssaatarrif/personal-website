import React, { useEffect, useState } from 'react';
import mockVideoData from './videoMock'; // Assuming the mock data is in this file
import { ChevronRight, Minus, Play, Plus, Printer, Share2 } from 'lucide-react';
import Navbar from '../../components/atoms/Navbar'; // Assuming you have a Navbar component
import Footer from '../../components/atoms/Footer'; // Assuming you have a Footer component
import TopBar from '../../components/atoms/Topbar'
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <nav className="bg-gray-100 h-12 w-full fixed left-0 lg:top-60">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-10">
                  <li><a href="" className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home/ Media/  </a></li>
                  <li><a href="" className="text-[#bbbd4f]">Video Library</a></li>
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
const Video: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const videos = mockVideoData.find((data) => data.page === currentPage)?.videos || [];

  const handleNextPage = () => {
    if (currentPage < mockVideoData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto p-4 bg-white">
      <TopBar/>
      <Navbar/>
      <img src={Image19} alt="" className="w-full h-auto" />
      <Breadcrumb />
      <div className="flex gap-6">
        
      <div className="w-1/4 bg-gray-100 p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#bbbd4f]">Media</h2>
            <div className="text-[#bbbd4f] p-4 mb-2 ">
              <ChevronRight className="inline" /> Events & Activities
            </div>
            <div className="text-[#bbbd4f] p-4 mb-2">
              <ChevronRight className="inline" /> His Highness in their Words
            </div>
            <div className="bg-[#bbbd4f] text-white p-4 mb-2 rounded-lg">
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
          <h1 className="text-3xl font-bold mb-4">Videos Library</h1>
          <hr className="border-t-2 border-[#bbbd4f] mb-6" />
          
          {/* Video Cards */}
          <div className="space-y-6">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between mt-6">
            <button
              className={`bg-[#bbbd4f] text-white px-4 py-2 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className={`bg-[#bbbd4f] text-white px-4 py-2 rounded ${currentPage === mockVideoData.length && 'opacity-50 cursor-not-allowed'}`}
              onClick={handleNextPage}
              disabled={currentPage === mockVideoData.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
      </div>
    </div>
  );
};

interface VideoCardProps {
  image: string;
  title: string;
  date: string;
  duration: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ image, title, date, duration, description }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex border-b pb-6">
      <div className="relative w-1/3 mr-4">
        <img src={image} alt={title} className="w-full object-cover" />
        <Play className="absolute inset-0 text-[#bbbd4f] text-6xl flex justify-center items-center" />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-[#bbbd4f] mb-2">Published On {date}</p>
        <p className="text-gray-500 mb-4 flex items-center">
          <span>Duration: {duration}</span>
        </p>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-[#bbbd4f] text-white px-4 py-2 rounded">Watch Now</button>
      </div>
      </div>
    </div>
  );
};

export default Video;

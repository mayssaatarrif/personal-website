// src/pages/Local.tsx
import React, { useEffect, useState } from 'react';
import { ChevronRight, Share, Printer, ChevronLeft, Share2, Plus, Minus } from 'lucide-react';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Footer from '../../components/atoms/Footer';
import localInitiatives from './LocalInitiativesMock';
import { useNavigate } from 'react-router-dom';
import Image85 from '../../images/image85.jpg';
import Image92 from '../../images/image92.jpg';
import Image93 from '../../images/image93.jpg';
import Image94 from '../../images/image94.jpg';
import Image95 from '../../images/image95.jpg';
import Image86 from '../../images/image86.jpg';
import Image87 from '../../images/image87.jpg';
import Image88 from '../../images/image88.jpg';
import Image89 from '../../images/image89.jpg';
import Image90 from '../../images/image90.jpg';
import Image91 from '../../images/image91.jpg';
import InitiativeCard from './InitiativeCard';


const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="bg-gray-100 h-12 w-full absolute left-0 top-72">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-10">
                  <li><a href="" className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home/ Initiatives/ </a></li>
                  <li><a href="" className="text-[#bbbd4f]">;Local</a></li>
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



const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center items-center mt-6 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`w-8 h-8 rounded-full ${
            currentPage === number
              ? 'bg-[#bbbd4f] text-white'
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
      >
        <ChevronRight size={20} />
      </button>
    </div>
    </div>
  );
};

const Local: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const initiativesPerPage = 5;
  const totalPages = Math.ceil(localInitiatives.length / initiativesPerPage);

  // Get current initiatives based on page
  const currentInitiatives = localInitiatives.slice(
    (currentPage - 1) * initiativesPerPage,
    currentPage * initiativesPerPage
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            Home / Initiatives / <span className="text-[#b2b355]">Local</span>
          </div>
          <div className="flex space-x-4">
            <Share size={20} />
            <Printer size={20} />
            <span className="text-2xl">A+</span>
            <span className="text-sm">A-</span>
          </div>
        </div>

        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-1/4 pr-4">
            <div className="bg-[#b2b355] text-white p-4 mb-2">
              <h2 className="text-xl font-bold">Initiatives</h2>
            </div>
            <div className="bg-gray-100 p-4 mb-2">
              <ChevronRight /> Local
            </div>
            <div className="bg-[#b2b355] text-white p-4 mb-4">
              <ChevronRight /> International
            </div>
            <div className="mt-8">
              <InHisHighnessWords />
              <TalesInPictures />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4 pl-4">
            <h1 className="text-3xl font-bold mb-4">Local Initiatives</h1>
            <hr className="border-t-2 border-[#b2b355] mb-6" />

            {/* Initiative Cards */}
            <div className="space-y-6">
              {currentInitiatives.map((initiative, index) => (
                <InitiativeCard
                  key={index}
                  image={initiative.image}
                  title={initiative.title}
                  date={initiative.date}
                  description={initiative.description}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </div>
  );
};

export default Local;
// src/pages/Global.tsx
import React, { useState } from 'react';
import { ChevronRight, Share, Printer, Share2, Plus, Minus } from 'lucide-react';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Footer from '../../components/atoms/Footer';
import globalInitiativesPaginated from './GlobalInitiativesMock'; // Mock data for global initiatives
import { useNavigate } from 'react-router-dom';
import Image85 from '../../images/image85.jpg';
import Image92 from '../../images/image92.jpg';
import Image93 from '../../images/image93.jpg';
import Image94 from '../../images/image94.jpg';
import Image95 from '../../images/image95.jpg';

const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <nav className="bg-gray-100 h-12 w-full fixed left-0 lg:top-60">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-10">
                  <li><a href="" className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home/ Initiatives/ </a></li>
                  <li><a href="" className="text-[#bbbd4f]">International</a></li>
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

// In His Highness's Words Component
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
  React.useEffect(() => {
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

// Initiative Card Component
interface InitiativeCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}

// InitiativeCard component that receives image, title, date, and description as props
const InitiativeCard: React.FC<InitiativeCardProps> = ({ image, title, date, description }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gray-100 border-2 border-gray-300 hover:border-[#bbbd4f] transition duration-300 shadow-md p-4 mb-4">
      <img src={image} alt={title} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-[#bbbd4f] mb-2">{date}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-[#bbbd4f] text-white px-4 py-2">Read More</button>
    </div>
    </div>
  );
};

// Main Global Initiatives Page
const Global: React.FC = () => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Assuming each page has 5 initiatives
  const initiativesPerPage = 5;
  const totalPages = Math.ceil(globalInitiativesPaginated.length / initiativesPerPage);

  // Get the initiatives for the current page
  const currentInitiatives = globalInitiativesPaginated.slice(
    currentPage * initiativesPerPage,
    (currentPage + 1) * initiativesPerPage
  );

  // Handle going to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle going to the previous page
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb />

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-500">
            Home / Initiatives / <span className="text-[#b2b355]">Global</span>
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
            <div className="bg-[#bbbd4f] text-white p-4 mb-2">
              <h2 className="text-xl font-bold">Initiatives</h2>
            </div>
            <div className="bg-gray-100 p-4 mb-2">
              <ChevronRight /> Local
            </div>
            <div className="bg-[#bbbd4f] text-white p-4 mb-4">
              <ChevronRight /> Global
            </div>
            <div className="mt-8">
              <InHisHighnessWords />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4 pl-4">
            <h1 className="text-3xl font-bold mb-4">Global Initiatives</h1>
            <hr className="border-t-2 border-[#bbbd4f] mb-6" />

            {/* Initiative Cards */}
            <div className="grid grid-cols-1 gap-6">
              {currentInitiatives.flat().map((initiative, index) => (
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
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className="bg-[#bbbd4f] text-white px-4 py-2 hover:bg-[#a7a94a] transition duration-200"
              >
                Previous
              </button>
              <span>
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
                className="bg-[#bbbd4f] text-white px-4 py-2 hover:bg-[#a7a94a] transition duration-200"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default Global;

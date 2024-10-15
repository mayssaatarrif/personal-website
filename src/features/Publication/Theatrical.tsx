import React, { useEffect, useState } from 'react';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Footer from '../../components/atoms/Footer';
import Image19 from '../../images/image19.jpg';
import theatricalWorks from './TheatricalMock'; // Make sure to import your mock data
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
import { Share2, Printer, Plus, Minus } from 'lucide-react';
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

const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <nav className="bg-gray-100 h-12 w-full fixed left-0 lg:top-60">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-10">
                  <li><a href="" className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home/ Publication / </a></li>
                  <li><a href="" className="text-[#bbbd4f]">Theatrical</a></li>
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

const Theatrical = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;
  const totalPages = Math.ceil(theatricalWorks.length / booksPerPage);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = theatricalWorks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <img src={Image19} alt="Banner" className="w-full h-auto mb-6" />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumb />
        <h1 className="text-4xl font-bold mb-8">Theatrical Works</h1>
        <hr className="border-t border-[#b2b355] mb-8" />

        {/* Sidebar and Books List Container */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 pr-4">
            <div className="bg-[#bbbd4f] text-white p-2">
              <h2 className="text-xl font-bold">Publications</h2>
            </div>
            <ul>
              <li className="bg-gray-200 p-2">Historical Works</li>
              <li className="bg-gray-200 p-2">Literary Works</li>
              <li className="bg-[#bbbd4f] text-white p-2">Theatrical Works</li>
            </ul>
            <div className="mt-8">
            <div className="mt-8">
              <InHisHighnessWords />
              <TalesInPictures />
            </div>
            </div>
          </div>
          
          {/* Current Books List */}
          <div className="w-3/4 flex flex-col">
            {/* Current Books List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {currentBooks.map((work, index) => (
                <div key={index} className="bg-gray-100 p-4 border-2 border-gray-300 hover:border-[#b2b355] transition duration-300 shadow-md mb-6">
                  <img src={work.coverImage} alt={work.title} className="w-full h-auto mb-4" />
                  <h2 className="text-lg font-bold mb-2">{work.title}</h2>
                  <p className="text-gray-700">{work.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 bg-[#bbbd4f] text-white rounded hover:bg-[#a7a94a] transition duration-200 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                Previous
              </button>
              <span className="mx-4 text-lg font-semibold">{currentPage} / {totalPages}</span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 bg-[#bbbd4f] text-white rounded hover:bg-[#a7a94a] transition duration-200 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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

export default Theatrical;

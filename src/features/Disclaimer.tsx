import React, { useState, useEffect } from 'react';
import { Share2, Printer, Plus, Minus } from 'lucide-react';
import TopBar from '../components/atoms/Topbar';
import Navbar from '../components/atoms/Navbar';
import Footer from '../components/atoms/Footer';
import Image19 from '../images/image19.jpg';
import { useNavigate } from 'react-router-dom';
import Image85 from '../images/image85.jpg';
import Image86 from '../images/image86.jpg';
import Image87 from '../images/image87.jpg';
import Image88 from '../images/image88.jpg';
import Image89 from '../images/image89.jpg';
import Image90 from '../images/image90.jpg';
import Image91 from '../images/image91.jpg';
import Image92 from '../images/image92.jpg';
import Image93 from '../images/image93.jpg';
import Image94 from '../images/image94.jpg';
import Image95 from '../images/image95.jpg';

const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="bg-gray-100 h-12 w-full absolute left-0 top-72">
      <div className="flex items-center justify-between bg-gray-100">
        <div className="text-sm breadcrumbs">
          <ul>
            <div className="flex space-x-1 mt-3">
              <li>
                <a href="/" className="text-gray-500 ml-6" onClick={() => navigate('/')}>
                  Home /
                </a>
              </li>
              <li>
                <a href="" className="text-[#bbbd4f]">Disclaimer</a>
              </li>
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
    <div className="bg-gray-100 p-4 mb-4 w-[350px]">
      <h2 className="text-xl font-bold mb-4">In His Highness's Words</h2>
      <div className="mb-4">
        <img 
          src={wordsData[currentIndex].image} 
          alt="His Highness" 
          className="w-full h-auto border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-1000 ease-in-out transform hover:scale-105" 
        />
      </div>
      <p className="mb-2 hover:text-[#bbbd4f]">{wordsData[currentIndex].text}</p>
      
      <div className="flex items-center justify-between mt-4">
        <button className="bg-[#bbbd4f] text-white px-4 py-2 rounded">View All</button>
        
        {/* Manual navigation buttons */}
        <div className="flex space-x-2">
          <button 
            className="text-[#bbbd4f] hover:text-gray-500 text-lg"
            onClick={handlePrev}
          >
            &#9664;
          </button>
          <button 
            className="text-[#bbbd4f] hover:text-gray-500 text-lg"
            onClick={handleNext}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};



const TalesInPictures = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gray-100 p-4 w-[350px]">
      <h2 className="text-xl font-bold mb-4">Tales in Pictures</h2>
      <div className="grid grid-cols-2 gap-2">
        <img 
          src={Image86} 
          alt="Tale 1" 
          className="w-3/4 border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-300 ease-in-out transform hover:scale-105" 
        />
        <img 
          src={Image87} 
          alt="Tale 2" 
          className="w-3/4 border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-300 ease-in-out transform hover:scale-105" 
        />
        <img 
          src={Image88} 
          alt="Tale 3" 
          className="w-3/4 border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-300 ease-in-out transform hover:scale-105" 
        />
        <img 
          src={Image89} 
          alt="Tale 4" 
          className="w-3/4 border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-300 ease-in-out transform hover:scale-105" 
        />
        <img 
          src={Image90} 
          alt="Tale 5" 
          className="w-3/4 border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-300 ease-in-out transform hover:scale-105" 
        />
        <img 
          src={Image91} 
          alt="Tale 6" 
          className="w-3/4 border-2 border-gray-300 hover:border-[#b2b355] transition-all duration-300 ease-in-out transform hover:scale-105" 
        />
        <button className="bg-[#bbbd4f] text-white px-4 py-2 p-4 mt-4 rounded">View All</button>
      </div>
    </div>
    </div>
  );
};

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4 mt-4 text-gray-900">Disclaimer</h2>
      <hr className="border-t border-[#b2b355] my-4" />
      <div className="mt-8 font-light font-sans">
        <p className="mb-4">
          www.sheikhdrsultan.ae makes every possible effort to ensure that the material contained on this website is
          accurate. However, www.sheikhdrsultan.ae accepts no liability for any information given via its website or
          sites linked to it.
        </p>
        <p className="mb-4">
          This site is copyright protected. Republishing or saving any part of this website is not allowed without prior
          permission. Any infringement of this copyright will result in legal action.
        </p>
        <p>
          Please <a href="/guestbook" className="text-[#b2b355] hover:underline">contact us</a> for further information.
        </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto p-4">
      <TopBar />
      <Navbar />
      <img src={Image19} alt="" className="w-full h-auto" />
      <Breadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        <div className="col-span-1">
          <InHisHighnessWords />
          <TalesInPictures />
        </div>
        <div className="col-span-2">
          <Disclaimer />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Dashboard;

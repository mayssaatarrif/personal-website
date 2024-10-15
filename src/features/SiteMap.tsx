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
       <nav className="bg-gray-100 h-12 w-full fixed left-0 lg:top-60">
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
                  <a href="" className="text-[#bbbd4f]">Privacy Policy</a>
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
 

interface SitemapItemProps {
  title: string;
  items: string[];
  isMedia?: boolean;  // Add this prop to conditionally apply index > 3 rule
}

const SitemapItem: React.FC<SitemapItemProps> = ({ title, items, isMedia }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative flex">
      {/* Dynamically adjust the height of the vertical line based on the content */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300" style={{ height: '100%' }}></div>
      <div className="flex-1 pl-4">
        <h3 className="text-2xl font-bold mb-2 text-[#c2be34] hover:text-gray-700">{title}</h3>
        <ul className="relative pl-4">
          {items.map((item, index) => (
            <li
              key={index}
              className={`flex items-start text-sm font-normal text-gray-600 ${
                isMedia && index > 3 ? 'ml-4' : ''
              }`}
            >
              {index < 27 && (
                <span className="text-[#bbbd4f] mr-2 flex-shrink-0 mt-1">&#9654;</span>
              )}
              <span className="flex-grow hover:text-[#c2be34] cursor-pointer">{item}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

const SiteMap = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-2xl font-bold mb-4 mt-4 text-gray-900">Sitemap</h2>
      <hr className="border-t border-[#b2b355] my-4" />
      <a
        href="/"
        className="text-[#c2be34] text-xl font-semibold inline-block px-8 py-1.5 border-2 border-[#c2be34] rounded-full my-8 transition-all duration-300 ease-in hover:bg-[#c2be34] hover:text-white"
      >
        Home
      </a>

      <div className="mt-8 font-light font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SitemapItem
            title="Biography"
            items={[
              'History',
              'Educational Qualifications',
              'Official and Academic Positions',
              'Honorary Degrees',
              'Honorary Positions',
              'Medals & Awards',
              'Awards',
              'Highlights & Glimpses',
            ]}
          />
          <SitemapItem title="Publications" items={['Historical Works', 'Literary works', 'Theatrical works']} />
          <SitemapItem title="Initiatives" items={['Local', 'International']} />
          <SitemapItem title="In His Highness's Words" items={[]} />
          <SitemapItem
            title="Media"
            items={[
              `Events & Activities`,
              `His Highness in their Words`,
              `Videos Library`,
              `Photos Library`,
              `Publications`,
              `Certificates, Awards & Medals`,
              `Seminars and Lectures`,
              `Meeting`,
              `Sharjah is a beacon that spreads culture and knowledge`,
              `Life is beautiful with the human`,
              `Visits Abroad`,
              `Media Interviews`,
              `From the Memory`,
              `March of Full of Achievements`,
              `Attention to Excellence`,
              `Commencement of new generations`,
              `Sultan’s efforts behind Sharjah’s win of ‘World Book Capital’`,
              `Sultan's wish turns Khorfakkan's dream into reality`,
              `Great interest and care to preserve the environment`,
              `Sharjah Book Fair … March of Cultural Creativity`,
              `Sultan, his wife's efforts made Sharjah a distinctive place for children and youth`,
              `As a result of sultan efforts, UAE has become a member of the second category of the International Astronomical Union`,
              `Under Sultan's patronage and support.. «Sharjah Biennial, a window to the arts and creativity»`,
              `Events & Activities`,
              `The late Sheikh Ahmed bin Mohammed Al Qasimi.. Humility, tolerance and wisdom of mind`,
              `Sharjah bids farewell to Sheikh Khalid Al Qasimi`,
              `Artwork collection of H.H. Sheikh Dr. Sultan bin Muhammad Al Qasimi`,
            ]}
            isMedia={true}  // Mark this as the media section
          />
          <SitemapItem title="Important Links" items={[]} />
          <SitemapItem title="Guest Book" items={[]} />
          <SitemapItem title="Sitemap" items={[]} />
        </div>
      </div>
    </div>
  );
};



  
const DashboardSiteMap = () => {
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
          <SiteMap />
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default DashboardSiteMap;
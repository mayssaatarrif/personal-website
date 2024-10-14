import React, { useState } from 'react';
import TopBar from '../components/atoms/Topbar';
import Navbar from '../components/atoms/Navbar';
import Footer from '../components/atoms/Footer';
import { Carousel } from 'flowbite-react';
import Image5 from "../images/image5.jpg";
import Image6 from "../images/image6.jpg";
import Image7 from "../images/image7.jpg";
import Image8 from "../images/image8.jpg";
import NewsGrid from '../components/molecules/NewsGrid';
import './custom.css';
import Image12 from "../images/image12.jpg";
import NewsCarousel from './NewsCarousel';
import historicalWorks from './Publication/HistoricalMock';
import literaryWorks from './Publication/LiteraryMock';
import theatricalWorks from './Publication/TheatricalMock';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image153 from '../images/image153.jpg';
import Image154 from '../images/image154.jpg';
import Image155 from '../images/image155.jpg';

interface PublicationProps {
  title: string;
  coverImage: string;
}

interface TheatricalProps extends PublicationProps {}

const Home = () => {
  const [publicationType, setPublicationType] = useState<'Historical Publications' | 'Literary Publications' | 'Theatrical Publications'>('Historical Publications');
  const [currentIndex, setCurrentIndex] = useState(0);

  const publications: { [key: string]: PublicationProps[] } = {
    'Historical Publications': historicalWorks,
    'Literary Publications': literaryWorks,
    'Theatrical Publications': theatricalWorks,
  };

  const currentBooks = publications[publicationType];

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentBooks.length);
  };

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentBooks.length) % currentBooks.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />

      <div className="flex-grow">
        <div className="h-72 sm:h-80 xl:h-96 2xl:h-[80rem] -mt-0">
          <Carousel className="custom-carousel" slide={false} indicators={true}>
            {[Image5, Image6, Image7, Image8].map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-80 p-2 rounded z-10">
                  <h3 className="text-lg">Your Text Here</h3>
                  <p className="text-sm">Additional Information</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <NewsCarousel />
        <NewsGrid />

        <div className="relative">
          <img src={Image12} alt="Image Background" className="object-cover w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4">
            <h2 className="text-white text-4xl font-bold bg-opacity-50 rounded hover:text-lime-100 mb-4">
              His Highness Publications
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              {Object.keys(publications).map((type) => (
                <button
                  key={type}
                  className={`text-base px-4 py-2 rounded-full transition duration-300 ${
                    publicationType === type
                      ? 'bg-white text-[#b2b355]'
                      : 'text-white hover:bg-white hover:text-[#b2b355]'
                  }`}
                  onClick={() => setPublicationType(type as 'Historical Publications' | 'Literary Publications' | 'Theatrical Publications')}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="w-3/4 flex items-center justify-center">
              <button onClick={prevBook} className="text-white p-2">
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-4">
                {[-1, 0, 1].map((offset) => {
                  const index = (currentIndex + offset + currentBooks.length) % currentBooks.length;
                  const book = currentBooks[index];
                  return (
                    <div key={index} className={`w-48 transition-all duration-300 ${offset === 0 ? 'scale-110' : 'scale-90 opacity-70'}`}>
                      <img src={book.coverImage} alt={book.title} className="w-full h-auto rounded shadow-lg" />
                    </div>
                  );
                })}
              </div>
              <button onClick={nextBook} className="text-white p-2">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Biography</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button className="bg-[#b2b355] text-white px-4 py-2 rounded">Honorary Degrees</button>
              <button className="text-gray-700 px-4 py-2 rounded hover:bg-gray-200">Medals & Awards</button>
              <button className="text-gray-700 px-4 py-2 rounded hover:bg-gray-200">Awards</button>
              <button className="text-gray-700 px-4 py-2 rounded hover:bg-gray-200">Highlights & Glimpses</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <img src={Image153} alt="Biography 1" className="w-full h-auto rounded shadow-lg" />
              <img src={Image154} alt="Biography 2" className="w-full h-auto rounded shadow-lg" />
              <img src={Image155} alt="Biography 3" className="w-full h-auto rounded shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

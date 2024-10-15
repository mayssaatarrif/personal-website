import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image146 from '../images/image146.jpg';
import Image147 from '../images/image147.jpg';
import Image149 from '../images/image149.jpg';
import Image150 from '../images/image150.jpg';
import Image151 from '../images/image151.jpg';
import Image152 from '../images/image152.jpg';

interface NewsItem {
  image: string;
  title: string;
  date: string;
}

const NewsCarousel: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      image: Image146,
      title: "Dr. Sultan Al Qasimi Writes: Who is the Killer? (1)",
      date: "Monday October 07, 2024",
    },
    {
      image: Image147,
      title: "Sultan: Nature reserves are not parks or pastures",
      date: "Thursday October 03, 2024",
    },
    {
      image: Image149,
      title: "Sultan announces the provision of jobs for Maritime...",
      date: "Thursday October 03, 2024",
    },
    {
      image: Image150,
      title: "Sultan Al Qasimi: The Arabic language encompasses all sciences and knowledge",
      date: "Monday، 30 September 2024 16:19 PM",
    },
    {
      image: Image151,
      title: "Dr. Sultan Al Qasimi Writes: Selections from “Jarun Namah”",
      date: "Monday، 30 September 2024 08:04 AM",
    },
    {
      image: Image152,
      title: "Dr. Sultan Al Qasimi writes: Selections from Jarun Namah”",
      date: "Monday، 23 September 2024 08:22 AM",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedItems = newsItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative bg-gray-100 text-gray-800 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 text-center">Latest News</h2>
        <div className="flex items-center justify-between space-x-4 overflow-hidden">
          {displayedItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg p-4">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-2" />
              <h3 className="text-md font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={handlePrev}>
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={handleNext}>
        <ArrowRight className="w-6 h-6" />
      </button>
      </div>
    </div>
  );
};




export default NewsCarousel;

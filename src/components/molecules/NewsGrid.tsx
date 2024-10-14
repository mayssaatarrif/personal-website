import React from 'react';
import Image9 from '../../images/image9.jpg';
import Image10 from '../../images/image10.jpg';
import Image11 from '../../images/image11.jpg';

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  category?: string; 
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, description, image }) => (
  <div className="bg-white ml-5">
    <div className="relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
    </div>
    <div className="p-4">
      <p className="text-[#b2b355] mb-2">{date}</p>
      <h2 className="text-xl font-semibold mb-2 hover:text-[#bbbd4f] cursor-pointer">{title}</h2>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <button className="bg-[#b2b355] text-white px-4 py-2 text-sm hover:bg-[#b2b355] transition duration-300 rounded-full">
        Read more
      </button>
      <div className="flex justify-center mt-4"> {/* Center the dots */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-[#b2b355] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

const NewsGrid: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: "Sultan directs disbursement of AED36mn to Emirate's clubs",
      date: "Wednesday October 09, 2024",
      description: "His Highness Sheikh Dr. Sultan bin Muhammad Al Qasimi, Supreme Council Member and Ruler of Sharjah, has directed the disbursement of a generous grant of AED 36 million as a reward...",
      image: Image9, 
    },
    {
      id: 2,
      title: "Tales in Pictures",
      date: "Tuesday April 30, 2024",
      description: "A collection of photos documenting aspects of His Highness's life in childhood and youth, and in areas ranging from educational, social, cultural, sports, and others.",
      image: Image10,
    },
    {
      id: 3,
      title: "Sultan Al Qasimi: A Consistent Luminary",
      date: "Monday September 02, 2024",
      description: "The eloquence of words falls short in capturing the strong presence of His Highness Sheikh Dr. Sultan Al Qasimi, Supreme Council Member and Ruler of Sharjah, on the global...",
      image: Image11,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-8 mb-4">
        <div className="text-left ml-5">
          <h2 className="text-xl font-bold">Events & Activities</h2>
        </div>
        <div className="text-left ml-5">
          <h2 className="text-xl font-bold">Tales in Pictures</h2>
        </div>
        <div className="text-left ml-5">
          <h2 className="text-xl font-bold">His Highness in their Words</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
        
      </div>
      <div className="border-l border-gray-600"></div>
    </div>
  );
};

export default NewsGrid;

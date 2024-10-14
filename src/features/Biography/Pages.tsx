import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Article } from '../../types';

// Updated mock data function
const generateMockArticles = (count: number): Article[] => {
  const categories = ['Achievements', 'Cultural Initiatives', 'Educational Programs', 'Charitable Works', 'Literary Contributions'];
  const titles = [
    "His Highness inaugurates new cultural center",
    "Sheikh Sultan's latest book receives international acclaim",
    "New educational initiative launched by His Highness",
    "Sharjah Ruler's charitable foundation reaches milestone",
    "His Highness attends opening of major art exhibition"
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: titles[i % titles.length],
    description: `A detailed account of His Highness Sheikh Dr. Sultan bin Muhammad Al Qasimi's involvement in ${categories[i % categories.length].toLowerCase()}.`,
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
    imageURL: `https://picsum.photos/seed/${i + 1}/400/300`,
    
  }));
};

// Simulated API call
const fetchArticles = async (page: number, itemsPerPage: number): Promise<{ articles: Article[], totalCount: number }> => {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  const allArticles = generateMockArticles(50); // Generate 50 mock articles
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    articles: allArticles.slice(start, end),
    totalCount: allArticles.length,
  };
};

// Custom hook for fetching paginated articles
const useArticles = (page: number, itemsPerPage: number) => {
  return useQuery(['articles', page, itemsPerPage], () => fetchArticles(page, itemsPerPage), {
    keepPreviousData: true,
  });
};

const PaginatedArticles: React.FC = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const { data, isLoading, error } = useArticles(page, itemsPerPage);

  const totalPages = data ? Math.ceil(data.totalCount / itemsPerPage) : 0;

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">An error occurred: {(error as Error).message}</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6">
        {data?.articles.map((article) => (
          <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={article.imageURL} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-2">{article.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(article.date).toLocaleDateString()}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`mx-1 px-3 py-1 rounded ${
              pageNumber === page ? 'bg-[#bbbd4f] text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedArticles;
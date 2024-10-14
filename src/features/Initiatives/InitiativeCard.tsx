// src/features/Initiatives/InitiativeCard.tsx
import React from 'react';

interface InitiativeCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
}
export interface Initiative {
  image: string;
  title: string;
  date: string;
  description: string;
}


const InitiativeCard: React.FC<InitiativeCardProps> = ({ image, title, date, description }) => {
  return (
    <div className="bg-white border-2 border-gray-300 hover:border-[#b2b355] transition duration-300 shadow-md p-4">
      <img src={image} alt={title} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-semibold mb-2 text-[#333333]">{title}</h2>
      <p className="text-[#b2b355] mb-2">{date}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-[#b2b355] text-white px-4 py-2 hover:bg-[#b2b355] transition duration-200">
        Read More
      </button>
    </div>
  );
};

export default InitiativeCard;

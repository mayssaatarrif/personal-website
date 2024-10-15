import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';
const TopBar = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-3">
        {/* Logo and Name Section */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-auto hover: cursor-pointer"
            onClick={() =>navigate('/')}
          />
          
        </div>

        {/* Social Media and Search Section */}
        <div className="flex items-center space-x-4">
          <div className="text-[#b2b355] font-bold text-lg">عربي</div>
          <div className="h-6 w-px bg-gray-300"></div>

          {/* Social Media Icons */}
          <div className="flex space-x-3">
          <a href="https://x.com/hhshkdrsultan" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-gray-600 hover:text-twitter" />
            </a>
            <div className="h-6 w-px bg-gray-300"></div>
            <a href='https://www.youtube.com/user/HHsheikhsultan' target='_blank' rel='noopener noreferrer'>
            <FaYoutube className="text-2xl text-gray-600 hover:text-red-700" />
            </a>
            <div className="h-6 w-px bg-gray-300"></div>
            <a href='https://www.instagram.com/hhshkdrsultan' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className="text-2xl text-gray-600 hover:text-red-500" />
            </a>
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          {/* Search Button */}
          <button className="flex items-center bg-[#b2b355] text-white px-4 py-2 rounded-full">
            <span className="mr-2">Search</span>
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopBar;

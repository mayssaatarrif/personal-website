import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  const biographyItems = [
    'History',
    'Educational Qualifications',
    'Official and Academic Positions',
    'Honorary Degrees',
    'Honorary Positions',
    'Medals & Awards',
    'Awards',
    'Highlights & Glimpses'
  ];

  const sections = [
    {
      title: 'Publications',
      items: ['Historical Works', 'Literary works', 'Theatrical works']
    },
    {
      title: 'Initiatives',
      items: ['Local', 'International']
    },
    {
      title: 'Media',
      items: ['Events & Activities', 'His Highness in their Words', 'Videos Library', 'Photos Library']
    }
  ];

  return (
    <footer className="p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Top part: Biography & Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Biography section */}
          <div className="md:col-span-2">
            <h2 className="text-[#b2b355] font-semibold mb-4 hover:text-black hover:cursor-pointer">Biography</h2>
            <div className="columns-2 gap-0 space-y-2">
              {biographyItems.map((item, index) => (
                <div key={index} className="text-gray-600 break-inside-avoid">
                  <a href="#" className="hover:text-[#b2b355] font-extralight text-sm">{item}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Other sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-[#b2b355] font-semibold mb-4 hover:text-black hover:cursor-pointer">{section.title}</h2>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 mb-2">
                    <a href="#" className="hover:text-[#b2b355] font-extralight text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Legal Links */}
        <div className="flex flex-wrap justify-between items-start border-t border-gray-200 pt-8">
          <div className="space-y-2 mr-8">
            <Link to="/sitemap" className="block text-[#b2b355] hover:text-black font-extralight text-sm">Sitemap</Link>
            <Link to="/privacy-policy" className="block text-[#b2b355] hover:text-black font-extralight text-sm">Privacy Policy</Link>
            <Link to="/disclaimer" className="block text-[#b2b355] hover:text-black font-extralight text-sm">Disclaimer</Link> {/* Updated to use Link */}
            <Link to="/contact-us" className="block text-[#b2b355] hover:text-black font-extralight text-sm">Contact Us</Link>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-[#b2b355] font-semibold mb-4 text-sm">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/hhshkdrsultan" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-400 hover:text-[#1DA1F2] cursor-pointer" />
              </a>
              <a href='https://www.youtube.com/user/HHsheikhsultan' target='_blank' rel='noopener noreferrer'>
                <FaYoutube className="text-gray-400 hover:text-red-600 cursor-pointer" />
              </a>
              <a href='https://www.instagram.com/hhshkdrsultan' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className="text-gray-400 hover:text-pink-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-xs text-gray-500">
          <p>Copyrights © www.sheikhdrsultan.ae all rights reserved</p>
          <p>Republishing or saving any part of this website is not allowed within a prior permission.</p>
          <p>For better browsing, please activate Flash Player and use the latest versions of browsers; IE, Firefox, Chrome.</p>
        </div>

        {/* Final Bottom Text */}
        <div className="mt-4 text-xs text-right text-[#b2b355]">
          <p>The Personal Website of H.H. Sheikh Dr. Sultan bin Muhammad Al Qasimi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

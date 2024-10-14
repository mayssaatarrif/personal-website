import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

type DropdownKeys = 'biography' | 'publications' | 'initiatives' | 'media';

const Navbar = () => {
  const navigate = useNavigate(); // Use navigate for programmatic navigation
  const [dropdownOpen, setDropdownOpen] = useState<Record<DropdownKeys, boolean>>({
    biography: false,
    publications: false,
    initiatives: false,
    media: false,
  });

  const navItems = [
    { icon: <FontAwesomeIcon icon={faHome} size="lg" className="text-[#b2b355] hover:text-white transition-transform duration-200 transform hover:scale-125" />, label: '', url: '/' },
    { label: 'Biography', isDropdown: true, key: 'biography' as DropdownKeys },
    { label: 'Publications', isDropdown: true, key: 'publications' as DropdownKeys },
    { label: 'Initiatives', isDropdown: true, key: 'initiatives' as DropdownKeys },
    { label: "In His Highness's Words", isDropdown: false, url: '/highness' },
    { label: 'Media', isDropdown: true, key: 'media' as DropdownKeys },
    { label: 'Important Links', url: '/important-links' },
    { label: 'Guest Book', url: '/guestbook' },
    { label: 'Sitemap', url: '/sitemap' } 
  ];

  const biographyLinks = [
    { label: 'History', url: '/history' },
    { label: 'Educational Qualifications', url: '/education' },
    { label: 'Official and Academic Positions', url: '/official-positions' },
    { label: 'Honorary Degrees', url: '/degree' },
    { label: 'Honorary Positions', url: '/position' },
    { label: 'Medals & Awards', url: '/medals' },
    { label: 'Awards', url: '/awards' },
    { label: 'Highlights & Glimpses', url: '/highlights' }
  ];

  const publicationLinks = [
    { label: 'Historical Works', url: '/historical-works' },
    { label: 'Literary Works', url: '/literary-works' },
    { label: 'Theatrical Works', url: '/theatrical-works' }
  ];

  const initiativeLinks = [
    { label: 'Local', url: '/local' },
    { label: 'International', url: '/global' }
  ];

  const mediaLinks = [
    { label: 'Events & Activities', url: '/activity' },
    { label: 'His Highness in their Words', url: '/media/in-their-words' },
    { label: 'Videos Library', url: '/video' },
    { label: 'Photos Library', url: '/photo' }
  ];

  const toggleDropdown = (key: DropdownKeys) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleNavigation = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank'); // External links
    } else {
      navigate(url); // Internal links using useNavigate
    }
  };

  return (
    <nav className=" text-white bg-gray-100">
      <div className="container mx-auto">
        <div className="relative">
          <ul className="flex items-center justify-between">
            {navItems.map((item, index) => (
              <li key={index} className="flex-1 text-center relative mx-2"> {/* Adjusted margin here */}
                <button
                  onClick={() => item.url ? handleNavigation(item.url) : item.isDropdown && item.key && toggleDropdown(item.key)}
                  className="block text-center whitespace-nowrap leading-[50px] no-underline font-sans font-semibold text-[0.9em] text-gray-400 overflow-hidden hover:text-[#b2b355] py-2 px-4" // Added padding here
                >
                  {item.icon}
                  {item.label && <span className="ml-1">{item.label}</span>}
                </button>

                {item.isDropdown && item.key && (
                  <div 
                    className={`absolute left-0 w-[200px] bg-[#b2b355] text-white mt-2 shadow-lg z-[1000] transition-opacity duration-300 ease-in-out ${dropdownOpen[item.key] ? 'opacity-100' : 'opacity-0 hidden'}`}
                    style={{ top: '100%', marginTop: '0px' }}
                  >
                    <ul className="py-2">
                      {item.key === 'biography' && biographyLinks.map((link, linkIndex) => (
                        <li key={linkIndex} className="hover:text-lime-100">
                          <button onClick={() => handleNavigation(link.url)} className="block w-full px-4 py-2 text-sm text-left">{link.label}</button>
                        </li>
                      ))}
                      {item.key === 'publications' && publicationLinks.map((link, linkIndex) => (
                        <li key={linkIndex} className="hover:text-lime-100">
                          <button onClick={() => handleNavigation(link.url)} className="block w-full px-4 py-2 text-sm text-left">{link.label}</button>
                        </li>
                      ))}
                      {item.key === 'initiatives' && initiativeLinks.map((link, linkIndex) => (
                        <li key={linkIndex} className="hover:text-lime-100">
                          <button onClick={() => handleNavigation(link.url)} className="block w-full px-4 py-2 text-sm text-left">{link.label}</button>
                        </li>
                      ))}
                      {item.key === 'media' && mediaLinks.map((link, linkIndex) => (
                        <li key={linkIndex} className="hover:text-lime-100">
                          <button onClick={() => handleNavigation(link.url)} className="block w-full px-4 py-2 text-sm text-left">{link.label}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
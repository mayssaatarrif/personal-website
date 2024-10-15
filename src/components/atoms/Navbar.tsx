import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

type DropdownKeys = 'biography' | 'publications' | 'initiatives' | 'media';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState<Record<DropdownKeys, boolean>>({
    biography: false,
    publications: false,
    initiatives: false,
    media: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-gray-100 text-gray-400 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => handleNavigation('/')} className="text-[#b2b355] hover:text-white">
              <FontAwesomeIcon icon={faHome} size="lg" />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.slice(1).map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() => item.url ? handleNavigation(item.url) : item.isDropdown && item.key && toggleDropdown(item.key)}
                    className="text-gray-400 hover:text-[#b2b355] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </button>
                  {item.isDropdown && item.key && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.key === 'biography' && biographyLinks.map((link, linkIndex) => (
                          <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">{link.label}</button>
                        ))}
                        {item.key === 'publications' && publicationLinks.map((link, linkIndex) => (
                          <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">{link.label}</button>
                        ))}
                        {item.key === 'initiatives' && initiativeLinks.map((link, linkIndex) => (
                          <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">{link.label}</button>
                        ))}
                        {item.key === 'media' && mediaLinks.map((link, linkIndex) => (
                          <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left" role="menuitem">{link.label}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => item.url ? handleNavigation(item.url) : item.isDropdown && item.key && toggleDropdown(item.key)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
                {item.isDropdown && item.key && dropdownOpen[item.key] && (
                  <div className="pl-4">
                    {item.key === 'biography' && biographyLinks.map((link, linkIndex) => (
                      <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 w-full text-left">{link.label}</button>
                    ))}
                    {item.key === 'publications' && publicationLinks.map((link, linkIndex) => (
                      <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 w-full text-left">{link.label}</button>
                    ))}
                    {item.key === 'initiatives' && initiativeLinks.map((link, linkIndex) => (
                      <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 w-full text-left">{link.label}</button>
                    ))}
                    {item.key === 'media' && mediaLinks.map((link, linkIndex) => (
                      <button key={linkIndex} onClick={() => handleNavigation(link.url)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 w-full text-left">{link.label}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
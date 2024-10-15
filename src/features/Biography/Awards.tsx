import React from 'react';
import { Home, BookOpen, GraduationCap, Award, Star, Medal, Trophy, FileText, Share2, Plus, Minus, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/atoms/Footer';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Image19 from '../../images/image19.jpg';
import Image96 from '../../images/image96.jpg'
import Image97 from '../../images/image97.jpg'
import Image98 from '../../images/image98.jpg'
import Image99 from '../../images/image99.jpg'
import Image100 from '../../images/image100.jpg'
import Image101 from '../../images/image101.jpg'
import Image102 from '../../images/image102.jpg'
import Image103 from '../../images/image103.jpg'
import Image104 from '../../images/image104.jpg'
import Image105 from '../../images/image105.jpg'
import Image106 from '../../images/image106.jpg'
import Image107 from '../../images/image107.jpg'
import Image108 from '../../images/image108.jpg'
import Image109 from '../../images/image109.jpg'
import Image110 from '../../images/image110.jpg'
import Image111 from '../../images/image111.jpg'
import Image112 from '../../images/image112.jpg'
import Image113 from '../../images/image113.jpg'
import Image114 from '../../images/image114.jpg'
import Image115 from '../../images/image115.jpg'
import Image116 from '../../images/image116.jpg'
import Image117 from '../../images/image117.jpg'
import Image118 from '../../images/image118.jpg'
import Image119 from '../../images/image119.jpg'
interface AwardsItem {
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl: string;
}

const menuItems = [
  { icon: Home, label: 'Home', active: false },
  { icon: BookOpen, label: 'Educational Qualifications', active: false, link: '/of' },
  { icon: GraduationCap, label: 'Official and Academic Positions', active: false },
  { icon: Award, label: 'Honorary Degrees', active: false },
  { icon: Star, label: 'Honorary Positions', active: false },
  { icon: Medal, label: 'Medals & Awards', active: false },
  { icon: Trophy, label: 'Awards', active: true },
  { icon: FileText, label: 'Highlights & Glimpses', active: false },
];

const awards: AwardsItem[] = [
  {
    title: 'Nile Award for Arab Innovators',
    description: `In recognition of His Highness' efforts in supporting Arts.`,
    location: 'Egypt',
    date: '28 May 2024',
    imageUrl: Image96,
  },
  {
    title: 'Excellence of Supporting Poetry Creativity Award',
    description: 'As appreciation for his generous and vital role in supporting Arab poetry and poets.',
    location: 'Egypt',
    date: '29 January 2020',
    imageUrl: Image97,
  },
  {
    title: 'Landscape Magazine Award',
    description: 'In recognition of his contributions and his urban project in the development of Emirate of Sharjah. ',
    location: 'United Arab Emirates',
    date: '21 November 2019',
    imageUrl: Image98
  },
  {
    title: 'Fatima bint Mubarak Award for Motherhood & Childhood',
    description: 'A key personality that play eminent roles in supporting mothers and children both locally and internationally.',
    location: 'United Arab Emirates',
    date: '20 November 2018',
    imageUrl: Image99,
  },
  {
    title: 'Simon Master Chairman’s Award',
    description: 'In recognition of His Highness unlimited intellectual commitment, his scientific career and his local and international cultural efforts.',
    location: 'United kingdom',
    date: '115 March 2017',
    imageUrl: Image100,
  },
  {
    title: 'Arab excellence award in support of poetic creativity',
    description: `In recognition of the remarkable and continuous role of his highness in the support of Arab poetry and poets.`,
    location: 'Egypt',
    date: '8  February 2017',
    imageUrl: Image101,
  },
  
  {
    title: 'Arab Creativity Award «March of Giving»',
    description: `In recognition of his bright academic record, his responsible leadership and governance of the process of economic and social development in the Emirate of Sharjah, his national positions, and his generous support for creativity, innovators and artists.`,
    location: 'Abu Dhabi, United Arab Emirates',
    date: '13 December 2016',
    imageUrl: Image102,
  },
  {
    title: 'Cultural Personality of the Year',
    description: `At Jerusalem Culture Festival, In recognition of his role in the cultural boom at local and Arab levels.`,
    location: 'Jerusalem, Palestine',
    date: '8 April 2015',
    imageUrl: Image103,
  },
  {
    title: 'International Award for Tobacco Control, World Health Organization (WHO)',
    description: `In recognition of His Highness' efforts in supporting health sector.`,
    location: 'United Arab Emirates',
    date: '17 March 2015',
    imageUrl: Image104,
  },
  {
    title: 'Asian Chess Federation Personality of the Year',
    description: `In recognition of his great efforts to support chess.`,
    location: 'United Arab Emirates ',
    date: '4 June 2014',
    imageUrl: Image105,
  },
  {
    title: 'Gulf Theatre Festival Personality of the Year',
    description: `In recognition of His Highness’ theatrical efforts, which include playwriting and supporting and caring for theatre movement locally and regionally.`,
    location: 'United Arab Emirates',
    date: '24 May 2014',
    imageUrl: Image106,
  },
  {
    title: 'Distinguished Heritage Personality 2013',
    description: `In recognition of His Highness' continuous efforts in the field of heritage preservation at the local and regional levels.`,
    location: 'United Arab Emirates',
    date: '3 April 2013',
    imageUrl: Image107,
  },
  {
    title: 'Prince Salman bin Abdulaziz Prize for Arabian Peninsula History Studies',
    description: `In recognition of His Highness' efforts in supporting scientific research and history of Arabian Peninsula.`,
    location: 'Kingdom of Saudi Arabia',
    date: '19 March 2012',
    imageUrl: Image108,
  },
  {
    title:  `Gulf School Theatre Pioneers Award`,
    description: `In recognition of His Highness' efforts in supporting creativity, theatre and culture regionally.`,
    location: 'Bahrain',
    date: '3 May 2012',
    imageUrl: Image109,
  },
  {
    title:  `Arab Federation for Libraries and Information Award`,
    description: `In recognition of His Highness' role in supporting libraries, information and culture.`,
    location: 'Sudan',
    date: '19 December 2011',
    imageUrl: Image110,
  },
  {
    title:  `Creative Sports Award`,
    description: `Mohammad bin Rashid Al Maktoum Creative Sports Awards for 2010, in recognition of his contribution to sports in the UAE and his support to athletes.`,
    location: 'United Arab Emirates',
    date: '2010',
    imageUrl: Image111,
  },
  {
    title:  `Cultural Personality of the Year, Sheikh Zayed Book Award for 2010`,
    description: `In recognition of His Highness's role in supporting the development and cultural scheme of the Emirate of Sharjah, and cultural and intellectual projects.`,
    location: 'United Arab Emirates',
    date: '3 March 2010',
    imageUrl: Image112,
  },
  {
    title:  `Distinguished Personality of the Year`,
    description: `Sheikh Hamdan bin Rashid Al Maktoum Award for 2008; in recognition of his persistent services to upgrade the standards of education and his remarkable contributions to education, culture and sciences at all levels.`,
    location: 'United Arab Emirates',
    date: '2009',
    imageUrl: Image113,
  },
  {
    title:  `Centennial Shield of Cairo University`,
    description: `In recognition of His Highness' significant contributions to the Arab culture.`,
    location: 'Egypt',
    date: '2008',
    imageUrl: Image114,
  },
  {
    title:  `Princess Fatima Ismail Distinguished Award`,
    description: `In recognition of his generous long-standing support of Cairo University’s mission and goals.`,
    location: 'Egypt',
    date: '2008',
    imageUrl: Image115,
  },
  {
    title:  `Distinguished Personality of the Year; Al Qareen 10th Cultural Festival`,
    description: `in recognition of his distinctive role in enriching theatre in the Arab world.`,
    location: 'Kuwait',
    date: '13 January 2004',
    imageUrl: Image116,
  },
  {
    title:  `King Faisal International Islamic Award`,
    description: `In recognition of his cultural and scientific contributions in the Islamic and Arab world.`,
    location: 'KSA',
    date: '2002',
    imageUrl: Image117,
  },
  {
    title:  `Islamic History and Arts Research Institute Award`,
    description: `For his contributions to the preservation of Islamic heritage.`,
    location: 'Turkey',
    date: '25 October 2000',
    imageUrl: Image118,
  },
  {
    title:  `Academic Excellence, Sheikh Rashid Al Maktoum Award`,
    description: ``,
    location: 'United Arab Emirates',
    date: '22 November 1989',
    imageUrl: Image119,
  },
  
];

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Awards: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white">
      <TopBar />
      <Navbar />
      <img src={Image19} alt='' className="w-full h-auto" />

      <div className="max-w-6xl mx-auto p-4">
      <nav className="bg-gray-100 h-12 w-full fixed left-0 lg:top-60">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-3">
                  <li><a href="" className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home / </a></li>
                  <li><a href="" className="text-[#bbbd4f]">Biography</a></li>
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
        
        <h1 className="text-4xl font-bold mt-16 mb-6">Biography</h1>

        <div className="flex mb-8 w-full border-b-2 border-gray-800 bg-gray-100 grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 cursor-pointer hover:bg-[#bbbd4f]  hover:text-white ${item.active ? 'bg-[#bbbd4f] text-white' : 'bg-gray-100 text-gray-600 hover:bg-[#bbbd4f]'}`}
            >
              <item.icon className="w-6 h-6 mb-2" />
              <span className="text-xs text-center">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 mr-3 ">
          {awards.map((award, index) => (
          <div key={index} className="flex pb-8 mb-0 mt-0 border-b-2 border-[#bbbd4f] transition-all duration-300 ease-in-out hover:bg-[#f0f0d8]">
              <div className="w-1/3 pr-4">
                <img
                  src={award.imageUrl}
                  alt={award.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="w-2/3">
              <h2 className="text-lg font-semibold mb-2 group-hover:text-[#bbbd4f]">{award.title}</h2>
              <p className="text-[#bbbd4f] text-sm mb-2 group-hover:text-black">{award.description}</p>
              <p className="text-sm mb-1 group-hover:text-black">{award.location}</p>
              <p className="text-sm group-hover:text-black">{award.date}</p>
                
              </div>
              
            </div>
            
             
          
          ))}
          
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Awards;
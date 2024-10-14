import React from 'react';
import { Home, Book, GraduationCap, Award, Star, Medal, Trophy, FileText, Share2, Plus, Minus, Printer, BookOpen } from 'lucide-react';
import Footer from '../../components/atoms/Footer';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import { useNavigate } from 'react-router-dom';
import Image19 from '../../images/image19.jpg';
import Image21 from '../../images/image21.jpg';
import Image22 from '../../images/image22.jpg';
import Image23 from '../../images/image23.jpg';
import Image24 from '../../images/image24.jpg';
import Image25 from '../../images/image25.jpg';
import Image26 from '../../images/image26.jpg';
import Image27 from '../../images/image27.jpg';
import Image28 from '../../images/image28.jpg';
import Image29 from '../../images/image29.jpg';
import Image30 from '../../images/image30.jpg';
import Image31 from '../../images/image31.jpg';
import Image32 from '../../images/image32.jpg';
import Image33 from '../../images/image33.jpg';
import Image34 from '../../images/image34.jpg';
import Image35 from '../../images/image35.jpg';
import Image36 from '../../images/image36.jpg';
import Image37 from '../../images/image37.jpg';
import Image38 from '../../images/image38.jpg';
import Image39 from '../../images/image39.jpg';
import Image40 from '../../images/image40.jpg';
import Image41 from '../../images/image41.jpg';
import Image42 from '../../images/image42.jpg';

// Interfaces for navigation and degree
interface NavItem {
  icon: React.ReactNode;
  label: string;
}

interface Degree {
  title: string;
  description: string;
  institution: string;
  date: string;
  imageUrl: string;
}


// Degree data for each honorary degree
const degrees: Degree[] = [
  {
    title: 'Honorary Drama PhD',
    description: 'For his valuable contributions in theatrical writing and supporting theatrical scene in the region.',
    institution: 'Sudan University of Science and Technology',
    date: 'March 2020',
    imageUrl: Image21,
  },
  {
    title: 'Honorary Doctorate',
    description: 'In recognition of His Highness\'s cultural efforts.',
    institution: 'Autonomous University of Madrid, Spain',
    date: 'October 2019',
    imageUrl: Image22,
  },
  {
    title: 'Honorary Doctorate in Urban and Regional Development',
    description: 'In recognition of His Highness\' effective role in the urban development of the region.',
    institution: 'University of Turin and Politecnico di Torino',
    date: 'May 2019',
    imageUrl: Image23,
  },
  {
    title: 'Honorary Doctorate',
    description: 'In recognition of His Highness\'s cultural and literary contributions, his role in supporting cultural, literary and artistic activities.',
    institution: 'University of Coimbra, Portugal',
    date: 'October 2018',
    imageUrl: Image24,
  },
  {
    title: 'Honorary Doctorate in Education and Cultural Relations',
    description: 'In recognition of his continuous efforts and distinctive role in supporting education and scientific research.',
    institution: 'University of Calicut, India',
    date: 'September 2017',
    imageUrl: Image25,
  },
  {
    title: 'Honorary Doctorate in Social Sciences',
    description: 'In recognition of his contribution to Arts and his role in supporting regional issues and Egyptian community.',
    institution: 'Cairo, Egypt',
    date: 'May 2015',
    imageUrl: Image26,
  },
  {
    title: 'Honorary Doctorate in Humane Letters',
    description: 'In recognition of his support to scientific research, promotion of culture and arts, promotion of education both locally and internationally.',
    institution: 'University of Paris Diderot, France',
    date: 'March 2012',
    imageUrl: Image27,
  },
  {
    title: 'Honorary Doctorate in Politics',
    description: 'In recognition of his excellent achievements in the field of politics, economics and cultural development.',
    institution: 'Hanyang University, South Korea',
    date: 'September 2011',
    imageUrl: Image28,
  },
  {
    title: 'Honorary Doctorate',
    description: 'In recognition of his outstanding academic and educational contributions in UAE in particular and Arab region in general.',
    institution: 'Kanazawa University, Japan',
    date: 'April 2010',
    imageUrl: Image29,
  },
  
  {
    title: 'Honorary Doctorate in Humane Letters',
    description: 'In recognition of his generous contribution to education and culture at the national and international levels.',
    institution: 'American University in Cairo',
    date: 'February 2009',
    imageUrl: Image30,
  },
  {
    title: 'Honorary Doctorate in Arts',
    description: 'In appreciation of his efforts in spreading Arab and Islamic Culture and Civilization.',
    institution: 'University of Sheffield, UK',
    date: 'November 2008',
    imageUrl: Image31,
  },
  {
    title: 'Honorary Doctorate in Administration',
    description: 'In recognition of his efforts in the scientific research and cultural fields in UAE and Arab world.',
    institution: 'University of Jordan',
    date: 'May 2008',
    imageUrl: Image32,
  },
  {
    title: 'Honorary Doctorate',
    description: 'In recognition of his long-term commitment and support of research in fields of History and Archaeology.',
    institution: 'University of Tübingen, Germany',
    date: 'October 2006',
    imageUrl: Image33,
  },
  {
    title: 'Honorary Doctorate',
    description: 'In recognition of his contributions to the cultural and intellectual activities across the world.',
    institution: 'The National Academy of Science of Armenian, Armenia',
    date: 'September 2005',
    imageUrl: Image34,
  },
  {
    title: 'Honorary Doctorate of Laws',
    description: 'In recognition of the scientific position of His Highness and his role in academic development and progress in UAE in general and Sharjah in particular.',
    institution: 'McMaster University, Canada',
    date: 'May 2004',
    imageUrl: Image35,
  },
  {
    title: 'Honorary Doctorate Degree in Law',
    description: '',
    institution: 'London South Bank University, UK',
    date: 'April 2003',
    imageUrl: Image36,
  },
  {
    title: 'Honorary Doctorate in Humane Letters',
    description: 'In recognition of His Highness’ effective role at the national and international levels.',
    institution: 'University of Edinburgh, UK',
    date: 'July 2001',
    imageUrl: Image37,
  },
  {
    title: 'Honorary Doctorate in Education',
    description: 'In recognition of his role in science, knowledge, culture and education, as well as preservation of cultural, intellectual and historical heritage.',
    institution: 'International Islamic University of Malaysia',
    date: 'February 2001',
    imageUrl: Image38,
  },
  {
    title: 'Honorary Doctorate in History',
    description: 'In recognition of his continuous contributions for the past years and obtaining significant results.',
    institution: 'The Eastern Studies Institute, Academy of Russian Studies, Russia',
    date: 'December 1995',
    imageUrl: Image39,
  },
  {
    title: 'Honorary Doctorate in Arabic and Islamic studies',
    description: `In recognition of His Highness' efforts in the researches of Contemporary Arab History.`,
    institution: 'Exeter University, UK',
    date: 'July 1993',
    imageUrl: Image40,
  },
  {
    title: 'Honorary Doctorate in Law',
    description: `In recognition of His Highness’ role in laying foundations of modern development in Sharjah and his contributions in supporting Arab-African relations.`,
    institution: 'Khartoum University',
    date: 'March 1986',
    imageUrl: Image41,
  },
  {
    title: 'Honorary Doctorate in Sciences',
    description: `In recognition of his outstanding contribution in the field of education.`,
    institution: 'April 1983',
    date: 'March 1986',
    imageUrl: Image42,
  },
  {
    title: 'Honorary Doctorate in Sciences',
    description: 'In recognition of his outstanding contribution in the field of education.',
    institution: 'April 1983',
    date: 'March 1986',
    imageUrl: Image42,
  },
];

// Menu items for the biography navigation
const menuItems = [
  { icon: Home, label: 'Home', active: false },
  { icon: BookOpen, label: 'Educational Qualifications', active: false, link: '/of' },
  { icon: GraduationCap, label: 'Official and Academic Positions', active: false },
  { icon: Award, label: 'Honorary Degrees', active: true },
  { icon: Star, label: 'Honorary Positions', active: false },
  { icon: Medal, label: 'Medals & Awards', active: false },
  { icon: Trophy, label: 'Awards', active: false },
  { icon: FileText, label: 'Highlights & Glimpses', active: false },
];

// Component for Honorary Degree page
const HonoraryDegree: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar />
      <Navbar />
      <img src={Image19} alt="" className="w-full h-auto" /> 

      <div className="max-w-6xl mx-auto p-4">
        {/* Breadcrumbs and share, print, zoom icons */}
        <nav className="bg-gray-100 h-12 w-full absolute left-0 top-72">
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

        {/* Menu for navigating between sections */}
        <div className="flex mb-8 w-full border-b-2 border-gray-800 bg-gray-100">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 cursor-pointer hover:bg-[#bbbd4f] hover:text-white ${item.active ? 'bg-[#bbbd4f] text-white' : 'bg-gray-100 text-gray-600 hover:bg-[#bbbd4f]'}`}
            >
              <item.icon className="w-6 h-6 mb-2" />
              <span className="text-xs text-center">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Displaying degrees */}
        <div className="grid grid-cols-1 md:grid-cols-2 mr-4 gap-y-6   ">
          {degrees.map((degree, index) => (
            <div key={index}>
              <div className="flex  hover:bg-[#f2f3ae]">
              <div className="w-1/4 ">
                <img src={degree.imageUrl} alt={degree.title} className="w-full h-32 object-cover transition-transform duration-300 ease-in-out transform hover:bg-[#f2f3ae] hover:scale-110 " />
                </div>
                <div className="w-3/4 ml-4">
                  <h2 className="text-lg font-semibold">{degree.title}</h2>
                  <p className="text-[#bbbd4f] text-sm">{degree.description}</p>
                  <p className="text-sm mb-1">{degree.institution}</p>
                  <p className="text-sm mb-1">{degree.date}</p>
                </div>
                
              </div>
            </div>
            
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HonoraryDegree;

import React from 'react';
import { Home, BookOpen, GraduationCap, Award, Star, Medal, Trophy, FileText, Share2, Printer, Plus, Minus } from 'lucide-react';
import Image18 from '../../images/image18.jpg';
import Image19 from '../../images/image19.jpg';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/atoms/Footer';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

interface Position {
  title: string;
  period: string;
}

const Academic: React.FC = () => {
  const navigate = useNavigate();
  const menuItems = [
    { icon: Home, label: 'Home', active: false },
    { icon: BookOpen, label: 'Educational Qualifications', active: false, link: '/of' },
    { icon: GraduationCap, label: 'Official and Academic Positions', active: true },
    { icon: Award, label: 'Honorary Degrees', active: false },
    { icon: Star, label: 'Honorary Positions', active: false },
    { icon: Medal, label: 'Medals & Awards', active: false },
    { icon: Trophy, label: 'Awards', active: false },
    { icon: FileText, label: 'Highlights & Glimpses', active: false },
  ];
  
  const positions: Position[] = [
    { title: 'Ruler of Sharjah, United Arab Emirates Since 1972.', period: '' },
    { title: 'Member of the Supreme Council of UAE Since 1972.', period: '' },
    { title: 'Minister of Education, United Arab Emirates, 1971-1972.', period: '' },
    { title: 'President, American University of Sharjah, 1997-2023.', period: '' },
    { title: 'President, University of Sharjah, 1997-2021.', period: '' },
    { title: 'Visiting Professor, Exeter University, 1998.', period: '' },
    { title: 'Professor, Modern History of the Gulf, University of Sharjah, 1999.', period: '' },
    { title: 'Member of the Companion of the Guild of Cambridge Benefactors, Cambridge University; in recognition of his generous support of the continuation of the University’s commitment to teaching and research; Cambridge, UK, 21 June 2004.', period: '' },
    { title: 'Founding Member of the University of Exeter’s College of Benefactors, Exeter University; in recognition of his generous and continuous support of higher education and research; Exeter, United Kingdom, 15 May 2007.', period: '' },
    { title: 'Faculty member, Visiting Professor (part-time), Cairo University, 2008.', period: '' },
    { title: 'Member of the Academy of Sciences Lisbon, 3 October 2013.', period: '' },
    { title: 'President, Al Qasimia University, Sharjah, 2015 - 2021.', period: '' },
    { title: 'Chairman of the Arabic Language Academy in Sharjah, 2017.', period: '' },
    { title: 'Chairman of Sharjah Urban Planning Council, 2019.', period: '' },
    { title: 'President, Sharjah Performing Arts Academy, 2019.', period: '' },
    { title: 'President, Sharjah Maritime Academy, 2019.', period: '' },
    { title: 'President, University of Khorfakkan, 2022.', period: '' },
    { title: 'President, University of Kalba, 2023.', period: '' },
    { title: 'President, University of Al Dhaid, 2024.', period: '' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <TopBar />
      <Navbar />
      <img src={Image19} alt='' className="w-full h-auto" /> 

      <div className="max-w-6xl mx-auto p-4">
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

        <div className="flex hover:bg-[#f9fabd]">
          <img src={Image18} alt="Placeholder" className="float-left mt-2.5 w-[200px] h-[250px] p-[3px] shadow-lg mr-6 mb-6" />
          <div className="w-3/4">
            <h2 className="text-2xl font-semibold mb-4">Official and Academic Positions</h2>
            <ul className="space-y-2">
              {positions.map((position, index) => (
                <li key={index} className="flex flex-col items-start">
                  <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400  mr-2"></div>
                  <span className={`${index === 7 || index === 8 ? 'mr-2' : ''}`}>{position.title}</span>
                  </div>
                  <hr className="border-t border-[#bbbd4f] w-full mt-1 ml-4" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Academic;

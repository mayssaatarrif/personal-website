import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, Award, Star, Medal, Trophy, FileText, Share2, Printer, Plus, Minus } from 'lucide-react';
import Image18 from '../../images/image18.jpg';
import Image19 from '../../images/image19.jpg';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Footer from '../../components/atoms/Footer';

interface Position {
  title: string;
  period: string;
}

const HonoraryPosition: React.FC = () => {
  const menuItems = [
    { icon: Home, label: 'Home'},
    { icon: BookOpen, label: 'Educational Qualifications' },
    { icon: GraduationCap, label: 'Official and Academic Positions' },
    { icon: Award, label: 'Honorary Degrees' },
    { icon: Star, label: 'Honorary Positions',active: true  },
    { icon: Medal, label: 'Medals & Awards' },
    { icon: Trophy, label: 'Awards' },
    { icon: FileText, label: 'Highlights & Glimpses' },
  ];

  const navigate = useNavigate();

  const positions: Position[] = [
    { title: 'Global Honorary Fellowship from Paris-Panthéon-Assas University (PPAU), in recognition of his contributions in scientific, literary, educational and comprehensive fields, 23 February 2023.', period: '' },
    { title: 'Honorary Fellowship of Royal Institute of British Architects in recognition of his highness contributions to architecture and improving the quality of the built environment, 2 November 2018.', period: '' },
    { title: 'Honorary membership of the Arabic Language Academy in recognition of his highness role in the Arabic language and culture service, 24 December 2015.', period: '' },
    { title: 'Honorary Fellowship of the Royal College of Physicians in London, Glasgow and Edinburgh in recognition of His Highness’s role in supporting the medical and academic community at the international level, 16 June 2015.', period: '' },
    { title: 'Honorary President of the Arab Federation for Tourist Guides, 2013.', period: '' },
    { title: 'Honorary President of Emirates Writers Union, 2012.', period: '' },
    { title: 'Honorary Fellowship of the Royal College of Surgeons of England, London, UK, 12 November 2009.', period: '' },
    { title: 'Honorary President; Union of Arab Universities, 2009.', period: '' },
    { title: 'Honorary President; Arab Theatre Institute, 2008.', period: '' },
    { title: 'Honorary President; Arab Union for Astronomy and Space Sciences, 2008.', period: '' },
    { title: 'Honorary President; Islamic International Organization for the History of Sciences, 2008.', period: '' },
    { title: 'Honorary Member, Writers’ Union of Egypt, 2008.', period: '' },
    { title: 'Honorary President; Egyptian Association for the Study of History, 2001.', period: '' },
    { title: 'Honorary President; Arab Science and Technology Foundation, 2000.', period: '' },
    { title: 'Honorary President; Council of World University Service (WUS), 1998.', period: '' },
    { title: 'Honorary President; Sharjah City for Humanitarian Services, 1998.', period: '' },
    { title: 'Honorary Member, Institute for Middle Eastern and Islamic Studies; University of Durham, UK, 22 October 1992.', period: '' },
    { title: 'Honorary Member, National Geographic Society (established 1888); in recognition of his support of the diffusion of geographical knowledge and promotion of research and exploration; Washington, D.C., USA, January 2004.', period: '' },
    { title: 'Honorary Fellow, African Studies Institute; Khartoum University; Khartoum, Sudan, 1977.', period: '' },
  ];

  return (
    <div>
      <TopBar />
      <Navbar />
      <img src={Image19} alt="Banner" className="w-full h-auto" />

      <div className="max-w-6xl mx-auto p-4">
        <nav className="bg-gray-100 h-12 w-full absolute left-0 top-72">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-3">
                  <li><a className="text-gray-500 ml-6" onClick={() => navigate('/')}>Home / </a></li>
                  <li><a className="text-[#bbbd4f]">Biography</a></li>
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

        <div className="flex mb-8 w-full border-b border-gray-200">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 cursor-pointer hover:text-[#bbbd4f] ${item.active ? 'bg-[#bbbd4f] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <item.icon className="w-6 h-6 mb-2" />
              <span className="text-xs text-center">{item.label}</span>
            </div>
          ))}
        </div>


        <div className="flex mt-16 hover:bg-[#f9fabd]">
  <img src={Image18} alt="Placeholder" className="float-left mt-2.5 w-[180px] h-[200px] p-[3px] shadow-lg mr-6 mb-6" />
  <div className="w-3/4">
    <h2 className="text-xl font-semibold mb-4 ml-10">Honorary Positions</h2>
    <ul className="space-y-2">
      {positions.map((position, index) => (
        <li key={index} className="flex flex-col items-start">
           <div className="flex items-center">
          <div className="w-2 h-2 bg-gray-300 ml-7"></div>
          <span className='text-gray-700 font-light text-sm ml-3'>{position.title}</span>
          </div>
          <hr className="border-t border-[#bbbd4f] w-full mt-1 ml-10" />
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

export default HonoraryPosition;

import React from 'react';
import { Home, BookOpen, GraduationCap, Award, Star, Medal, Trophy, FileText, Share2, Printer, Plus, Minus } from 'lucide-react';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Footer from '../../components/atoms/Footer';
import Image13 from '../../images/image13.jpg';
import Image14 from '../../images/image14.jpg';
import Image15 from '../../images/image15.jpg';
import Image16 from '../../images/image16.jpg';
import Image17 from '../../images/image17.jpg';
import Image19 from '../../images/image19.jpg';
import { useNavigate } from 'react-router-dom';

const Education: React.FC = () => {
  const navigate = useNavigate();
  const menuItems = [
    { icon: Home, label: 'Home', active: false },
    { icon: BookOpen, label: 'Educational Qualifications', active: true, link:'/of'},
    { icon: GraduationCap, label: 'Official and Academic Positions', active: false },
    { icon: Award, label: 'Honorary Degrees', active: false },
    { icon: Star, label: 'Honorary Positions', active: false },
    { icon: Medal, label: 'Medals & Awards', active: false },
    { icon: Trophy, label: 'Awards', active: false },
    { icon: FileText, label: 'Highlights & Glimpses', active: false },
  ];

  const educationItems = [
    {
      image: Image13,
      title: "Primary Education",
      school: "Al Eslah Al Qasimia School",
      year: "1948"
    },
    {
      image: Image14,
      title: "Elementary and Secondary Education",
      school: "Sharjah and Dubai",
      year: ""
    },
    {
      image: Image15,
      title: "Bachelor in Agriculture",
      school: "College of Agriculture, Cairo University; Cairo, Egypt",
      year: "1971"
    },
    {
      image: Image16,
      title: "Doctor with Distinction in History",
      school: "Thesis on the accusations of piracy and the British attitude towards the Qawasim from 1901 to 1820, University of Exeter, UK",
      year: "10 May 1985"
    },
    {
      image: Image17,
      title: "PhD in Political Geography of the Gulf",
      school: "Thesis on Power Struggles and Trade in the Gulf (1620-1820) University of Durham, UK",
      year: "2 July 1999"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <TopBar />
      <Navbar />
      <img src={Image19} alt='' className="w-full h-auto" /> 
      
      <div className="max-w-6xl mx-auto p-4">
      <nav className="bg-gray-100 h-12 w-full fixed left-0 lg:top-60">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-3">
                  <li><a href="" className="text-gray-500 ml-6" onClick={()=>navigate('/')}>Home / </a></li>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0"> {/* Set gap-0 to remove spacing between items */}
          {educationItems.map((item, index) => (
            <div key={index}>
              <div className="flex space-x-4 hover:bg-[#f2f3ae] p-4">
                <img src={item.image} alt={item.title} className="w-40 h-40 object-cover" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-[#bbbd4f] mb-1">{item.school}</p>
                  {item.year && <p className="text-gray-500">{item.year}</p>}
                </div>
              </div>
              <hr className="border-[#bbbd4f]" /> {/* Horizontal line without margin to remove extra space */}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;

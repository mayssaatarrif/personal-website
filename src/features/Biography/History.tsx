import React from 'react';
import { Home, BookOpen, GraduationCap, Award, Star, Medal, Trophy, FileText, Plus, Minus, Share2, Printer } from 'lucide-react';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Footer from '../../components/atoms/Footer';
import Image19 from '../../images/image19.jpg';
import { useNavigate } from 'react-router-dom';
import Image20 from '../../images/image20.jpg';

const History: React.FC = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: BookOpen, label: 'Educational Qualifications' },
    { icon: GraduationCap, label: 'Official and Academic Positions' },
    { icon: Award, label: 'Honorary Degrees' },
    { icon: Star, label: 'Honorary Positions' },
    { icon: Medal, label: 'Medals & Awards' },
    { icon: Trophy, label: 'Awards' },
    { icon: FileText, label: 'Highlights & Glimpses' },
  ];
  
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <TopBar />
      <Navbar />
      <img src={Image19} alt="" className="w-full h-auto" />

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

        <div className=" flex-col md:flex-row gap-6">
          <img 
            src={Image20} 
            alt="Sheikh Dr. Sultan bin Muhammad Al Qasimi" 
            className="float-left mt-2.5 w-[230px] h-[340px] p-[3px] shadow-lg mr-6 mb-6" 
          />

          <div className="w-full md:w-2/3 font-sans text-sm">
            <p className="mb-4">
              His Highness Sheikh Dr. Sultan bin Muhammad bin Saqr bin Khalid bin Sultan bin Saqr bin Rashid Al Qasimi was born in Sharjah on Sunday, 2nd July 1939 AD, 14th Jumada-I 1358 Hijri.
            </p>
            <p className="mb-4">
              His mother is Sheikha Maryam bint Sheikh Ghanem bin Salim bin Abdullah bin Saeed bin Sabt bin Matar bin Sultan bin Faris bin Shahwan Al Shamsi.
            </p>
            <p className="mb-4">
              His Highness has four brothers and two sisters: Sheikh Khalid, Sheikh Saqr, Sheikh Abdul Aziz, Sheikh Abdullah, Sheikha Shiekha and Sheikha Naema.
            </p>
            <p className="mb-4">
              His Highness also has half-brothers and sisters: Sheikh Rashid, Sheikh Humaid, Sheikh Ali, Sheikha Mouza, Sheikha Alia, Sheikha Ghaya, Sheikha Noura, Sheikha Aisha and Sheikha Azza.
            </p>
            <p className="mb-4">
              His senior wife was Sheikha Moza bint Salim bin Mohammed bin Manee Al Falasi (her grandmother, Sheikha Mouza bint Sheikh Ghanem bin Sheikh Salim Al Shamsi, is His Highness's aunt), and with whom he had two children: his son, Sheikh Mohammed (May God rest his Soul), who passed away on 3rd April 1999, aged 24, and his daughter, Sheikha Azza.
            </p>
            <div className=''>
            <p className="mb-4">
              His Highness also married <a href="https://ar.wikipedia.org/wiki/%D8%AC%D9%88%D8%A7%D9%87%D8%B1_%D8%A8%D9%86%D8%AA_%D9%85%D8%AD%D9%85%D8%AF_%D8%A7%D9%84%D9%82%D8%A7%D8%B3%D9%85%D9%8A" className="text-[#bbbd4f] hover:text-black font-semibold">Her Highness Sheikha Jawaher bint Sheikh Mohammed bin Sultan bin Saqr Al Qasimi</a>, with whom he has three daughters and one son: <a href='https://en.wikipedia.org/wiki/Bodour_bint_Sultan_bin_Muhammad_Al_Qasimi' className="text-[#bbbd4f] hover:text-black font-semibold">Sheikha Bodour</a>, Sheikha Noor, <a  href = " https://sharjahart.org/sharjah-art-foundation/people/al-qasimi-hoor" className= "text-[#bbbd4f] hover:text-black font-semibold">Sheikha Hoor</a> and <a href = " https://en.wikipedia.org/wiki/Khalid_bin_Sultan_Al_Qasimi_(fashion_designer)" className="text-[#bbbd4f] hover:text-black font-semibold">Sheikh Khalid</a> (May God rest his Soul), who passed away on 1st July 2019, aged 40.
            </p>
            <p className='mb-4'>
              His Highness grew up with a deep-rooted love for his country and was able to expand his knowledge through broad education. During his early childhood he became enamoured of the history of his country and was taught the Holy Quran by Sheikh Faris bin Abdul Rahman.
            </p>
            <p className='mb-4'>
              In September 1948, at the age of 9 years, he enrolled in Al Eslah Al Qasimia School. In 1954, His Highness enrolled in an English private school to learn the English language. He completed his elementary and secondary education between Sharjah and Kuwait.
            </p>
            <p className='mb-4'>
              In 1965, he travelled to Cairo to complete his higher education, enrolling in the College of Agriculture at Cairo University.
            </p>
            <p className="mb-4">
              For two years, particularly from February 1961 to September 1963, he taught English and Mathematics at Sharjah Industrial School.
            </p>
            <p className='mb-4'>
              In 1965, His Highness chaired the Municipality and, after his graduation in 1971, he managed the Ruler’s office in Sharjah. Following the establishment of the United Arab Emirates on 2nd December 1971, the ministers’ council was formed and His Highness became the UAE’s Minister of Education.
            </p>
            <p className='mb-4'>
              On 25th January 1972, 9th Dhi Al-Hijja 1391 (Arafa Day) His Highness Sheikh Sultan bin Muhammad Al Qasimi became the Ruler of Sharjah after its former ruler, Sheikh Khalid bin Mohammed Al Qasimi, was assassinated in an attempted coup by loyalists of Sheikh Saqr bin Sultan Al Qasimi. His Highness Sheikh Sultan became a member of the UAE Supreme Council at the age of 32 years.
            </p>
            <p className='mb-4'>
              His Highness is the 18th Ruler of the Emirate of Sharjah in a chain of Al Qasimi Rulers since 1600 AD.
            </p>
            <p className='mb-4'>
              His Highness was instrumental in resolving the dispute with the Sultanate of Oman in 1979.
            </p>
          </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default History;

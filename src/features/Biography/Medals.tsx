import React from 'react';
import { Home, BookOpen, GraduationCap, Award, Star, Medal, Trophy, FileText, Share2, Plus, Minus, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/atoms/Footer';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Image19 from '../../images/image19.jpg';
import Image43 from '../../images/image43.jpg';
import Image44 from '../../images/image44.jpg';
import Image45 from '../../images/image45.jpg';
import Image46 from '../../images/image46.jpg';
import Image47 from '../../images/image47.jpg';
import Image48 from '../../images/image48.jpg';
import Image49 from '../../images/image49.jpg';
import Image50 from '../../images/image50.jpg';
import Image51 from '../../images/image51.jpg';
import Image52 from '../../images/image52.jpg';
import Image53 from '../../images/image53.jpg';
import Image54 from '../../images/image54.jpg';
import Image55 from '../../images/image55.jpg';
import Image56 from '../../images/image56.jpg';
import Image57 from '../../images/image57.jpg';
import Image58 from '../../images/image58.jpg';
import Image59 from '../../images/image59.jpg';
import Image60 from '../../images/image60.jpg';
import Image61 from '../../images/image61.jpg';
import Image62 from '../../images/image62.jpg';
import Image63 from '../../images/image63.jpg';
import Image64 from '../../images/image64.jpg';
import Image65 from '../../images/image65.jpg';
import Image66 from '../../images/image66.jpg';
import Image67 from '../../images/image67.jpg';
import Image68 from '../../images/image68.jpg';
import Image69 from '../../images/image69.jpg';
import Image70 from '../../images/image70.jpg';
import Image71 from '../../images/image71.jpg';
import Image72 from '../../images/image72.jpg';
import Image73 from '../../images/image73.jpg';
import Image74 from '../../images/image74.jpg';
import Image75 from '../../images/image75.jpg';
import Image76 from '../../images/image76.jpg';
import Image77 from '../../images/image77.jpg';
import Image78 from '../../images/image78.jpg';
import Image79 from '../../images/image79.jpg';
import Image80 from '../../images/image80.jpg';
import Image81 from '../../images/image81.jpg';
import Image82 from '../../images/image82.jpg';
import Image83 from '../../images/image83.jpg';
import Image84 from '../../images/image84.jpg';
interface MedalAward {
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
  { icon: Medal, label: 'Medals & Awards', active: true },
  { icon: Trophy, label: 'Awards', active: false },
  { icon: FileText, label: 'Highlights & Glimpses', active: false },
];

const medals: MedalAward[] = [
  {
    title: 'Legion of Honor, with the rank of Supreme Commander, French Republic',
    description: 'In honor of his scientific, cultural, and literary accomplishments, as well as his support for bilateral ties between UAE and France in a variety of disciplines.',
    location: 'Sharjah, UAE',
    date: '11 April 2023',
    imageUrl: Image43,
  },
  {
    title: 'Distinguished Professor" Certificate in Literature, Humanities and Social Sciences',
    description: 'In appreciation of His Highness\'s academic, cultural, literary and historical contributions and role in supporting all works that enhance and expand University of Sharjah\'s horizons and goals locally, regionally and globally.',
    location: 'Sharjah, UAE',
    date: '22 October 2022',
    imageUrl: Image44,
  },
  {
    title: 'UNICEF Shield',
    description: 'As a tribute and appreciation for his role in supporting UNICEF programmes through what he offers to children in Sharjah and the wider world. ',
    location: 'Sharjah, UAE',
    date: '16 January 2020',
    imageUrl: Image45,
  },
  {
    title: '«Mother of the Nation» Order',
    description: 'In the humanitarian, community and cultural fields on UAE level and the wider world. ',
    location: 'Abu Dhabi, United Arab Emirates  ',
    date: '25 November 2019',
    imageUrl: Image46,
  },
  {
    title: 'Gold Medal from Jagielski University',
    description: 'In recognition of his support to the cultural and civilisational exchange between nations and peoples. ',
    location: 'Kraków, Poland ',
    date: '15 October 2019',
    imageUrl: Image47,
  },
  {
    title: 'Shield from Arab League',
    description: `In recognition of His Highness's support for all efforts to establish the Arab Children Parliament.`,
    location: 'Sharjah, UAE',
    date: '7 April 2019',
    imageUrl: Image48,
  },
  {
    title: 'The prestigious gold necklace of the World Organisation of Folk Art',
    description: `In recognition of His Highness’s efforts in supporting the folklore and heritage around the world, and in supporting organisations in this field and setting up a number of heritage and cultural centres in various countries.`,
    location: 'Sharjah, UAE',
    date: '2 April 2019',
    imageUrl: Image49,
  },
  {
    title: 'Distinguished Personality Award of 2018',
    description: `In recognition of his great support to Cairo University and as one of its most prominent graduates.`,
    location: 'Cairo, Egypt',
    date: '4 February 2019',
    imageUrl: Image50,
  },
  {
    title: 'Shield from Ministry of Higher Education and Scientific Research',
    description: `In recognition of his support to the higher education and scientific research in the Arab Republic of Egypt.`,
    location: 'Cairo, Egypt',
    date: '6 November 2017',
    imageUrl: Image51,
  },
  {
    title: 'Shield from National Institute of Oncology',
    description: `In recognition of the great role played by His Highness and his wife, Sheikha Jawaher bint Mohammed Al Qasimi, in supporting the institute and cancer research institutions and centres in the Arab Republic of Egypt and across the world.`,
    location: 'Cairo, Egypt',
    date: '6 November 2017',
    imageUrl: Image52,
  },
  {
    title: 'Order of the Arab Organization for Education, First Class',
    description: `In recognition of his efforts to support the educational and cultural process in the UAE.`,
    location: 'Sharjah, UAE',
    date: '2 October 2017',
    imageUrl: Image53,
  },
  {
    title: 'Bronze Wolf Award',
    description: `Presented by the World Scout Bureau for his lifelong humanitarian services and contributions to the scout movement around the World.`,
    location: 'Sharjah, UAE',
    date: '9 February 2016',
    imageUrl: Image54,
  },
  {
    title: 'Baden-Powell Award',
    description: `A top international scout award, presented to the important international figures as an expression of appreciation and loyalty for their support of the Scout Movement.`,
    location: 'Sharjah, UAE',
    date: '4 February 2016',
    imageUrl: Image55,
  },
  {
    title:  `Germany's Grand Order of Merit with Star`,
    description: `In recognition of His Highness’s cultural, social and humanitarian efforts.`,
    location: 'Sharjah, UAE',
    date: '2 July 2015',
    imageUrl: Image56,
  },
  {
    title:  `Shield from the Arab League`,
    description: `In appreciation of his outstanding contribution to the regional issues.`,
    location: 'Cairo, Egypt',
    date: '13 May 2015',
    imageUrl: Image57,
  },
  {
    title:  `Order of the Republic, one of Egypt’s highest awards`,
    description: `In recognition and appreciation of his outstanding contribution to the Arab Republic of Egypt.`,
    location: 'Cairo, Egypt',
    date: '11 May 2015',
    imageUrl: Image58,
  },
  {
    title:  `Medal of Arab Tourism`,
    description: `In appreciation of his contributions in tourism that lead Sharjah to be the Capital of Arab Tourism 2015.`,
    location: 'Sharjah, UAE',
    date: '5 February 2015',
    imageUrl: Image59,
  },
  {
    title:  `Armenian Honor Award`,
    description: `In recognition of His Highness's efforts to fund the renovation of Armenian medieval complex, the historical and cultural monument that dates back to the 13th century.`,
    location: 'Armenia',
    date: '30 January 2014',
    imageUrl: Image60,
  },
  {
    title:  `Medal of the Academy`,
    description: `As appreciation for his contributions in supporting the cooperation between Arab And Portugal.`,
    location: 'Academy of Sciences of Lisbon, Portugal',
    date: '3 October 2013',
    imageUrl: Image61,
  },
  {
    title:  `Zayed Medal for The President Merit Award for Culture, Arts and Literature`,
    description: ``,
    location: 'UAE, Abu Dhabi',
    date: '2 December 2012',
    imageUrl: Image62,
  },
  {
    title:  `Gold Medal, International Theatre Institute`,
    description: ``,
    location: 'Xiamen, China',
    date: '19 Sept 2011',
    imageUrl: Image63,
  },
  {
    title:  `Medal of GCC Cooperation`,
    description: `Presented by the General Secretariat of the Gulf States (GCC).`,
    location: 'Sharjah, UAE',
    date: '9 February 2010',
    imageUrl: Image64,
  },
  {
    title:  `Key of Hope`,
    description: `In recognition of His Highness's unlimited support and efforts to empower children, ensure their development and wellbeing.`,
    location: 'Sharjah, UAE',
    date: '11 November 2009',
    imageUrl: Image65,
  },
  {
    title:  `Gold Medal, Union of Arab Universities`,
    description: `In recognition of His support for collaboration among Arab universities.`,
    location: 'Amman, Jordan',
    date: 'April 2009',
    imageUrl: Image66,
  },
  {
    title:  `Distinction Trophy`,
    description: `International Arab Theatre Organization, in recognition of his support of the role of theatre in cultural dialogues.`,
    location: 'Cairo, Egypt',
    date: '16 March 2008',
    imageUrl: Image67,
  },
  {
    title:  `Arab Archeologists' shield`,
    description: `In recognition of his persistent efforts to preserve and protect the archeology and heritage of the Arab-Muslim nation and his great support for culture and science.`,
    location: 'Sharjah, UAE ',
    date: '8 December 2005',
    imageUrl: Image68,
  },
  {
    title:  `The Medal of Merit in Work`,
    description: ` `,
    location: 'Yerevan, Armenia ',
    date: '19 September 2005',
    imageUrl: Image69,
  },
  {
    title:  `Distinction Trophy, Arab Scout Organization`,
    description: `In recognition of His continuous support of scouts movements at different levels. `,
    location: 'Sharjah, UAE',
    date: '6 April 2005',
    imageUrl: Image70,
  },
  {
    title:  `National Order of Merit, Republic of Senegal`,
    description: `In recognition of His Highness's efforts and generosity towards nations all over the world. `,
    location: '',
    date: '30 May 2004',
    imageUrl: Image71,
  },
  {
    title:  `Human Rights Medal (UNESCO)`,
    description: `United Nations Educational, Scientific and Cultural Organization (UNESCO), In recognition of his support of the education of deprived children. `,
    location: 'Paris, France',
    date: '17 December 2003',
    imageUrl: Image72,
  },
  {
    title:  `Republican Order in Art and Humanity, of the class of a Knight`,
    description: `In recognition of his unstinting support to programmes on cultural dialogue between East and West. `,
    location: 'Paris, France',
    date: '22 July 2003',
    imageUrl: Image73,
  },
  {
    title:  `Reproduction key of Alhambra Palace`,
    description: `In recognition of his support to the cultural and civilisational exchange between Sharjah and Granada. `,
    location: 'Granada, Spain',
    date: '10 July 2003',
    imageUrl: Image74,
  },
  {
    title:  `Order of ISESCO`,
    description: `The Islamic Educational, Scientific and Cultural Organization (ISESCO), In recognition of his efforts to support and promote the cultural movement that transforms Sharjah into a beacon of culture in Arab World. `,
    location: 'Sharjah, UAE',
    date: '16 December 1998',
    imageUrl: Image75,
  },
  {
    title:  `Gold Trophy`,
    description: `The Arab League Educational Science and Culture Organization (ALESCO) `,
    location: 'Tunis',
    date: '21 November 1998',
    imageUrl: Image76,
  },
  {
    title:  `Avicenna Gold Medal (UNESCO)`,
    description: `In recognition of his profound commitment to the ideals of the Organization and his outstanding contribution to the promotion of culture and international co-operation. `,
    location: 'Paris, France',
    date: '26 October 1998',
    imageUrl: Image77,
  },
  {
    title:  `Zayed II Medal of First Grade`,
    description: `Awarded by the late Sheikh Zayed bin Sultan Al Nahyan. `,
    location: 'Abu Dhabi, UAE',
    date: '2 December 1996',
    imageUrl: Image78,
  },
  {
    title:  `Gold Medal`,
    description: `Research Center for Islamic History, Art and Culture, in recognition of his support of the preservation and education of cultural heritage. `,
    location: 'Istanbul, Turkey',
    date: 'October 1990',
    imageUrl: Image79,
  },
  {
    title:  `Sudanese Republican Sash of Honor`,
    description: `In recognition of His Highness and UAE's efforts to support Sudan. `,
    location: 'Khartoum, Sudan ',
    date: '17 February 1987',
    imageUrl: Image80,
  },
  {
    title:  `Order of Leopold`,
    description: `Highest Belgian Award. `,
    location: 'United Arab Emirates  ',
    date: '21 January 1985',
    imageUrl: Image81,
  },
  {
    title:  `Key of Vallejo City, San Francisco`,
    description: `In recognition of His Highness’s cultural and social efforts.`,
    location: 'California, USA',
    date: '6 May 1976',
    imageUrl: Image82,
  },
  {
    title:  `Republican Order`,
    description: `In recognition of His support for collaboration between Republic of Tunisia and UAE.`,
    location: 'Tunis, Republic of Tunisia',
    date: '27 March 1975',
    imageUrl: Image83,
  },
  {
    title:  `Sudanese Republican Sash of Honor`,
    description: ``,
    location: 'Sudan',
    date: '23 April 1972',
    imageUrl: Image84,
  },
];

const Medals: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 mr-3">
          {medals.map((medal, index) => (
            <div key={index} className="flex pb-8 mb-8 border-b-2 border-[#bbbd4f] transition-all duration-300 ease-in-out hover:bg-[#f0f0d8] group">
              <div className="w-1/3 pr-4">
                <img
                  src={medal.imageUrl}
                  alt={medal.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="w-2/3">
              <h2 className="text-lg font-semibold mb-2 group-hover:text-[#bbbd4f]">{medal.title}</h2>
              <p className="text-[#bbbd4f] text-sm mb-2 group-hover:text-black">{medal.description}</p>
              <p className="text-sm mb-1 group-hover:text-black">{medal.location}</p>
              <p className="text-sm group-hover:text-black">{medal.date}</p>
                
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

export default Medals;
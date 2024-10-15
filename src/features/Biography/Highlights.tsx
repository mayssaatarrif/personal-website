import React from 'react';
import { Home, BookOpen, GraduationCap, Award, Star, Medal, Trophy, FileText, Share2, Plus, Minus, Printer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/atoms/Footer';
import TopBar from '../../components/atoms/Topbar';
import Navbar from '../../components/atoms/Navbar';
import Image19 from '../../images/image19.jpg';
import Image153 from '../../images/image153.jpg'
import Image154 from '../../images/image154.jpg'
import Image155 from '../../images/image155.jpg'
import Image156 from '../../images/image156.jpg'
import Image157 from '../../images/image157.jpg'
import Image158 from '../../images/image158.jpg'
import Image159 from '../../images/image159.jpg'
import Image160 from '../../images/image160.jpg'
interface Achievement {
  title: string;
  year: number;
}

interface Award {
  name: string;
  description: string;
  year: number;
}
const menuItems = [
  { icon: Home, label: 'Home', active: false },
  { icon: BookOpen, label: 'Educational Qualifications', active: false, link: '/of' },
  { icon: GraduationCap, label: 'Official and Academic Positions', active: false },
  { icon: Award, label: 'Honorary Degrees', active: false },
  { icon: Star, label: 'Honorary Positions', active: false },
  { icon: Medal, label: 'Medals & Awards', active: false },
  { icon: Trophy, label: 'Awards', active: false },
  { icon: FileText, label: 'Highlights & Glimpses', active: true },
];
const Highlights: React.FC = () => {
  const achievements: Achievement[] = [
    { title: "Sharjah, Cultural Capital of the Arab", year: 1998 },
    { title: "Sharjah, Islamic Culture Capital", year: 2014 },
    { title: "Sharjah, Capital of Arab Tourism", year: 2015 },
    { title: "Sharjah, Healthy City", year: 2015 },
    { title: "Sharjah, Child Friendly City", year: 2015 },
    { title: "Sharjah, Capital of Arab Press", year: 2016 },
    { title: "Sharjah, Age Friendly City", year: 2017 },
    { title: "Sharjah, Accessible City for the Physically Disabled", year: 2018 },
    { title: "Sharjah, World Book Capital", year: 2019 },
    { title: "UNICEF's Child-Friendly Cities Initiative Inspire Award", year: 2019 },
    { title: "UNESCO's selection of Sharjah as a 'crafts and folk art' city for the Creative Cities Network", year: 2019 },
    { title: "Sharjah, Arab Sports Culture Capital", year: 2021 },
    { title: "Sharjah, Healthy City", year: 2022 },
  ];
  
  const achievement1: Achievement[] = [
    { title: "Restoration and maintenance of traditional buildings and re-opening of old places in Sharjah such as Al Arsah Historical Souq, the Al Merijah area, the Al Shwaihain area, etc.),", year:  1994 },
    { title: "Rebuilding of the Old Sharjah Fort where Sharjah records are archived and which has become a museum for the emirate,", year:1997},
  ];

  const awards: Award[] = [
    {
      name: "Sharjah Award for Arab Creativity",
      description: "Launched in 1997 (First edition). Following, many decades, it now become an important center for Arab creators and led to the discovery of many poets, novelists, story writers, critics and playwrights.",
      year: 1997
    },
    {
      name: "Sharjah Award for Arab Culture- UNESCO",
      description: "Launched in 1998, in celebration of selecting Sharjah as the Arab Cultural Capital, and recognizing efforts by cultural figures contributing to Arab culture globally.",
      year: 1998
    },
    {
      name: "Sharjah Award for Voluntary Work",
      description: "The first award of its kind in UAE and Arab world, launched in 2001 to support and encourage all voluntary work.",
      year: 2001
    },
    {
      name: "Sharjah Award for the Best PhD Thesis in Administrative Sciences in the Arab World",
      description: "Established in 2001 to encourage researchers in Arab management practices, expanded in 2014 to include financial studies.",
      year: 2001
    },
    {
      name: "Sheikh Dr. Sultan bin Muhammad Al Qasimi Award for Best Arab Theatrical Performance",
      description: "Launched in 2011 to select the best Arab play performed during the Sharjah Theatrical days.",
      year: 2011
    },
    {
      name: "Sharjah Award for Arab Poetry",
      description: "Launched in 2011 to honor pioneers of Arab poetry. A local and Arab figure is honored annually.",
      year: 2011
    },
    {
      name: "Sharjah International Award for Cultural Heritage",
      description: "Launched in 2017 to recognize efforts in preserving, documenting, and sustaining cultural heritage.",
      year: 2017
    },
    {
      name: "ALECSO- Sharjah Award for Language and Lexical Studies",
      description: "Launched in 2017 to support research in linguistic and lexical studies, highlighting cognitive aspects of Arabic.",
      year: 2017
    },
    {
      name: "Sheikh Sultan Award for Celebrating the Spirit of Youth",
      description: "Launched in 2019 to enhance the skills and talents of Emirati youth through multidisciplinary challenges.",
      year: 2019
    },
    {
      name: "Sharjah Award for Literary Poetic Criticism",
      description: "Launched in 2020 to serve Arab poetry and nurture poetic talents, especially among the new generation.",
      year: 2020
    }
  ];
  const achievements2: Achievement[] = [
    { title: "Sharjah Creative Thinking Foundation that deals with Arabic publishing. One of its publications is the 33-volume Islamic Encyclopaedia in Cairo, Egypt,", year: 1990 },
    { title: "Sharjah TV & Radio,", year: 1989 },
    { title: "Creation of an Arts Zone in the Shwaihain area in Old Sharjah,", year: 1993 },
    { title: "Culture and Information Department,", year: 1981 },
    { title: "Sharjah International Book Fair,", year: 1981 },
    { title: "Network of Public Libraries in Sharjah,", year: 1987 },
    { title: "Sharjah Police Award for the Arab World,", year:0 },
    { title: "Sharjah Biennial Exhibition,", year: 1993 },
    { title: "Islamic Art Festival in Sharjah,", year: 1998 },
    { title: "Culture without Borders to provide a home library for each family in Sharjah,", year: 2008 },
    { title: "Al Qasimi publications,", year: 2008 },
    { title: "Sharjah Arts Foundation,", year: 2010 },
    { title: "Sharjah Center for Astronomy & Space Sciences,", year: 2015 },
    { title: "Sharjah Book Authority,", year: 2015 },
    { title: "Al Majaz Amphitheatre,", year: 2015 },
    { title: "Sharjah Institute for Heritage,", year: 2015 },
    { title: "Sharjah Publishing City,", year: 2015 },
    { title: "Sharjah Performing Arts Academy,", year: 2017 },
    { title: "Sharjah Private Education Authority,", year: 2018 },
    { title: "Sharjah Maritime Academy,", year: 2019 },
    { title: "Sharjah Education Academy,", year: 2020 },
    { title: "University of Khorfakkan,", year: 2022 }
  ];
  const achievements3: Achievement[] = [
    {
      title: "The establishment of many non-governmental organizations to promote social interactions between the communities and the government.",
      year: 0
    },
    {
      title: "The establishment of Sharjah Consultative Council to involve the people of Sharjah in the development and review of projects at all levels within the Emirate of Sharjah.",
      year: 0
    },
    {
      title: "The establishment of the Municipal Councils in the cities and towns of the Emirate of Sharjah to decentralize the consultations between the communities and the different levels of government.",
      year: 0
    }
  ];
  const achievements4: Achievement[] = [
    { title: "Centers for social care and rehabilitation of disabled people", year: 1999 },
    { title: "Elderly Care Centers", year: 1986 },
    { title: "Establishment of cultural, social, scientific, and sports centers, for women, children, and youth", year: 1981 },
    { title: "Sponsoring the Annual Arab Children’s Gathering in Sharjah", year: 1998 },
    { title: "Establishment of Centers for ladies and children in Sharjah", year: 0 }, // If no year available
    { title: "Establishment of Youth Centers in Sharjah", year: 0 },
    { title: "Establishment of Supreme Council for Family Affairs in Sharjah", year: 0 },
  ];
  const achievements5: Achievement[] = [
    { title: "Laid the foundation of basic infrastructure for development in production and government bodies", year: 0 },
    { title: "Promotion of the tourism industry and establishment of specialized public institutions", year: 0 },
    { title: "Adoption of Islamic Architecture in public buildings and marketplaces", year: 0 },
    { title: "Expansion of green landscapes, public gardens, and parks", year: 0 },
    { title: "Creation of the Islamic Botanic Garden, the first of its kind in the region", year: 0 },
    { title: "Creation of model active and attractive free zones in the Emirate", year: 0 },
];

  
  
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className=" p-8">
      <TopBar />
      <Navbar />
      <img src={Image19} alt='' className="w-full h-full" />

      <div className="max-w-6xl mx-auto p-4">
      <nav className="bg-gray-100 h-12 w-full fixed left-0 lg:top-60">
          <div className="flex items-center justify-between bg-gray-100">
            <div className="text-sm breadcrumbs">
              <ul>
                <div className="flex space-x-1 mt-10">
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
        <div className="flex items-start mb-8 hover:bg-[#FFFDD0]">
  <img src={Image153}  className="w-32 h-auto mr-4" />
  <div>
    <h1 className="text-xl font-bold mb-2">Sharjah, world culture meets</h1>
    <h2 className="text-base font-semibold text-[#bbbd4f] mb-4">Thanks to His Highness cultural and civilizational projects, Sharjah was:</h2>
    <ul className="list-disc pl-6">
      {achievements.map((achievement, index) => (
        <li key={index} className="mb-2">
          {achievement.title}, {achievement.year}.
          <hr className="border-t border-[#bbbd4f] w-full mt-1" />
        </li>
      ))}
    </ul>
  </div>
</div>
<hr className="border-t border-[#bbbd4f] w-full mb-5" />
<div className="flex items-start mb-8 hover:bg-[#FFFDD0]">
  <img src={Image154} className="w-32 h-auto mr-4" />
  <div>
    <h1 className="text-xl font-bold mb-2">Conservation of National Heritage and Arab Identity</h1>
    <h2 className="text-base font-semibold text-[#bbbd4f] mb-4">His Highness initiated the establishment of:</h2>
    <ul className="list-disc pl-6">
      {achievement1.map((achievement, index) => (
        <li key={index} className="mb-2">
          {achievement.title}, {achievement.year}.
          
        </li>
      ))}
    </ul>
    <hr className="border-t border-[#bbbd4f] w-full mt-1" />
  </div>
</div>

<hr className="border-t border-[#bbbd4f] w-full mt-1" />
<div className="flex items-start">
  <img src={Image155} className="w-32 h-auto mr-4 mt-7" />
  <section>
    <h2 className="text-xl font-semibold mt-7">Sultan Awards... Incentives for Creativity and Skills' Enhancement</h2>
    <p className="mb-4 text-[#bbbd4f]">His Highness the Ruler of Sharjah has launched a number of awards to encourage excellence and creativity across various fields. These awards include:</p>
    <ul className="list-disc pl-5">
      {awards.map((award, index) => (
        <li key={index} className="mb-4">
          <h3 className="font-semibold">{award.name}</h3>
          <p>{award.description}</p>
          <hr className="border-t border-[#bbbd4f] w-full mt-1" />
        </li>
      ))}
    </ul>
  </section>
  

</div>

<hr className="border-t border-[#bbbd4f] w-full mb-5" />
<div className="flex items-start mb-8 hover:bg-[#FFFDD0]">
  <img src={Image156} className="w-32 h-auto mr-4" />
  <div>
    <h1 className="text-xl font-bold mb-2">Fostering Culture, Arts, Education and Sciences</h1>
    <h2 className="text-base font-semibold text-[#bbbd4f] mb-4">Based on a deep belief in the role of culture, arts and sciences in human and social development, His Highness, Ruler of Sharjah initiated the establishment of:</h2>
    <ul className="list-disc pl-6">
      {achievements2.map((achievement, index) => (
        <li key={index} className="mb-2">
          {achievement.title}, {achievement.year}.
          <hr className="border-t border-[#bbbd4f] w-full mt-1" />
        </li>
      ))}
    </ul>

  </div>
 
</div>
<hr className="border-t border-[#bbbd4f] w-full mb-5" />
<div className="flex items-start mb-8 hover:bg-[#FFFDD0] p-4 rounded-lg transition-colors duration-300">
  <img src={Image157} className="w-32 h-auto mr-4" alt="Image" />
  <div>
    <h1 className="text-xl font-bold mb-2">Nurturing Civic Awareness, Participation, and Social Responsibilities</h1>
    <h2 className="text-base font-semibold text-[#bbbd4f] mb-4">His Highness, Ruler of Sharjah, continuously encourages:</h2>
    <ul className="list-disc pl-6">
      {achievements3.map((achievement, index) => (
        <li key={index} className="mb-2">
          {achievement.title}, {achievement.year}
          <hr className="border-t border-[#bbbd4f] w-full mt-1" />
        </li>
      ))}
    </ul>
  </div>
</div>
<hr className="border-t border-[#bbbd4f] w-full mb-5" />
<div className="flex items-start mb-8 hover:bg-[#FFFDD0] p-4 rounded-lg transition-colors duration-300">
  <img src={Image158} className="w-32 h-auto mr-4" alt="Image" />
  <div>
    <h1 className="text-xl font-bold mb-2">Social Care</h1>
    <h2 className="text-base font-semibold text-[#bbbd4f] mb-4">His Highness, Ruler of Sharjah orders to provide the best services by establishing:</h2>
    <ul className="list-disc pl-6">
      {achievements4.map((achievement, index) => (
        <li key={index} className="mb-2">
          {achievement.title}, {achievement.year}
          <hr className="border-t border-[#bbbd4f] w-full mt-1" />
        </li>
      ))}
    </ul>
  </div>
</div>
<hr className="border-t border-[#bbbd4f] w-full mb-5" />
<div className="flex items-start mb-8 hover:bg-[#FFFDD0] p-4 rounded-lg transition-colors duration-300">
  <img src={Image159} className="w-32 h-auto mr-4" alt="Image" />
  <div>
    <h1 className="text-xl font-bold mb-2">Touring Sharjah Cultural Festival in different cities of the world</h1>
    <h1 className="text-base mb-4">His Highnes is a firm believer of the importance and significance of the role the arts and culture in bridging the minds and soles of the peoples of the world. The touring Sharjah Cultural Festivals bring aspects of the Arab and Islamic arts and culture to the attention of the peoples of the World.</h1>
   
  </div>
</div>
<hr className="border-t border-[#bbbd4f] w-full mb-5" />
<div className="flex items-start mb-8 hover:bg-[#FFFDD0] p-4 rounded-lg transition-colors duration-300">
  <img src={Image160} className="w-32 h-auto mr-4" alt="Image" />
  <div>
    <h1 className="text-xl font-bold mb-2">Commerce, Industry and Agriculture</h1>
    <h2 className="text-base font-semibold text-[#bbbd4f] mb-4">His Highness, Ruler of Sharjah seeks to develop the infrastructures and the different developmental sectors of the emirate, particularly:</h2>
    <ul className="list-disc pl-6">
      {achievements5.map((achievement, index) => (
        <li key={index} className="mb-2">
          {achievement.title}, {achievement.year}
          <hr className="border-t border-[#bbbd4f] w-full mt-1" />
        </li>
      ))}
    </ul>
  </div>
</div>
    </div>
    <Footer/>
    </div>
    </div>
  );
};

export default Highlights;
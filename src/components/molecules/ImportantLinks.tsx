import React from 'react';
import Image120 from '../../images/image120.png'
import Image121 from '../../images/image121.png'
import Image122 from '../../images/image122.jpg'
import Image123 from "../../images/image123.jpg"
import Image124 from "../../images/image124.jpg"
import Image125 from "../../images/image125.jpg"
import Image126 from "../../images/image126.jpg"
import Image127 from "../../images/image127.jpg"
import Image128 from "../../images/image128.jpg"
import Image129 from '../../images/image129.png'
import Image130 from "../../images/image130.jpg"
import Image131 from '../../images/image131.png'
import Image132 from "../../images/image132.jpg"
import Image133 from "../../images/image133.jpg"
import Image134 from "../../images/image134.jpg"
import Image135 from "../../images/image135.jpg"
import Image136 from "../../images/image136.png"
import Image137 from "../../images/image137.png"
import Image138 from "../../images/image138.png"
import Image139 from "../../images/image139.jpg"
import Image140 from "../../images/image140.jpg"
import Image141 from "../../images/image141.png"
import Image142 from "../../images/image142.png"
import Image143 from "../../images/image143.jpg"
import Image144 from "../../images/image144.png"
import Image145 from "../../images/image145.jpg"

const ImportantLinks = () => {
  const universities = [
    { name: "Dr. Sultan Al Qasimi Centre" },
    { name: "University of Sharjah", logo: Image120, link:"http://www.sharjah.ac.ae/en/Pages/default.aspx" },
    { name: "American University of Sharjah", logo: Image121, link:"https://www.aus.edu/" },
    { name: "Al Qasimia University", logo: Image122, link:"https://www.alqasimia.ac.ae/ar/Pages/default.aspx" },
    { name: "University of Khorfakkan", logo: Image123, link:"https://www.ukf.ac.ae/en/" },
    { name: "University of Kalba", logo: Image124, link:"https://www.ukb.ac.ae/en/index.html" },
    { name: "Sharjah Performing Arts Academy", logo: Image125, link:"https://spaa.ae/" },
    { name: "Sharjah Research, Technology and Innovation Park", logo: Image126, link:"https://srtip.ae/" },
    { name: "Institute of Arab and Islamic Studies - University of EXETER", logo: Image127, link:"https://www.exeter.ac.uk/departments/it/server-security/" },
    { name: "University of Coimbra", logo: Image128, link:"https://www.uc.pt/" },
    { name: "University of Calicut", logo: Image129, link:"https://www.uoc.ac.in/" },
    { name: "University of Turin", logo: Image130, link:"https://en.unito.it/" },
    { name: "Polytechnic University of Turin", logo: Image131, link:"https://www.polito.it/" },
    { name: "McMaster University", logo: Image132, link:"https://www.mcmaster.ca/" },
    { name: "Yerevan State University", logo: Image133, link:"https://www.ysu.am/" },
    { name: "The University of Sheffield", logo: Image134, link:"https://www.sheffield.ac.uk/" },
    { name: "Kanazawa University", logo: Image135, link:"https://www.kanazawa-u.ac.jp/e/" },
    { name: "California University of Pennsylvania", logo: Image136, link:"https://www.pennwest.edu/" },
    { name: "University of Arizona", logo: Image137, link:"https://www.arizona.edu/" },
    { name: "Royal College of Surgeons of England", logo: Image138, link:"https://www.rcseng.ac.uk/" },
    { name: "International Islamic University of Malaysia", logo: Image139, link:"https://www.iium.edu.my/v2/"},
    { name: "Université Paris Diderot, Paris", logo: Image140, link:"https://u-paris.fr/" },
    { name: "Cairo University", logo: Image141, link:"https://cu.edu.eg/Home" },
    { name: "University of Jordan", logo: Image142, link:"https://ju.edu.jo/home.aspx" },
    { name: "Arab Union for Astronomy and Space Sciences", logo: Image143, link:"https://auass.com/en/home-page-3/" },
    { name: "Sharjah International Foundation for the History of Arab and Muslim Sciences", logo: Image144, link:"https://sifhams.sharjah.ac.ae/en/Pages/default.aspx" },
    { name: "Arab Theatre Institute", logo: Image145, link:"https://atitheatre.ae/" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 relative">
        {universities.map((university, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center relative space-y-4 py-4">
              {index === 0 ? (
                // Special handling for the first item (no image)
                <div className="h-[120px] flex items-center justify-center">
                  <span className="text-base font-medium mt-2 h-[40px] flex items-center justify-center hover:text-[#b2b355]">{university.name}</span>
                  
                </div>
              ) : (
                // Regular handling for other items
                <>
                  <a
                    href={university.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4"
                  >
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="max-w-[120px] max-h-[120px] object-contain h-[120px]"
                    />
                  </a>
                  {/* First horizontal line above the name */}
                  <div className="w-full h-[1px] bg-gray-300"></div>
                  <span className="text-base font-medium mt-2 h-[40px] flex items-center justify-center hover:text-[#b2b355]">
                    {university.name}
                  </span>
                  {/* Second horizontal line below the name */}
                  <div className="w-full h-[1px] bg-gray-300"></div>
                </>
              )}
              {/* Vertical divider */}
              {(index + 1) % 3 !== 0 && (
                <div className="absolute right-0 top-0 h-full w-[1px] bg-gray-300"></div>
              )}
            </div>
            
          </React.Fragment>
        ))}
      </div>
      
      {/* Additional margin for the last row */}
      <div className="h-8"></div>
    </div>
  );
};

export default ImportantLinks;
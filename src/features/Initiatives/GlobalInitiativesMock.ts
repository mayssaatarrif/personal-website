import { Initiative } from '../../types'; // Ensure the import path is correct

const globalInitiatives: Initiative[] = [ // Fix the type declaration here
  {
    image: 'path/to/image1.jpg', // Replace with actual image paths
    title: 'Global Initiative 1',
    date: 'Date of Initiative 1',
    description: 'Description for Global Initiative 1.',
  },
  {
    image: 'path/to/image2.jpg', // Replace with actual image paths
    title: 'Global Initiative 2',
    date: 'Date of Initiative 2',
    description: 'Description for Global Initiative 2.',
  },
  {
    image: 'path/to/image3.jpg', // Replace with actual image paths
    title: 'Global Initiative 3',
    date: 'Date of Initiative 3',
    description: 'Description for Global Initiative 3.',
  },
  {
    image: 'path/to/image4.jpg', // Replace with actual image paths
    title: 'Global Initiative 4',
    date: 'Date of Initiative 4',
    description: 'Description for Global Initiative 4.',
  },
  {
    image: 'path/to/image5.jpg', // Replace with actual image paths
    title: 'Global Initiative 5',
    date: 'Date of Initiative 5',
    description: 'Description for Global Initiative 5.',
  },
  {
    image: 'path/to/image6.jpg', // Replace with actual image paths
    title: 'Global Initiative 6',
    date: 'Date of Initiative 6',
    description: 'Description for Global Initiative 6.',
  },
  {
    image: 'path/to/image7.jpg', // Replace with actual image paths
    title: 'Global Initiative 7',
    date: 'Date of Initiative 7',
    description: 'Description for Global Initiative 7.',
  },
  {
    image: 'path/to/image8.jpg', // Replace with actual image paths
    title: 'Global Initiative 8',
    date: 'Date of Initiative 8',
    description: 'Description for Global Initiative 8.',
  },
];

// Exporting 8 pages with 5 initiatives each
const initiativesPerPage = 5;
const globalInitiativesPaginated = Array.from({ length: 8 }, (_, index) => {
    return globalInitiatives.slice(index * initiativesPerPage, index * initiativesPerPage + initiativesPerPage);
  });
  

export default globalInitiativesPaginated;

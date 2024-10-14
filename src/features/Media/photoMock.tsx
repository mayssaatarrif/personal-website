export interface PhotoAlbum {
  id: number;
  image: string;
  title: string;
  date: string;
  photoCount: number;
}

interface PhotoPage {
  page: number;
  photos: PhotoAlbum[];
}

const mockPhotos: PhotoPage[] = [
  {
    page: 1,
    photos: [
      { id: 1, image: "https://picsum.photos/400/300?random=1", title: "Publications", date: "2023-10-15", photoCount: 48 },
      { id: 2, image: "https://picsum.photos/400/300?random=2", title: "Awards", date: "2023-09-22", photoCount: 67 },
      { id: 3, image: "https://picsum.photos/400/300?random=3", title: "Cultural Events", date: "2023-08-30", photoCount: 36 },
      { id: 4, image: "https://picsum.photos/400/300?random=4", title: "Community Service", date: "2023-07-18", photoCount: 50 },
      { id: 5, image: "https://picsum.photos/400/300?random=5", title: "Environmental Initiatives", date: "2023-06-05", photoCount: 39 },
      { id: 6, image: "https://picsum.photos/400/300?random=6", title: "Historical Visits", date: "2023-05-12", photoCount: 29 },
    ],
  },
  {
    page: 2,
    photos: [
      { id: 7, image: "https://picsum.photos/400/300?random=7", title: "Educational Events", date: "2023-04-20", photoCount: 45 },
      { id: 8, image: "https://picsum.photos/400/300?random=8", title: "Art Exhibitions", date: "2023-03-17", photoCount: 33 },
      { id: 9, image: "https://picsum.photos/400/300?random=9", title: "Sporting Events", date: "2023-02-28", photoCount: 27 },
      { id: 10, image: "https://picsum.photos/400/300?random=10", title: "Family Gatherings", date: "2023-01-10", photoCount: 22 },
      { id: 11, image: "https://picsum.photos/400/300?random=11", title: "Charity Events", date: "2022-12-25", photoCount: 50 },
      { id: 12, image: "https://picsum.photos/400/300?random=12", title: "International Relations", date: "2022-11-11", photoCount: 38 },
    ],
  },
  {
    page: 3,
    photos: [
      { id: 13, image: "https://picsum.photos/400/300?random=13", title: "National Celebrations", date: "2022-10-01", photoCount: 60 },
      { id: 14, image: "https://picsum.photos/400/300?random=14", title: "Cultural Exchange", date: "2022-09-15", photoCount: 30 },
      { id: 15, image: "https://picsum.photos/400/300?random=15", title: "Exhibitions", date: "2022-08-22", photoCount: 48 },
      { id: 16, image: "https://picsum.photos/400/300?random=16", title: "Workshops", date: "2022-07-30", photoCount: 25 },
      { id: 17, image: "https://picsum.photos/400/300?random=17", title: "Festivals", date: "2022-06-18", photoCount: 42 },
      { id: 18, image: "https://picsum.photos/400/300?random=18", title: "Community Projects", date: "2022-05-05", photoCount: 55 },
    ],
  },
  {
    page: 4,
    photos: [
      { id: 19, image: "https://picsum.photos/400/300?random=19", title: "Official Visits", date: "2022-04-12", photoCount: 34 },
      { id: 20, image: "https://picsum.photos/400/300?random=20", title: "Meet and Greet", date: "2022-03-20", photoCount: 41 },
      { id: 21, image: "https://picsum.photos/400/300?random=21", title: "Civic Engagement", date: "2022-02-28", photoCount: 39 },
      { id: 22, image: "https://picsum.photos/400/300?random=22", title: "Environmental Awareness", date: "2022-01-15", photoCount: 24 },
      { id: 23, image: "https://picsum.photos/400/300?random=23", title: "Cultural Preservation", date: "2021-12-30", photoCount: 28 },
      { id: 24, image: "https://picsum.photos/400/300?random=24", title: "Legacy Projects", date: "2021-11-11", photoCount: 22 },
    ],
  },
  {
    page: 5,
    photos: [
      { id: 25, image: "https://picsum.photos/400/300?random=25", title: "Honorary Titles", date: "2021-10-05", photoCount: 16 },
      { id: 26, image: "https://picsum.photos/400/300?random=26", title: "Historical Significance", date: "2021-09-22", photoCount: 18 },
      { id: 27, image: "https://picsum.photos/400/300?random=27", title: "Cultural Milestones", date: "2021-08-30", photoCount: 20 },
      { id: 28, image: "https://picsum.photos/400/300?random=28", title: "Public Engagements", date: "2021-07-18", photoCount: 14 },
      { id: 29, image: "https://picsum.photos/400/300?random=29", title: "Traditional Events", date: "2021-06-05", photoCount: 30 },
      { id: 30, image: "https://picsum.photos/400/300?random=30", title: "Personal Moments", date: "2021-05-12", photoCount: 12 },
    ],
  },
];

export default mockPhotos;

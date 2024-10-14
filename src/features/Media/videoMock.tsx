const mockVideoData = Array.from({ length: 221 }, (_, pageIndex) => ({
  page: pageIndex + 1,
  videos: Array.from({ length: 5 }, (_, videoIndex) => ({
      id: `video-${pageIndex + 1}-${videoIndex + 1}`,
      title: `Video Title for Page ${pageIndex + 1}, Video ${videoIndex + 1}`,
      date: `October ${5 - videoIndex}, 2024`,
      duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, "0")}`,
      description: `Description for video on Page ${pageIndex + 1}, Video ${videoIndex + 1}...`,
      image: `https://picsum.photos/400/300?random=${videoIndex + 1 + pageIndex * 5}`, // Random image link
  })),
}));

export default mockVideoData;

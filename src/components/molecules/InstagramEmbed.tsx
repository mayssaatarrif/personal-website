import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  embedCode: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ embedCode }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="max-w-sm mx-auto bg-white p-4 mt-5 rounded-xl"
      style={{
       // border: '1px solid transparent', // Thinner border
        //borderRadius: '16px',
        backgroundImage: 'linear-gradient(white, white), radial-gradient(circle at top left, #ff9a9e, #ff6a88, #ff99cc, #ffc1e3)',
        //backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
        transform: 'translateX(-80px)',
      }}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default InstagramEmbed;

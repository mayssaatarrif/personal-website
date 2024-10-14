import React, { useEffect } from 'react';

interface XEmbedProps {
  embedCode: string; // Embed code for the tweet
}

const XEmbed: React.FC<XEmbedProps> = ({ embedCode }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: embedCode }}
     className="p-2 m-2 ml-10"
    />
  );
};

export default XEmbed;

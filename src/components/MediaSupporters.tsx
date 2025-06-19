
import React from 'react';

const MediaSupporters = () => {
  const mediaLogos = [
    'https://via.placeholder.com/150x80/CC6600/FFFFFF?text=MEDIA+1',
    'https://via.placeholder.com/150x80/CC6600/FFFFFF?text=MEDIA+2',
    'https://via.placeholder.com/150x80/CC6600/FFFFFF?text=MEDIA+3',
    'https://via.placeholder.com/150x80/CC6600/FFFFFF?text=MEDIA+4',
    'https://via.placeholder.com/150x80/CC6600/FFFFFF?text=MEDIA+5',
    'https://via.placeholder.com/150x80/CC6600/FFFFFF?text=MEDIA+6'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          MEDIA SUPPORTERS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto items-center">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={logo} 
                alt={`Media ${index + 1}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSupporters;


import React from 'react';

const SupportingOrganizations = () => {
  const organizations = [
    'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=ORG+1',
    'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=ORG+2',
    'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=ORG+3',
    'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=ORG+4',
    'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=ORG+5',
    'https://via.placeholder.com/150x80/0066CC/FFFFFF?text=ORG+6'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          SUPPORTING ORGANIZATIONS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto items-center">
          {organizations.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={logo} 
                alt={`Organization ${index + 1}`}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportingOrganizations;

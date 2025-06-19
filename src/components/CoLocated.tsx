
import React from 'react';

interface CoLocatedProps {
  language: string;
}

const CoLocated: React.FC<CoLocatedProps> = ({ language }) => {
  const content = {
    th: {
      title: 'CO-LOCATED WITH',
      events: [
        'TIF : THAILAND INDUSTRIAL FAIR',
        'FOOD PACK ASIA',
        'WAREHOUSE & LOGISTICS ASIA'
      ]
    },
    en: {
      title: 'CO-LOCATED WITH',
      events: [
        'TIF : THAILAND INDUSTRIAL FAIR',
        'FOOD PACK ASIA',
        'WAREHOUSE & LOGISTICS ASIA'
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          {content[language].title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {content[language].events.map((event, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-xl font-bold text-blue-800">{event}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoLocated;

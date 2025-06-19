
import React from 'react';

interface WhatToExpectProps {
  language: string;
}

const WhatToExpect: React.FC<WhatToExpectProps> = ({ language }) => {
  const content = {
    th: {
      title: 'WHAT TO EXPECT FROM A 4 DAYS SHOW?',
      features: [
        { title: '500+ Exhibitors', description: 'Leading companies from around the world' },
        { title: '50+ Seminars', description: 'Expert sessions on latest industry trends' },
        { title: '10,000+ Visitors', description: 'Industry professionals and decision makers' },
        { title: 'Live Demos', description: 'Real-time equipment demonstrations' },
        { title: 'Networking', description: 'Connect with industry leaders' }
      ]
    },
    en: {
      title: 'WHAT TO EXPECT FROM A 4 DAYS SHOW?',
      features: [
        { title: '500+ Exhibitors', description: 'Leading companies from around the world' },
        { title: '50+ Seminars', description: 'Expert sessions on latest industry trends' },
        { title: '10,000+ Visitors', description: 'Industry professionals and decision makers' },
        { title: 'Live Demos', description: 'Real-time equipment demonstrations' },
        { title: 'Networking', description: 'Connect with industry leaders' }
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          {content[language].title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {content[language].features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;

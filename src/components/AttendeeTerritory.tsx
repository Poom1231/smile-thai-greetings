
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface AttendeeTerritoryProps {
  language: string;
}

const AttendeeTerritory: React.FC<AttendeeTerritoryProps> = ({ language }) => {
  const content = {
    th: {
      title: "ATTENDEE'S TERRITORY",
      items: [
        'See the cutting-edge technology in processing & packaging machine from global industry leaders',
        'Opportunity to discover fresh idea & fresh solutions at the beginning of the year',
        'Make a great connections: engage with professionals from 50 industry at this exclusive event',
        'Learn from expert: make sure to take the opportunity to attend the complimentary educational sessions held at various venues throughout the event',
        'Compare the finest offering in term of quality and price'
      ]
    },
    en: {
      title: "ATTENDEE'S TERRITORY",
      items: [
        'See the cutting-edge technology in processing & packaging machine from global industry leaders',
        'Opportunity to discover fresh idea & fresh solutions at the beginning of the year',
        'Make a great connections: engage with professionals from 50 industry at this exclusive event',
        'Learn from expert: make sure to take the opportunity to attend the complimentary educational sessions held at various venues throughout the event',
        'Compare the finest offering in term of quality and price'
      ]
    }
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
            {content[language].title}
          </h2>
          <div className="space-y-6">
            {content[language].items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendeeTerritory;

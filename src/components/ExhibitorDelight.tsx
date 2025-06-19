
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ExhibitorDelightProps {
  language: string;
}

const ExhibitorDelight: React.FC<ExhibitorDelightProps> = ({ language }) => {
  const content = {
    th: {
      title: "EXHIBITOR'S DELIGHT",
      items: [
        'Update Food-drink trends of the future Smart packaging Sustainable packaging and complete logistics services From leading manufacturers both domestic and international',
        'Join a workshop on processing various types of food.',
        'Bring technology up scale to make your business bigger than before.',
        'Learn from experts through seminars on over 50 topics.',
        'Sustainable Manufacturing Prepare the organization for sustainable production.',
        'Open the trade market with China and India.',
        'DIGITAL INDUSTRY ZONE',
        'Special Discount 20-50%'
      ]
    },
    en: {
      title: "EXHIBITOR'S DELIGHT",
      items: [
        'Update Food-drink trends of the future Smart packaging Sustainable packaging and complete logistics services From leading manufacturers both domestic and international',
        'Join a workshop on processing various types of food.',
        'Bring technology up scale to make your business bigger than before.',
        'Learn from experts through seminars on over 50 topics.',
        'Sustainable Manufacturing Prepare the organization for sustainable production.',
        'Open the trade market with China and India.',
        'DIGITAL INDUSTRY ZONE',
        'Special Discount 20-50%'
      ]
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
            {content[language].title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content[language].items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitorDelight;

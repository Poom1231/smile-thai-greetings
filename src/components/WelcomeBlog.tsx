
import React from 'react';

interface WelcomeBlogProps {
  language: string;
}

const WelcomeBlog: React.FC<WelcomeBlogProps> = ({ language }) => {
  const content = {
    th: {
      title: 'WELCOME TO FOOD PACK ASIA',
      text: [
        'Food Pack Asia ,where our show theme revolves around sustainability practices in processing & packaging technology. Embracing responsibility as a key focus.This year we present both food and non food packaging as well.',
        'Explore innovative solutions that redefine efficiency, quality and safety in your business operations. Witness captivating live demonstrations and gain valuable insights into new ideas to enhance your food production.',
        "Let's come together for bright future in food and packaging industry."
      ]
    },
    en: {
      title: 'WELCOME TO FOOD PACK ASIA',
      text: [
        'Food Pack Asia ,where our show theme revolves around sustainability practices in processing & packaging technology. Embracing responsibility as a key focus.This year we present both food and non food packaging as well.',
        'Explore innovative solutions that redefine efficiency, quality and safety in your business operations. Witness captivating live demonstrations and gain valuable insights into new ideas to enhance your food production.',
        "Let's come together for bright future in food and packaging industry."
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            {content[language].title}
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            {content[language].text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBlog;

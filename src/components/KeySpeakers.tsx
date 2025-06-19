
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface KeySpeakersProps {
  language: string;
}

const KeySpeakers: React.FC<KeySpeakersProps> = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const speakers = [
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      name: 'Dr. John Smith',
      title: 'Packaging Innovation Expert',
      company: 'Global Tech Solutions'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108755-2616b056b0e9?w=300&h=300&fit=crop&crop=face',
      name: 'Sarah Johnson',
      title: 'Sustainability Director',
      company: 'EcoPackaging Ltd'
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      name: 'Michael Chen',
      title: 'Food Technology Specialist',
      company: 'Asian Food Innovation'
    },
    {
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      name: 'Lisa Wang',
      title: 'Supply Chain Expert',
      company: 'Logistics International'
    }
  ];

  const content = {
    th: {
      title: 'KEY SPEAKERS',
      buttonText: 'See all Speakers'
    },
    en: {
      title: 'KEY SPEAKERS',
      buttonText: 'See all Speakers'
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % speakers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [speakers.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % speakers.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          {content[language].title}
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {speakers.map((speaker, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {speaker.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-1">{speaker.title}</p>
                      <p className="text-gray-600 text-sm">{speaker.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {speakers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            {content[language].buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KeySpeakers;

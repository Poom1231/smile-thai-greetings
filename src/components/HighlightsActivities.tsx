
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HighlightsActivitiesProps {
  language: string;
}

const HighlightsActivities: React.FC<HighlightsActivitiesProps> = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      title: 'Innovation Showcase',
      description: 'Discover cutting-edge packaging technologies and sustainable solutions from industry leaders.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      title: 'Expert Seminars',
      description: 'Join educational sessions led by industry experts covering the latest trends and technologies.'
    },
    {
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      title: 'Networking Events',
      description: 'Connect with professionals from over 50 industries in exclusive networking sessions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
      title: 'Live Demonstrations',
      description: 'Witness live demonstrations of the latest food processing and packaging equipment.'
    }
  ];

  const content = {
    th: {
      title: 'HIGHLIGHTS AND ACTIVITIES',
      buttonText: 'UPDATE All HIGHLIGHTS AND ACTIVITIES'
    },
    en: {
      title: 'HIGHLIGHTS AND ACTIVITIES',
      buttonText: 'UPDATE All HIGHLIGHTS AND ACTIVITIES'
    }
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  return (
    <section className="py-16 bg-white">
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
              {highlights.map((highlight, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
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
            {highlights.map((_, index) => (
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

export default HighlightsActivities;

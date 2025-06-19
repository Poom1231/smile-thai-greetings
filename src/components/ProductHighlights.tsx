
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductHighlightsProps {
  language: string;
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
      title: 'Smart Packaging Solutions',
      description: 'Advanced packaging technology for enhanced food safety'
    },
    {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop',
      title: 'Processing Equipment',
      description: 'State-of-the-art food processing machinery'
    },
    {
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=200&fit=crop',
      title: 'Sustainable Materials',
      description: 'Eco-friendly packaging alternatives'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300&h=200&fit=crop',
      title: 'Logistics Solutions',
      description: 'Complete supply chain management systems'
    }
  ];

  const content = {
    th: {
      title: 'PRODUCT HIGHLIGHTS',
      buttonText: 'All Product Highlights'
    },
    en: {
      title: 'PRODUCT HIGHLIGHTS',
      buttonText: 'All Product Highlights'
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
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
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600">{product.description}</p>
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
            {products.map((_, index) => (
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

export default ProductHighlights;

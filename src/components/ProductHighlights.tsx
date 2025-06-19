
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductHighlightsProps {
  language: string;
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ language }) => {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
          {content[language].title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
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
